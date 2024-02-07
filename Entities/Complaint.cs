using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Entities
{
    public class Complaint
    {
        public int ComplaintId { get; set; }
        public int TableId { get; set; }
        public int CustId { get; set; }
        public string? ComplaintType { get; set; }
        public string? Email { get; set; }
        public string? ComplaintDescription { get; set; }
        public DateTime ComplaintDate { get; set; }
        public int Status { get; set; }
    }
}
