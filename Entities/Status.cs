using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Entities
{
    public class Status
    {
        public int TotalEarning { get; set; }
        public int TotalOrder { get; set; }
        public int NewOrder { get; set; }
        public int TotalEmployee { get; set; }
        public int DeliverdOrder { get; set; }
        public int NewOrders { get; set; }
        public int NewMessage { get; set;}
        public string NewMessageDate { get; set; }

    }
 }
