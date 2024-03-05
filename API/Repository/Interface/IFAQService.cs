using Entities;

namespace API.Repository.Interface
{
    public interface IFAQService
    {
        public Task<Response> AddFaq(FAQ fAQ);
        public IEnumerable<FAQ> FAQList();
        public FAQ FAQListById(int id);
        public Task<int> UpdateFAQStatus(FAQ fAQ);
    }
}
