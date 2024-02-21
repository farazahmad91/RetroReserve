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
        [HttpPost(nameof(QtyUpdateInCart))]

        public async Task<IActionResult> QtyUpdateInCart(CartQTY cartQTY)
        {
            var i = await cartValueService.QtyUpdateInCart(cartQTY);
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
        [HttpGet(nameof(GetQtyInCart))]
        public IActionResult GetQtyInCart(string id)
        {
            var i = cartValueService.GetQtyInCart(id);
            return Ok(i);

        }
        [HttpGet(nameof(GetCartCheckOutPrice))]
        public IActionResult GetCartCheckOutPrice(string id)
        {
            var i = cartValueService.GetCartCheckOutPrice(id);
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
