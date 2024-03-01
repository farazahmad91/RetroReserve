using API.Repository.Interface;
using Entities;
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
            var sp = "sp_Status";
            var i = dapper.GetAll<Status>(sp);
            return i;
        }

        public IEnumerable<DeliveredOrder> GetStatusForDboy(string email)
        {
            var sp = "sp_NewOrderStatusForDboy";
            var param = new
            {
                Email = email,
            };
            var i = dapper.GetItemsById<DeliveredOrder>(param,sp);
            return i;
        }

    }
}
