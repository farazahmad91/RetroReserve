using Microsoft.AspNetCore.Mvc;
using API.Repository.Interface;
using Entities;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class StatusController : ControllerBase
    { private readonly IStatusService messageBoxService;
        public StatusController(IStatusService messageBoxService)
        {
            this.messageBoxService = messageBoxService;
        }
        [HttpGet(nameof(GetStatusList))]
        public IActionResult GetStatusList()
        {
            var i = messageBoxService.GetStatusList();
            return Ok(i);

        }
    }
}
