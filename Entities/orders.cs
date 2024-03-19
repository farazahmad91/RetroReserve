using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Entities
{
    public class Orders
    {

        public int OrderDetailID { get; set; }
        public int AddressId { get; set; }
        public string? UserId { get; set; }
		public int OrderID { get; set; }
        public int DishId { get; set; }
        public int DboyId { get; set; }
        public string? OrderDescription { get; set; }
        public int Quantity { get; set; }
        public string? DishQuantity { get; set; }
        public string? ProcessedDate { get; set; }
        public DateTime OrderDate { get; set; }
        public decimal TotalAmount { get; set; }
        public int Status { get; set; }
        public int OTP { get; set; }
        public string? DeliverDate { get; set; }
    }
    
    public class OrdersReport : Orders
    {
        public string? DishName { get; set; }
        public string? DishCategoryName { get; set; }
        public string? VName { get; set; }
        public string? DishImage { get; set; }
        public int Total_Orders { get; set; }
        public string? Month { get; set; }
        public string? TotalOrder { get; set; }

    }
     public class DeliveredOrder :Employees
    {
        public int DeliveredOrderId { get; set; }
        public int OrderId { get; set; }
        public string? UserId { get; set; }
        public int EmpId { get; set; }
        public string? AssignOn { get; set; }
        public string? CommitionEarning { get; set; }
        public string? DeliveredOrCancelledOn { get; set; }
        public int Status { get; set; }
        public string? Email { get; set; }
        public string? cancellation_Reason { get; set; }
        public int NewOrderStatus { get; set; }
    }

}

