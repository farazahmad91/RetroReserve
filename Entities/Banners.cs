using Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Entities
{
    public class Banners
    {
        public int BannerId { get; set; }
        public string? BannerName { get; set; }
        public string? BannerImage { get; set; }
        public string? Description { get; set; }
        public string? Offer { get; set; }
        public string? ProductLink { get; set; }
        public int Status { get; set; }
        public DateTime AddOn { get; set; }
        public string? UpdateOn { get; set; }
    }
}
