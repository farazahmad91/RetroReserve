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
		private readonly IEmailSenderService _EmailSender;
		public EmployeeService(IDapperService dapper, IEmployeeRoleMasterService employeeRoleMasterService, IEmailSenderService EmailSender)
        {
            this.dapper = dapper;
           this.employeeRoleMasterService = employeeRoleMasterService;
            this._EmailSender =EmailSender;

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
                var error = new Response
                {
                    ClassName = GetType().Name,
                    FunctionName = "AddOrUpdateEmployee",
                    ResponseText = ex.Message,
                    Proc_Name = "sp_AddOrUpdateEmployees",
                };
                var _ = new ErrorLogService(dapper).Error(error);
                return res;
            }
            
            
        }

        public int DeleteEmployee(int id)
        {
            try
            {
                var sp = "sp_DeleteEmployee";
                var param = new
                {
                    EmpId = id,
                };
                return dapper.Delete(param, sp);
            }
            catch (Exception)
            {

                throw;
            }
        }

        public EmployeesVM GetEmployeeById(int id)
        {
            EmployeesVM resp = new EmployeesVM();
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
                resp = employeesVM;
                return employeesVM;
            }
            catch (Exception ex)
            {
                var error = new Response
                {
                    ClassName = GetType().Name,
                    FunctionName = "GetEmployeeById",
                    ResponseText = ex.Message,
                    Proc_Name = "sp_GetEmployeeById",
                };
                var _ = new ErrorLogService(dapper).Error(error);
                return resp;
            }
        }

        public Employees GetEmployeeDetailById(int id)
        {
            Employees res = new Employees();
            try
            {
                string sp = "sp_GetEmployeeDetailsById";

                var param = new
                {
                    EmpId = id
                };

                var i = dapper.GetById<Employees>(param, sp);
                res = i;
                return i;
            }
            catch (Exception ex)
            {
                var error = new Response
                {
                    ClassName = GetType().Name,
                    FunctionName = "GetEmployeeDetailById",
                    ResponseText = ex.Message,
                    Proc_Name = "sp_GetEmployeeDetailsById",
                };
                var _ = new ErrorLogService(dapper).Error(error);
                return res;
            }
        }
        public async Task<int> UpdateEmployeeStatus(Employees employees)
        {
            var res = 0;
            try
            {
                var sp = "sp_UpdateEmployeeStatus";
                var param = new
                {
                    EmpId = employees.EmpId,
                    IsActive = employees.IsActive,
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
                    FunctionName = "UpdateEmployeeStatus",
                    ResponseText = ex.Message,
                    Proc_Name = "sp_UpdateEmployeeStatus",
                };
                var _ = new ErrorLogService(dapper).Error(error);
                return res;
            }
        }
        public  IEnumerable<Employees> GetEmployeeList()
        {
            IEnumerable<Employees> res = new List<Employees>();
            try
            {
                var sp = "sp_GetEmployeeList";
                var i = dapper.GetAll<Employees>(sp);
                res = i;
                return i;
            }
            catch (Exception ex)
            {
                var error = new Response
                {
                    ClassName = GetType().Name,
                    FunctionName = "GetEmployeeList",
                    ResponseText = ex.Message,
                    Proc_Name = "sp_GetEmployeeList",
                };
                var _ = new ErrorLogService(dapper).Error(error);
                return res;
            }

        }
        public IEnumerable<Employees> GetChefs()
        {
            IEnumerable<Employees> res = new List<Employees>();
            try
            {
                var sp = "sp_Chefs";
                var i = dapper.GetAll<Employees>(sp);
                res = i;
                return i;
            }
            catch (Exception ex)
            {
                var error = new Response
                {
                    ClassName = GetType().Name,
                    FunctionName = "GetChefs",
                    ResponseText = ex.Message,
                    Proc_Name = "sp_Chefs",
                };
                var _ = new ErrorLogService(dapper).Error(error);
                return res;
            }
        }

        public IEnumerable<Employees> GetActiveDeliveryBoy()
        {
            IEnumerable<Employees> res = new List<Employees>();
            try
            {
                var sp = "sp_GetActiveDeliveryBoy";
                var i = dapper.GetAll<Employees>(sp);
                res = i;
                return i;
            }
            catch (Exception ex)
            {
                var error = new Response
                {
                    ClassName = GetType().Name,
                    FunctionName = "GetActiveDeliveryBoy",
                    ResponseText = ex.Message,
                    Proc_Name = "sp_GetActiveDeliveryBoy",
                };
                var _ = new ErrorLogService(dapper).Error(error);
                return res;
            }
        }

        public IEnumerable<DeliveredOrder> GetOrderListByDboy(string email)
        {
            IEnumerable<DeliveredOrder> res = new List<DeliveredOrder>();
            var sp = "sp_GetOrderListByDboy";
            try
            {
                var param = new
                {
                    Email = email,
                };
                var i = dapper.GetItemsById<DeliveredOrder>(param, sp);
                res = i;
                return i;
            }
            catch (Exception ex)
            {
                var error = new Response
                {
                    ClassName = GetType().Name,
                    FunctionName = "GetOrderListByDboy",
                    ResponseText = ex.Message,
                    Proc_Name = "sp_GetOrderListByDboy",
                };
                var _ = new ErrorLogService(dapper).Error(error);
                return res;
            }
        }

        public Employees GetDboyIdByEmail(string email)
        {
            Employees res = new Employees();
            try
            {
                var sp = "sp_GetDboyIdByEmail";
                var param = new
                {
                    Email = email,
                };
                var i = dapper.GetById<Employees>(param, sp);
                res = i;
                return i;
            }
            catch (Exception ex)
            {
                var error = new Response
                {
                    ClassName = GetType().Name,
                    FunctionName = "GetDboyIdByEmail",
                    ResponseText = ex.Message,
                    Proc_Name = "sp_GetDboyIdByEmail",
                };
                var _ = new ErrorLogService(dapper).Error(error);
                return res;
            }
        }

        public DboyOrderSummary DboyOrderSummary(int id)
        {
            DboyOrderSummary res = new DboyOrderSummary();
            try
            {
                var sp = "sp_DboyOrderSummary";
                var param = new
                {
                    EmpId = id,
                };
                var i = dapper.GetById<DboyOrderSummary>(param, sp);
                res = i;
                return i;
            }
            catch (Exception ex)
            {
                var error = new Response
                {
                    ClassName = GetType().Name,
                    FunctionName = "DboyOrderSummary",
                    ResponseText = ex.Message,
                    Proc_Name = "sp_DboyOrderSummary",
                };
                var _ = new ErrorLogService(dapper).Error(error);
                return res;
            }
        }

        public async Task<Response> AddEmpSalary(Employees employees)
        {
            var res = new Response()
            {
                ResponseText = "Failed To Save",
                StatusCode = -1,
            };
            try
            {
                var sp = "sp_AddEmpSalary";
                var param = new
                {
                    EmpId = employees.EmpId,
                    RoleId = employees.RoleId,
                };
                employeeRoleMasterService.GetEmployeeRoleMasterList();
                res = await dapper.GetAsync<Response>(sp, param);
                string Subject = "test";
				string Msg = "testing";
				if (res.StatusCode==1)
                {
                    _EmailSender.SendEmail(employees.Email,Subject,Msg);

				}
                return res;
            }
            catch (Exception ex)
            {
                var error = new Response
                {
                    ClassName = GetType().Name,
                    FunctionName = "AddEmpSalary",
                    ResponseText = ex.Message,
                    Proc_Name = "sp_AddEmpSalary",
                };
                var _ = new ErrorLogService(dapper).Error(error);
                return res;
            }


        }

        public IEnumerable<Employees> GetEmployeeSalaryDetailById(int id)
        {
            IEnumerable<Employees> res = new List<Employees>();
            try
            {
                string sp = "sp_GetEmpSalarydetailById";

                var param = new
                {
                    EmpId = id
                };

                var i = dapper.GetItemsById<Employees>(param, sp);
                res = i;
                return res;
            }
            catch (Exception ex)
            {
                var error = new Response
                {
                    ClassName = GetType().Name,
                    FunctionName = "GetEmployeeSalaryDetailById",
                    ResponseText = ex.Message,
                    Proc_Name = "sp_GetEmpSalarydetailById",
                };
                var _ = new ErrorLogService(dapper).Error(error);
                return res;
            }
        }

        public IEnumerable<DeliveredOrder> GetDBoyCommitionById(int id)
        {
            IEnumerable<DeliveredOrder> res = new List<DeliveredOrder>();
            try
            {
                string sp = "sp_GetDBoyCommitionById";

                var param = new
                {
                    EmpId = id
                };

                var i = dapper.GetItemsById<DeliveredOrder>(param, sp);
                res = i;
                return res;
            }
            catch (Exception ex)
            {
                var error = new Response
                {
                    ClassName = GetType().Name,
                    FunctionName = "GetDBoyCommitionById",
                    ResponseText = ex.Message,
                    Proc_Name = "sp_GetDBoyCommitionById",
                };
                var _ = new ErrorLogService(dapper).Error(error);
                return res;
            }
        }
    }
}
