using Entities;
namespace API.Repository.Interface
{
    public interface IOrderService
    {
        public Task<int> AddTableOrder(orders orders);
        public orders GetTableOrderById(int id);
        public IEnumerable<orders> GetTableOrderList();
        public int DeleteOrder(int id);

        public Task<int> AddOnlineOrder(BookingTables orders);
        public IEnumerable<OnlineOrdersReport> OrderHistory(string id);
        public IEnumerable<OnlineOrdersReport> InvoiceByOrderId(int id);
        public orders Getconfirmdatashow(int id);
        public orders GetOnlineOrderById(int id);
        public IEnumerable<BookingTables> GetOnlineOrderList();
        public IEnumerable<OnlineOrdersReport> DeliverdOnlineOrderReport();
        public  Task<int> UpdateOrderStatus(BookingTables orders);
        public IEnumerable<OnlineOrdersReport> GetOrderInChart();
        public IEnumerable<OnlineOrdersReport> GetOrderInPieChart();
    }
   
}
