using API.Repository.Interface;
using Entities;
using Microsoft.AspNet.Identity;
using Microsoft.Extensions.Logging;
using System.Security.Claims;
using System.Web.Providers.Entities;

namespace API.Repository.Impliments
{
    public class EventService : IEventService
    {
        string occasions;
        private readonly IDapperService dapper;
        public readonly IEmailSenderService _emailSenderService;
        public EventService(IDapperService dapper, IEmailSenderService emailSenderService)
        {
            this.dapper = dapper;
            _emailSenderService = emailSenderService;
        }
        public async Task<int> AddOrUpdateEvent(Event _event)
        {
            var sp = "sp_AddOrUpdateEvent";
            var param = new { 
                eventID = _event.eventID,
                eventName= _event.eventName,
                eventImage= _event.eventImage,
                eventPrice= _event.eventPrice,
                eventOffPrice= _event.eventOffPrice,
                eventLocation= _event.eventLocation,
                eventOrganizer= _event.eventOrganizer,
                eventStatus= _event.eventStatus,
            };
            var i = await dapper.Insert(param, sp);

            return i;
        }

        public int DeleteEvent(int id)
        {
            var sp = "sp_DeleteEmployee";
            var param = new
            {
                EmpId = id,
            };
            return dapper.Delete(param, sp);
        }

        public Event GetEventById(int id)
        {
            var sp = "sp_GetEventById";
            var param = new
            {
                eventID = id
            };

            var res = dapper.GetById<Event>(param, sp);
            return res;
        }

        public EventBooking GetBookingEventById(int id)
        {
            var sp = "sp_GetBookingEventById";
            var param = new
            {
                eventBookingId = id
            };

            var res = dapper.GetById<EventBooking>(param, sp);
            return res;
        }

        public IEnumerable<Event> GetEventList()
        {
            var sp = "sp_GetEvent";
            var i =  dapper.GetAll<Event>(sp);
            return i;
        }
        public IEnumerable<EventBooking> GetBookingEventList()
        {
            var sp = "sp_GetEventBooking";
            var i = dapper.GetAll<EventBooking>(sp);
            return i;
        }
        public IEnumerable<EventBooking> NewBookingEventlist()
        {
            var sp = "sp_GetNewEventBooking";
            var i = dapper.GetAll<EventBooking>(sp);
            return i;
        }
        public async Task<int> UpdateEventStatus(Event _event)
        {
            var sp = "sp_UpdateEventStatus";
            var param = new
            {
                eventID = _event.eventID,
                eventStatus = _event.eventStatus,
            };
            var i = await dapper.Insert(param, sp);
            return i;
        }
        public async Task<int> AddOrUpdateEventBooking(EventBooking eventBooking)
        {
            var sp = "sp_AddOrUpdateEventBooking";
            var param = new
            {
              eventBookingId= eventBooking.eventBookingId,
              UserID= eventBooking.UserID,
              eventID= eventBooking.eventID,
              UserName= eventBooking.UserName,
              PhoneNo= eventBooking.PhoneNo,
              TotalGuest= eventBooking.TotalGuest,
              BPersonName= eventBooking.BPersonName,
              CoupleName = eventBooking.CoupleName,
              eventDate= eventBooking.eventDate,
              eventTime= eventBooking.eventTime,
              eventPrice= eventBooking.eventPrice,
              eventBookingStatus = eventBooking.eventBookingStatus,
              eventCompleteDate= eventBooking.eventCompleteDate,
            };
            var i = await dapper.Insert(param, sp);
            if(i == 1)
            {
                switch (eventBooking.eventID)
                {
                    case 1:
                        occasions = "Birthday Celebration";
                        break;

                    case 2:
                        occasions = "Wedding Ceremony";
                        break;

                    case 3:
                        occasions = "Wedding Anniversary Commemoration";
                        break;
                }
                string Email = eventBooking.UserID;
                string subject = "Confirmation of Event Booking";
                string body = $"Dear {eventBooking.UserName},\n\nWe are pleased to inform you that your reservation for the {occasions} Event at our establishment has been successfully confirmed. Your Booking ID is: {eventBooking.eventBookingId}, and the event is scheduled for: {eventBooking.eventDate}.\n\nWe eagerly anticipate the opportunity to provide you with an exceptional dining experience. Should you have any specific requests or queries, please feel free to reach out to us.\n\nThank you for choosing our services. Your trust is greatly appreciated, and we look forward to welcoming you!\n\nKind regards,\nThe RetroReserve Team";
                _emailSenderService.SendEmail(Email,subject, body);
            }
            return i;
        }
        public async Task<int> UpdateBookingEventStatus(EventBooking eventBooking)
        {
            var sp = "sp_UpdateBookingEventStatus";
            var param = new
            {
                eventBookingId = eventBooking.eventBookingId,
                eventBookingStatus = eventBooking.eventBookingStatus,
                eventCompleteDate= DateTime.Now,
            };
            string Email = eventBooking.UserID;
            string subject = "";
            string body = "";

            switch (eventBooking.eventID)
            {
                case 1:
                    occasions = "Birthday Celebration";
                    break;

                case 2:
                    occasions = "Wedding Ceremony";
                    break;

                case 3:
                    occasions = "Wedding Anniversary Commemoration";
                    break;
            }



            switch (eventBooking.eventBookingStatus)
            {
                case 1:
                    subject = "Confirmation of Event Booking";
                    body = $"Dear {eventBooking.UserName},\n\nWe are pleased to inform you that your reservation for the {occasions} Event at our establishment has been successfully confirmed. Your Booking ID is: {eventBooking.eventBookingId}, and the event is scheduled for: {eventBooking.eventDate}.\n\nWe eagerly anticipate the opportunity to provide you with an exceptional dining experience. Should you have any specific requests or queries, please feel free to reach out to us.\n\nThank you for choosing our services. Your trust is greatly appreciated, and we look forward to welcoming you!\n\nKind regards,\nThe RetroReserve Team";
                    break;

                case 2:
                    subject = "Completion Notification for Your Event";
                    body = $"Dear {eventBooking.UserName},\n\nWe are thrilled to share the delightful news that your {occasions} Event was successfully concluded on: {DateTime.Now}.\n\nAt RetroReserve, we take pride in delivering an exceptional event experience, with your satisfaction being our top priority. Should you have any specific requests or inquiries, please do not hesitate to contact us.\n\nWe genuinely appreciate your choice in selecting our services, and we express our gratitude for the trust you have placed in us. We eagerly look forward to the opportunity of welcoming you back to create more memorable moments.\n\nThank you for choosing RetroReserve. Your satisfaction is our ultimate success!\n\nWarm regards,\nThe RetroReserve Team";
                    break;
            }


            _emailSenderService.SendEmail(Email, subject, body);

            var i = await dapper.Insert(param, sp);

            return i;
        }
        public EventVM GetEventdetailsList()
        {
            var sp = "sp_GetEvent";
            EventVM eventVM = new EventVM();
            eventVM.EventDetails = (IEnumerable<Event>)dapper.GetAll<Event>(sp);
            return eventVM;
        }

		public EventVM GetEventPrice(int id)
		{
			var sp = "sp_GetEventPrice";
			var param = new
			{
				eventID = id,
			};
			var i = dapper.GetById<EventVM>(param, sp);
			return i;
		}
	}
}
