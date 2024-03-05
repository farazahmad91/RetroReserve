using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using RetroReserve.Models;
using Entities;

namespace RetroReserve.Controllers
{
    [Authorize]
    public class TeaKartController : Controller
    {
        private readonly IWebHostEnvironment webHostEnvironment;
        private readonly UploadImage uploadImage;
        private readonly APIrequest apirequest;
        public TeaKartController(APIrequest apirequest, IWebHostEnvironment webHostEnvironment, UploadImage uploadImage)
        {
            this.apirequest = apirequest;
            this.webHostEnvironment = webHostEnvironment;
            this.uploadImage = uploadImage;
        }
        public async Task<ActionResult> AddOrUpdateTeaKart(TeaKart teaKart, IFormFile ImagePath)
        {
            teaKart.TeaImage = uploadImage.Image(ImagePath);
            var i = await apirequest.Post("TeaKart/AddOrUpdateTeaKart", teaKart);
            return Json(i);
        }

        public async Task<ActionResult> EditTeaKart(int TeaId)
        {
            var i = await apirequest.GetData<TeaKart>(($"TeaKart/GetTeaKartById?Id={TeaId}"));
            return PartialView(i);
        }
        public async Task<ActionResult> AllTeaKartList()
        {
            var i = await apirequest.GetData<List<TeaKart>>("TeaKart/GetTeaKartList");
            return PartialView(i);
        }
        public async Task<ActionResult> UpdateTeaKartStatus(TeaKart teaKart)
        {
            var i = await apirequest.Post("TeaKart/UpdateTeaKartStatus", teaKart);
            return Json(i);
        }

        public async Task<ActionResult> TeaKartDisplayList()
        {
            var i = await apirequest.GetData<List<TeaKart>>("TeaKart/GetTeaKartList");
            return PartialView(i);
        }
    }
}
