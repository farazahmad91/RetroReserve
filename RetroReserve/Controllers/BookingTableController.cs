using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using RetroReserve.Models;
using Entities;

namespace RetroReserve.Controllers
{
    [Authorize]
    public class BookingTableController : Controller
    {
        private readonly APIrequest apirequest;
        public BookingTableController(APIrequest apirequest)
        {
            this.apirequest = apirequest;
        }
     
        public async Task<ActionResult> BookTable()
        {
            var i = await apirequest.GetData<BookingTableVM>("BookingTable/GetTabledetailsList");
            return View(i);
        }
      
        public async Task<ActionResult> BookingTable(BookingTable bookingTable)
        {
            var i = await apirequest.Post("BookingTable/BookTable", bookingTable);
            return Json(i);
        }
    }
}
