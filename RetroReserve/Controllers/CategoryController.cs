using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using RetroReserve.Models;
using Entities;
using System.Security.Claims;

namespace RetroReserve.Controllers
{
   
    public class CategoryController : Controller
    {
        private readonly APIrequest apirequest;
        public CategoryController(APIrequest apirequest)
        {
            this.apirequest = apirequest;
        }
        
        public async Task<ActionResult> Category()
        {
            var i = await apirequest.GetData<IEnumerable<DishCategory>>("Category/GetdishcategoryList");
            return PartialView(i);
        }
        
        public async Task<ActionResult> AllDishCategoryList(int DishCategoryId)
        {
            var i = await apirequest.GetData<List<Foodkart>>($"Category/GetDishByCategoryId?id={DishCategoryId}");
            return PartialView(i);
        }

        public async Task<ActionResult> UpdateCategoryStatus(DishCategory dishCategory)
        {
            var i = await apirequest.Post("Category/UpdateCategoryStatus", dishCategory);
            return Json(i);
        }
        public async Task<ActionResult> MenuQty(int DishId)
        {
            var i = await apirequest.GetData<List<Foodkart>>($"Category/GetDishVarientListByDishId?id={DishId}");
            return PartialView(i);
        }
    
        public async Task<ActionResult> DishOnSearch(string name)
        {
            var i = await apirequest.GetData<IEnumerable<Foodkart>>($"Category/GetFoodOnSearch?name={name}");
            return PartialView(i);
        }
        public async Task<ActionResult> DishOnPrize(decimal price)
        {
            var i = await apirequest.GetData<IEnumerable<Foodkart>>($"Category/GetDishByPrize?price={price}");
            return PartialView(i);
        }

        public async Task<ActionResult> SpecialDish()
        {
            var i = await apirequest.GetData<IEnumerable<Foodkart>>("Category/SpecialDish");
            return PartialView(i);
        }

        public async Task<ActionResult> RecentView()
        {
            var email = User.FindFirstValue(ClaimTypes.Email);
            var i = await apirequest.GetMultipleDataById<List<Foodkart>>("Category/GetDishCategoryListByPrize", email);
            return PartialView(i);
        }
        public async Task<IActionResult> Itemdetail(int id)
        {
            var i = await apirequest.GetData<Foodkart>($"Foodkart/GetDishDetailById?id={id}");
            return View(i);
        }
        public async Task<ActionResult> AddRecentViewDetail(Foodkart foodkart)
        {
            var i = await apirequest.Post("Category/AddRecentViewDetail", foodkart);
            return PartialView(i);
        }
        public async Task<ActionResult> AddOrUpdateDishCategory(DishCategory dishcategory)
        {
            var i = await apirequest.Post("Category/AddOrUpdateDishCategory", dishcategory);
            return Json(i);
        }

        public async Task<ActionResult> CategoryList()
        {
            var i = await apirequest.GetData<List<DishCategory>>(("Category/GetdishcategoryList"));
            return View(i);
        }
        public async Task<ActionResult> AddDishCategoryMenu(int DishCategoryId)
        {
            var i = await apirequest.GetData<DishCategory>(($"Category/GetDishCategoryById?Id={DishCategoryId}"));
            return PartialView(i);
        }
    }
}

