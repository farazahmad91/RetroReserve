using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Entities
{
    public class Event
    {
        public int eventID { get; set; }
        public string? eventName { get; set; }
        public string? eventImage { get; set; }
        public decimal eventPrice { get; set; }
        public decimal eventOffPrice { get; set; }
        public string? eventLocation { get; set; }
        public string? eventOrganizer { get; set; }
        public int eventStatus { get; set; }
        public DateTime CreatedDate { get; set; }

    }
    public class EventBooking : Event
    {
        public int eventBookingId { get; set; }
        public string? UserID { get; set; }
        public string? UserName { get; set; }
        public string? PhoneNo { get; set; }
        public int TotalGuest { get; set; }
        public string? BPersonName { get; set; }
        public string? WCoupleName { get; set; }
        public string? ACoupleName { get; set; }
        public string? eventDate { get; set; } 
        public string? eventTime { get; set; }
        public int eventBookingStatus { get; set; }
        public DateTime eventCreateDate { get; set; }
        public string? BookingDate { get; set; }
        public string? eventCompleteDate { get; set; }
    }
}
