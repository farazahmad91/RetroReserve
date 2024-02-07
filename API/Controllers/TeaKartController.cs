using Entities;
using Microsoft.AspNetCore.Mvc;
using API.Repository.Interface;
// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TeaKartController : ControllerBase
    {
        private readonly ITeaKartService teaKartService;
        public TeaKartController(ITeaKartService teaKartService)
        {
            this.teaKartService = teaKartService;
        }
        [HttpPost(nameof(AddOrUpdateTeaKart))]
        public async Task<IActionResult> AddOrUpdateTeaKart(TeaKart teaKart)
        {
            var i = await teaKartService.AddOrUpdateTeaKart(teaKart);
            return Ok(i);

        }
        [HttpGet(nameof(GetTeaKartById))]
        public IActionResult GetTeaKartById(int id)
        {
            var i = teaKartService.GetTeaKartById(id);
            return Ok(i);

        }
        [HttpGet(nameof(GetTeaKartList))]
        public IActionResult GetTeaKartList()
        {
            var i = teaKartService.GetTeaKartList();
            return Ok(i);

        }
        [HttpDelete(nameof(DeleteTeaKart))]
        public IActionResult DeleteTeaKart(int id)
        {
            teaKartService.DeleteTeaKart(id);
            return Ok();

        }
        [HttpPost(nameof(UpdateTeaKartStatus))]
        public async Task<IActionResult> UpdateTeaKartStatus(TeaKart teaKart)
        {
            var i = await teaKartService.UpdateTeaKartStatus(teaKart);
            return Ok(i);

        }
    }
}
