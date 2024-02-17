using Entities;

namespace API.Repository.Interface
{
    public interface IProductReviewService
    {
        public Task<Response> AddorUpdateProductReview(ProductReview productReview);
        public IEnumerable<ProductReview> GetProductReviewList();
        public Task<int> ApproveProductReview(ProductReview productReview);
        public ProductReview GetProductReviewById(int id);
    }
}
