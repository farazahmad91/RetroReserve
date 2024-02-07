using Microsoft.AspNetCore.Mvc;
using API.Repository.Interface;
using Entities;


namespace API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CartController : ControllerBase
    {
        private readonly ICartService cartValueService;
        public CartController(ICartService cartValueService)
        {
            this.cartValueService = cartValueService;
        }
        [HttpPost(nameof(AddOrUpdateCartValue))]
        public async Task<IActionResult> AddOrUpdateCartValue(Cart cartValue)
        {
            var i = await cartValueService.AddOrUpdateCartValue(cartValue);
            return Ok(i);

        }
        [HttpPost(nameof(DishQtyUpdateInCartValue))]
        public async Task<IActionResult> DishQtyUpdateInCartValue(Cart cartValue)
        {
            var i = await cartValueService.DishQtyUpdateInCartValue(cartValue);
            return Ok(i);

        }

        [HttpGet(nameof(GetCartValueById))]
        public IActionResult GetCartValueById(string id)
        {
            var i = cartValueService.GetCartValueById(id);
            return Ok(i);

        }
        [HttpGet(nameof(GetCartValueList))]
        public IActionResult GetCartValueList()
        {
            var i = cartValueService.GetCartValueList();
            return Ok(i);

        }
        [HttpGet(nameof(GetNumberInCartItem))]
        public IActionResult GetNumberInCartItem(string id)
        {
            var i = cartValueService.GetNumberInCartItem(id);
            return Ok(i);

        }
        [HttpDelete(nameof(DeleteCart)+"/{id}")]
        public IActionResult DeleteCart(int id)
        {
            cartValueService.DeleteCart(id);
            return Ok();

        }
    }
}
