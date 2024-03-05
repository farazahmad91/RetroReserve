using API.Repository.Interface;
using Entities;
using System.Net.Http.Headers;

namespace API.Repository.Impliments
{
    public class ReviewService : IReviewService
    {
        private readonly IDapperService _dapper;
        public ReviewService(IDapperService dapper)
        {
            this._dapper = dapper;
        }

        //Product Reviews

        public async Task<Response> AddorUpdateProductReview(Reviews productReview)
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

        public IEnumerable<Reviews> GetProductReviewList()
        {
            var sp = "sp_GetProductReviewList";
            var i = _dapper.GetAll<Reviews>(sp);
            return i;
        }
        public Reviews GetProductReviewById(int id)
        {
            var sp = "sp_GetProductReviewListById";
            var param = new
            {
                ReviewId = id,
            };
            var i = _dapper.GetById<Reviews>(param, sp);
            return i;
        }

        public async Task<int> ApproveProductReview(Reviews productReview)
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

        //Application Reviews

        public async Task<Response> AddorUpdateAppReview(AppReviews aReview)
        {
            var res = new Response()
            {
                ResponseText = "Failed To Save",
                StatusCode = -1,
            };

            try
            {
                var sp = "sp_AddorUpdateAReview";
                var param = new
                {
                    AReviewId = aReview.AReviewId,
                    UserID = aReview.UserID,
                    Name = aReview.Name,
                    Comment = aReview.Comment,
                    Status = aReview.Status,
                    Rating = aReview.Rating,
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

        public async Task<int> ApproveAReviewStatus(AppReviews aReview)
        {
            var sp = "sp_ApproveAReview";
            var param = new
            {
                AReviewId = aReview.AReviewId,
                Status = aReview.Status,
            };
            var i = await _dapper.Insert(param, sp);
            return i;
        }

        public IEnumerable<AppReviews> GetAReviewList()
        {
            var sp = "sp_GetAReviewList";
            var i = _dapper.GetAll<AppReviews>(sp);
            return i;
        }
        public AppReviews GetAReviewById(int id)
        {
            var sp = "sp_GetAReviewListById";
            var param = new
            {
                ReviewId = id,
            };
            var i = _dapper.GetById<AppReviews>(param, sp);
            return i;
        }
        public async Task<Response> CheckUserReview(String email)
        {
            var res = new Response()
            {
                ResponseText = "Failed To Save",
                StatusCode = -1,
            };

            try
            {
                var sp = "sp_CheckUserAReview";
                var param = new
                {
                    UserID = email,
                };
                res = _dapper.GetById<Response>(param, sp);

                return res;
            }
            catch (Exception ex)
            {
                res.ResponseText = ex.Message;
                res.StatusCode = -1;
                return res;
            }
        }

        public async Task<Response> AddorUpdateDboyReview(DboyReview dboyReview)
        {
            var res = new Response()
            {
                ResponseText = "Failed To Save",
                StatusCode = -1,
            };

            try
            {
                var sp = "sp_AddOrUpdateDboyReview";
                var param = new
                {
                    DboyRId = dboyReview.DboyRId,
                    DboyId = dboyReview.DboyId,
                    Comment = dboyReview.Comment,
                    Status = dboyReview.Status,
                    Rating = dboyReview.Rating,
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
    }
}
