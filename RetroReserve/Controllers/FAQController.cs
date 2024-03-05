using Entities;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using RetroReserve.Models;

namespace RetroReserve.Controllers
{
    public class FAQController : Controller
    {
        private readonly APIrequest _aPIrequest;
        public FAQController(APIrequest aPIrequest)
        {
                this._aPIrequest = aPIrequest;
        }
        [Route("FAQ")]
        public async Task<IActionResult> FAQ()
        {
            var i = await _aPIrequest.GetData<List<Entities.FAQ>>("FAQ/FAQList");
            return View(i);
        }

        public async Task<IActionResult> FAQList()
        {
            var i = await _aPIrequest.GetData<List<Entities.FAQ>>("FAQ/FAQList");
            return View(i);
        }

        public async Task<IActionResult> CreateOrEdit(int id)
        {
            var i = await _aPIrequest.GetData<Entities.FAQ>($"FAQ/FAQListById?id={id}");
            return PartialView(i);
        }

        public async Task<IActionResult> UpsertFAQ(FAQ fAQ)
        {
            var i = await _aPIrequest.Post("FAQ/AddFAQ", fAQ);
            var res = JsonConvert.DeserializeObject<Entities.Response>(i);
            return Json(res);
        }
    }
}
