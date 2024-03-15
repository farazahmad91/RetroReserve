using API.Repository.Interface;
using Entities;
using System.Collections.Generic;

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
                    BannerOfferName = banners.BannerOfferName,
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
                var error = new Response
                {
                    ClassName = GetType().Name,
                    FunctionName = "AddOrUpdateBanner",
                    ResponseText = ex.Message,
                    Proc_Name = "sp_AddorUpdateBanner",
                };
                var _ = new ErrorLogService(_dapper).Error(error);
                return res;
            }
        }

        public IEnumerable<Banners> BannersList()
        {
            IEnumerable <Banners> res = new List<Banners>();
            try
            {
                var sp = "sp_GetBannerList";
                var i = _dapper.GetAll<Banners>(sp);
                res = i;
                return i;
            }
            catch (Exception ex)
            {

                var error = new Response
                {
                    ClassName = GetType().Name,
                    FunctionName = "BannersList",
                    ResponseText = ex.Message,
                    Proc_Name = "sp_GetBannerList",
                };
                var _ = new ErrorLogService(_dapper).Error(error);
                return res;
            }
        }
        public Banners BannersListById(int id)
        {
            Banners res = new Banners();
            try
            {
                var sp = "sp_getBannerById";
                var param = new
                {
                    BannerId = id,
                };
                var i = _dapper.GetById<Banners>(param, sp);
                res =i;
                return i;
            }
            catch (Exception ex)
            {
                var error = new Response
                {
                    ClassName = GetType().Name,
                    FunctionName = "BannersListById",
                    ResponseText = ex.Message,
                    Proc_Name = "sp_getBannerById",
                };
                var _ = new ErrorLogService(_dapper).Error(error);
                return res;
            }
        }

        public async Task<int> UpdateBannerStatus(Banners banners)
        {
            int res = 0;
            try
            {
                var sp = "sp_UpdateBannerStatus";
                var param = new
                {
                    BannerId = banners.BannerId,
                    Status = banners.Status,
                };
                var i = await _dapper.Insert(param, sp);
                res = i;
                return i;
            }
            catch (Exception ex)
            {

                var error = new Response
                {
                    ClassName = GetType().Name,
                    FunctionName = "UpdateBannerStatus",
                    ResponseText = ex.Message,
                    Proc_Name = "sp_UpdateBannerStatus",
                };
                var _ = new ErrorLogService(_dapper).Error(error);
                return res;
            }
        }
        public IEnumerable<Banners> ShowBanner1()
        {
            IEnumerable <Banners> res = new List<Banners>();
            try
            {
                var sp = "sp_GetBanner1";
                var i = _dapper.GetAll<Banners>(sp);
                res=i;
                return i;
            }
            catch (Exception ex)
            {
                var error = new Response
                {
                    ClassName = GetType().Name,
                    FunctionName = "ShowBanner1",
                    ResponseText = ex.Message,
                    Proc_Name = "sp_GetBanner1",
                };
                var _ = new ErrorLogService(_dapper).Error(error);
                return res;
            }
        }
        public IEnumerable<Banners> ShowBanner2()
        {
            IEnumerable<Banners> res = new List<Banners>();
            try
            {
                var sp = "sp_GetBanner2";
                var i = _dapper.GetAll<Banners>(sp);
                res = i;
                return i;
            }
            catch (Exception ex)
            {
                var error = new Response
                {
                    ClassName = GetType().Name,
                    FunctionName = "ShowBanner2",
                    ResponseText = ex.Message,
                    Proc_Name = "sp_GetBanner2",
                };
                var _ = new ErrorLogService(_dapper).Error(error);
                return res;
            }
        }
        public IEnumerable<Banners> ShowBanner3()
        {
            IEnumerable<Banners> res = new List<Banners>();
            try
            {
                var sp = "sp_GetBanner3";
                var i = _dapper.GetAll<Banners>(sp);
                res = i;
                return i;
            }
            catch (Exception ex)
            {
                var error = new Response
                {
                    ClassName = GetType().Name,
                    FunctionName = "ShowBanner3",
                    ResponseText = ex.Message,
                    Proc_Name = "sp_GetBanner3",
                };
                var _ = new ErrorLogService(_dapper).Error(error);
                return res;
            }
        }
        public IEnumerable<Banners> EventBanner()
        {
            IEnumerable<Banners> res = new List<Banners>();
            try
            {
                var sp = "sp_GetEventBanner";
                var i = _dapper.GetAll<Banners>(sp);
                return i;
            }
            catch (Exception ex)
            {
                var error = new Response
                {
                    ClassName = GetType().Name,
                    FunctionName = "EventBanner",
                    ResponseText = ex.Message,
                    Proc_Name = "sp_GetEventBanner",
                };
                var _ = new ErrorLogService(_dapper).Error(error);
                return res;
            }
        }
    }
}
