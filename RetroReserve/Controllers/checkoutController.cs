﻿using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using RetroReserve.Models;
using Entities;
using System.Security.Claims;

namespace RetroReserve.Controllers
{
    [Authorize]
    public class checkoutController : Controller
    {
        private readonly APIrequest apirequest;
        public checkoutController(APIrequest apirequest)
        {
            this.apirequest = apirequest;
        }
        [Route("/Checkout")]
        public async Task<ActionResult> checkout()
        {
            var email = User.FindFirstValue(ClaimTypes.Email);
            var i = await apirequest.GetData<List<Cart>>($"Cart/GetCartValueById?id={email}");
            return View(i);
        }

        [Route("/Payment")]
        public IActionResult Payment(double messageafterCoupan)
        {
            //var email = User.FindFirstValue(ClaimTypes.Email);
            //var i = await apirequest.GetData<List<Cart>>($"Cart/GetCartCheckOutPrice?id={email}");
            return PartialView(messageafterCoupan);
        }

    }
}
