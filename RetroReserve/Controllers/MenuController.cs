using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using RetroReserve.Models;
using Entities;

namespace RetroReserve.Controllers
{
   
    public class MenuController : Controller
    {
        private readonly IWebHostEnvironment webHostEnvironment;
        private readonly UploadImage uploadImage;
        private readonly APIrequest apirequest;
        public MenuController(APIrequest apirequest, IWebHostEnvironment webHostEnvironment, UploadImage uploadImage)
        {
            this.apirequest = apirequest;
            this.webHostEnvironment = webHostEnvironment;
            this.uploadImage = uploadImage;
        }
        [Authorize]
        [Route("/Menu")]
        public ActionResult MenuLoadData()
        {
            return View();
        }
        [Authorize]
        public async Task<ActionResult> AllItemList()
        {
            var i = await apirequest.GetData<List<Foodkart>>("Foodkart/GetFullDetailsFoodList");
            return PartialView(i);
        }
        [Authorize]
        public async Task<ActionResult> AddOrUpdateMenu(Foodkart foodkart, IFormFile ImagePath)
        {
            foodkart.DishImage = uploadImage.Image(ImagePath, webHostEnvironment.WebRootPath);
            var i = await apirequest.Post("Foodkart/AddOrUpdateFoodKart", foodkart);
            return Json(i);
        }
        [Authorize]
        public async Task<ActionResult> AddOrUpdateVariant(Foodkart foodkart, IFormFile ImagePath)
        {
            foodkart.DishImage = uploadImage.Image(ImagePath, webHostEnvironment.WebRootPath);
            var i = await apirequest.Post("Foodkart/AddOrUpdateVariant", foodkart);
            return Json(i);
        }
        [Authorize]
        public async Task<ActionResult> EditMenu(int DishId)
        {
            var i = await apirequest.GetData<Foodkart>(($"Foodkart/GetFoodkartById?Id={DishId}"));
            return PartialView(i);
        }
        public async Task<ActionResult> Recipe()
        {
            return View();
        }

        public async Task<ActionResult> UpdateFoodKartStatus(Foodkart foodkart)
        {
            var i = await apirequest.Post("Foodkart/UpdateFoodKartStatus", foodkart);
            return Json(i);
        }
       
        public async Task<ActionResult> Detail(int DishId)
        {
            var i = await apirequest.GetData<Foodkart>(($"Foodkart/GetFoodkartById?Id={DishId}"));
            return PartialView(i);
        }

        public async Task<ActionResult> EditVariant(int DishId)
        {
            var i = await apirequest.GetData<Foodkart>(($"Foodkart/GetFoodkartById?Id={DishId}"));
            return PartialView(i);
        }
        public async Task<ActionResult> AddVariant(int DishId)
        {
            var i = await apirequest.GetData<Foodkart>(($"Foodkart/GetFoodkartById?Id={DishId}"));
            return PartialView(i);
        }
        public ActionResult Menu()
        {
            return View();
        }
    }
}
