using Entities;

namespace API.Repository.Interface
{
    public interface IBannersService
    {
        public Task<Response> AddOrUpdateBanner(Banners banners);
        public IEnumerable<Banners> BannersList();
        public Task<int> UpdateBannerStatus(Banners banners);
        public Banners BannersListById(int id);
        public IEnumerable<Banners> ShowBanner1();
        public IEnumerable<Banners> ShowBanner2();
        public IEnumerable<Banners> ShowBanner3();
        public IEnumerable<Banners> EventBanner();
    }
}
