using Entities;

namespace API.Repository.Interface
{
    public interface IOffersService
    {
        public Task<IEnumerable<Coupan>> GetCoupans();
        public Task<Data.Response> SaveOrUpdateCoupan(Coupan coupan);
        public Task<Coupan> AddOrEditCoupan(int Id);
        public Task<Data.Response> ChangeCoupanStatus(int CoupanId);
        public Task<Data.Response<string>> CheckCoupan(string CoupanName);
        public Task<Data.Response> DeleteCoupan(int CoupanId);
        public Task<Response> AddOrUpdateOffer(Offer offer);
        public IEnumerable<Offer> GetAllOffer();
        public Offer GetOfferById(int id);
    }
}
