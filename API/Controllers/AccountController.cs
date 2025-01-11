using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using API.Data;
using API.Entities;
using API.Services;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using Entities.Extension;
using Entities;
using API.Repository.Interface;

namespace API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AccountController : ControllerBase
    {
        private readonly SignInManager<ApplicationUser> _signInManager;
        private readonly UserManager<ApplicationUser> userManager;
        private readonly RoleManager<IdentityRole> roleManager;
        private readonly IConfiguration configuration;
        private readonly IUserService _userservice;
        private readonly IDapperService dapperService;
        public AccountController(SignInManager<ApplicationUser> signInManager, UserManager<ApplicationUser> userManager, RoleManager<IdentityRole> roleManager, IConfiguration configuration, IUserService userservice, IDapperService dapperService)
        {
            _signInManager = signInManager;
            this.userManager = userManager;
            this.roleManager = roleManager;
            this.configuration = configuration;
            _userservice = userservice;
            this.dapperService = dapperService;
        }

        [HttpPost(nameof(Registration))]
        public async Task<IActionResult> Registration(RegisterViewModel model)
        {
            var response = new Data.Response()
            {
                ResponseText = "Failed To Register",
                StatusCode = ResponseStatus.FAILED,
            };
            if (ModelState.IsValid)
            {
                var result = await _userservice.RegisterAsync(model);
                return Ok(result);
            }
            return Ok(response);
        }

        [HttpPost(nameof(Login))]
        public async Task<IActionResult> Login(LoginRequest model)
        {
            var response = new Response<LoginResponse>();

            var userexists = await userManager.FindByEmailAsync(model.Email);
            if (userexists == null)
            {
                response.StatusCode = ResponseStatus.FAILED;
                response.ResponseText = "Invalid Username And Password";
                return BadRequest(response.ResponseText);
            }
            var result = await userManager.CheckPasswordAsync(userexists, model.Password);
            if (!result)
            {
                response.ResponseText = "Password Did not match";
                response.StatusCode = ResponseStatus.FAILED;
                return BadRequest(response.ResponseText);
            }
            await _signInManager.SignInAsync(userexists, isPersistent: true);
            var roleDetails = await userManager.GetRolesAsync(userexists);
            var cliamList = new List<Claim>
            {
               
                new Claim(ClaimTypes.Role, roleDetails.FirstOrDefault()??""),
                new Claim(ClaimTypes.Name, userexists.UserName),
                new Claim("UserId", userexists.Id.ToString()),
           
            };
            var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(configuration["AuthSettings:Secretkey"]));
            var token = new JwtSecurityToken(
                issuer: configuration["AuthSettings:Issuer"],
                audience: configuration["AuthSettings:Audience"],
                claims: cliamList,
                expires: DateTime.Now.AddDays(30),
                signingCredentials: new SigningCredentials(key, SecurityAlgorithms.HmacSha256)
                );
            string tokenAsString = new JwtSecurityTokenHandler().WriteToken(token);
            response.StatusCode = ResponseStatus.SUCCESS;
            response.ResponseText = ResponseStatus.SUCCESS.ToString();
            response.Result = new LoginResponse
            {
                Email = userexists.Email,
                UserId = userexists.Id,
                UserName = userexists.UserName,
                Name = userexists.Name,
                Token = tokenAsString,
                Role = roleDetails.FirstOrDefault(),
            };
            return Ok(response);
        }

     
        [HttpPost(nameof(ChangePassword))]
        public async Task<IActionResult> ChangePassword(ChangePassword passwordReq)
        {
            var response = new Data.Response
            {
                ResponseText = "An error has occured try after sometime!",
                StatusCode = ResponseStatus.FAILED
            };
            try
            {
               
                var user = await userManager.FindByEmailAsync   (User.GetLoggedInUserName());
                var checkPassword = await userManager.CheckPasswordAsync(user, passwordReq.CurrentPassword);
                if (!checkPassword)
                {
                    response.ResponseText = "Invalid current password!";
                    return BadRequest(response);
                }
                var result = await userManager.ChangePasswordAsync(user, passwordReq.CurrentPassword, passwordReq.NewPassword);
                if (!result.Succeeded)
                {
                    response.ResponseText = "Something went wrong try after sometime!";
                    return BadRequest(response);
                }
                response.ResponseText = "Password has been changed successfully!";
                response.StatusCode = ResponseStatus.SUCCESS;
                return Ok(response);
            }
            catch (Exception ex)
            {
                throw;
            }
        }

        [HttpPost(nameof(AllUser))]
        public async Task<IActionResult> AllUser()
        {
            string query = "SELECT U.Id,U.Name,  U.UserName,  U.Email,   R.Name AS Role FROM  AspNetUsers U JOIN   AspNetUserRoles UR ON U.Id = UR.UserId JOIN   AspNetRoles R ON UR.RoleId = R.Id";
            var list =  dapperService.GetAll<User>(query);
            return Ok(list);
        }

      
    }
}
