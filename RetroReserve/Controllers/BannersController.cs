using Entities;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using RetroReserve.Models;

namespace RetroReserve.Controllers
{
    public class BannersController : Controller
    {
        private readonly IWebHostEnvironment webHostEnvironment;
        private readonly UploadImage uploadImage;
        private readonly APIrequest _apirequest;
        public BannersController(IWebHostEnvironment webHostEnvironment, UploadImage uploadImage, APIrequest apirequest) 
        { 
            this.webHostEnvironment = webHostEnvironment; 
            this.uploadImage = uploadImage;
            this._apirequest = apirequest;
        }
        public async Task<IActionResult> BannerList()
        {
             var i = await _apirequest.GetData<List<Banners>>("Banners/GetbannerList");
            return View(i);
        }
        public async Task<IActionResult> EditBanner(int id)
        {
            var i = await _apirequest.GetData<Banners>($"Banners/BannersListById?id={id}");
            return PartialView(i);
        }
        public async Task<IActionResult> AddOrUpdateBanner(Banners banners, IFormFile ImagePath)
        {
            banners.BannerImage = uploadImage.Image(ImagePath, webHostEnvironment.WebRootPath);
            var i = await _apirequest.Post("Banners/AddorUpdateBanner", banners);
            var res = JsonConvert.DeserializeObject<Entities.Response>(i);
            return Json(res);
        }

        public async Task<IActionResult> UpdateStatus(Banners banners)
        {
            var i = await _apirequest.Post("Banners/UpdateBannerStatus", banners);
            return Json(i);
        }

        public async Task<IActionResult> ShowBanner()
        {

            var i = await _apirequest.GetData<List<Banners>>("Banners/ShowBanner");
            return PartialView(i);
        }
    }
}
