
using API.Data;
using Microsoft.AspNetCore.Identity;
using API.Models;
using API.Services;
using API.Entities;
using API.Repository.Impliments;
using API.Repository.Interface;

namespace IdentityAPI.Services
{
    public class UserService : IUserService
    {
        
        private readonly SignInManager<ApplicationUser> _signInManager;
        private readonly UserManager<ApplicationUser> userManager;
        private readonly RoleManager<IdentityRole> roleManager;
        private readonly IConfiguration configuration;
        private readonly IDapperService _dapper;
        public UserService(SignInManager<ApplicationUser> signInManager, UserManager<ApplicationUser> userManager, RoleManager<IdentityRole> roleManager, IConfiguration configuration, IDapperService dapper)
        {
            _signInManager = signInManager;
            this.userManager = userManager;
            this.roleManager = roleManager;
            this.configuration = configuration;
            _dapper = dapper;   
        }

        public async Task<Response> RegisterAsync(RegisterViewModel model)
        {
            var response = new API.Data.Response()
            {
                StatusCode = ResponseStatus.FAILED,
                ResponseText = "The email is already in use. Please choose a different email or log in with the existing account.",
            };
            try
            {
                var userexists = await userManager.FindByEmailAsync(model.Email);
                if (userexists != null)
                {
                    response.ResponseText = "User Already Exists";
                    response.StatusCode = ResponseStatus.FAILED;
                    return response;
                }
                ApplicationUser user = new ApplicationUser()
                {
                    UserName = model.Email,
                    Email = model.Email,
                    Name = model.Name,
                    Adhaar = model.Adhaar,

                    EmailConfirmed = true,
                };
                var result = await userManager.CreateAsync(user, model.Password);

                if (result.Succeeded)
                {
                    response.ResponseText = "SignUp Sucessfully";
                    response.StatusCode = ResponseStatus.SUCCESS;
                }
                if (!await roleManager.RoleExistsAsync(model.Role))
                {
                    await roleManager.CreateAsync(new IdentityRole(model.Role));
                }
                if (await roleManager.RoleExistsAsync(model.Role))
                {
                    await userManager.AddToRoleAsync(user, model.Role);
                    response.ResponseText = "Registration Successs";
                    response.StatusCode = ResponseStatus.SUCCESS;
                }
                return response;
            }
            catch (Exception ex)
            {
                var error = new Entities.Response
                {
                    ClassName = GetType().Name,
                    FunctionName = "RegisterAsync",
                    ResponseText = ex.Message,
                    Proc_Name = "",
                };
                var _ = new ErrorLogService(_dapper).Error(error);
                return response;
            }
        }

    }
}

