using API.Repository.Interface;
using Entities;
namespace API.Repository.Impliments
{
    public class OrdersService : IOrderService
    {
        private readonly IDapperService dapper;
        public readonly IEmailSenderService emailSenderService;
        public OrdersService(IDapperService dapper, IEmailSenderService emailSenderService)
        {
            this.dapper = dapper;
            this.emailSenderService = emailSenderService;
        }

        // Table order Details Function
        public async Task<int> AddTableOrder(orders orders)
        {
            var sp = "sp_AddTableOrders";
            var param = new
            {
                OrderID = orders.OrderID,
                TableId = orders.TableId,
                DishId = orders.DishId,
                Quantity = orders.Quantity,
                TotalAmount = orders.TotalAmount,
                Status = orders.Status

            };
       
            var i = await dapper.Insert(param, sp);
            return i;
        }
       
        public int DeleteOrder(int id)
        {
            var sp = "";
            return dapper.Delete(id, sp);
        }
        public orders GetTableOrderById(int id)
        {
            var sp = "sp_GetTableOrdersById";
            var param = new
            {
                OrderID = id,

            };
            var i = dapper.GetById<orders>(param, sp);
            return i;
        }
        public IEnumerable<orders> GetTableOrderList()
        {
            var sp = "sp_GetTableOrdersList";
            var i = dapper.GetAll<orders>(sp);
            return i;
        }

       // Online order Details Function

        public async Task<int> AddOnlineOrder(BookingTables orders)
        {
            var sp = "sp_OrderBooking";
            var param = new
            {
                OrderID = orders.OrderID,
                TableBookingId = orders.TableBookingId,
                TableId = orders.TableId,
                UserId = orders.UserId,
                People = orders.People,
                Email = orders.Email,
                BookingTime = orders.BookingTime,
                description = orders.description,
                Status = orders.Status,

            };

            var i = await dapper.Insert(param, sp);
            return i;
        }
        public orders Getconfirmdatashow(int id)
        {
            var sp = "sp_confirmdatashow";
            var param = new
            {
                UserId = id,

            };
            var i = dapper.GetById<orders>(param, sp);
            return i;
        }
        public orders GetOnlineOrderById(int id)
        {
            var sp = "sp_GetOnlineOrderById";
            var param = new
            {
                OrderID = id,

            };
            var i = dapper.GetById<orders>(param, sp);
            return i;
        }
        public IEnumerable<OnlineOrdersReport> OrderHistory(string id)
        {
            var sp = "sp_OrderHistory";
            var param = new
            {
                UserId = id,

            };
            var i = dapper.GetItemsById <OnlineOrdersReport>(param, sp);
            return i;
        }
        public IEnumerable<OnlineOrdersReport> InvoiceByOrderId(int id)
        {
            var sp = "sp_InvoiceByOrderId";
            var param = new
            {
                OrderID = id,

            };
            var i = dapper.GetItemsById<OnlineOrdersReport>(param, sp);
            return i;
        }
        public IEnumerable<BookingTables> GetOnlineOrderList()
        {
            var sp = "sp_OrderReport";
            var i = dapper.GetAll<BookingTables>(sp);
            return i;
        }

        public IEnumerable<OnlineOrdersReport> DeliverdOnlineOrderReport()
        {
            var sp = "sp_DeliverdOrderReport";
            var i = dapper.GetAll<OnlineOrdersReport>(sp);
            return i;
        }

        public async Task<int> UpdateOrderStatus(BookingTables orders)
        {
            var sp = "sp_UpdateOrderStatus";
            var param = new
            {
                OrderID = orders.OrderID,
                Status = orders.Status,
                DeliverDate = orders.DeliverDate,
            };
            string bookingEmail = orders.Email;
            string subject = "";
            string body = "";

            switch (orders.Status)
            {
                case 1:
                    subject = "Booking Confirmation";
                    body = $"Dear Valued Customer,\n\nWe are delighted to inform you that your table has been successfully booked. Your Booking ID is: {orders.OrderID}. And Table No:{orders.TableId}. \n\nWe look forward to serving you and providing an unforgettable dining experience. If you have any special requests or questions, feel free to reach out to us.\n\nThank you for choosing us. We appreciate your trust and can't wait to welcome you!\n\nBest regards,\nThe MyCafe Team";
                    break;

                case 2:
                    subject = "Reminder Message";
                    body = $"Dear Valued Customer,\n\nWe are reaching out to remind you that your dining table is ready. Our team at MyCafe has carefully prepared your food, and we're eager for you to enjoy it.\n\nIf you have any specific instructions or if there's anything we can assist you with, please feel free to contact us. Your satisfaction is our priority, and we want to ensure your dining experience with us is exceptional.\n\nWe appreciate your trust and hope this meal brings you joy. Thank you for choosing MyCafe!\n\nBest regards,\nThe MyCafe Team";
                    break;

                case 4:
                    subject = "Booking Cancel";
                    body = $"Dear Valued Customer,\n\nIt is with sincere regret that we inform you of the cancellation of your order. We understand that circumstances may arise, leading to changes in plans.\n\nAt MyCafe, we strive to accommodate every customer's needs, and we want to assure you that your satisfaction remains our top priority. If you have any concerns or if there's anything we can assist you with regarding the cancellation, please do not hesitate to reach out to us.\n\nYour consideration and understanding are highly appreciated. We hope to have the opportunity to serve you in the future and provide you with the exceptional experience you deserve.\n\nThank you for considering MyCafe. We value your understanding.\n\nBest regards,\nThe MyCafe Team";
                    break;

                case 5:
                    subject = "Order Delivered";
                    body = $"Dear Valued Customer,\n\nWe are overjoyed to share the wonderful news that your order has been successfully delivered on: {orders.DeliverDate}.\n\nAt MyCafe, we take great pride in providing an exceptional dining experience, and your satisfaction is our utmost priority. If you have any special requests or inquiries, please don't hesitate to contact us.\n\nYour choice in selecting us is truly appreciated, and we want to express our gratitude for the trust you've placed in us. We eagerly anticipate the opportunity to welcome you again and create more memorable moments.\n\nThank you for choosing MyCafe. Your satisfaction is our success!\n\nBest regards,\nThe MyCafe Team";
                    break;
            }

            emailSenderService.SendEmail(bookingEmail, subject, body);

            var i = await dapper.Insert(param, sp);

            return i;
        }
        public IEnumerable<OnlineOrdersReport> GetOrderInChart()
        {
            var sp = "sp_GetOrderInChart";
            var i = dapper.GetAll<OnlineOrdersReport>(sp);
            return i;
        }
        public IEnumerable<OnlineOrdersReport> GetOrderInPieChart()
        {
            var sp = "sp_GettotalOrderByMonth";
            var i = dapper.GetAll<OnlineOrdersReport>(sp);
            return i;
        }
    }
}
