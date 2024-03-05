using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Entities
{
    public class FAQ
    {
        public int FAQId { get; set; }
        public string? Quest { get; set; }
        public string? Answers { get; set; }
        public int Status { get; set; }
        public DateTime CreatedOn { get; set; }
    }
}
