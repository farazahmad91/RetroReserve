using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using RetroReserve.Models;
using Entities;
using System.Security.Claims;

namespace RetroReserve.Controllers
{
    [Authorize]
    public class InvoiceController : Controller
    {
        private readonly APIrequest apirequest;
        public InvoiceController(APIrequest apirequest)
        {
            this.apirequest = apirequest;
        }
        public async Task<ActionResult> Invoice(int id)
        {
			ViewBag.UserName = User.FindFirstValue(ClaimTypes.Name);
			ViewBag.name = ViewBag.UserName?.Length > 0 ? char.ToUpper(ViewBag.UserName[0]) + ViewBag.UserName.Substring(1) : string.Empty;
			var i = await apirequest.GetMultipleDataById<List<OrdersReport>>("Orders/InvoiceByOrderId", id);
			return View(i);
        }

        // GET: ConfirmationController/Details/5


        public async Task<IActionResult> Confirmation(int id)
        {
            var i = await apirequest.GetData<Orders>(($"Orders/Getconfirmdatashow?id={id}"));
            return View(i);
        }
    }
}
