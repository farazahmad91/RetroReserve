using API.Repository.Interface;
using Entities;
using System.Collections.Generic;
using static System.Net.Mime.MediaTypeNames;
using System.Numerics;
using System.Reflection;

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
        public async Task<Response> AddOrUpdateEmployee(Employees employees)
        {
            var res = new Response()
            {
                ResponseText = "Failed To Save",
                StatusCode = -1,
            };
            try
            {
                var sp = "sp_AddOrUpdateEmployees";
                var param = new
                {
                    EmpId = employees.EmpId,
                    Name = employees.Name,
                    Email = employees.Email,
                    RoleId = employees.RoleId,
                    Image = employees.Image,
                    Salary = employees.Salary,
                    Phone = employees.Phone,
                    Gender = employees.Gender,
                    DOB = employees.DOB,
                    AdharNo = employees.AdharNo,
                    Address = employees.Address,
                    IsActive = employees.IsActive,
                };
                employeeRoleMasterService.GetEmployeeRoleMasterList();
                res = await dapper.GetAsync<Response>(sp, param);
                return res;
            }
            catch (Exception ex)
            {
                res.ResponseText = ex.Message;
                res.StatusCode = -1;
                return res;
            }
            
            
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

        public IEnumerable<Employees> GetActiveDeliveryBoy()
        {
            var sp = "sp_GetActiveDeliveryBoy";
            var i = dapper.GetAll<Employees>(sp);
            return i;
        }

        public IEnumerable<DeliveredOrder> GetOrderListByDboy(string email)
        {
            var sp = "sp_GetOrderListByDboy";
            var param = new
            {
                Email = email,
            };
            var i = dapper.GetItemsById<DeliveredOrder>(param, sp);
            return i;
        }
    }
}
