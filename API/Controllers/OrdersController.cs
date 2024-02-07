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
        [HttpPost(nameof(AddTableOrder))]   
        public async Task<IActionResult> AddTableOrder(orders orders)
        {
           var i = await  orderService.AddTableOrder(orders);
            return Ok(i);
        }

        [HttpPost(nameof(AddOnlineOrder))]
        public async Task<IActionResult> AddOnlineOrder(BookingTables orders)
        {
            var i = await orderService.AddOnlineOrder(orders);
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
        [HttpGet(nameof(GetOnlineOrderList))]
        public IActionResult GetOnlineOrderList()
        {
            var i = orderService.GetOnlineOrderList();
            return Ok(i);
        }
        [HttpGet(nameof(DeliverdOnlineOrderReport))]
        public IActionResult DeliverdOnlineOrderReport()
        {
            var i = orderService.DeliverdOnlineOrderReport();
            return Ok(i);
        }

        [HttpPost(nameof(UpdateOrderStatus))]
        public async Task<IActionResult> UpdateOrderStatus(BookingTables orders)
        {
            var i = await orderService.UpdateOrderStatus(orders);
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
    }
}
