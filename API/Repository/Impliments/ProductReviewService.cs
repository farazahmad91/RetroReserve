using API.Repository.Interface;
using Entities;

namespace API.Repository.Impliments
{
    public class ProductReviewService : IProductReviewService
    {
        private readonly IDapperService _dapper;
        public ProductReviewService(IDapperService dapper)
        {
            this._dapper = dapper;
        }
        public async Task<Response> AddorUpdateProductReview(ProductReview productReview)
        {
            var res = new Response()
            {
                ResponseText = "Failed To Save",
                StatusCode = -1,
            };

            try
            {
                var sp = "sp_AddorUpdateProductReview";
                var param = new
                {
                    ReviewId = productReview.ReviewId,
                    DishId = productReview.DishId,
                    UserID = productReview.UserID,
                    Name = productReview.Name,
                    Email = productReview.Email,
                    Comment = productReview.Comment,
                    Status = productReview.Status,
                    Rating = productReview.Rating,
                };
                res = await _dapper.GetAsync<Response>(sp, param);

                return res;
            }
            catch (Exception ex)
            {
                res.ResponseText = ex.Message;
                res.StatusCode = -1;
                return res;
            }
        }

        public IEnumerable<ProductReview> GetProductReviewList()
        {
            var sp = "sp_GetProductReviewList";
            var i = _dapper.GetAll<ProductReview>(sp);
            return i;
        }
        public ProductReview GetProductReviewById(int id)
        {
            var sp = "sp_GetProductReviewListById";
            var param = new
            {
                ReviewId = id,
            };
            var i = _dapper.GetById<ProductReview>(param, sp);
            return i;
        }

        public async Task<int> ApproveProductReview(ProductReview productReview)
        {
            var sp = "sp_ApproveProductReview";
            var param = new
            {
                ReviewId = productReview.ReviewId,
                Status = productReview.Status,
            };
            var i = await _dapper.Insert(param, sp);
            return i;
        }
    }
}
