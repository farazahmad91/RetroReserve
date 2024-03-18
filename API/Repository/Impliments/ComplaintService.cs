using API.Repository.Interface;
using Entities;
using System.Collections.Generic;
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
        { var res = 0;
            try
            {
                var sp = "sp_AddOrUpdateComplaint";
                var param = new
                {
                    ComplaintId = complaint.ComplaintId,
                    TableId = complaint.TableId,
                    CustId = complaint.CustId,
                    ComplaintType = complaint.ComplaintType,
                    Email = complaint.Email,
                    ComplaintDescription = complaint.ComplaintDescription,
                    Status = complaint.Status,

                };
                var i = await dapper.Insert(param, sp);
                res= i;
                return i;
            }
            catch (Exception ex)
            {
                var error = new Response
                {
                    ClassName = GetType().Name,
                    FunctionName = "AddOrUpdateComplaint",
                    ResponseText = ex.Message,
                    Proc_Name = "sp_AddOrUpdateComplaint",
                };
                var _ = new ErrorLogService(dapper).Error(error);
                return res;
            }
        }

        public int DeleteComplaint(int id)
        { 
            int res = 0;
            try
            {
                var sp = "sp_DeleteComplaint";
                var param = new
                {
                    ComplaintId = id,
                };
                var i= dapper.Delete(param, sp);
                res = i;
                return i;
            }
            catch (Exception ex)
            {
                var error = new Response
                {
                    ClassName = GetType().Name,
                    FunctionName = "DeleteComplaint",
                    ResponseText = ex.Message,
                    Proc_Name = "sp_DeleteComplaint",
                };
                var _ = new ErrorLogService(dapper).Error(error);
                return res;
            }
        }

        public Complaint GetComplaintById(int id)
        {
            Complaint res = new Complaint();
            try
            {
                var sp = "sp_GetComplaintById";
                var param = new
                {
                    ComplaintId = id,
                };
                var i = dapper.GetById<Complaint>(param, sp);
                res = i;
                return i;
            }
            catch (Exception ex)
            {
                var error = new Response
                {
                    ClassName = GetType().Name,
                    FunctionName = "GetComplaintById",
                    ResponseText = ex.Message,
                    Proc_Name = "sp_GetComplaintById",
                };
                var _ = new ErrorLogService(dapper).Error(error);
                return res;
            }
        }

        public IEnumerable<Complaint> GetComplaintList()
        {
            IEnumerable <Complaint> res = new List<Complaint>();
            try
            {
                var sp = "sp_GetComplaintList";
                var i = dapper.GetAll<Complaint>(sp);
                res = i;
                return i;
            }
            catch (Exception ex)
            {
                var error = new Response
                {
                    ClassName = GetType().Name,
                    FunctionName = "GetComplaintList",
                    ResponseText = ex.Message,
                    Proc_Name = "sp_GetComplaintList",
                };
                var _ = new ErrorLogService(dapper).Error(error);
                return res;
            }
        }
    }
}
