using API.Data;
using API.Repository.Interface;
using Entities;

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
                res = await dapperService.GetAsync<Data.Response>("Proc_ChangeStatusTable", new
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
    }
}
