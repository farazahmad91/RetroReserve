using Entities;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using RetroReserve.Models;

namespace RetroReserve.Controllers
{
    [Authorize]
    public class OffersController : Controller
    {
        private readonly APIrequest apirequest;
        public OffersController(APIrequest apirequest)
        {
            this.apirequest = apirequest;
        }
        [Route("/Offer")]
        public ActionResult Offer()
        {
            return View();
        }
        [Route("/OffersList")]
        public ActionResult OffersList()
        {
            var res = apirequest.GetData<List<Offer>>("Offers/GetAllOffer");
            return View(res);
        }


        public ActionResult EditOfferList(int id)
        {
            var res = apirequest.GetData<Offer>($"Offers/GetOfferById?id={id}");
            return View(res);
        }
        [Route("/AddOrUpdateOffer")]
        public async Task<ActionResult> AddOrUpdateOffer(Offer offer)
        {
            var i = await apirequest.Post($"Offers/AddOrUpdateOffer", offer);
            var res =  JsonConvert.DeserializeObject<API.Data.Response>(i);
            return Json(res);
        }

        [Route("/Coupan")]
        public IActionResult Index()
        {
            return View();
        }
        public async Task<IActionResult> CoupanList()
        {
            var list = await apirequest.GetData<IEnumerable<Coupan>>("Offers/CoupanList");
            return PartialView(list);
        }
        public async Task<IActionResult> ChangeCoupanStatus(int CoupanId)
        { 
            var res = new API.Data.Response();
            res = await apirequest.GetData<API.Data.Response>($"Offers/ChangeCoupanStatus/{CoupanId}");
            return Json(res);
        }
        public async Task<IActionResult> AddOrEditCoupan(int CoupanId)
        {
            var res = await apirequest.GetData<Coupan>($"Offers/AddOrEditCoupan/{CoupanId}");
            return PartialView(res);
        }
        public async Task<IActionResult> SaveOrUpdateCoupan(Coupan Coupand)
        {
            var i = await apirequest.Post("Offers/SaveOrUpdateCoupan", Coupand);
            var res = JsonConvert.DeserializeObject<API.Data.Response>(i);
            return Json(res);
        }
        public async Task<IActionResult> CoupanListPv()
        {
            var list = await apirequest.GetData<IEnumerable<Coupan>>("Offers/CoupanList");
            return PartialView(list);
        }
        public async Task<IActionResult> CheckCoupan(string CoupanName)
        {
            var res = await apirequest.GetData<API.Data.Response<string>>($"Offers/CheckCoupan/{CoupanName}");
            return Json(res);
        }
        public async Task<IActionResult> DeleteCoupan(int CoupanId)
        {
            var res = await apirequest.GetData<API.Data.Response<string>>($"Offers/DeleteCoupan/{CoupanId}");
            return Json(res);
        }
    }
}
