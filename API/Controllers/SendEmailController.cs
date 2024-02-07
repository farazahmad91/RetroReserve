using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using API.Repository.Interface;
using Entities;

namespace API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SendEmailController : ControllerBase
    {
        private readonly IEmailSenderService emailSenderService;
        public SendEmailController(IEmailSenderService emailSenderService)
        {
            this.emailSenderService = emailSenderService;
        }

        [HttpPost(nameof(SendEmail))]   
        public IActionResult SendEmail(MessageBox messageBox)
        {
            emailSenderService.SendEmail(messageBox.Email, messageBox.Subject, messageBox.Description);
            return Ok();
        }
    }
}
