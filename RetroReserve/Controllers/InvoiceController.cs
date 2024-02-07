using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using RetroReserve.Models;
using Entities;

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
            var i = await apirequest.GetMultipleDataById<List<OnlineOrdersReport>>("Orders/InvoiceByOrderId", id);
            return View(i);
        }

        // GET: ConfirmationController/Details/5


        public async Task<IActionResult> Confirmation(int id)
        {
            var i = await apirequest.GetData<orders>(($"Orders/Getconfirmdatashow?id={id}"));
            return View(i);
        }
    }
}
