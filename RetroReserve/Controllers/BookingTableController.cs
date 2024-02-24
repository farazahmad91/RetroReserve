using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using RetroReserve.Models;
using Entities;
using Microsoft.AspNetCore.Hosting;
using Newtonsoft.Json;
using Entities.Extension;

namespace RetroReserve.Controllers
{
   
    public class BookingTableController : Controller
    {

        private readonly IWebHostEnvironment webHostEnvironment;
        private readonly UploadImage uploadImage;
        private readonly APIrequest apirequest;
        public BookingTableController(APIrequest apirequest,IWebHostEnvironment webHostEnvironment,UploadImage uploadImage)
        {
            this.apirequest = apirequest;
            this.webHostEnvironment = webHostEnvironment;
            this.uploadImage = uploadImage;
        }
        //[Route("/TableBooking")]
        public async Task<ActionResult> BookTable()
        {
            var list = await apirequest.GetData<List<BookingTableVM2>>("BookingTable/AllTable");
            return View(list);
        }

        public IActionResult Index()
        {
            return View();
        }

        public IActionResult BookTableSchedule()
        {
            return PartialView();
        }
       
        public async Task<IActionResult> BookingTable()
        {
            var list = await apirequest.GetData<List<BookingTableVM2>>("BookingTable/AllTable");
            return PartialView(list);
        }
         public async Task<IActionResult> AddOrEditTable(int Id)
        {
            var res = await apirequest.GetData<BookingTableVM2>($"BookingTable/GetByIdTable/{Id}");
            return PartialView(res);
        }
        public async Task<IActionResult> SaveOrUpdateTable(BookingTableVM2 bookingTable,IFormFile ImagePath)
        {

            bookingTable.Image = uploadImage.Image(ImagePath, webHostEnvironment.WebRootPath);
            var i = await apirequest.Post("BookingTable/SaveOrUpdateTable", bookingTable);
            var res =  JsonConvert.DeserializeObject<API.Data.Response>(i); 
            return Json(res);
        }

        public async Task<IActionResult>ChangeStatusTable(BookingTableVM2 bookingTable)
        {
            bookingTable.TableName="";
            bookingTable.Description="";
            bookingTable.Image="";
            var i = await apirequest.Post("BookingTable/ChangeStatusTable", bookingTable);

            var res = JsonConvert.DeserializeObject<API.Data.Response>(i);
            return Json(res);
        }

        public async Task<IActionResult> TableBookByUser(BookingTableByUser tableByUser)
        {
            
            var apiRes = await apirequest.Post("BookingTable/TableBookByUser", tableByUser);
            var res = JsonConvert.DeserializeObject<API.Data.Response>(apiRes);
            return Json(res);
        }

        public IActionResult OnlineTableBooking()
        {
            return View();
        }
        public async Task<IActionResult> AllTableBooking()
        {
            var list = await apirequest.GetData<List<BookingTableByUser>>("BookingTable/AllOnlineTable");
            return PartialView(list);
        }

        public IActionResult Details()
        {
            return View();
        }
        public async Task<IActionResult> BookingDetails()
        {
            var list = await apirequest.GetData<List<BookingTableByUser>>("BookingTable/BookingDetails");
            return PartialView(list);
        }
        public async Task<IActionResult> UpdateStatusBookedTable(int BookingId)
        {
            var res = new API.Data.Response();
            var apiRes = await apirequest.Post($"BookingTable/UpdateStatusBookedTable/{BookingId}",null);
            res = JsonConvert.DeserializeObject<API.Data.Response>(apiRes);
            return Json(res);
        }
    }
}
