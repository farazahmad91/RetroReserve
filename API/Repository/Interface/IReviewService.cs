using Entities;

namespace API.Repository.Interface
{
    public interface IReviewService
    {
        public Task<Response> AddorUpdateProductReview(Reviews productReview);
        public IEnumerable<Reviews> GetProductReviewList();
        public Task<int> ApproveProductReview(Reviews productReview);
        public Reviews GetProductReviewById(int id);

        //Application Reviews
      
        public Task<Response> AddorUpdateAppReview(AppReviews aReview);
        public Task<int> ApproveAReviewStatus(AppReviews aReview);
        public IEnumerable<AppReviews> GetAReviewList();
        public AppReviews GetAReviewById(int id);
        public Task<Response> CheckUserReview(String email);

        // DBoy Review

        public Task<Response> AddorUpdateDboyReview(DboyReview dboyReview);
        public IEnumerable<DboyReview> GetDboyReviewList(string email);
    }
}
