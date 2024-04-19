using API.Repository.Interface;
using Entities;

namespace API.Repository.Impliments
{
    public class PaymentDetailService : IPaymentDetailService
    {
        private readonly IDapperService _dapper;
        public PaymentDetailService(IDapperService dapper) 
        {
            this._dapper = dapper;
        }
        public async Task<int> addPaymentDetail(PaymentDetails paymentDetails)
        {
            var res = 0;
            var sp = "sp_addPaymentDetails";
            try
            {
                var param = new
                {
                    PaymentType = paymentDetails.PaymentType,
                    Amount= paymentDetails.Amount
                };
                var i = await _dapper.Insert(param, sp);
                res = i;
                return res;
            }
            catch (Exception ex)
            {

                var error = new Response
                {
                    ClassName = GetType().Name,
                    FunctionName = "addPaymentDetail",
                    ResponseText = ex.Message,
                    Proc_Name = sp,
                };
                var _ = new ErrorLogService(_dapper).Error(error);
                return res;
            }
           
        }

        public IEnumerable<PaymentDetails> GetPaymentDetail()
        {
            IEnumerable<PaymentDetails> res = new List<PaymentDetails>();
            var sp = "sp_GetPaymentDetail";
            try
            {
                var i = _dapper.GetAll<PaymentDetails>(sp);
                res = i;
                return res;
            }
            catch (Exception ex)
            {
                var error = new Response
                {
                    ClassName = GetType().Name,
                    FunctionName = "GetPaymentDetail",
                    ResponseText = ex.Message,
                    Proc_Name = sp,
                };
                var _ = new ErrorLogService(_dapper).Error(error);
                return res;
            }
            
        }

        public PaymentDetails GetPaymentDetailById(int id)
        {
            PaymentDetails res = new PaymentDetails();
            var sp = "sp_GetPaymentDetailById";
            try
            {
                var param = new
                {
                    PaymentId = id,
                };
                var i = _dapper.GetById<PaymentDetails>(param,sp);
                res = i;
                return res;
            }
            catch (Exception ex)
            {
                var error = new Response
                {
                    ClassName = GetType().Name,
                    FunctionName = "GetPaymentDetailById",
                    ResponseText = ex.Message,
                    Proc_Name = sp,
                };
                var _ = new ErrorLogService(_dapper).Error(error);
                return res;
            }
        }
    }
}
