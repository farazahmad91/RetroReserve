using API.Repository.Interface;
using Entities;

namespace API.Repository.Impliments
{
    public class TableDetailsService : ITableDetailsService
    {
        //private readonly IDapperService dapper;
        //public TableDetailsService(IDapperService dapper)
        //{
        //    this.dapper = dapper;
        //}
        //public async Task<int> AddOrUpdateTableDetails(TablesDetails tablesDetails)
        //{
        //    var sp = "sp_AddOrUpdateTablesDetails";
        //    var param = new
        //    {
        //        TableId = tablesDetails.TableId,
        //        TableStatus = tablesDetails.TableStatus,
               
        //    };
        //    var i = await dapper.Insert(param, sp);
        //    return i;
        //}

        //public IEnumerable<TablesDetails> GetTableDetailsList()
        //{
        //    var sp = "sp_GetTablesDetails";
        //    var i = dapper.GetAll<TablesDetails>(sp);
        //    return i;
        //}
    }
}
