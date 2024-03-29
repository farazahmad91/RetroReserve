﻿using Entities;

namespace API.Repository.Interface
{
    public interface IEventService
    {
        public Task<int> AddOrUpdateEvent(Event _event);
        public Task<Response> AddOrUpdateEventBooking(EventBooking eventBooking);
        public Event GetEventById(int id);
        public IEnumerable<Event> GetEventList();
        public IEnumerable<EventBooking> GetBookingEventList();
        public IEnumerable<EventBooking> NewBookingEventlist();
        public Task<int> UpdateEventStatus(Event _event);
        public EventBooking GetBookingEventById(int id);
        public int DeleteEvent(int id);
        public Task<int> UpdateBookingEventStatus(EventBooking eventBooking);
        public EventVM GetEventdetailsList();
        public EventVM GetEventPrice(int id);
        public IEnumerable<EventBooking> EventDetailsById(string email);


    }
}
