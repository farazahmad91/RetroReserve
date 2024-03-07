using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Principal;
using System.Text;
using System.Threading.Tasks;
using System.Xml.Linq;

namespace Entities
{
    public class Reviews
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
    public class AppReviews
    {
        public int AReviewId { get; set; }
        public string? UserID { get; set; }
        public string? Name { get; set; }
        public string? Comment { get; set; }
        public int Rating { get; set; }
        public int Status { get; set; }
        public DateTime AReviewDate { get; set; }
    }

    public class DboyReview
    {
        public int DboyRId { get; set; }
        public int DboyId { get; set; }
        public string? Comment { get; set; }
        public int Rating { get; set; }
        public int Status { get; set; }
        public int OrderId { get; set; }
        public string? Email { get; set; }
        public DateTime ReviewOn { get; set; }
    }
}