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

        [HttpGet(nameof(ShowBanner1))]
        public IActionResult ShowBanner1()
        {
            var i = _bannersService.ShowBanner1();
            return Ok(i);

        }

        [HttpGet(nameof(ShowBanner2))]
        public IActionResult ShowBanner2()
        {
            var i = _bannersService.ShowBanner2();
            return Ok(i);
        }

        [HttpGet(nameof(ShowBanner3))]
        public IActionResult ShowBanner3()
        {
            var i = _bannersService.ShowBanner3();
            return Ok(i);
        }

        [HttpGet(nameof(EventBanner))]
        public IActionResult EventBanner()
        {
            var i = _bannersService.EventBanner();
            return Ok(i);
        }
    }
}
