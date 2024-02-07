using Entities;

namespace API.Repository.Interface
{
    public interface IComplaintService
    {
        public Task<int> AddOrUpdateComplaint(Complaint complaint);
        public Complaint GetComplaintById(int id);
        public IEnumerable<Complaint> GetComplaintList();
        public int DeleteComplaint(int id);
    }
}
