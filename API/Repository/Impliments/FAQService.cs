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
                res.ResponseText = ex.Message;
                res.StatusCode = -1;
                return res;

            }
           
        }

        public IEnumerable<FAQ> FAQList()
        {
            var sp = "sp_GetFAQ";
            var i = _dapper.GetAll<FAQ>(sp);
            return i;
        }
        public FAQ FAQListById(int id)
        {
            try
            {
                var sp = "sp_GetFAQById";
                var param = new
                {
                    FAQId = id,
                };
                var i = _dapper.GetById<FAQ>(param, sp);
                return i;
            }
            catch (Exception)
            {

                throw;
            }
            
        }

        public async Task<int> UpdateFAQStatus(FAQ fAQ)
        {
            var sp = "sp_GetFAQStatusUpdate";
            var param = new
            {
                FAQId = fAQ.FAQId,
                Status = fAQ.Status,
            };
            var i = await _dapper.Insert(param, sp);
            return i;
        }
    }
}
