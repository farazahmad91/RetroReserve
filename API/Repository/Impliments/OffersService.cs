using API.Data;
using API.Repository.Interface;
using Entities;
using Stripe;
using System.Collections.Generic;
using Response = Entities.Response;

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
            IEnumerable<Coupan> res = new List<Coupan>();
            try
            {
                var list = _service.GetAll<Coupan>("select * from tbl_Coupan");
                return list;
            }
            catch (Exception ex)
            {
                var error = new Response
                {
                    ClassName = GetType().Name,
                    FunctionName = "GetCoupans",
                    ResponseText = ex.Message,
                    Proc_Name = "Inline Query",
                };
                var _ = new ErrorLogService(_service).Error(error);
                return res;
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
                var error = new Response
                {
                    ClassName = GetType().Name,
                    FunctionName = "SaveOrUpdateCoupan",
                    ResponseText = ex.Message,
                    Proc_Name = "Proc_SaveOrUpdateCoupan",
                };
                var _ = new ErrorLogService(_service).Error(error);
                return res;
            }
        }

        public async Task<Coupan> AddOrEditCoupan(int Id)
        {
            Coupan res = new Coupan();
            try
            {
                var i = await _service.GetAsync<Coupan>("SELECT * FROM tbl_Coupan WHERE CoupanId= @Id", new
                {
                    Id = Id,
                }, System.Data.CommandType.Text);
                res = i;
                return i;
            }
            catch (Exception ex)
            {
                var error = new Response
                {
                    ClassName = GetType().Name,
                    FunctionName = "AddOrEditCoupan",
                    ResponseText = ex.Message,
                    Proc_Name = "Inline Query",
                };
                var _ = new ErrorLogService(_service).Error(error);
                return res;
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
                var error = new Response
                {
                    ClassName = GetType().Name,
                    FunctionName = "ChangeCoupanStatus",
                    ResponseText = ex.Message,
                    Proc_Name = "Proc_ChangeCoupanStatus",
                };
                var _ = new ErrorLogService(_service).Error(error);
                return res;
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
                var error = new Response
                {
                    ClassName = GetType().Name,
                    FunctionName = "CheckCoupan",
                    ResponseText = ex.Message,
                    Proc_Name = "Proc_CheckCoupon",
                };
                var _ = new ErrorLogService(_service).Error(error);
                return res;
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
                var error = new Response
                {
                    ClassName = GetType().Name,
                    FunctionName = "DeleteCoupan",
                    ResponseText = ex.Message,
                    Proc_Name = "Proc_DeleteCoupan",
                };
                var _ = new ErrorLogService(_service).Error(error);
                return res;
            }
        }

        public async Task<Response> AddOrUpdateOffer(Offer offer)
        {
            var res = new Response
            {
                StatusCode = -1,
                ResponseText= "something wrong!"
            };
          
            try
            {
                var sp = "Proc_SaveOrUpdateOffer";
                var param = new
                {
                    OfferId = offer.OfferId,
                    OfferName = offer.OfferName,
                    OfferImage = offer.OfferImage,
                    Description = offer.Description,
                    ValidUpto = offer.ValidUpto,
                    Discount = offer.Discount,
                };
                var i = await _service.GetAsync<Response>(sp, param);
                res = i;
                return res;
            }
            catch (Exception ex)
            {
                var error = new Response
                {
                    ClassName = GetType().Name,
                    FunctionName = "AddOrUpdateOffer",
                    ResponseText = ex.Message,
                    Proc_Name = "Proc_SaveOrUpdateOffer",
                };
                var _ = new ErrorLogService(_service).Error(error);
                return res;
            }
        }
        public IEnumerable<Offer> GetAllOffer()
        {
            IEnumerable<Offer> res = new List<Offer>();
            try
            {
                var sp = "proc_GetAllOffer";
                var i = _service.GetAll<Offer>(sp);
                i = res;
                return i;
            }
            catch (Exception ex)
            {
                var error = new Response
                {
                    ClassName = GetType().Name,
                    FunctionName = "GetAllOffer",
                    ResponseText = ex.Message,
                    Proc_Name = "proc_GetAllOffer",
                };
                var _ = new ErrorLogService(_service).Error(error);
                return res;
            }
        }

        public Offer GetOfferById(int id)
        {
            Offer res = new Offer();
            try
            {
                var sp = "proc_GetOfferById";
                var param = new
                {
                    OfferId = id,
                };
                var i = _service.GetById<Offer>(param, sp);
                i = res;
                return i;
            }
            catch (Exception ex)
            {
                var error = new Response
                {
                    ClassName = GetType().Name,
                    FunctionName = "GetOfferById",
                    ResponseText = ex.Message,
                    Proc_Name = "proc_GetOfferById",
                };
                var _ = new ErrorLogService(_service).Error(error);
                return res;
            }
        }
    }
}
