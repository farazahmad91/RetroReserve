using API.Data;
using API.Repository.Interface;
using Entities;

namespace API.Repository.Impliments
{
    public class OffersService : IOffersService
    {
        private readonly IDapperService _service;

        public OffersService(IDapperService service)
        {
            _service = service;
        }

        public async Task<IEnumerable<Coupan>> GetCoupans()
        {
            try
            {
                var list = _service.GetAll<Coupan>("select * from tbl_Coupan");
                return list;
            }
            catch (Exception ex)
            {

                throw;
            }
        }

        public async Task<Data.Response> SaveOrUpdateCoupan(Coupan coupan)
        {
            var res = new Data.Response()
            {
                StatusCode = Data.ResponseStatus.FAILED,
                ResponseText = "Server Error. Try After SomeTime"
            };
            try
            {
                res = await _service.GetAsync<Data.Response>("Proc_SaveOrUpdateCoupan", new
                {
                    coupan.CoupanId,
                    coupan.CoupanName,
                    coupan.Description,
                    coupan.ValidUpto,
                    coupan.DiscountPercentage,
                    coupan.IsActive,
                });
                return res;
            }
            catch (Exception ex)
            {
                res.ResponseText = ex.Message;
                return res;
                throw;
            }
        }

        public async Task<Coupan> AddOrEditCoupan(int Id)
        {
            try
            {
                var res = await _service.GetAsync<Coupan>("SELECT * FROM tbl_Coupan WHERE CoupanId= @Id", new
                {
                    Id = Id,
                }, System.Data.CommandType.Text);
                return res;
            }
            catch (Exception ex)
            {
                throw;
            }
        }

        public async Task<Data.Response> ChangeCoupanStatus(int CoupanId)
        {
            var res = new Data.Response()
            {
                ResponseText = "FAILED TO UPDATE STATUS",
                StatusCode = Data.ResponseStatus.FAILED,
            };
            try
            {
                string proc = "Proc_ChangeCoupanStatus";
                res = await _service.GetAsync<Data.Response>(proc, new
                {
                    ID = CoupanId,
                });
                return res;

            }
            catch (Exception ex)
            {
                res.ResponseText = ex.Message;
                return res;
                throw;
            }
        }

        public async Task<Data.Response<string>> CheckCoupan(string CoupanName)
        {
            var res = new Data.Response<string>()
            {
                StatusCode = ResponseStatus.FAILED,
                ResponseText = "Invalid Coupan Or Coupan Expires"
            };
            try
            {
                res = await _service.GetAsync<Data.Response<string>>("Proc_CheckCoupon", new
                {
                    _CouponName = CoupanName,
                });
                if (res.Result == null)
                {
                    res.Result = "0";
                }
                return res;
            }
            catch (Exception ex)
            {
                res.ResponseText = ex.Message;
                return res;
                throw;
            }
        }


        public async Task<Data.Response> DeleteCoupan(int CoupanId)
        {
            var res = new Data.Response()
            {
                ResponseText = "Failed To Delete",
                StatusCode = ResponseStatus.FAILED,
            };
            try
            {
                res = await _service.GetAsync<Data.Response>("Proc_DeleteCoupan", new
                {
                    _CoupanId = CoupanId,
                });
               return res;
            }
            catch (Exception ex)
            {
                res.ResponseText += ex.Message;
                return res;
                throw;
            }
        }
    }
}
