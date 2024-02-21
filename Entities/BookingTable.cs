using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Entities
{
    public class BookingTable
    {
        public int TableBookingId { get; set; }
        public int TableId { get; set; }
        public string? UserId { get; set; }
        public int People { get; set; }
        public string? Email { get; set; }
        public string? BookingTime { get; set; }
        public string? description { get; set; }
        public int Status { get; set; }
        public DateTime BookingOn { get; set; }
    }
    public class BookingTableVM : BookingTable
    {
        public IEnumerable<TablesDetails> tablesDetails { get; set; }

        public IEnumerable<BookingTable> BookTable { get; set; }
    }

    public class BookingTableVM2
    {
        public int TableId { get; set; }

        public string TableName { get; set; }

        public string Image { get; set; }

        public string Description { get; set; }
        public int IsActive { get; set; }
    }

    public class BookingTableByUser
    {
        public int? BookingId { get; set; }
        public int TableId { get; set;}

        public int NoOfPeople { get; set; }
        public string BookingDate { get; set; }

        public string BookingTime { get; set; }

        public string Email { get; set; }
        public string  Name { get; set; }

        public string? Entryon{ get; set; }
    }

   
}



