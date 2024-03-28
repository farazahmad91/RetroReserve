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
            var res = 0;
            try
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
                res = i;
                return i;
            }
            catch (Exception ex)
            {
                var error = new Response
                {
                    ClassName = GetType().Name,
                    FunctionName = "AddOrUpdateEmployeeRoleMaster",
                    ResponseText = ex.Message,
                    Proc_Name = "sp_AddOrUpdateEmployeeRoleMaster",
                };
                var _ = new ErrorLogService(dapper).Error(error);
                return res;
            }
            
        }

        public IEnumerable<EmployeeRoleMaster> GetEmployeeRoleMasterList()
        {
            IEnumerable<EmployeeRoleMaster> res = new List<EmployeeRoleMaster>();
            try
            {
                var sp = "sp_EmployeeRoleMasterList";
                var i = dapper.GetAll<EmployeeRoleMaster>(sp);
                res = i;
                return i;
            }
            catch (Exception ex)
            {
                var error = new Response
                {
                    ClassName = GetType().Name,
                    FunctionName = "GetEmployeeRoleMasterList",
                    ResponseText = ex.Message,
                    Proc_Name = "sp_EmployeeRoleMasterList",
                };
                var _ = new ErrorLogService(dapper).Error(error);
                return res;
            }
        }
        public EmployeeRoleMaster GetEmployeeRoleById(int id)
        {
            EmployeeRoleMaster res = new EmployeeRoleMaster();
            try
            {
                var sp = "sp_GetEmployeeRoleById";
                var param = new
                {
                    RoleId = id,
                };
                var i = dapper.GetById<EmployeeRoleMaster>(param, sp);
                res = i;
                return i;
            }
            catch (Exception ex)
            {
                var error = new Response
                {
                    ClassName = GetType().Name,
                    FunctionName = "GetEmployeeRoleById",
                    ResponseText = ex.Message,
                    Proc_Name = "sp_GetEmployeeRoleById",
                };
                var _ = new ErrorLogService(dapper).Error(error);
                return res;
            }
        }

        public EmployeeRoleMaster GetEmpSalary(int id)
        {
            EmployeeRoleMaster res = new EmployeeRoleMaster();
            try
            {
                var sp = "sp_GetEmpSalary";
                var param = new
                {
                    RoleId = id,
                };
                var i = dapper.GetById<EmployeeRoleMaster>(param, sp);
                res = i;
                return i;
            }
            catch (Exception ex)
            {
                var error = new Response
                {
                    ClassName = GetType().Name,
                    FunctionName = "GetEmpSalary",
                    ResponseText = ex.Message,
                    Proc_Name = "sp_GetEmpSalary",
                };
                var _ = new ErrorLogService(dapper).Error(error);
                return res;
            }
        }

        public async Task<int> UpdateEmpRoleMasterStatus(EmployeeRoleMaster employeeRoleMaster)
        {
            var res = 0;
            try
            {
                var sp = "sp_UpdateEmpRoleMasterStatus";
                var param = new
                {
                    RoleId = employeeRoleMaster.RoleId,
                    Status = employeeRoleMaster.Status,
                };
                var i = await dapper.Insert(param, sp);
                res = i;
                return i;
            }
            catch (Exception ex)
            {
                var error = new Response
                {
                    ClassName = GetType().Name,
                    FunctionName = "UpdateEmpRoleMasterStatus",
                    ResponseText = ex.Message,
                    Proc_Name = "sp_UpdateEmpRoleMasterStatus",
                };
                var _ = new ErrorLogService(dapper).Error(error);
                return res;
            }
        }
    }
}
