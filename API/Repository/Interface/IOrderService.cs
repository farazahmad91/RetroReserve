using Entities;
namespace API.Repository.Interface
{
    public interface IOrderService
    {
        public Task<Response> BookingOrder(Orders orders);
        public IEnumerable<OrdersReport> OrderHistory(string id);
        public IEnumerable<OrdersReport> InvoiceByOrderId(int id);
        public Orders Getconfirmdatashow(int id);
        public Orders GetOrderById(int id);
        public IEnumerable<OrdersReport> GetOrderList();
        public IEnumerable<OrdersReport> DeliverdOrderReport();
        public Task<Response> UpdateOrderStatus(DeliveredOrder deliveredOrder);
        public IEnumerable<OrdersReport> GetOrderInChart();
        public IEnumerable<OrdersReport> GetOrderInPieChart();
        public Task<Response> UpdateOrderStatusByDBoy(DeliveredOrder deliveredOrder);
        public Task<Data.Response> OTPVerify(Orders orders);
    }
   
}
