using API.Repository.Interface;
using Entities;
using Stripe;
namespace API.Repository.Impliments
{
    public class StatusService : IStatusService
    {
        private readonly IDapperService dapper;
        public StatusService(IDapperService dapper)
        {
            this.dapper = dapper;
        }

        public IEnumerable<Status> GetStatusList()
        {
            IEnumerable<Status> res = new List<Status>();
            try
            {
                var sp = "sp_Status";
                var i = dapper.GetAll<Status>(sp);
                res = i;
                return i;
            }
            catch (Exception ex)
            {
                var error = new Response
                {
                    ClassName = GetType().Name,
                    FunctionName = "GetStatusList",
                    ResponseText = ex.Message,
                    Proc_Name = "sp_Status",
                };
                var _ = new ErrorLogService(dapper).Error(error);
                return res;
            }
        }

        public IEnumerable<DeliveredOrder> GetStatusForDboy(string email)
        {
            IEnumerable<DeliveredOrder> res = new List<DeliveredOrder>();
            try
            {
                var sp = "sp_NewOrderStatusForDboy";
                var param = new
                {
                    Email = email,
                };
                var i = dapper.GetItemsById<DeliveredOrder>(param, sp);
                res = i;
                return i;
            }
            catch (Exception ex)
            {
                var error = new Response
                {
                    ClassName = GetType().Name,
                    FunctionName = "GetStatusForDboy",
                    ResponseText = ex.Message,
                    Proc_Name = "sp_NewOrderStatusForDboy",
                };
                var _ = new ErrorLogService(dapper).Error(error);
                return res;
            }
        }

    }
}
