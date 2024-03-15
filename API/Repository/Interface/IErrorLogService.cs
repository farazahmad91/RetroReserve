namespace API.Repository.Interface
{
    public interface IErrorLogService
    {
        public Task<int> Error(object entity);
    }
}
