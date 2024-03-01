using Entities;
using Microsoft.AspNetCore.Mvc;
using Microsoft.VisualStudio.Web.CodeGenerators.Mvc.Templates.BlazorIdentity.Pages.Manage;
using Newtonsoft.Json;
using RetroReserve.Models;
using System.Security.Claims;

namespace RetroReserve.Controllers
{
    public class DeliveryBoyController : Controller
    {
        private readonly APIrequest _aPIrequest;
        public DeliveryBoyController()
        {
            _aPIrequest = new APIrequest();
        }
        public async Task<IActionResult> MyOrder()
        {
            var email = User.FindFirstValue(ClaimTypes.Email);
            var i = await _aPIrequest.GetData<List<DeliveredOrder>>($"Employee/GetOrderListByDboy?email={email}");
            return View(i);
        }
        public IActionResult OTPVerify()
        {
            return PartialView();
        }
        [HttpPost]
        public async Task<IActionResult> OTPVerification(Orders orders)
        {
            var i = await _aPIrequest.Post("Orders/OTPVerify", orders);
            var res = JsonConvert.DeserializeObject<Entities.Response>(i);
            return Json(res);
        }
    }
}
