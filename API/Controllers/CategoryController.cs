using Microsoft.AspNetCore.Mvc;
using API.Repository.Interface;
using Entities;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CategoryController : ControllerBase
    {
        private readonly IDishCategorySevice dishCategorySevice;
        public CategoryController(IDishCategorySevice dishCategorySevice)
        {
            this.dishCategorySevice = dishCategorySevice;
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
        [HttpGet(nameof(GetDishCategoryListByPrizeWithCategory))]
        public IActionResult GetDishCategoryListByPrizeWithCategory(int id, decimal MinPrize, decimal MaxPrize)
        {
            var i = dishCategorySevice.GetDishCategoryListByPrizeWithCategory( id,MinPrize, MaxPrize);
            return Ok(i);

        }
        [HttpGet(nameof(GetDishCategoryListByPrize))]
        public IActionResult GetDishCategoryListByPrize(decimal MinPrize, decimal MaxPrize)
        {
            var i = dishCategorySevice.GetDishCategoryListByPrize(MinPrize, MaxPrize);
            return Ok(i);

        }
    }
}
