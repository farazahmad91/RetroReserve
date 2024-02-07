using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Text;
using System.Threading.Tasks;

namespace Entities
{
    public class HttpResponse
    {
        public HttpStatusCode HttpStatusCode { get; set; }
        public string HttpMessage { get; set; }
        public string Result { get; set; }
    }
}
