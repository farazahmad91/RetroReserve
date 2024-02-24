using Entities;

namespace API.Repository.Interface
{
    public interface IOffersService
    {
        public Task<IEnumerable<Coupan>> GetCoupans();
        public Task<Data.Response> SaveOrUpdateCoupan(Coupan coupan);
        public Task<Coupan> AddOrEditCoupan(int Id);
        public Task<Data.Response> ChangeCoupanStatus(int CoupanId);
    }
}
