using Entities;
using API.Repository.Interface;

namespace API.Repository.Impliments
{
    public class ErrorLogService : IErrorLogService
    {
        private readonly IDapperService _dapper;
        public ErrorLogService(IDapperService dapper)
        {
            this._dapper = dapper;
        }
        public async Task<int> Error(object entity)
        {
            var sp = "InsertErrorLog";
            var res = (Response)entity;
            var param = new
            {
                ClassName = res.ClassName,
                FunctionName = res.FunctionName,
                ResponseText = res.ResponseText,
                Proc_Name = res.Proc_Name,
            };
            var i = await _dapper.Insert(param, sp);
            return i;
        }
    }
}
