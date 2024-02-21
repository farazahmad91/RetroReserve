using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Entities
{
    public class Cart : DynamicCartValue
    {

        public int CartId { get; set; }
        public string UserID { get; set; }
        public int Id { get; set; }
        public int Quantity { get; set; }
        public DateTime CreatedAt { get; set; }

    }
    public class CartQTY
    {
        public int CartId { get; set; }
        public int Quantity { get; set; }
    }
    public class DynamicCartValue
    {
        public int Status { get; set; }
        public string? message { get; set; }
        public string? DishImage { get; set; }
        public string? DishName { get; set; }
        public string? DishQuantity { get; set; }
        public int SellingCost { get; set; }

    }
}
