using API.Repository.Interface;
using Entities;
namespace API.Repository.Impliments
{
    public class ComplaintService : IComplaintService
    {
        private readonly IDapperService dapper;
        public ComplaintService(IDapperService dapper)
        {
            this.dapper = dapper;
        }
        public async Task<int> AddOrUpdateComplaint(Complaint complaint)
        {
            var sp = "sp_AddOrUpdateComplaint";
            var param = new
            {
                ComplaintId=complaint.ComplaintId,
                TableId=complaint.TableId,
                CustId=complaint.CustId,
                ComplaintType=complaint.ComplaintType,
                Email=complaint.Email,
                ComplaintDescription=complaint.ComplaintDescription,
                Status= complaint.Status,

            };
            var i = await dapper.Insert(param, sp);
            return i;
        }

        public int DeleteComplaint(int id)
        {
            var sp = "sp_DeleteComplaint";
            var param = new
            {
                ComplaintId = id,
            };
            return dapper.Delete(param, sp);
        }

        public Complaint GetComplaintById(int id)
        {
            var sp = "sp_GetComplaintById";
            var param = new
            {
                ComplaintId = id,
            };
            var i = dapper.GetById<Complaint>(param, sp);
            return i;
        }

        public IEnumerable<Complaint> GetComplaintList()
        {
            var sp = "sp_GetComplaintList";
            var i = dapper.GetAll<Complaint>(sp);
            return i;
        }
    }
}
