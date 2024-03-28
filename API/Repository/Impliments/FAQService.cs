using API.Repository.Interface;
using Entities;

namespace API.Repository.Impliments
{
    public class FAQService: IFAQService
    {
        private readonly IDapperService _dapper;
        public FAQService(IDapperService dapper)
        {
            this._dapper = dapper;
        }

        public async Task<Response> AddFaq(FAQ fAQ)
        {
            var res = new Response
            {
                StatusCode = -1,
                ResponseText ="failed"
            };
            try
            {
                var sp = "InsertFAQ";
                var param = new
                {
                    FAQId = fAQ.FAQId,
                    Quest = fAQ.Quest,
                    Answers = fAQ.Answers,
                    Status= fAQ.Status,
                };
                res = await _dapper.GetAsync<Response>(sp, param);
                return  res;
            }
            catch (Exception ex)
            {
                var error = new Response
                {
                    ClassName = GetType().Name,
                    FunctionName = "AddFaq",
                    ResponseText = ex.Message,
                    Proc_Name = "InsertFAQ",
                };
                var _ = new ErrorLogService(_dapper).Error(error);
                return res;

            }
           
        }

        public IEnumerable<FAQ> FAQList()
        {
            IEnumerable<FAQ> res = new List<FAQ>();
            try
            {
                var sp = "sp_GetFAQ";
                var i = _dapper.GetAll<FAQ>(sp);
                res = i;
                return i;
            }
            catch (Exception ex)
            {
                var error = new Response
                {
                    ClassName = GetType().Name,
                    FunctionName = "FAQList",
                    ResponseText = ex.Message,
                    Proc_Name = "sp_GetFAQ",
                };
                var _ = new ErrorLogService(_dapper).Error(error);
                return res;
            }
        }
        public FAQ FAQListById(int id)
        {
            FAQ res = new FAQ();
            try
            {
                var sp = "sp_GetFAQById";
                var param = new
                {
                    FAQId = id,
                };
                var i = _dapper.GetById<FAQ>(param, sp);
                res = i;
                return i;
            }
            catch (Exception ex)
            {
                var error = new Response
                {
                    ClassName = GetType().Name,
                    FunctionName = "FAQListById",
                    ResponseText = ex.Message,
                    Proc_Name = "sp_GetFAQById",
                };
                var _ = new ErrorLogService(_dapper).Error(error);
                return res;
            }
            
        }

        public async Task<int> UpdateFAQStatus(FAQ fAQ)
        {
            var res = 0;
            try
            {
                var sp = "sp_GetFAQStatusUpdate";
                var param = new
                {
                    FAQId = fAQ.FAQId,
                    Status = fAQ.Status,
                };
                var i = await _dapper.Insert(param, sp);
                res = i;
                return i;
            }
            catch (Exception ex)
            {
                var error = new Response
                {
                    ClassName = GetType().Name,
                    FunctionName = "UpdateFAQStatus",
                    ResponseText = ex.Message,
                    Proc_Name = "sp_GetFAQStatusUpdate",
                };
                var _ = new ErrorLogService(_dapper).Error(error);
                return res;
            }
        }
    }
}
