using API.Repository.Interface;
using Entities;
using System.Collections.Generic;

namespace API.Repository.Impliments
{
    public class EmployeeService : IEmployeeService
    {
        
        private readonly IDapperService dapper;
        private readonly IEmployeeRoleMasterService employeeRoleMasterService;
        public EmployeeService(IDapperService dapper, IEmployeeRoleMasterService employeeRoleMasterService)
        {
            this.dapper = dapper;
           this.employeeRoleMasterService = employeeRoleMasterService;
        }
        public async Task<int> AddOrUpdateEmployee(Employees employees)
        {
            var sp = "sp_AddOrUpdateEmployees";
            employeeRoleMasterService.GetEmployeeRoleMasterList();
            var i = await dapper.Insert(employees,sp);
            
            return i;
        }

        public int DeleteEmployee(int id)
        {
            var sp = "sp_DeleteEmployee";
            var param = new
            {
                EmpId = id,
            };
            return dapper.Delete(param, sp);
        }

        public EmployeesVM GetEmployeeById(int id)
        {
            try
            {
                string storedProcedureName = "sp_GetEmployeeById";

                var parameters = new
                {
                    EmpId = id
                };
                EmployeesVM employeesVM = new EmployeesVM();
              
              var res = dapper.GetById<EmployeesVM>(parameters, storedProcedureName);
                if (res != null)
                {
                    employeesVM = res;
                }
                employeesVM.employeeRoleMaster = employeeRoleMasterService.GetEmployeeRoleMasterList();
                return employeesVM;
            }
            catch (Exception ex)
            {

                throw;
            }
        }

        public Employees GetEmployeeDetailById(int id)
        {
            try
            {
                string sp = "sp_GetEmployeeDetailsById";

                var param = new
                {
                    EmpId = id
                };

                var res = dapper.GetById<Employees>(param, sp);
                return res;
            }
            catch (Exception ex)
            {

                throw;
            }
        }
        public async Task<int> UpdateEmployeeStatus(Employees employees)
        {
            var sp = "sp_UpdateEmployeeStatus";
            var param = new
            {
                EmpId = employees.EmpId,
                IsActive = employees.IsActive,
            };
            var i = await dapper.Insert(param, sp);
            return i;
        }
        public  IEnumerable<Employees> GetEmployeeList()
        {
            var sp = "sp_GetEmployeeList";
            var i =  dapper.GetAll<Employees>(sp);
            return i;
        }
        public IEnumerable<Employees> GetChefs()
        {
            var sp = "sp_Chefs";
            var i = dapper.GetAll<Employees>(sp);
            return i;
        }


    }
}
