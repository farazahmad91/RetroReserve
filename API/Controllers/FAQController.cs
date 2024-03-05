using API.Repository.Interface;
using Entities;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Diagnostics;

namespace API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class FAQController : ControllerBase
    {
        private readonly IFAQService _fAQService;    
        public FAQController(IFAQService fAQService)
        {
            this._fAQService = fAQService;    
        }
        [HttpPost(nameof(AddFAQ))]
        public async Task<IActionResult> AddFAQ(FAQ fAQ)
        {
            var i = await _fAQService.AddFaq(fAQ);
            return Ok(i);
        }

        [HttpPost(nameof(UpdateFAQStatus))]
        public async Task<IActionResult> UpdateFAQStatus(FAQ fAQ)
        {
            var i = await _fAQService.UpdateFAQStatus(fAQ);
            return Ok(i);
        }

        [HttpGet(nameof(FAQList))]
        public IActionResult FAQList()
        {
            var i = _fAQService.FAQList();
            return Ok(i);
        }

        [HttpGet(nameof(FAQListById))]
        public IActionResult FAQListById( int id)
        {
            var i = _fAQService.FAQListById(id);
            return Ok(i);
        }
    }
}
