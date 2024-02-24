using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace RetroReserve.Controllers
{
    [Authorize]
    public class OffersController : Controller
    {
        // GET: OffersController
        public ActionResult Offer()
        {
            return View();
        }

        // GET: OffersController/Details/5
        public ActionResult OffersList()
        {
            return View();
        }

        // GET: OffersController/Create
        public ActionResult Create()
        {
            return View();
        }
    }
}
