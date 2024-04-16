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

        [HttpGet(nameof(AddOrEditCoupan)+"/{CoupanId}")]
        public async Task<IActionResult> AddOrEditCoupan(int CoupanId)
        {
            var res = await _offersService.AddOrEditCoupan(CoupanId);
            return Ok(res);
        }

        [HttpGet(nameof(ChangeCoupanStatus)+"/{CoupanId}")]
        public async Task<IActionResult> ChangeCoupanStatus(int CoupanId)
        {
            var res = await _offersService.ChangeCoupanStatus(CoupanId);
            return Ok(res);
        }

        [HttpGet(nameof(CheckCoupan) + "/{CoupanName}")]
        public async Task<IActionResult> CheckCoupan(string CoupanName)
        {
            var res = await _offersService.CheckCoupan(CoupanName);
            return Ok(res);
        }

        [HttpGet(nameof(DeleteCoupan) + "/{CoupanId}")]
        public async Task<IActionResult> DeleteCoupan(int CoupanId)
        {
            var res = await _offersService.DeleteCoupan(CoupanId);
            return Ok(res);
        }

        [HttpPost(nameof(AddOrUpdateOffer))]
        public async Task<IActionResult> AddOrUpdateOffer(Offer offer)
        {
            var res = await _offersService.AddOrUpdateOffer(offer);
            return Ok(res);
        }
        [HttpGet(nameof(GetAllOffer))]
        public IActionResult GetAllOffer()
        {
            var res = _offersService.GetAllOffer();
            return Ok(res);
        }

        [HttpGet(nameof(GetOfferById))]
        public IActionResult GetOfferById(int id)
        {
            var res = _offersService.GetOfferById(id);
         return Ok(res);
        }
    }
}
