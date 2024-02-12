using API.Repository.Interface;
using Entities;

namespace API.Repository.Impliments
{
    public class EmployeeRoleMasterService : IEmployeeRoleMasterService
    {
        private readonly IDapperService dapper;
        public EmployeeRoleMasterService(IDapperService dapper)
        {
            this.dapper = dapper;
        }
        public async Task<int> AddOrUpdateEmployeeRoleMaster(EmployeeRoleMaster employeeRoleMaster)
        {
            var sp = "sp_AddOrUpdateEmployeeRoleMaster";
            var param = new
            {
                RoleId = employeeRoleMaster.RoleId,
                RoleName = employeeRoleMaster.RoleName,
                Salary = employeeRoleMaster.Salary,
                Status = employeeRoleMaster.Status,
            };
            var i = await dapper.Insert(param, sp);
            return i;
        }

        public IEnumerable<EmployeeRoleMaster> GetEmployeeRoleMasterList()
        {
            var sp = "sp_EmployeeRoleMasterList";
            var i = dapper.GetAll<EmployeeRoleMaster>(sp);
            return i;
        }
        public EmployeeRoleMaster GetEmployeeRoleById(int id)
        {
            var sp = "sp_GetEmployeeRoleById";
            var param = new
            {
                RoleId = id,
            };
            var i = dapper.GetById<EmployeeRoleMaster>(param, sp);
            return i;
        }

        public EmployeeRoleMaster GetEmpSalary(int id)
        {
            var sp = "sp_GetEmpSalary";
            var param = new
            {
                RoleId = id,
            };
            var i = dapper.GetById<EmployeeRoleMaster>(param, sp);
            return i;
        }
    }
}
