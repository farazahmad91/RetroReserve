using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using RetroReserve.Models;
using Entities;

namespace RetroReserve.Controllers
{
    
    public class UserController : Controller
    {
        private readonly APIrequest apirequest;
        public UserController(APIrequest apirequest)
        {
            this.apirequest = apirequest;
        }

        [Route("/Home")]
        public async Task<ActionResult> Index()
        {
            var i = await apirequest.GetData<List<Foodkart>>("Foodkart/GetFoodkartList");
            return View(i);
        }

        // GET: UserController/Details/5
        public async Task<ActionResult> MenuKart()
        {
            var i = await apirequest.GetData<List<Foodkart>>("Foodkart/GetFoodkartList");
            return PartialView(i);
        }


        public ActionResult TableBooking()
        {
            return View();
        }
    }
}
