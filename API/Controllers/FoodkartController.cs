using Microsoft.AspNetCore.Mvc;
using API.Repository.Interface;
using Entities;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class FoodkartController : ControllerBase
    {
        private readonly IFoodKartService foodKartService;
        public FoodkartController(IFoodKartService foodKartService)
        {
             this.foodKartService = foodKartService;
        }
        [HttpPost(nameof(AddOrUpdateFoodKart))]
        public async Task<IActionResult> AddOrUpdateFoodKart(Foodkart foodkart)
        {
            var i = await foodKartService.AddOrUpdateFoodKart(foodkart);
            return Ok(i);

        }
        [HttpPost(nameof(AddOrUpdateVariant))]
        public async Task<IActionResult> AddOrUpdateVariant(Foodkart foodkart)
        {
            var i = await foodKartService.AddOrUpdateVariant(foodkart);
            return Ok(i);

        }
        [HttpPost(nameof(UpdateFoodKartStatus))]
        public async Task<IActionResult> UpdateFoodKartStatus(Foodkart foodkart)
        {
            var i = await foodKartService.UpdateFoodKartStatus(foodkart);
            return Ok(i);

        }
        [HttpGet(nameof(GetFoodkartById))]
        public IActionResult GetFoodkartById(int id)
        {
            var i = foodKartService.GetFoodkartById(id);
            return Ok(i);

        }

        [HttpGet(nameof(GetFoodVarientById))]
        public IActionResult GetFoodVarientById(int id)
        {
            var i = foodKartService.GetFoodVarientById(id);
            return Ok(i);

        }

        [HttpPost(nameof(UpdateFoodVarientStatus))]
        public async Task<IActionResult> UpdateFoodVarientStatus(Foodkart foodkart)
        {
            var i =await foodKartService.UpdateFoodVarientStatus(foodkart);
            return Ok(i);

        }

        [HttpGet(nameof(GetFoodkartList))]
        public IActionResult GetFoodkartList()
        {
            var i = foodKartService.GetFoodkartList();
            return Ok(i);

        }
        [HttpGet(nameof(GetFullDetailsFoodList))]
        public IActionResult GetFullDetailsFoodList()
        {
            var i = foodKartService.GetFullDetailsFoodkartList();
            return Ok(i);

        }
        [HttpGet(nameof(GetFoodkartDisplayList))]
        public IActionResult GetFoodkartDisplayList()
        {
            var i = foodKartService.GetFoodkartDisplayList();
            return Ok(i);

        }

        [HttpDelete(nameof(DeleteFoodkart))]
        public IActionResult DeleteFoodkart(int id)
        {
            foodKartService.DeleteFoodkart(id);
            return Ok();

        }

        [HttpGet(nameof(GetDishDetailById))]
        public IActionResult GetDishDetailById(int id)
        {
            var i = foodKartService.GetDishDetailById(id);
            return Ok(i);

        }

        [HttpGet(nameof(GetFoodVarientdetailsById))]
        public IActionResult GetFoodVarientdetailsById(int id)
        {
            var i = foodKartService.GetFoodVarientdetailsById(id);
            return Ok(i);

        }
    }
}
