using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using RetroReserve.Models;
using Entities;
using System.Security.Claims;

namespace RetroReserve.Controllers
{
    
    public class CartController : Controller
    {
        private readonly APIrequest apirequest;
        public CartController(APIrequest apirequest)
        {
            this.apirequest = apirequest;
        }
        [Authorize]
        public async Task<ActionResult> Cart(string id)
        {
            var email = User.FindFirstValue(ClaimTypes.Email);
            id = email;
            var i = await apirequest.GetData<List<Cart>>($"Cart/GetCartValueById?id={id}");
            return View(i);
        }
        [Authorize]
        public async Task<IActionResult> DishQtyUpdateInCartValue(Cart cart)
        {
            var i = await apirequest.Post($"Cart/DishQtyUpdateInCartValue", cart);
            return Json(i);
         
         var i = await apirequest.Post("Cart/QtyUpdateInCart", cart);
         return Json(i);

        }
        public async Task<IActionResult> GetNumberInCartItem()
        {
            var email = User.FindFirstValue(ClaimTypes.Email);
            if (email != null)
            {
                var cart = await apirequest.GetMultipleDataById<Cart>("Cart/GetNumberInCartItem", email);
                return Json(cart);
            }
            else
            {
                return Json(0);
            }

        }
        [Authorize]
        public async Task<ActionResult> AddCart(Cart cartValue)
        {
            var Email = User.FindFirstValue(ClaimTypes.Email);
            cartValue.UserID = Email;
            if (Email != "")
            {
                var i = await apirequest.Post("Cart/AddOrUpdateCartValue", cartValue);
                return Json(i);
            }
            else
            {
                return Json(0);
            }
        }


        [Authorize]
        public async Task<ActionResult> DeleteCart(int CartId)
        {
             await apirequest.Delete($"Cart/DeleteCart/{CartId}");
            return View();
        }
    }
}
