using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using RetroReserve.Models;
using Entities;
using System.Security.Claims;
using Entities.Extension;
using Newtonsoft.Json;

namespace RetroReserve.Controllers
{
    [Authorize]
    public class checkoutController : Controller
    {
        private readonly APIrequest apirequest;
        private readonly string _BaseUrl;
        public checkoutController(APIrequest apirequest)
        {
            this.apirequest = apirequest;
            _BaseUrl = "https://localhost:7291";
        }
        [Route("/Checkout")]
        public async Task<ActionResult> checkout()
        {
            var email = User.FindFirstValue(ClaimTypes.Email);
            var i = await apirequest.GetData<List<Cart>>($"Cart/GetCartValueById?id={email}");
            return View(i);
        }

        [Route("/Payment")]
        public async Task<IActionResult> Payment(double messageafterCoupan, double totalAmount)
        {
            string ammount = "";
            
            if (messageafterCoupan > 0)
            {
                try
                {
                     ammount = Convert.ToString(messageafterCoupan);
                    var apiRes = await AppWebRequest.O.PostAsync($"{_BaseUrl}/api/PG/CreatCheckOutSession/{ammount}");
                    if (apiRes != null)
                    {
                      return Json(apiRes.Result);
                    }

                }
                catch (Exception ex)
                {

                    throw;
                }
            }
            ammount = Convert.ToString(totalAmount);
            var apires = await AppWebRequest.O.PostAsync($"{_BaseUrl}/api/PG/CreatCheckOutSession/{ammount}",null,User.GetLoggedInUserToken());
            if(apires != null)
            {
                return Json(apires.Result);
            }
            return View(ammount);
           
        }
        [Route("/Success")]
        public IActionResult Success()
        {
            return View();
        }




    }
}
