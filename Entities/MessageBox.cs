using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Entities
{
    public class MessageBox
    {
        public int MessageId { get; set; }
        public string? Email { get; set; }
        public string? Subject { get; set; }
        public string? Description { get; set; }
        public string? SentDate { get; set; }
        public DateTime SentEmailDate { get; set; }
        public int Status { get; set; }
    }
}
