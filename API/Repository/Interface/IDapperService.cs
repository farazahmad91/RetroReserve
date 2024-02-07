using System.Data;

namespace API.Repository.Interface
{
    public interface IDapperService
    {
       public Task<int> Insert(object entity, string storedProcedure);
       public int Delete(object id, string query);
       public T GetById<T>(object id, string query);
       public IEnumerable<T> GetAll<T>(string query);
        public IEnumerable<T> GetItemsById<T>(object id, string query);
       public int Update(object entity, string storedProcedure);
        public Task<T> GetAsync<T>(string sp, object parms = null, CommandType commandType = CommandType.StoredProcedure);
    }
}
