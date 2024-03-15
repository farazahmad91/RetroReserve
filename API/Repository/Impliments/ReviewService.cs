using API.Repository.Interface;
using Entities;
using System.Collections.Generic;
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
                var error = new Response
                {
                    ClassName = GetType().Name,
                    FunctionName = "AddorUpdateProductReview",
                    ResponseText = ex.Message,
                    Proc_Name = "sp_AddorUpdateProductReview",
                };
                var _ = new ErrorLogService(_dapper).Error(error);
                return res;
            }
        }

        public IEnumerable<Reviews> GetProductReviewList()
        {
            IEnumerable <Reviews> res = new List<Reviews>();
            try
            {
                var sp = "sp_GetProductReviewList";
                var i = _dapper.GetAll<Reviews>(sp);
                res = i;
                return i;
            }
            catch (Exception ex)
            {
                var error = new Response
                {
                    ClassName = GetType().Name,
                    FunctionName = "GetProductReviewList",
                    ResponseText = ex.Message,
                    Proc_Name = "sp_GetProductReviewList",
                };
                var _ = new ErrorLogService(_dapper).Error(error);
                return res;
            }
        }
        public Reviews GetProductReviewById(int id)
        {
            Reviews res = new Reviews();
            try
            {
                var sp = "sp_GetProductReviewListById";
                var param = new
                {
                    ReviewId = id,
                };
                var i = _dapper.GetById<Reviews>(param, sp);
                res = i;
                return i;
            }
            catch (Exception ex)
            {
                var error = new Response
                {
                    ClassName = GetType().Name,
                    FunctionName = "GetProductReviewById",
                    ResponseText = ex.Message,
                    Proc_Name = "sp_GetProductReviewListById",
                };
                var _ = new ErrorLogService(_dapper).Error(error);
                return res;
            }
        }

        public async Task<int> ApproveProductReview(Reviews productReview)
        {
            int i = 0;
            try
            {
                var sp = "sp_ApproveProductReview";
                var param = new
                {
                    ReviewId = productReview.ReviewId,
                    Status = productReview.Status,
                };
                 i = await _dapper.Insert(param, sp);
                return i;
            }
            catch (Exception ex)
            {
                var error = new Response
                {
                    ClassName = GetType().Name,
                    FunctionName = "ApproveProductReview",
                    ResponseText = ex.Message,
                    Proc_Name = "sp_ApproveProductReview",
                };
                var _ = new ErrorLogService(_dapper).Error(error);
                return i;
            }
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
                var error = new Response
                {
                    ClassName = GetType().Name,
                    FunctionName = "AddorUpdateAppReview",
                    ResponseText = ex.Message,
                    Proc_Name = "sp_AddorUpdateAReview",
                };
                var _ = new ErrorLogService(_dapper).Error(error);
                return res;
            }
        }

        public async Task<int> ApproveAReviewStatus(AppReviews aReview)
        {
            var i = 0;
            try
            {
                var sp = "sp_ApproveAReview";
                var param = new
                {
                    AReviewId = aReview.AReviewId,
                    Status = aReview.Status,
                };
                 i = await _dapper.Insert(param, sp);
                return i;
            }
            catch (Exception ex)
            {

                var error = new Response
                {
                    ClassName = GetType().Name,
                    FunctionName = "ApproveAReviewStatus",
                    ResponseText = ex.Message,
                    Proc_Name = "sp_ApproveAReview",
                };
                var _ = new ErrorLogService(_dapper).Error(error);
                return i;
            }
        }

        public IEnumerable<AppReviews> GetAReviewList()
        {
            IEnumerable <AppReviews> res = new List<AppReviews>();
            try
            {
                var sp = "sp_GetAReviewList";
                var i = _dapper.GetAll<AppReviews>(sp);
                res= i;
                return i;
            }
            catch (Exception ex)
            {
                var error = new Response
                {
                    ClassName = GetType().Name,
                    FunctionName = "GetAReviewList",
                    ResponseText = ex.Message,
                    Proc_Name = "sp_GetAReviewList",
                };
                var _ = new ErrorLogService(_dapper).Error(error);
                return res;
            }
        }
        public AppReviews GetAReviewById(int id)
        { 
            AppReviews res = new AppReviews();
            try
            {
                var sp = "sp_GetAReviewListById";
                var param = new
                {
                    ReviewId = id,
                };
                var i = _dapper.GetById<AppReviews>(param, sp);
                res = i;
                return i;
            }
            catch (Exception ex)
            {
                var error = new Response
                {
                    ClassName = GetType().Name,
                    FunctionName = "GetAReviewById",
                    ResponseText = ex.Message,
                    Proc_Name = "sp_GetAReviewListById",
                };
                var _ = new ErrorLogService(_dapper).Error(error);
                return res;
            }
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
                var error = new Response
                {
                    ClassName = GetType().Name,
                    FunctionName = "CheckUserReview",
                    ResponseText = ex.Message,
                    Proc_Name = "sp_CheckUserAReview",
                };
                var _ = new ErrorLogService(_dapper).Error(error);
                return res;
            }
        }
        // DBoy Reviews
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
                    OrderId = dboyReview.OrderId,
                    Email=dboyReview.Email,
                };
                res = await _dapper.GetAsync<Response>(sp, param);

                return res;
            }
            catch (Exception ex)
            {

                var error = new Response
                {
                    ClassName = GetType().Name,
                    FunctionName = "AddorUpdateDboyReview",
                    ResponseText = ex.Message,
                    Proc_Name = "sp_AddOrUpdateDboyReview",
                };
                var _ = new ErrorLogService(_dapper).Error(error);
                return res;
            }
        }

        public IEnumerable<DboyReview> GetDboyReviewList(string email)
        {
            IEnumerable <DboyReview> res = new List<DboyReview>();
            try
            {
                var sp = "sp_GetDBoyReview";
                var param = new
                {
                    Email = email,
                };
                var i = _dapper.GetItemsById<DboyReview>(param, sp);
                res = i;
                return i;
            }
            catch (Exception ex)
            {
                var error = new Response
                {
                    ClassName = GetType().Name,
                    FunctionName = "GetDboyReviewList",
                    ResponseText = ex.Message,
                    Proc_Name = "sp_GetDBoyReview",
                };
                var _ = new ErrorLogService(_dapper).Error(error);
                return res;
            }
        }

        public IEnumerable<DboyReviewStatistics> GetDboyReviewStatistics(int id)
        {
            var sp = "sp_GetDboyReviewStatisticsById";
            IEnumerable<DboyReviewStatistics> res = new List<DboyReviewStatistics>();

            try
            {
                var param = new
                {
                    EmpId = id,
                };
                var i = _dapper.GetItemsById<DboyReviewStatistics>(param, sp);
                res = i;
                return i;
            }
            catch (Exception ex)
            {

                var error = new Response
                {
                   ClassName = GetType().Name,
                   FunctionName = "GetDboyReviewStatistics",
                   ResponseText = ex.Message,
                    Proc_Name = "sp_GetDboyReviewStatisticsById",
                };
               var _ = new ErrorLogService(_dapper).Error(error);
                return res;
            }
         
        }
    }
}
