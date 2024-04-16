using Microsoft.AspNetCore.Mvc;
using API.Repository.Interface;
using Entities;
using Microsoft.AspNetCore.Mvc;
using API.Repository.Impliments;
using Microsoft.AspNetCore.Authorization;

namespace API.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class CategoryController : ControllerBase
    {
        private readonly IDishCategorySevice dishCategorySevice;
        public CategoryController(IDishCategorySevice dishCategorySevice)
        {
            this.dishCategorySevice = dishCategorySevice;
        }
        [HttpGet(nameof(GetDishCategoryById))]
        public IActionResult GetDishCategoryById(int Id)
        {
            var i = dishCategorySevice.GetDishCategoryById(Id);
            return Ok(i);

        }
        [HttpPost(nameof(AddOrUpdateDishCategory))]
        public IActionResult AddOrUpdateDishCategory(DishCategory dishCategory)
        {
            var i = dishCategorySevice.AddOrUpdateDishCategory(dishCategory);
            return Ok(i);

        }
        [HttpPost(nameof(UpdateCategoryStatus))]
        public IActionResult UpdateCategoryStatus(DishCategory dishCategory)
        {
            var i = dishCategorySevice.UpdateCategoryStatus(dishCategory);
            return Ok(i);

        }

        [HttpGet(nameof(GetDishByCategoryId))]
        public IActionResult GetDishByCategoryId(int id)
        {
            var i = dishCategorySevice.GetDishCategoryListById(id);
            return Ok(i);

        }
        [HttpGet(nameof(GetDishVarientListByDishId))]
        public IActionResult GetDishVarientListByDishId(int id)
        {
            var i = dishCategorySevice.GetDishVarientListByDishId(id);
            return Ok(i);

        }

        [HttpGet(nameof(GetDishVarientList))]
        public IActionResult GetDishVarientList()
        {
            var i = dishCategorySevice.GetDishVarientList();
            return Ok(i);

        }

        [HttpGet(nameof(GetDishCategoryListByPrizeWithCategory))]
        public IActionResult GetDishCategoryListByPrizeWithCategory(int id, decimal MinPrize, decimal MaxPrize)
        {
            var i = dishCategorySevice.GetDishCategoryListByPrizeWithCategory( id,MinPrize, MaxPrize);
            return Ok(i);

        }
        [HttpGet(nameof(GetDishByPrize))]
        public IActionResult GetDishByPrize(decimal price)
        {
            var i = dishCategorySevice.GetDishByPrize(price);
            return Ok(i);

        }
        [HttpGet(nameof(GetdishcategoryList))]
        public IActionResult GetdishcategoryList()
        {
            var i = dishCategorySevice.GetdishcategoryList();
            return Ok(i);

        }
        [HttpGet(nameof(GetFoodOnSearch))]
        public IActionResult GetFoodOnSearch(string name)
        {
            var i = dishCategorySevice.GetFoodOnSearch(name);
            return Ok(i);

        }

        [HttpGet(nameof(SpecialDish))]
        public IActionResult SpecialDish()
        {
            var i = dishCategorySevice.SpecialDish();
            return Ok(i);

        }
        [HttpGet(nameof(RelatedProducts))]
        public IActionResult RelatedProducts(int id)
        {
            var i = dishCategorySevice.RelatedProducts(id);
            return Ok(i);

        }
        [HttpPost(nameof(RecentView))]
        public IActionResult RecentView(RecentView recentView)
        {
            var i = dishCategorySevice.RecentView(recentView);
            return Ok(i);

        }

        [HttpGet(nameof(GetRecentView))]
        public IActionResult GetRecentView(string email)
        {
            var i = dishCategorySevice.GetRecentView(email);
            return Ok(i);

        }
    }
}
