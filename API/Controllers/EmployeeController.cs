﻿using API.Repository.Interface;
using Entities;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EmployeeController : ControllerBase
    {
        private readonly IEmployeeService employeeService;
        public EmployeeController(IEmployeeService employeeService)
        {
            this.employeeService = employeeService;
        }
        // GET: api/<EmployeeController>
        [HttpGet(nameof(GetEmployeeList))]
        public IActionResult GetEmployeeList()
        {
          var i = employeeService.GetEmployeeList();
            return Ok(i);
        }

        // GET api/<EmployeeController>/5
        [HttpGet(nameof(GetEmployeeById))]
        public IActionResult GetEmployeeById(int id)
        {
           var i =  employeeService.GetEmployeeById(id);
            return Ok(i);
        }

        // POST api/<EmployeeController>
        [HttpPost(nameof(AddOrUpdateEmployee))]
        public async Task<IActionResult> AddOrUpdateEmployee(Employees employees)
        {
            var i = await employeeService.AddOrUpdateEmployee(employees);
            return Ok(i);
        }

        [HttpPost(nameof(UpdateEmployeeStatus))]
        public async Task<IActionResult> UpdateEmployeeStatus(Employees employees)
        {
            var i = await employeeService.UpdateEmployeeStatus(employees);
            return Ok(i);
        }

        // DELETE api/<EmployeeController>/5
        [HttpDelete(nameof(DeleteEmployee))]
        public IActionResult DeleteEmployee(int id)
        {
            employeeService.DeleteEmployee(id);
            return Ok();
        }
        [HttpGet(nameof(GetChefs))]
        public IActionResult GetChefs()
        {
            var i = employeeService.GetChefs();
            return Ok(i);
        }
    }
}
