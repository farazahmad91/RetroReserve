using Microsoft.AspNetCore.Mvc;
using API.Repository.Interface;
using Entities;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class StatusController : ControllerBase
    { private readonly IStatusService _statusService;
        public StatusController(IStatusService messageBoxService)
        {
            this._statusService = messageBoxService;
        }
        [HttpGet(nameof(GetStatusList))]
        public IActionResult GetStatusList()
        {
            var i = _statusService.GetStatusList();
            return Ok(i);

        }

        [HttpGet(nameof(GetStatusForDboy))]
        public IActionResult GetStatusForDboy(string email)
        {
            var i = _statusService.GetStatusForDboy(email);
            return Ok(i);

        }
    }
}
