using API.Repository.Interface;
using API.Services;
using Entities;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserProfileController : ControllerBase
    {
        private readonly IUserProfileService _userProfileService;
        public UserProfileController(IUserProfileService userProfileService)
        {
               this._userProfileService = userProfileService;
        }

        [HttpPost(nameof(AddUserProfileDetails))]
        public async Task<IActionResult> AddUserProfileDetails(UserProfile userProfile)
        {
            var i = await _userProfileService.AddOrUpdateUserProfile(userProfile);
            return Ok(i);
        }

        [HttpGet(nameof(UserProfileList))]
        public  IActionResult UserProfileList()
        {
            var i =  _userProfileService.UserProfileList();
            return Ok(i);
        }

        [HttpGet(nameof(UserProfileListByEmail))]
        public IActionResult UserProfileListByEmail(string email)
        {
            var i =  _userProfileService.UserProfileListByEmail(email);
            return Ok(i);
        }

        [HttpPost(nameof(UpdateUserProfileImg))]
        public async Task<IActionResult> UpdateUserProfileImg(UserProfile userProfile)
        {
            var i = await _userProfileService.UpdateUserProfileImg(userProfile);
            return Ok(i);
        }

        [HttpPost(nameof(UpdateUserProfile))]
        public async Task<IActionResult> UpdateUserProfile(UserProfile userProfile)
        {
            var i = await _userProfileService.UpdateUserProfile(userProfile);
            return Ok(i);
        }
    }
}
