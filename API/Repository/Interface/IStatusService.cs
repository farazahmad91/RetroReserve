using Entities;
namespace API.Repository.Interface
{
    public interface IStatusService
    {
        public IEnumerable<Status> GetStatusList();
    }
}
