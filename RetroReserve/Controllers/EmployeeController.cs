using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using RetroReserve.Models;
using Entities;
using Newtonsoft.Json;
using System.Security.Claims;

namespace RetroReserve.Controllers
{
    
    public class EmployeeController : Controller
    {

        private readonly IWebHostEnvironment webHostEnvironment;
        private readonly UploadImage uploadImage;
        private readonly APIrequest apirequest;
        public EmployeeController(APIrequest apirequest, IWebHostEnvironment webHostEnvironment, UploadImage uploadImage)
        {
            this.apirequest = apirequest;
            this.webHostEnvironment = webHostEnvironment;
            this.uploadImage = uploadImage;
        }
        [Authorize]
        public async Task<IActionResult> Index()
        {
            string email = User.FindFirstValue(ClaimTypes.Email);
            var i = apirequest.GetData<Employees>($"Employee/GetDboyIdByEmail?email={email}");
            int Id = i.Result.EmpId;

            var res = await apirequest.GetData<DboyOrderSummary>($"Employee/DboyOrderSummary?id={Id}");
            return View(res);
        }
        public async Task<IActionResult> DashboardStatus()
        {
            var email = User.FindFirstValue(ClaimTypes.Email);
            var i = await apirequest.GetData<List<DeliveredOrder>>($"Status/GetStatusForDboy?email={email}");
            return Json(i);
        }
        public ActionResult Employee()
        {
            return View();
        }
        [Authorize]
        public async Task<ActionResult> EmployeesList()
        {
            var i = await apirequest.GetData<List<Employees>>("Employee/GetEmployeeList");
            return PartialView(i);
        }
        [Authorize]
        public async Task<ActionResult> AddEmployee(int EmpId)
        {
            EmployeesVM employeesVM = new EmployeesVM();
            employeesVM = await apirequest.GetData<EmployeesVM>(($"Employee/GetEmployeeById?id={EmpId}"));
            return PartialView(employeesVM);
        }
        [Authorize]
        public async Task<ActionResult> AddOrUpdateEmployee(Employees employees, IFormFile ImagePath)
        {
            employees.Image = uploadImage.Image(ImagePath);
            var i = await apirequest.Post("Employee/AddOrUpdateEmployee", employees);
            var res = JsonConvert.DeserializeObject<Entities.Response>(i);
            return Json(res);
        }

        // GET: EmployeeController/Create

        [Authorize]
        public async Task<ActionResult> UpdateEmployeeStatus(Employees employees)
        {
          
            var i = await apirequest.Post("Employee/UpdateEmployeeStatus", employees);
            return Json(i);
        }
        public async Task<ActionResult> Details(int id)
        {
            var i = await apirequest.GetData<Employees>(($"Employee/GetEmployeeDetailById?id={id}"));
            return PartialView(i);
        }

        public async Task<ActionResult> AssignDboy()
        {
            var i = await apirequest.GetData<List<Employees>>("Employee/GetActiveDeliveryBoy");
            return PartialView(i);
        }

        [Route("/Chefs")]
        public async Task<ActionResult> Chefs()
        {
            var i = await apirequest.GetData<List<Employees>>("Employee/GetChefs");
            return PartialView(i);
        }
        [Authorize]
        public async Task<ActionResult> RolesList()
        {
            var i = await apirequest.GetData<List<EmployeeRoleMaster>>("EmployeeRoleMaster/GetEmployeeRoleMasterList");
            return PartialView(i);
        }
        [Authorize]
        public async Task<ActionResult> EditRoles(int RoleId)
        {
            var i = await apirequest.GetData<EmployeeRoleMaster>(($"EmployeeRoleMaster/GetEmployeeRoleById?id={RoleId}"));
            return PartialView(i);
        }
        [Authorize]
        [HttpPost]  
        public async Task<ActionResult> AddOrUpdateRoles(EmployeeRoleMaster employeeRoleMaster)
        {
            var i = await apirequest.Post("EmployeeRoleMaster/AddOrUpdateEmployeeRoleMaster", employeeRoleMaster);
            return Json(i);
        }

        public async Task<ActionResult> UpdateEmpRoleMasterStatus(EmployeeRoleMaster employeeRoleMaster)
        {
            var i = await apirequest.Post("EmployeeRoleMaster/UpdateEmpRoleMasterStatus", employeeRoleMaster);
            return Json(i);
        }
        public async Task<ActionResult> GetEmpSalary(int id)
        {
            var i = await apirequest.GetData<EmployeeRoleMaster>(($"EmployeeRoleMaster/GetEmpSalary?id={id}"));
            return Json(i);
        }

        [Route("/Salary")]
        public async Task<ActionResult> EmpSalary()
        {
            var i = await apirequest.GetData<List<Employees>>("Employee/GetEmployeeList");
            return PartialView(i);
        }

        public IActionResult PaymentGateway()
        {
            //var i = await apirequest.GetData<List<Employees>>("Employee/GetEmployeeList");
            return PartialView();
        }

        public async Task<ActionResult> AddEmpSalary(Employees employees)
        {

            var res = await apirequest.Post("Employee/AddEmpSalary", employees);
            var i = JsonConvert.DeserializeObject<Entities.Response>(res);
            return Json(i);
        }
    }
}
