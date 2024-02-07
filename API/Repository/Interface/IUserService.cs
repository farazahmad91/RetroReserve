
using API.Data;
using Microsoft.AspNetCore.Mvc;
using API.Models;
using API.Entities;

namespace API.Services
{
    public interface IUserService
    {
        public Task<Response> RegisterAsync(RegisterViewModel model);
        //public Task<IActionResult> LoginAsync(LoginRequest model);
    }
}
