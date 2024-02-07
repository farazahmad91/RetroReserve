using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Entities
{
    public class orders
    {

        public int OrderDetailID { get; set; }
        public int TableId { get; set; }
        public string? UserId { get; set; }
		public int OrderID { get; set; }
        public int DishId { get; set; }
        public string? OrderDescription { get; set; }
        public int Quantity { get; set; }
        public string? DishQuantity { get; set; }
        public DateTime OrderDate { get; set; }
        public decimal TotalAmount { get; set; }
        public int Status { get; set; }
        public string? DeliverDate { get; set; }
    }
    
    public class OnlineOrdersReport : orders
    {
        public string? DishName { get; set; }
        public string? DishImage { get; set; }
        public int Total_Orders { get; set; }
        public string? Month { get; set; }
        public string? TotalOrder { get; set; }

    }
    public class BookingTables: OnlineOrdersReport
    {
        public int TableBookingId { get; set; }
        public int People { get; set; }
        public string? Email { get; set; }
        public string? BookingTime { get; set; }
        public string? description { get; set; }
        public DateTime BookingOn { get; set; }
    }
}

