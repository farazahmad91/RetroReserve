using API.Repository.Impliments;
using API.Repository.Interface;
using Entities;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EventController : ControllerBase
    {
        private readonly IEventService _eventService;
        public EventController(IEventService eventService)
        {
            this._eventService = eventService;
        }

        [HttpGet(nameof(GetEventList))]
        public IActionResult GetEventList()
        {
            var i = _eventService.GetEventList();
            return Ok(i);
        }

        [HttpGet(nameof(GetBookingEventList))]
        public IActionResult GetBookingEventList()
        {
            var i = _eventService.GetBookingEventList();
            return Ok(i);
        }
        [HttpGet(nameof(NewBookingEventlist))]
        public IActionResult NewBookingEventlist()
        {
            var i = _eventService.NewBookingEventlist();
            return Ok(i);
        }

        [HttpGet(nameof(GetEventById))]
        public IActionResult GetEventById(int id)
        {
            var i = _eventService.GetEventById(id);
            return Ok(i);
        }

        [HttpGet(nameof(GetBookingEventById))]
        public IActionResult GetBookingEventById(int id)
        {
            var i = _eventService.GetBookingEventById(id);
            return Ok(i);
        }

        [HttpPost(nameof(AddOrUpdateEvent))]
        public async Task<IActionResult> AddOrUpdateEvent(Event _event)
        {
            var i = await _eventService.AddOrUpdateEvent(_event);
            return Ok(i);
        }

        [HttpPost(nameof(AddOrUpdateEventBooking))]
        public async Task<IActionResult> AddOrUpdateEventBooking(EventBooking eventBooking)
        {
            var i = await _eventService.AddOrUpdateEventBooking(eventBooking);
            return Ok(i);
        }

        [HttpPost(nameof(UpdateEventStatus))]
        public async Task<IActionResult> UpdateEventStatus(Event _event)
        {
            var i = await _eventService.UpdateEventStatus(_event);
            return Ok(i);
        }


        [HttpDelete(nameof(DeleteEvent))]
        public IActionResult DeleteEvent(int id)
        {
            _eventService.DeleteEvent(id);
            return Ok();
        }
        [HttpPost(nameof(UpdateBookingEventStatus))]
        public async Task<IActionResult> UpdateBookingEventStatus(EventBooking eventBooking)
        {
            var i = await _eventService.UpdateBookingEventStatus(eventBooking);
            return Ok(i);
        }
    }
}
