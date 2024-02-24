using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Entities
{
    public class UserProfile
    {
        public int UId { get; set; }
        public string? Name { get; set; }
        public string? Email { get; set; }
        public string? Image { get; set; }
        public string? Password { get; set; }
        public string? BirthDay { get; set; }
        public string? Phone { get; set; }
        public DateTime Createdon { get; set; }
    }
}
