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
        public AccountController(SignInManager<ApplicationUser> signInManager, UserManager<ApplicationUser> userManager, RoleManager<IdentityRole> roleManager, IConfiguration configuration, IUserService userservice)
        {
            _signInManager = signInManager;
            this.userManager = userManager;
            this.roleManager = roleManager;
            this.configuration = configuration;
            _userservice = userservice;
        }

        [HttpPost(nameof(Registration))]

        public async Task<IActionResult> Registration(RegisterViewModel model)
        {
            var response = new Response()
            {
                ResponseText = "Failed To Register",
                StatusCode = ResponseStatus.FAILED,
            };
            if (ModelState.IsValid)
            {
                var result = await _userservice.RegisterAsync(model);
                if (result.StatusCode == ResponseStatus.SUCCESS)
                {
                    response.ResponseText = result.ResponseText;
                    response.StatusCode = result.StatusCode;
                }
                return Ok(response);
            }
            return BadRequest(response);
        }

        [HttpPost(nameof(Login))]
        public async Task<IActionResult> Login(LoginRequest model)
        {
            //if(ModelState.IsValid)
            //{
            //    var result = await _userService.LoginAsync(model); 
            //    return Ok(result);
            //}
            //return BadRequest();
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
                  new Claim("Email",model.Email),
                new Claim(ClaimTypes.NameIdentifier,userexists.Id),
                new Claim(ClaimTypes.Role, roleDetails.FirstOrDefault()??""),
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
                Name = userexists.UserName,
                Token = tokenAsString,
                Role = roleDetails.FirstOrDefault(),
            };
            return Ok(response);
        }
    }
}
