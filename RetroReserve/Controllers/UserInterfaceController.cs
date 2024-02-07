using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using RetroReserve.Models;
using Entities;

namespace RetroReserve.Controllers
{
    [Authorize]
    public class UserInterfaceController : Controller
    {
        private readonly APIrequest apirequest;
        public UserInterfaceController(APIrequest apirequest)
        {
            this.apirequest = apirequest;
        }
  
        public ActionResult Dashboard()
        {
            return View();
        }

        public ActionResult Table()
        {
            return View();
        }
        public async Task<ActionResult> ShowProduct()
        {
            var i = await apirequest.GetData<List<Foodkart>>("Foodkart/GetFoodkartList");
            return PartialView(i);
        }

    }
}
