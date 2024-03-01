using Entities;
namespace API.Repository.Interface
{
    public interface IEmployeeRoleMasterService
    {
        public Task<int> AddOrUpdateEmployeeRoleMaster(EmployeeRoleMaster  employeeRoleMaster);
        public IEnumerable<EmployeeRoleMaster> GetEmployeeRoleMasterList();
        public EmployeeRoleMaster GetEmployeeRoleById(int id);
        public EmployeeRoleMaster GetEmpSalary(int id);
        public Task<int> UpdateEmpRoleMasterStatus(EmployeeRoleMaster employeeRoleMaster);
    }
}
