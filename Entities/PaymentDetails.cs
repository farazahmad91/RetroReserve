using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Entities
{
    public class PaymentDetails
    {
        public int PaymentId { get; set; }
        public int OrderId { get; set; }
        public string? UserId { get; set; }
        public string? PaymentType { get; set; }
        public float Amount { get; set; }
        public string? PaymentOn { get; set; }
        public int Status { get; set; }
    }
}
