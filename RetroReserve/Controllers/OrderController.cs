using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using RetroReserve.Models;
using Entities;
using System.Security.Claims;

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
        public async Task<ActionResult> NewOrder()
        {
            var i = await apirequest.GetData<List<BookingTables>>("Orders/GetOnlineOrderList");
            return View(i);
        }
        public async Task<ActionResult> DeliverdOrder()
        {
            var i = await apirequest.GetData<List<OnlineOrdersReport>>("Orders/DeliverdOnlineOrderReport");
            return View(i);
        }

        public async Task<IActionResult> AddOnlineOrder(BookingTables orders)
        {
            var Email = User.FindFirstValue(ClaimTypes.Name);
            orders.UserId = Email;
            var i = await apirequest.Post("Orders/AddOnlineOrder", orders);
            return Json(i);

        }
        public async Task<IActionResult> UpdateOrderStatus(BookingTables orders)
        {
            var i = await apirequest.Post("Orders/UpdateOrderStatus", orders);
            return Json(i);

        }
        public async Task<IActionResult> OrderHistory(string? id)
        {
            var Email = User.FindFirstValue(ClaimTypes.Name);
          id = Email;
            var i = await apirequest.GetMultipleDataById<List<OnlineOrdersReport>>("Orders/OrderHistory", id);
            return View(i);

        }

        public async Task<IActionResult> OrderChart()
        {
            var i = await apirequest.GetData<List<OnlineOrdersReport>>("Orders/GetOrderInChart");
            return PartialView(i);
        }
        public async Task<IActionResult> OrderPieChart()
        {
            var i = await apirequest.GetData<List<OnlineOrdersReport>>("Orders/GetOrderInPieChart");
            return PartialView(i);
        }
    }
}
