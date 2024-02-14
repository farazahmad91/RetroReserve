using API.Repository.Interface;
using Entities;

namespace API.Repository.Impliments
{
    public class BannersService : IBannersService
    {
        private readonly IDapperService _dapper;
        public BannersService(IDapperService dapper)
        {
            this._dapper = dapper;   
        }
        public async Task<Response> AddOrUpdateBanner(Banners banners)
        {
            var res = new Response() {
                ResponseText = "Failed To Save",
                StatusCode = -1,
            };

            try
            {
                var sp = "sp_AddorUpdateBanner";
                    var param = new
                {
                    BannerId = banners.BannerId,
                    BannerName = banners.BannerName,
                    BannerImage = banners.BannerImage,
                    Description = banners.Description,
                    Offer = banners.Offer,
                    ProductLink = banners.ProductLink,
                    Status = banners.Status,
                    UpdateOn = banners.UpdateOn,
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

        public IEnumerable<Banners> BannersList()
        {
            var sp = "sp_GetBannerList";
            var i = _dapper.GetAll<Banners>(sp);
            return i;
        }
        public Banners BannersListById(int id)
        {
            var sp = "sp_getBannerById";
            var param = new
            {
                BannerId = id,
            };
            var i = _dapper.GetById<Banners>(param,sp);
            return i;
        }

        public async Task<int> UpdateBannerStatus(Banners banners)
        {
            var sp = "sp_UpdateBannerStatus";
            var param = new
            {
                BannerId = banners.BannerId,
                Status = banners.Status,
            };
            var i = await _dapper.Insert(param, sp);
            return i;
        }

        public IEnumerable<Banners> ShowBanner()
        {
            var sp = "sp_GetShowBannerData";
            var i = _dapper.GetAll<Banners>(sp);
            return i;
        }
    }
}
