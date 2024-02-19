using Entities;

namespace API.Repository.Interface
{
    public interface IBookingTableService
    {
        public Task<Data.Response> SaveOrUpdateTable(BookingTableVM2 bookingTable);
        public Task<BookingTableVM2> GetByIdTable(int Id);
        public Task<IEnumerable<BookingTableVM2>> AllTable();
        public Task<Data.Response> _ChangeStatusTable(BookingTableVM2  bookingTableVM);


    }


}

