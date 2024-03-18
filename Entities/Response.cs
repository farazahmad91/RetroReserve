using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Entities
{
    public class Response
    {
        public int StatusCode { get; set; }
        public string? ResponseText { get; set; }
        public string? ClassName {  get; set; }
        public string? FunctionName { get; set; }
        public string? Proc_Name { get; set; }
        public int OrderID { get; set; }

    }

}
