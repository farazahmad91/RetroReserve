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

        [HttpPost(nameof(SaveOrUpdateTable))]
        public async Task<IActionResult> SaveOrUpdateTable(BookingTableVM2 bookingTable)
        {
            var i =await bookingTableService.SaveOrUpdateTable(bookingTable);
            return Ok(i);   
        }

        [HttpGet(nameof(GetByIdTable)+"/{Id}")]
        public async Task<IActionResult> GetByIdTable(int Id)
        {
            var i = await bookingTableService.GetByIdTable(Id);
            return Ok(i);
        }
        [HttpGet(nameof(AllTable))]
        public async Task<IActionResult> AllTable()
        {
            var i = await bookingTableService.AllTable();
            return Ok(i);
        }

        [HttpPost(nameof(ChangeStatusTable))]
        public async Task<IActionResult> ChangeStatusTable(BookingTableVM2 bookingTable)
        {
            var i = await bookingTableService._ChangeStatusTable(bookingTable);
            return Ok(i);
        }


        [HttpPost(nameof(TableBookByUser))]
        public async Task<IActionResult> TableBookByUser(BookingTableByUser bookingTable)
        {
            var i = await bookingTableService.TableBookByUser(bookingTable);
            return Ok(i);
        }

        [HttpGet(nameof(AllOnlineTable))]
        public async Task<IActionResult> AllOnlineTable()
        {
            var i = await bookingTableService.AllBookedTable();
            return Ok(i);
        }

        [HttpPost(nameof(UpdateStatusBookedTable)+"/{BookingId}")]
        public async Task<IActionResult> UpdateStatusBookedTable(int BookingId)
        {
            var i = await bookingTableService.UpdateStatusBookedTable(BookingId);
            return Ok(i);
        }

        [HttpGet(nameof(BookingDetails))]
        public IActionResult BookingDetails()
        {
            var i =  bookingTableService.BookingDetails();
            return Ok(i);
        }

        [HttpGet(nameof(DetailsOnSearch))]
        public IActionResult DetailsOnSearch(int id)
        {
            var i = bookingTableService.DetailsOnSearch(id);
            return Ok(i);
        }

        [HttpGet(nameof(BookingDetailsById))]
        public IActionResult BookingDetailsById(string email)
        {
            var i = bookingTableService.BookingDetailsById(email);
            return Ok(i);
        }
    }
}
