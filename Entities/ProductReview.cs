using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Entities
{
    public class ProductReview
    {
        public int ReviewId { get; set; }
        public int DishId { get; set; }
        public string? UserID { get; set; }
        public string? Name { get; set; }
        public string? Email { get; set; }
        public string? Comment { get; set; }
        public int Rating { get; set; }
        public int Status { get; set; }
        public DateTime ReviewDate { get; set; }
    }
}
