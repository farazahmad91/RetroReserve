using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc;
using API.Repository.Interface;
using Entities;
// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EmployeeRoleMasterController : ControllerBase
    {
        private readonly IEmployeeRoleMasterService employeeRoleMasterService;
        public EmployeeRoleMasterController(IEmployeeRoleMasterService employeeRoleMasterService)
        {
            this.employeeRoleMasterService = employeeRoleMasterService;
        }
        [HttpPost(nameof(AddOrUpdateEmployeeRoleMaster))]
        public async Task<IActionResult> AddOrUpdateEmployeeRoleMaster(EmployeeRoleMaster employeeRoleMaster)
        {
            var i = await employeeRoleMasterService.AddOrUpdateEmployeeRoleMaster(employeeRoleMaster);
            return Ok(i);

        }

        [HttpGet(nameof(GetEmployeeRoleMasterList))]
        public IActionResult GetEmployeeRoleMasterList()
        {
            var i = employeeRoleMasterService.GetEmployeeRoleMasterList();
            return Ok(i);

        }
        // GET api/<EmployeeController>/5
        [HttpGet(nameof(GetEmployeeRoleById))]
        public IActionResult GetEmployeeRoleById(int id)
        {
            var i = employeeRoleMasterService.GetEmployeeRoleById(id);
            return Ok(i);
        }

        [HttpGet(nameof(GetEmpSalary))]
        public IActionResult GetEmpSalary(int id)
        {
            var i = employeeRoleMasterService.GetEmpSalary(id);
            return Ok(i);
        }

    }
}
