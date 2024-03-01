using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using RetroReserve.Models;
using Entities;
using System.Security.Claims;
using Newtonsoft.Json;
using static NuGet.Packaging.PackagingConstants;

namespace RetroReserve.Controllers
{
    [Authorize]
    public class OrderController : Controller
    {
        private readonly APIrequest apirequest;
        public OrderController(APIrequest apirequest)
        {
            this.apirequest = apirequest;
        }
        [Route("/NewOrder")]
        public async Task<ActionResult> NewOrder()
        {
            var i = await apirequest.GetData<List<OrdersReport>>("Orders/GetOrderList");
            return View(i);
        }
        [Route("/DeliverdOrder")]
        public async Task<ActionResult> DeliverdOrder()
        {
            var i = await apirequest.GetData<List<OrdersReport>>("Orders/DeliverdOrderReport");
            return View(i);
        }

        public async Task<IActionResult> BookingOrder(Orders orders)
        {
            var Email = User.FindFirstValue(ClaimTypes.Email);
            orders.UserId = Email;
            var i = await apirequest.Post("Orders/BookingOrder", orders);
            var res = JsonConvert.DeserializeObject<Entities.Response>(i);
            return Json(res);

        }
        public async Task<IActionResult> UpdateOrderStatus(DeliveredOrder deliveredOrder)
        {
            var i = await apirequest.Post("Orders/UpdateOrderStatus", deliveredOrder);
            return Json(i);

        }

        public async Task<IActionResult> UpdateOrderStatusByDBoy(DeliveredOrder deliveredOrder)
        {
            var email = User.FindFirstValue(ClaimTypes.Email);
            deliveredOrder.UserId = email;
            var i = await apirequest.Post("Orders/UpdateOrderStatusByDBoy", deliveredOrder);
            return Json(i);

        }

        [Route("/OrderHistory")]
        public async Task<IActionResult> OrderHistory()
        {
            var Email = User.FindFirstValue(ClaimTypes.Email);
            var i = await apirequest.GetData<List<OrdersReport>>($"Orders/OrderHistory?id={Email}");
            return View(i);

        }
        public async Task<IActionResult> OrderDetails(int id)
        {
            var i = await apirequest.GetData<List<OrdersReport>>($"Orders/InvoiceByOrderId?id={id}");
            return PartialView(i);
        }
        public async Task<IActionResult> OrderChart()
        {
            var i = await apirequest.GetData<List<OrdersReport>>("Orders/GetOrderInChart");
            return PartialView(i);
        }
        public async Task<IActionResult> OrderPieChart()
        {
            var i = await apirequest.GetData<List<OrdersReport>>("Orders/GetOrderInPieChart");
            return PartialView(i);
        }
    }
}
