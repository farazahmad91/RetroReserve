using API.Repository.Interface;
using Entities;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BannersController : ControllerBase
    {
        private readonly IBannersService _bannersService;
        public BannersController(IBannersService bannersService) 
        { 
        this._bannersService = bannersService;
        }

        [HttpPost (nameof(AddorUpdateBanner))]
        public async Task<IActionResult> AddorUpdateBanner(Banners banners) 
        {
            var res = new Response();
            res = await _bannersService.AddOrUpdateBanner(banners);
            return Ok(res);
        }
        [HttpGet (nameof(GetbannerList))]
        public IActionResult GetbannerList()
        {
            var i = _bannersService.BannersList();
            return Ok(i);
        }
        [HttpPost (nameof(UpdateBannerStatus))]
        public IActionResult UpdateBannerStatus(Banners banners)
        {
            var i = _bannersService.UpdateBannerStatus(banners);
            return Ok(i);
        }

        [HttpGet(nameof(BannersListById))]
        public IActionResult BannersListById(int id)
        {
            var i = _bannersService.BannersListById(id);
            return Ok(i);
        }

        [HttpGet(nameof(ShowBanner))]
        public IActionResult ShowBanner()
        {
            var i = _bannersService.ShowBanner();
            return Ok(i);
        }
    }
}
