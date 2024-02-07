using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using API.Repository.Interface;
using Entities;

namespace API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BookingTableController : ControllerBase
    {
        private readonly IBookingTableService bookingTableService;
        public BookingTableController(IBookingTableService bookingTableService)
        {
            this.bookingTableService = bookingTableService;
        }
        [HttpPost(nameof(BookTable))]
        public  IActionResult BookTable(BookingTable bookingTable)
        {
            var i =  bookingTableService.BookTable(bookingTable);
            return Ok(i);

        }
        [HttpGet(nameof(GetTabledetailsList))]
        public IActionResult GetTabledetailsList()
        {
            var i = bookingTableService.GetTabledetailsList();
            return Ok(i);

        }
    }
}
