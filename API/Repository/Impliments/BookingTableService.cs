using API.Repository.Interface;
using Entities;

namespace API.Repository.Impliments
{
    public class result
    {
        public string Email { get; set; }
        public int TableBookingId { get; set; }
    }
    public class BookingTableService : IBookingTableService
    {
        public readonly IDapperService dapperService;
        public readonly IEmailSenderService emailSenderService;
        public BookingTableService(IDapperService dapperService, IEmailSenderService emailSenderService)
        {
            this.dapperService = dapperService;
            this.emailSenderService = emailSenderService;
        }
        
        public async Task<int> BookTable(BookingTable bookingTable)
        {

            var sp = "sp_TableBooking";
            var param = new
            {
                TableBookingId = 0, // Initialize as 0 for OUTPUT parameter
                TableId = bookingTable.TableId,
                UserId = bookingTable.UserId,
                People = bookingTable.People,
                Email = bookingTable.Email,
                BookingTime = bookingTable.BookingTime,
                description = bookingTable.description,
                Status = bookingTable.Status,
            };

           

            try
            {

                result result =await  dapperService.GetAsync<result>( sp, param);
               var returnedTableBookingId = result.TableBookingId;
                    
                var returnedEmail = result.Email;
               string bookingEmail = returnedEmail;
              string subject = "Table Booking";
             string body = $"Dear Valued Customer,\n\nWe are delighted to inform you that your table has been successfully booked. Your Booking ID is: {returnedTableBookingId}.\n\nWe look forward to serving you and providing an unforgettable dining experience. If you have any special requests or questions, feel free to reach out to us.\n\nThank you for choosing us. We appreciate your trust and can't wait to welcome you!\n\nBest regards,\nThe RetroReserve Team";

                emailSenderService.SendEmail(bookingEmail, subject, body);
                return 1;
            }
            catch (Exception ex)
            {
                Console.WriteLine("Error sending email");
                return 0;
            }
        }



        public int DeleteBookTable(int id)
        {
            throw new NotImplementedException();
        }

        public BookingTable GetBookTableById(int CartValueID)
        {
            throw new NotImplementedException();
        }

        public IEnumerable<BookingTable> GetBookTableList()
        {
            throw new NotImplementedException();
        }

        public BookingTableVM GetTabledetailsList()
        {
            var sp = "sp_GetTabledetails";
            BookingTableVM bookingTableVM = new BookingTableVM();
            bookingTableVM.tablesDetails = (IEnumerable<TablesDetails>)dapperService.GetAll<TablesDetails>(sp);
            return bookingTableVM;
        }

        public Task<int> UpdateTable(BookingTable cartValue)
        {
            throw new NotImplementedException();
        }
    }
}
