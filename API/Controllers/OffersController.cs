using API.Repository.Interface;
using Entities;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class OffersController : ControllerBase
    {
        private readonly IOffersService _offersService;

        public OffersController(IOffersService offersService)
        {
            _offersService = offersService;
        }

        [HttpGet(nameof(CoupanList))]
        public async Task<IActionResult> CoupanList()
        {
            var list = await _offersService.GetCoupans();
            return Ok(list);
        }

        [HttpPost(nameof (SaveOrUpdateCoupan))]
        public async Task<IActionResult> SaveOrUpdateCoupan(Coupan coupan)
        {
            var res = await _offersService.SaveOrUpdateCoupan(coupan);
            return Ok(res); 
        }

        [HttpPost(nameof(AddOrEditCoupan)+"/{CoupanId}")]
        public async Task<IActionResult> AddOrEditCoupan(int Id)
        {
            var res = await _offersService.AddOrEditCoupan(Id);
            return Ok(res);
        }

        [HttpGet(nameof(ChangeCoupanStatus)+"/{CoupanId}")]
        public async Task<IActionResult> ChangeCoupanStatus(int CoupanId)
        {
            var res = await _offersService.ChangeCoupanStatus(CoupanId);
            return Ok(res);
        }
    }
}
