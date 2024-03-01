using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Entities
{
    public class Offer
    {
    }
    public class Coupan
    {
        public int CoupanId { get; set; }

        public string CoupanName { get; set; }

        public string Description { get; set; }

        public string ValidUpto { get; set; }
        public int DiscountPercentage { get; set; }

        public int IsActive { get; set; } = 1;
    }
}
