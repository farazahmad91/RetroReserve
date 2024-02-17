using Entities;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using RetroReserve.Models;
using System.Security.Claims;

namespace RetroReserve.Controllers
{
    public class ProductReviewController : Controller
    {
        private readonly APIrequest _apirequest;
        public ProductReviewController(APIrequest apirequest)
        {
            this._apirequest = apirequest;
        }
        public async Task<IActionResult> ReviewList()
        {
            var i = await _apirequest.GetData<List<ProductReview>>("ProductReview/GetProductReviewList");
            return View(i);
        }
        public async Task<IActionResult> EditReview(int id)
        {
            var i = await _apirequest.GetData<ProductReview>($"ProductReview/GetProductReviewById?id={id}");
            return PartialView(i);
        }
        public async Task<IActionResult> AddorUpdateProductReview(ProductReview productReview)
        {
            var Email = User.FindFirstValue(ClaimTypes.Email);
            productReview.UserID = Email;
            var i = await _apirequest.Post("ProductReview/AddorUpdateProductReview", productReview);
            var res = JsonConvert.DeserializeObject<Entities.Response>(i);
            return Json(res);
        }

        public async Task<IActionResult> ApproveProductReview(ProductReview productReview)
        {
            var i = await _apirequest.Post("ProductReview/ApproveProductReview", productReview);
            return Json(i);
        }
    }
}
