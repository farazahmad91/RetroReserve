using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Entities
{
    public class Address
    {
        public int AddressId { get; set; }
        public string? UserId { get; set; }
        public string? RecipientName { get; set; }
        public string? RecipientContact { get; set; }
        public string? StreetAddress { get; set; }
        public string? Landmark { get; set; }
        public string? State { get; set; }
        public string? City { get; set; }
        public string? PostalCode { get; set; }
        public DateTime CreatedAt { get; set; }
        public string? UpdatedAt { get; set; }
    }

    public class State
    {
        public int StateId { get; set; }
        public string? StateName { get; set; }
        public int Status { get; set; }
        public DateTime CreatedDate { get; set; }
    }

    public class City
    {
        public int CityId { get; set; }
        public int? StateId { get; set; }
        public string? CityName { get; set; }
        public int? Status { get; set; }
        public DateTime? CreatedDate { get; set; }
    }

    public class PostalCodes
    {
        public int PostalId { get; set; }
        public int PostalCode { get; set; }
        public int CityId { get; set; }
        public int Status { get; set; }
        public DateTime CreatedDate { get; set; }
    }
}
