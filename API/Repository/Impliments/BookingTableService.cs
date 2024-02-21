using API.Data;
using API.Repository.Interface;
using Entities;
using System.Net.Mail;

namespace API.Repository.Impliments
{

    public class BookingTableService : IBookingTableService
    {
        public readonly IDapperService dapperService;
        public readonly IEmailSenderService emailSenderService;
        public BookingTableService(IDapperService dapperService, IEmailSenderService emailSenderService)
        {
            this.dapperService = dapperService;
            this.emailSenderService = emailSenderService;
        }

        public async Task<Data.Response> SaveOrUpdateTable(BookingTableVM2 bookingTable)
        {
            var res = new Data.Response()
            {
                ResponseText="Failed To Add Table",
                StatusCode= ResponseStatus.FAILED
            };

            try
            {
                res = await dapperService.GetAsync<Data.Response>("Proc_SaveOrUpdateTable", new
                {
                    bookingTable.TableId,
                    bookingTable.TableName,
                    bookingTable.Image,
                    bookingTable.Description,
                    bookingTable.IsActive
                });
                return res;
            }
            catch (Exception ex)
            {
                res.ResponseText = ex.Message;
                res.StatusCode = ResponseStatus.FAILED;
                return res;
                throw;
            }
        }

        public async Task<BookingTableVM2> GetByIdTable(int Id)
        {
            try
            {
                var res = await dapperService.GetAsync<BookingTableVM2>("SELECT * FROM  TBL_TABLEBYADMIN WHERE TableId=@Id", new
                {
                    Id = Id
                }, System.Data.CommandType.Text);
                return res;
            }
            catch (Exception ex)
            {

                throw;
            }
        }

        public async Task<IEnumerable<BookingTableVM2>> AllTable()
        {
            var res = new Data.Response();
            try
            {

                var list = dapperService.GetAll<BookingTableVM2>("SELECT * FROM TBL_TABLEBYADMIN");
                return list;
            }
            catch (Exception ex)
            {

                throw;
            }
        }

        public async Task<Data.Response> _ChangeStatusTable(BookingTableVM2 bookingTableVM)
        {
            var res = new Data.Response();

            try
            {
                res = await dapperService.GetAsync<Data.Response>("Proc_ChnageTableStatus", new
                {
                    ID = bookingTableVM.TableId
                });
                res.StatusCode = ResponseStatus.SUCCESS;
             
                return res;
            }
            catch (Exception ex)
            {

                throw;
            }
        }


        public async Task<Data.Response<int>> TableBookByUser(BookingTableByUser tableByUser)
        {
            
            var res = new Data.Response<int>();
            try
            {
                var i = dapperService.GetAsync<Data.Response<int>>("Proc_AddBookingForUser", new
                {
                    tableByUser.TableId,
                    tableByUser.BookingDate,
                    tableByUser.BookingTime,
                    tableByUser.NoOfPeople,
                    tableByUser.Email,
                    tableByUser.Name
                });
                res.ResponseText= i.Result.ResponseText;
                res.StatusCode = i.Result.StatusCode;
                res.Result = i.Result.Result;
                var name = tableByUser.Name.ToUpper();
                var email = tableByUser.Email;
                if (res.StatusCode==ResponseStatus.SUCCESS)
                {
                    Contactmessage(name, email, tableByUser.NoOfPeople, tableByUser.BookingDate, tableByUser.BookingTime,res.Result);
                }
				return res;
            }
            catch (Exception ex)
            {

                throw;
            }
        }

        public async Task<IEnumerable<BookingTableByUser>> AllBookedTable()
        {
            var res = new Data.Response();
            try
            {

                var list = dapperService.GetAll<BookingTableByUser>("SELECT * FROM tbl_UserBookingTable");
                return list;
            }
            catch (Exception ex)
            {

                throw;
            }
        }

		private void Contactmessage(string name, string email,int nop,string date , string time,int BookingId)
		{
			string content = $"Dear {name},\r\n\r\n" +
                $"Thank you for choosing RestroReserve for your dining experience. We are delighted to confirm your table reservation for {nop} Peoples on {date} at {time} and BookingID : RRB#{BookingId}\r\n\r\n" +
                $"We are eagerly anticipating your visit and assure you that we will do our utmost to make your dining experience memorable. If you have any special requests or dietary preferences, please feel free to let us know in advance, and we will be happy to accommodate them.\r\n\r\n" +
                $"Should you have any questions or need to make any changes to your reservation, please do not hesitate to contact us at retroreserve@gmail.com.\r\n\r\n" +
                $"Once again, thank you for choosing RestroReserve. We look forward to welcoming you to our restaurant and providing you with exceptional service and culinary delights.\r\n\r\n" +
                $"Warm regards,\r\n\r\n" +
                $"RetroReserve\r\n" +
                $"RestroReserve";

			MailMessage mail = new MailMessage();
			SmtpClient SmtpServer = new SmtpClient("smtp.gmail.com");
			string fromaddress = "cozmotest91@gmail.com";
			mail.From = new MailAddress(fromaddress);
			string toaddress = email;
			mail.To.Add(toaddress);
			mail.Subject = "Reservation Confirmation at RestroReserve!";
			mail.Body =content;
			SmtpServer.Port = 587;
			SmtpServer.Credentials = new System.Net.NetworkCredential("cozmotest91@gmail.com", "cuncfbllgbiwwyax");
			SmtpServer.EnableSsl = true;
			try
			{
				SmtpServer.Send(mail);
			}
			catch
			{
				throw;
			}
		}
	}
}
