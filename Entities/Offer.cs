using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Entities
{
    public class Offer
    {
        public int OfferId { get; set; }

        public string? OfferName { get; set; }
        public string? OfferImage { get; set; }
                     
        public string? Description { get; set; }
                     
        public string? ValidUpto { get; set; }
        public string? Discount { get; set; }
        public int Status { get; set; }
    }
    public class Coupan
    {
        public int CoupanId { get; set; }

        public string? CoupanName { get; set; }

        public string? Description { get; set; }

        public string? ValidUpto { get; set; }
        public int DiscountPercentage { get; set; }

        public int IsActive { get; set; } = 1;
    }
}
