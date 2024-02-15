using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using RetroReserve.Models;
using Entities;

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
            employees.Image = uploadImage.Image(ImagePath, webHostEnvironment.WebRootPath);
            var i = await apirequest.Post("Employee/AddOrUpdateEmployee", employees);
            return Json(i);
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
            var i = await apirequest.GetData<EmployeesVM>(($"Employee/GetEmployeeById?id={id}"));
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
        public async Task<ActionResult> GetEmpSalary(int id)
        {
            var i = await apirequest.GetData<EmployeeRoleMaster>(($"EmployeeRoleMaster/GetEmpSalary?id={id}"));
            return Json(i);
        }
    }
}
