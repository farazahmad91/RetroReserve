using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Entities
{
    public class EmployeeRoleMaster
    {
        public int RoleId { get; set; }
        public string? RoleName { get; set; }
        public DateTime CreateDate { get; set; }
        public int Status { get; set; }
    }
}
