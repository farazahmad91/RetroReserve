using API.Repository.Interface;
using Entities;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ReviewsController : ControllerBase
    {
        public  IReviewService _review;
        public ReviewsController(IReviewService productReviewService)
        {
            this._review = productReviewService;
        }

        // Dishes Reviews

        [HttpPost(nameof(AddorUpdateProductReview))]
        public async Task<IActionResult> AddorUpdateProductReview(Reviews productReview)
        {
            var res = new Response();
            res = await _review.AddorUpdateProductReview(productReview);
            return Ok(res);
        }
        [HttpGet(nameof(GetProductReviewList))]
        public IActionResult GetProductReviewList()
        {
            var i = _review.GetProductReviewList();
            return Ok(i);
        }
        [HttpPost(nameof(ApproveProductReview))]
        public IActionResult ApproveProductReview(Reviews productReview)
        {
            var i = _review.ApproveProductReview(productReview);
            return Ok(i);
        }

        [HttpGet(nameof(GetProductReviewById))]
        public IActionResult GetProductReviewById(int id)
        {
            var i = _review.GetProductReviewById(id);
            return Ok(i);
        }

        // Application Reviews


        [HttpPost(nameof(AddorUpdateAppReview))]
        public async Task<IActionResult> AddorUpdateAppReview(AppReviews appReviews)
        {
            var res = new Response();
            res = await _review.AddorUpdateAppReview(appReviews);
            return Ok(res);
        }

        [HttpGet(nameof(GetAReviewList))]
        public IActionResult GetAReviewList()
        {
            var i = _review.GetAReviewList();
            return Ok(i);
        }
        [HttpPost(nameof(ApproveAReviewStatus))]
        public IActionResult ApproveAReviewStatus(AppReviews appReviews)
        {
            var i = _review.ApproveAReviewStatus(appReviews);
            return Ok(i);
        }

        [HttpGet(nameof(GetAReviewById))]
        public IActionResult GetAReviewById(int id)
        {
            var i = _review.GetAReviewById(id);
            return Ok(i);
        }

        [HttpGet(nameof(CheckUserReview))]
        public async Task<IActionResult> CheckUserReview(String email)
        {
            var res = new Response();
            res = await _review.CheckUserReview(email);
            return Ok(res);
        }

        // DBoy Reviews

        [HttpPost(nameof(AddorUpdateDboyReview))]
        public async Task<IActionResult> AddorUpdateDboyReview(DboyReview dboyReview)
        {
            var i = await _review.AddorUpdateDboyReview(dboyReview);
            return Ok(i);
        }

        [HttpGet(nameof(GetDboyReviewList))]
        public IActionResult GetDboyReviewList(string email)
        {
            var i = _review.GetDboyReviewList(email);
            return Ok(i);
        }

        [HttpGet(nameof(GetDboyReviewStatistics))]
        public IActionResult GetDboyReviewStatistics(int id)
        {
            var i = _review.GetDboyReviewStatistics(id);
            return Ok(i);
        }
    }
}
