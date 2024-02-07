using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Entities
{
    public class Contact
    {
        public int ContactId { get; set; }
        public string? UserName { get; set; }
        public string? Email { get; set; }
        public string? subject { get; set; }    
        public string? Comment { get; set; }
        public DateTime ContactDate { get; set; }
        public int status { get; set; }
        public string? ProblemSolveDate { get; set; }
    }
}
