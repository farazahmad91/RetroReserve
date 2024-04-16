using Entities;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using RetroReserve.Models;
using System.Security.Claims;

namespace RetroReserve.Controllers
{
    public class ReviewsController : Controller
    {
        private readonly APIrequest _apirequest;
        public ReviewsController(APIrequest apirequest)
        {
            this._apirequest = apirequest;
        }
        public async Task<IActionResult> ReviewList()
        {
            var i = await _apirequest.GetData<List<Reviews>>("Reviews/GetProductReviewList");
            return View(i);
        }
        public async Task<IActionResult> EditReview(int id)
        {
            var i = await _apirequest.GetData<Reviews>($"Reviews/GetProductReviewById?id={id}");
            return PartialView(i);
        }
        public async Task<IActionResult> AddorUpdateProductReview(Reviews productReview)
        {
            var Email = User.FindFirstValue(ClaimTypes.Email);
            productReview.UserID = Email;
            var i = await _apirequest.Post("Reviews/AddorUpdateProductReview", productReview);
            var res = JsonConvert.DeserializeObject<Entities.Response>(i);
            return Json(res);
        }

        public async Task<IActionResult> ApproveProductReview(Reviews productReview)
        {
            var i = await _apirequest.Post("Reviews/ApproveProductReview", productReview);
            return Json(i);
        }

        public async Task<IActionResult> ProdReviewDetails(int id)
        {
            var i = await _apirequest.GetData<Reviews>($"Reviews/GetProductReviewById?id={id}");
            return View(i);
        }

        public async Task<IActionResult> ShowReviews()
        {
            var i = await _apirequest.GetData<List<Reviews>>("Reviews/GetProductReviewList");
            return PartialView(i);
        }
        [Route("/Testimonial")]
        public async Task<IActionResult> Testimonial()
        {
          var i = await _apirequest.GetData<List<AppReviews>>("Reviews/GetAReviewList");
            return PartialView(i);
        }
        [Route("/App_Review")]
        public async Task<IActionResult> InsertAReview()
        {
            //var i = await _apirequest.GetData<List<ProductReview>>("ProductReview/GetProductReviewList");
            return View();
        }
        public async Task<IActionResult> AddOrUpdateAReview(AppReviews appReviews)
        {
            var Email = User.FindFirstValue(ClaimTypes.Email);
            var name = User.FindFirstValue(ClaimTypes.Name);
            appReviews.UserID = Email;
            appReviews.Name = name;
            var i = await _apirequest.Post("Reviews/AddorUpdateAppReview", appReviews);
            var res = JsonConvert.DeserializeObject<Entities.Response>(i);
            return Json(res);
        }

        public async Task<IActionResult> CheckUserReview()
        {
            var email = User.FindFirstValue(ClaimTypes.Email);
            var i = await _apirequest.Post("Reviews/CheckUserReview", email);
            var res = JsonConvert.DeserializeObject<Entities.Response>(i);
            return Json(res);
        }

        public async Task<IActionResult> AReviewDetails(int id)
        {
            var i = await _apirequest.GetData<AppReviews>($"Reviews/GetAReviewById?id={id}");
            return View(i);
        }
        public async Task<IActionResult> AReviewList()
        {
            var i = await _apirequest.GetData<List<AppReviews>>("Reviews/GetAReviewList");
            return View(i);
        }

        public async Task<IActionResult> ApproveAReviewStatus(AppReviews appReviews)
        {
            var i = await _apirequest.Post("Reviews/ApproveAReviewStatus", appReviews);
            return Json(i);
        }
    }
}
