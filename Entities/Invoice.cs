using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Entities
{
    public class Invoice
    {
        public int InvoiceId { get; set; }
        public int OrderID { get; set; }
        public int CustName { get; set; }
        public int Mobile { get; set; }
        public int Email { get; set; }
        public int Address { get; set; }
        public int DishName { get; set; }
        public int Quantity { get; set; }
        public int DishPrize { get; set; }

    }
}
