using Entities;

namespace API.Repository.Interface
{
    public interface IBookingTableService
    {
        public Task<int> BookTable(BookingTable bookingTable);
        public BookingTable GetBookTableById(int CartValueID);
        public IEnumerable<BookingTable> GetBookTableList();
        public BookingTableVM GetTabledetailsList();
        public int DeleteBookTable(int id);
        public Task<int> UpdateTable(BookingTable cartValue);
    }


}

