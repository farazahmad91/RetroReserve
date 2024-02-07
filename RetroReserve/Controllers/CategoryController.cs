using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using RetroReserve.Models;
using Entities;

namespace RetroReserve.Controllers
{
   
    public class CategoryController : Controller
    {
        private readonly APIrequest apirequest;
        public CategoryController(APIrequest apirequest)
        {
            this.apirequest = apirequest;
        }
        
        public ActionResult Category()
        {
            return View();
        }
        
        public async Task<ActionResult> AllDishCategoryList(int DishCategoryId)
        {
            var i = await apirequest.GetMultipleDataById<List<Foodkart>>("Category/GetDishByCategoryId", DishCategoryId);
            return PartialView(i);
        }

        public async Task<ActionResult> MenuQty(int DishId)
        {
            var i = await apirequest.GetMultipleDataById<List<Foodkart>>("Category/GetDishVarientListByDishId", DishId);
            return PartialView(i);
        }
    
        public async Task<ActionResult> ListByPrizeWithCategory(int DishCategoryId, decimal MinPrize, decimal MaxPrize)
        {
            var i = await apirequest.GetMultipleParameter<List<Foodkart>>("Category/GetDishCategoryListByPrizeWithCategory", DishCategoryId, MinPrize, MaxPrize);
            return PartialView(i);
        }
        //public async Task<ActionResult> ListByPrize(decimal MinPrize, decimal MaxPrize)
        //{
        //    var i = await apirequest.GetMultipleDataById<List<Foodkart>>("Category/GetDishCategoryListByPrize", MinPrize, MaxPrize);
        //    return PartialView(i);
        //}

    }
}

