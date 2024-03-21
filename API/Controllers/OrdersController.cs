using Microsoft.AspNetCore.Mvc;
using API.Repository.Interface;
using Entities;

namespace API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class OrdersController : ControllerBase
    {
        private readonly IOrderService orderService;
        public OrdersController(IOrderService orderService)
        {
                this.orderService = orderService;
        }


        [HttpPost(nameof(BookingOrder))]
        public async Task<IActionResult> BookingOrder(Orders orders)
        {
            var i = await orderService.BookingOrder(orders);
            return Ok(i);
        }

        [HttpGet(nameof(Getconfirmdatashow))]
        public IActionResult Getconfirmdatashow(int id)
        {
            var i =orderService.Getconfirmdatashow(id);
            return Ok(i);
        }
        [HttpGet(nameof(OrderHistory))]
        public IActionResult OrderHistory(string id)
        {
            var i = orderService.OrderHistory(id);
            return Ok(i);
        }
        [HttpGet(nameof(InvoiceByOrderId))]
        public IActionResult InvoiceByOrderId(int id)
        {
            var i = orderService.InvoiceByOrderId(id);
            return Ok(i);
        }
        [HttpGet(nameof(GetOrderList))]
        public IActionResult GetOrderList()
        {
            var i = orderService.GetOrderList();
            return Ok(i);
        }
        [HttpGet(nameof(DeliverdOrderReport))]
        public IActionResult DeliverdOrderReport()
        {
            var i = orderService.DeliverdOrderReport();
            return Ok(i);
        }

        [HttpPost(nameof(UpdateOrderStatus))]
        public async Task<IActionResult> UpdateOrderStatus(DeliveredOrder deliveredOrder)
        {
            var i = await orderService.UpdateOrderStatus(deliveredOrder);
            return Ok(i);
        }
        [HttpGet(nameof(GetOrderInChart))]
        public IActionResult GetOrderInChart()
        {
            var i = orderService.GetOrderInChart();
            return Ok(i);
        }
        [HttpGet(nameof(GetOrderInPieChart))]
        public IActionResult GetOrderInPieChart()
        {
            var i = orderService.GetOrderInPieChart();
            return Ok(i);
        }

        [HttpPost(nameof(UpdateOrderStatusByDBoy))]
        public async Task<IActionResult> UpdateOrderStatusByDBoy(DeliveredOrder deliveredOrder)
        {
            var i = await orderService.UpdateOrderStatusByDBoy(deliveredOrder);
            return Ok(i);
        }

        [HttpPost(nameof(OTPVerify))]
        public async Task<IActionResult> OTPVerify(Orders orders)
        {
            var i = await orderService.OTPVerify(orders);
            return Ok(i);
        }

        [HttpPost(nameof(ResendOTP))]
        public async Task<IActionResult> ResendOTP(DeliveredOrder deliveredOrder)
        {
            var i = await orderService.ResendOTP(deliveredOrder);
            return Ok(i);
        }
    }
}
