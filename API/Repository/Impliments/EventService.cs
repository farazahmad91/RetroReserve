﻿using API.Repository.Interface;
using Entities;
using Microsoft.AspNet.Identity;
using Microsoft.Extensions.Logging;
using System.Collections.Generic;
using System.ComponentModel;
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
            var res = 0;
            try
            {
                var sp = "sp_AddOrUpdateEvent";
                var param = new
                {
                    eventID = _event.eventID,
                    eventName = _event.eventName,
                    eventImage = _event.eventImage,
                    eventDescription = _event.eventDescription,
                    eventPrice = _event.eventPrice,
                    eventOffPrice = _event.eventOffPrice,
                    eventLocation = _event.eventLocation,
                    eventOrganizer = _event.eventOrganizer,
                    eventStatus = _event.eventStatus,
                    totalPeople = _event.totalPeople,
                };
                var i = await dapper.Insert(param, sp);
                res = i;
                return i;
            }
            catch (Exception ex)
            {
                var error = new Response
                {
                    ClassName = GetType().Name,
                    FunctionName = "AddOrUpdateEvent",
                    ResponseText = ex.Message,
                    Proc_Name = "sp_AddOrUpdateEvent",
                };
                var _ = new ErrorLogService(dapper).Error(error);
                return res;
            }
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
            Event res = new Event();
            try
            {
                var sp = "sp_GetEventById";
                var param = new
                {
                    eventID = id
                };
                var i = dapper.GetById<Event>(param, sp);
                res = i;
                return i;
            }
            catch (Exception ex)
            {
                var error = new Response
                {
                    ClassName = GetType().Name,
                    FunctionName = "GetEventById",
                    ResponseText = ex.Message,
                    Proc_Name = "sp_GetEventById",
                };
                var _ = new ErrorLogService(dapper).Error(error);
                return res;
            }
        }

        public EventBooking GetBookingEventById(int id)
        {
            EventBooking res = new EventBooking();
            try
            {
                var sp = "sp_GetBookingEventById";
                var param = new
                {
                    eventBookingId = id
                };
                var i = dapper.GetById<EventBooking>(param, sp);
                res = i;
                return i;
            }
            catch (Exception ex)
            {
                var error = new Response
                {
                    ClassName = GetType().Name,
                    FunctionName = "GetBookingEventById",
                    ResponseText = ex.Message,
                    Proc_Name = "sp_GetBookingEventById",
                };
                var _ = new ErrorLogService(dapper).Error(error);
                return res;
            }
        }

        public IEnumerable<Event> GetEventList()
        {
            IEnumerable<Event> res = new List<Event>();
            try
            {
                var sp = "sp_GetEvent";
                var i = dapper.GetAll<Event>(sp);
                res = i;
                return i;
            }
            catch (Exception ex)
            {
                var error = new Response
                {
                    ClassName = GetType().Name,
                    FunctionName = "GetEventList",
                    ResponseText = ex.Message,
                    Proc_Name = "sp_GetEvent",
                };
                var _ = new ErrorLogService(dapper).Error(error);
                return res;
            }
        }
        public IEnumerable<EventBooking> GetBookingEventList()
        {
            IEnumerable<EventBooking> res = new List<EventBooking>();
            try
            {
                var sp = "sp_GetEventBooking";
                var i = dapper.GetAll<EventBooking>(sp);
                res = i;
                return i;
            }
            catch (Exception ex)
            {
                var error = new Response
                {
                    ClassName = GetType().Name,
                    FunctionName = "GetBookingEventList",
                    ResponseText = ex.Message,
                    Proc_Name = "sp_GetEventBooking",
                };
                var _ = new ErrorLogService(dapper).Error(error);
                return res;
            }
        }
        public IEnumerable<EventBooking> NewBookingEventlist()
        {
            IEnumerable<EventBooking> res = new List<EventBooking>();
            try
            {
                var sp = "sp_GetNewEventBooking";
                var i = dapper.GetAll<EventBooking>(sp);
                res = i;
                return i;
            }
            catch (Exception ex)
            {
                var error = new Response
                {
                    ClassName = GetType().Name,
                    FunctionName = "NewBookingEventlist",
                    ResponseText = ex.Message,
                    Proc_Name = "sp_GetNewEventBooking",
                };
                var _ = new ErrorLogService(dapper).Error(error);
                return res;
            }
        }
        public async Task<int> UpdateEventStatus(Event _event)
        {
            var res = 0;
            try
            {
                var sp = "sp_UpdateEventStatus";
                var param = new
                {
                    eventID = _event.eventID,
                    eventStatus = _event.eventStatus,
                };
                var i = await dapper.Insert(param, sp);
                res = i;
                return i;
            }
            catch (Exception ex)
            {
                var error = new Response
                {
                    ClassName = GetType().Name,
                    FunctionName = "UpdateEventStatus",
                    ResponseText = ex.Message,
                    Proc_Name = "sp_UpdateEventStatus",
                };
                var _ = new ErrorLogService(dapper).Error(error);
                return res;
            }
        }
        public async Task<Response> AddOrUpdateEventBooking(EventBooking eventBooking)
        {
            var res = new Response()
            {
                ResponseText = "Failed To Save",
                StatusCode = -1,
            };
            try
            {
                var sp = "sp_AddOrUpdateEventBooking";
                var param = new
                {
                    eventBookingId = eventBooking.eventBookingId,
                    UserID = eventBooking.UserID,
                    eventID = eventBooking.eventID,
                    UserName = eventBooking.UserName,
                    PhoneNo = eventBooking.PhoneNo,
                    TotalGuest = eventBooking.TotalGuest,
                    BPersonName = eventBooking.BPersonName,
                    CoupleName = eventBooking.CoupleName,
                    eventDate = eventBooking.eventDate,
                    eventTime = eventBooking.eventTime,
                    eventPrice = eventBooking.eventPrice,
                    eventBookingStatus = eventBooking.eventBookingStatus,
                    eventCompleteDate = eventBooking.eventCompleteDate,
                };
                res = await dapper.GetAsync<Response>(sp, param);
                if (res.StatusCode == 1)
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
                    string body = $"Dear {eventBooking.UserName},\n\nWe are pleased to inform you that your reservation for the {occasions} Event at our establishment has been successfully confirmed. Your Booking ID is: {res.OrderID}, and the event is scheduled for: {eventBooking.eventDate}.\n\n We eagerly anticipate the opportunity to provide you with an exceptional dining experience. Should you have any specific requests or queries, please feel free to reach out to us.\n\nThank you for choosing our services. Your trust is greatly appreciated, and we look forward to welcoming you!\n\nKind regards,\nThe RetroReserve Team";
                    _emailSenderService.SendEmail(Email, subject, body);
                }
                return res;
            }
            catch (Exception ex)
            {
                var error = new Response
                {
                    ClassName = GetType().Name,
                    FunctionName = "AddOrUpdateEventBooking",
                    ResponseText = ex.Message,
                    Proc_Name = "sp_AddOrUpdateEventBooking",
                };
                var _ = new ErrorLogService(dapper).Error(error);
                return res;
            }
        }
        public async Task<int> UpdateBookingEventStatus(EventBooking eventBooking)
        {
            var res = 0;
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
                    subject = "Completion Notification for Your Event";
                    body = $"Dear {eventBooking.UserName},\n\nWe are thrilled to share the delightful news that your  Event has been successfully done concluded on: {DateTime.Now}.\n\nAt RetroReserve, we take pride in delivering an exceptional event experience, with your satisfaction being our top priority. Should you have any specific requests or inquiries, please do not hesitate to contact us.\n\nWe genuinely appreciate your choice in selecting our services, and we express our gratitude for the trust you have placed in us. We eagerly look forward to the opportunity of welcoming you back to create more memorable moments.\n\nThank you for choosing RetroReserve. Your satisfaction is our ultimate success!\n\nWarm regards,\nThe RetroReserve Team";
            
            var i = await dapper.Insert(param, sp);
            if(i == 1) {
                _emailSenderService.SendEmail(Email, subject, body);
            }
            return i;
        }
        public EventVM GetEventdetailsList()
        {
            EventVM res = new EventVM();
            var sp = "sp_GetEvent";
            EventVM eventVM = new EventVM();
            eventVM.EventDetails = (IEnumerable<Event>)dapper.GetAll<Event>(sp);
            return eventVM;
        }

		public EventVM GetEventPrice(int id)
		{
            EventVM res = new EventVM();
            var sp = "sp_GetEventPrice";
			var param = new
			{
				eventID = id,
			};
			var i = dapper.GetById<EventVM>(param, sp);
			return i;
		}

        public IEnumerable<EventBooking> EventDetailsById(string email)
        {
            IEnumerable <EventBooking> res = new List<EventBooking>();  
            try
            {
                var sp = "sp_EventDetailsById";
                var param = new
                {
                    UserID = email,
                };
                var i = dapper.GetItemsById<EventBooking>(param, sp);
                res = i;
                return i;
            }
            catch (Exception ex)
            {
                var error = new Response
                {
                    ClassName = GetType().Name,
                    FunctionName = "EventDetailsById",
                    ResponseText = ex.Message,
                    Proc_Name = "sp_EventDetailsById",
                };
                var _ = new ErrorLogService(dapper).Error(error);
                return res;
            }
        }
    }
}
