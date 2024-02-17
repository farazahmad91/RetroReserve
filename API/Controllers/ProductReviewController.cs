using API.Repository.Interface;
using Entities;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductReviewController : ControllerBase
    {
        public  IProductReviewService _productReview;
        public ProductReviewController(IProductReviewService productReviewService)
        {
            this._productReview = productReviewService;
        }

        [HttpPost(nameof(AddorUpdateProductReview))]
        public async Task<IActionResult> AddorUpdateProductReview(ProductReview productReview)
        {
            var res = new Response();
            res = await _productReview.AddorUpdateProductReview(productReview);
            return Ok(res);
        }
        [HttpGet(nameof(GetProductReviewList))]
        public IActionResult GetProductReviewList()
        {
            var i = _productReview.GetProductReviewList();
            return Ok(i);
        }
        [HttpPost(nameof(ApproveProductReview))]
        public IActionResult ApproveProductReview(ProductReview productReview)
        {
            var i = _productReview.ApproveProductReview(productReview);
            return Ok(i);
        }

        [HttpGet(nameof(GetProductReviewById))]
        public IActionResult GetProductReviewById(int id)
        {
            var i = _productReview.GetProductReviewById(id);
            return Ok(i);
        }
    }
}
