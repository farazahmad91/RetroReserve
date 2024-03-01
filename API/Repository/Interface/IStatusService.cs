using Entities;
namespace API.Repository.Interface
{
    public interface IStatusService
    {
        public IEnumerable<Status> GetStatusList();
        public IEnumerable<DeliveredOrder> GetStatusForDboy(string email);
    }
}
