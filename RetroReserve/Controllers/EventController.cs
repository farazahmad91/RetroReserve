using Entities;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using RetroReserve.Models;
using System.Security.Claims;

namespace RetroReserve.Controllers
{
    public class EventController : Controller
    {
        private readonly IWebHostEnvironment webHostEnvironment;
        private readonly UploadImage uploadImage;
        private readonly APIrequest apirequest;
        public EventController(APIrequest apirequest, IWebHostEnvironment webHostEnvironment, UploadImage uploadImage)
        {
            this.apirequest = apirequest;
            this.webHostEnvironment = webHostEnvironment;
            this.uploadImage = uploadImage;
        }
        public ActionResult EventIndex()
        {
            return View();
        }
        public async Task<ActionResult> Eventlist()
        {
            var i = await apirequest.GetData<List<Event>>("Event/GetEventList");
            return PartialView(i);
        }

        public async Task<ActionResult> BookingEventlist()
        {
            var i = await apirequest.GetData<List<EventBooking>>("Event/GetBookingEventList");
            return View(i);
        }
        public async Task<ActionResult> NewBookingEventlist()
        {
            var i = await apirequest.GetData<List<EventBooking>>("Event/NewBookingEventlist");
            return View(i);
        }

        // GET: EventController/Details/5
        public async Task<ActionResult> EditEvent(int id)
        {
            var i = await apirequest.GetData<Event>(($"Event/GetEventById?id={id}"));
            return PartialView(i);
        }
        public async Task<ActionResult> AddOrUpdateEvent(Event _event, IFormFile ImagePath)
        {
            _event.eventImage = uploadImage.Image(ImagePath, webHostEnvironment.WebRootPath);
            var i = await apirequest.Post("Event/AddOrUpdateEvent", _event);
            return Json(i);
        }
        [Route("/Event")]
        public async Task<ActionResult> Event()
        {
            var i = await apirequest.GetData<EventVM>("Event/GetEventdetailsList");
            return View(i);
        }
        public async Task<ActionResult> BookingEvent(EventBooking eventBooking)
        {
            var email = User.FindFirstValue(ClaimTypes.Email);
            var name = User.FindFirstValue(ClaimTypes.Name);
            eventBooking.UserID = email;
            eventBooking.UserName = name;
            var i = await apirequest.Post("Event/AddOrUpdateEventBooking", eventBooking);
            return Json(i);
        }

        public async Task<ActionResult> UpdateBookingEventStatus(EventBooking eventBooking)
        {
            var i = await apirequest.Post("Event/UpdateBookingEventStatus", eventBooking);
            return Json(i);
        }
        public async Task<ActionResult> EventStatusUpdate(Event _event)
        {
            var i = await apirequest.Post("Event/UpdateEventStatus", _event);
            return Json(i);
        }

    
        public ActionResult Delete(int id)
        {
            return View();
        }
		public async Task<ActionResult> EventPrice(int id)
		{
			var i = await apirequest.GetData<Event>(($"Event/GetEventPrice?id={id}"));
			return Json(i);
		}
	}
}
