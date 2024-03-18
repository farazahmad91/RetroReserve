using API.Data;
using API.Repository.Interface;
using Entities;
using System.Net.Mail;
using Response = Entities.Response;

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
                var error = new Response
                {
                    ClassName = GetType().Name,
                    FunctionName = "SaveOrUpdateTable",
                    ResponseText = ex.Message,
                    Proc_Name = "Proc_SaveOrUpdateTable",
                };
                var _ = new ErrorLogService(dapperService).Error(error);
                return res;
            }
        }

        public async Task<BookingTableVM2> GetByIdTable(int Id)
        {
            BookingTableVM2 res = new BookingTableVM2();
            try
            {
                var i = await dapperService.GetAsync<BookingTableVM2>("SELECT * FROM  TBL_TABLEBYADMIN WHERE TableId=@Id", new
                {
                    Id = Id
                }, System.Data.CommandType.Text);
                res = i;
                return i;
            }
            catch (Exception ex)
            {
                var error = new Response
                {
                    ClassName = GetType().Name,
                    FunctionName = "GetByIdTable",
                    ResponseText = ex.Message,
                    Proc_Name = "Inline Query",
                };
                var _ = new ErrorLogService(dapperService).Error(error);
                return res;
            }
        }

        public async Task<IEnumerable<BookingTableVM2>> AllTable()
        {
            IEnumerable<BookingTableVM2> res = new List<BookingTableVM2>();
           
            try
            {

                var list = dapperService.GetAll<BookingTableVM2>("SELECT * FROM TBL_TABLEBYADMIN");
                res= list;
                return list;
            }
            catch (Exception ex)
            {

                var error = new Response
                {
                    ClassName = GetType().Name,
                    FunctionName = "AllTable",
                    ResponseText = ex.Message,
                    Proc_Name = "Inline Query",
                };
                var _ = new ErrorLogService(dapperService).Error(error);
                return res;
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
                var error = new Response
                {
                    ClassName = GetType().Name,
                    FunctionName = "_ChangeStatusTable",
                    ResponseText = ex.Message,
                    Proc_Name = "Proc_ChnageTableStatus",
                };
                var _ = new ErrorLogService(dapperService).Error(error);
                return res;
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

                var error = new Response
                {
                    ClassName = GetType().Name,
                    FunctionName = "TableBookByUser",
                    ResponseText = ex.Message,
                    Proc_Name = "Proc_AddBookingForUser",
                };
                var _ = new ErrorLogService(dapperService).Error(error);
                return res;
            }
        }

        public async Task<IEnumerable<BookingTableByUser>> AllBookedTable()
        {
            IEnumerable<BookingTableByUser> res = new List<BookingTableByUser>();


            try
            {

                var list = dapperService.GetAll<BookingTableByUser>("SELECT * FROM tbl_UserBookingTable");
                res = list;
                return list;
            }
            catch (Exception ex)
            {
                var error = new Response
                {
                    ClassName = GetType().Name,
                    FunctionName = "AllBookedTable",
                    ResponseText = ex.Message,
                    Proc_Name = "Inline Query",
                };
                var _ = new ErrorLogService(dapperService).Error(error);
                return res;
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
			catch(Exception ex)
			{
                var error = new Response
                {
                    ClassName = GetType().Name,
                    FunctionName = "Contactmessage",
                    ResponseText = ex.Message,
                    Proc_Name = "",
                };
                var _ = new ErrorLogService(dapperService).Error(error);
            }
		}

        public async Task<Data.Response> UpdateStatusBookedTable(int BookingId)
        {
            var res = new Data.Response();
            try
            {
                res = await dapperService.GetAsync<Data.Response>("Proc_UpdateStatusBookedTable", new
                {
                    BookingId = BookingId
                });
                return res;
            }
            catch (Exception ex)
            {

                var error = new Response
                {
                    ClassName = GetType().Name,
                    FunctionName = "UpdateStatusBookedTable",
                    ResponseText = ex.Message,
                    Proc_Name = "Proc_UpdateStatusBookedTable",
                };
                var _ = new ErrorLogService(dapperService).Error(error);
                return res;
            }
        }

        public IEnumerable<BookingTableByUser> BookingDetails()
        {
            IEnumerable<BookingTableByUser> res = new List<BookingTableByUser>();


            try
            {

                var list =  dapperService.GetAll<BookingTableByUser>("SELECT * FROM tbl_BookingTableDetail");
                res=list;
                return list;
            }
            catch (Exception ex)
            {
                var error = new Response
                {
                    ClassName = GetType().Name,
                    FunctionName = "BookingDetails",
                    ResponseText = ex.Message,
                    Proc_Name = "Inline Query",
                };
                var _ = new ErrorLogService(dapperService).Error(error);
                return res;
            }
        }

        public BookingTableByUser DetailsOnSearch(int id)
        {
            BookingTableByUser res = new BookingTableByUser();
            try
            {
                var sp = "SELECT * FROM tbl_BookingTableDetail where BookingId=@id";
                var param = new 
                { id };
                var list = dapperService.GetById<BookingTableByUser>(param,sp);
                res=list;
                return list;
            }
            catch (Exception ex)
            {

                var error = new Response
                {
                    ClassName = GetType().Name,
                    FunctionName = "DetailsOnSearch",
                    ResponseText = ex.Message,
                    Proc_Name = "Inline Query",
                };
                var _ = new ErrorLogService(dapperService).Error(error);
                return res;
            }
        }

    }
}
