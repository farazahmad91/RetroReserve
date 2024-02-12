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
        public int UserID { get; set; }
        public int Name { get; set; }
        public int Email { get; set; }
        public int Comment { get; set; }
        public int Rating { get; set; }
        public int ReviewDate { get; set; }
    }
}
