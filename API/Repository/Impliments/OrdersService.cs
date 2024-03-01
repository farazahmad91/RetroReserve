﻿using API.Repository.Interface;
using Entities;
using Microsoft.AspNetCore.Http;
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

        private int GenerateOTP()
        {
            Random random = new Random();
            int otp = random.Next(100000, 999999);

            return otp;
        }


        public async Task<Response> BookingOrder(Orders orders)
        {
            var res = new Response()
            {
                ResponseText = "Failed To Save",
                StatusCode = -1,
            };
            try
            {
                var sp = "sp_OrderBooking";
                var param = new
                {
                    OrderID = orders.OrderID,
                    AddressId = orders.AddressId,
                    UserId = orders.UserId,
                    Status = orders.Status,
                };
                string bookingEmail = orders.UserId;
                string subject = "Order Placed";
                
               
                res = await dapper.GetAsync<Response>(sp, param);
                if (res.StatusCode == 1)
                {
                    string body = $"Dear Valued Customer,\n\nThank you for choosing RetroReserve! We are excited to confirm the successful placement of your new order. Your Order ID is: RR#{res.OrderID}.\n\nOur team is dedicated to ensuring your satisfaction, and we can't wait to prepare and deliver your items with care. We kindly request your patience as we aim to deliver within the next 30 minutes. If you have any specific preferences or questions regarding your order, please don't hesitate to contact us.\n\nWe appreciate your trust in RetroReserve and look forward to serving you with excellence.\n\nBest regards,\nThe RetroReserve Team";
                    emailSenderService.SendEmail(bookingEmail, subject, body);

                }
                return res;
            }
            catch (Exception ex)
            {

                res.ResponseText = ex.Message;
                res.StatusCode = -1;
                return res;
            }
        }
        public Orders Getconfirmdatashow(int id)
        {
            var sp = "sp_confirmdatashow";
            var param = new
            {
                UserId = id,

            };
            var i = dapper.GetById<Orders>(param, sp);
            return i;
        }
        public Orders GetOrderById(int id)
        {
            var sp = "sp_GetOnlineOrderById";
            var param = new
            {
                OrderID = id,

            };
            var i = dapper.GetById<Orders>(param, sp);
            return i;
        }
        public IEnumerable<OrdersReport> OrderHistory(string id)
        {
            var sp = "sp_OrderHistory";
            var param = new
            {
                UserId = id,

            };
            var i = dapper.GetItemsById <OrdersReport>(param, sp);
            return i;
        }
        public IEnumerable<OrdersReport> InvoiceByOrderId(int id)
        {
            var sp = "sp_InvoiceByOrderId";
            var param = new
            {
                OrderID = id,

            };
            var i = dapper.GetItemsById<OrdersReport>(param, sp);
            return i;
        }
        public IEnumerable<OrdersReport> GetOrderList()
        {
            var sp = "sp_OrderReport";
            var i = dapper.GetAll<OrdersReport>(sp);
            return i;
        }

        public IEnumerable<OrdersReport> DeliverdOrderReport()
        {
            var sp = "sp_DeliverdOrderReport";
            var i = dapper.GetAll<OrdersReport>(sp);
            return i;
        }

        public async Task<Response> UpdateOrderStatus(DeliveredOrder deliveredOrder)
        {
            var res = new Response()
            {
                ResponseText = "Failed To Save",
                StatusCode = -1,
            };
            try
            {
                var sp = "sp_UpdateOrderStatus";
                var param = new
                {
                    OrderID = deliveredOrder.OrderId,
                    Status = deliveredOrder.Status,
                    EmpId = deliveredOrder.EmpId,
                    Email = deliveredOrder.Email,
                    OTP = GenerateOTP(),
                };
                string bookingEmail = deliveredOrder.UserId;
                string subject = "";
                string body = "";
                if (deliveredOrder.Status ==2)
                {
                    subject = "Notification of Shipped Order";
                    body = $"Dear Valued Customer,\n\nWe are pleased to inform you that your order has been successfully shipped. You can expect to receive it within the next 30 minutes and kindly utilize the provided OTP for verification. Your OTP Is {param.OTP}.\n\nWe look forward to serving you and providing an unforgettable dining experience. If you have any special requests or questions, feel free to reach out to us.\n\nThank you for choosing us. We appreciate your trust and can't wait to welcome you!\n\nBest regards,\nThe RetroReserve Team";

                }
                res = await dapper.GetAsync<Response>(sp, param);

                if (res.StatusCode == 1)
                {
                    emailSenderService.SendEmail(bookingEmail, subject, body);
                }
                return res;
            }
            catch (Exception ex)
            {

                res.ResponseText = ex.Message;
                res.StatusCode = -1;
                return res;
            }
          
        }
        public IEnumerable<OrdersReport> GetOrderInChart()
        {
            var sp = "sp_GetOrderInChart";
            var i = dapper.GetAll<OrdersReport>(sp);
            return i;
        }
        public IEnumerable<OrdersReport> GetOrderInPieChart()
        {
            var sp = "sp_GettotalOrderByMonth";
            var i = dapper.GetAll<OrdersReport>(sp);
            return i;
        }

        public Task<Response> AddOrder(Orders orders)
        {
            throw new NotImplementedException();
        }

        public async Task<Response> UpdateOrderStatusByDBoy(DeliveredOrder deliveredOrder)
        {
            var res = new Response()
            {
                ResponseText = "Failed To Save",
                StatusCode = -1,
            };
            try
            {
                var sp = "sp_UpdateOrderStatusByDBoy";
                var param = new
                {
                    OrderID = deliveredOrder.OrderId,
                    Status = deliveredOrder.Status,
                    EmpId = deliveredOrder.EmpId,
                    cancellation_Reason =deliveredOrder.cancellation_Reason,
                };
                string bookingEmail = deliveredOrder.UserId;
                string subject = "";
                string body = "";

                switch (deliveredOrder.Status)
                {
                    case 4:
                        subject = "Order Delivered";
                        body = $"Dear Valued Customer,\n\nWe are overjoyed to share the wonderful news that your order has been successfully delivered on: {DateTime.Now}.\n\nAt RetroReserve, we take great pride in providing an exceptional dining experience, and your satisfaction is our utmost priority. If you have any special requests or inquiries, please don't hesitate to contact us.\n\nYour choice in selecting us is truly appreciated, and we want to express our gratitude for the trust you've placed in us. We eagerly anticipate the opportunity to welcome you again and create more memorable moments.\n\nThank you for choosing RetroReserve. Your satisfaction is our success!\n\nBest regards,\nThe RetroReserve Team";
                        break;

                    case 5:
                        subject = "Booking Cancel";
                        body = $"Dear Valued Customer,\n\nIt is with sincere regret that we inform you of the cancellation of your order. We understand that circumstances may arise, leading to changes in plans.\n\nAt RetroReserve, we strive to accommodate every customer's needs, and we want to assure you that your satisfaction remains our top priority. If you have any concerns or if there's anything we can assist you with regarding the cancellation, please do not hesitate to reach out to us.\n\nYour consideration and understanding are highly appreciated. We hope to have the opportunity to serve you in the future and provide you with the exceptional experience you deserve.\n\nThank you for considering RetroReserve. We value your understanding.\n\nBest regards,\nThe RetroReserve Team";
                        break;
                }
                res = await dapper.GetAsync<Response>(sp, param);

                if (res.StatusCode == 1)
                {
                    emailSenderService.SendEmail(bookingEmail, subject, body);
                }
                return res;
            }
            catch (Exception ex)
            {

                res.ResponseText = ex.Message;
                res.StatusCode = -1;
                return res;
            }

        }
        public async Task<Data.Response> OTPVerify(Orders orders)
        {
            var res = new Data.Response()
            {
                ResponseText = "Failed To Save",
                StatusCode =  Data.ResponseStatus.FAILED,
            };
            try
            {
                var sp = "sp_VerifyOTP";
                var param = new
                {
                    OrderID = orders.OrderID,
                    OTP = orders.OTP,
                };
                res =await dapper.GetAsync<Data.Response>(sp, param);
                return res;
            }
            catch (Exception ex)
            {
                res.ResponseText = ex.Message;
                res.StatusCode = Data.ResponseStatus.FAILED;
                return res;
            }
            
        }
    }
}
