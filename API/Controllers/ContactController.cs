using Microsoft.AspNetCore.Mvc;
using API.Repository.Interface;
using Entities;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ContactController : ControllerBase
    {
        private readonly IContactService contactService;
        public ContactController(IContactService contactService)
        {
            this.contactService = contactService;
        }

        [HttpPost(nameof(AddOrUpdateContact))]
        public async Task<IActionResult> AddOrUpdateContact(Contact contact)
        {
            var i = await contactService.AddOrUpdateContact(contact);
            return Ok(i);

        }
        [HttpGet(nameof(GetContactUsById))]
        public IActionResult GetContactUsById(int id)
        {
            var i = contactService.GetContactUsById(id);
            return Ok(i);

        }
        [HttpGet(nameof(GetContactusList))]
        public IActionResult GetContactusList()
        {
            var i = contactService.GetContactusList();
            return Ok(i);

        }
        [HttpDelete(nameof(DeleteFeedback))]
        public IActionResult DeleteFeedback(int id)
        {
            contactService.DeleteFeedback(id);
            return Ok();

        }
        [HttpPost(nameof(UpdateContactUsStatus))]
        public async Task<IActionResult> UpdateContactUsStatus(Contact contact)
        {
            var i = await contactService.UpdateContactUsStatus(contact);
            return Ok(i);
        }

        [HttpPost(nameof(AddOrUpdateMessageBox))]
        public async Task<IActionResult> AddOrUpdateMessageBox(MessageBox messageBox)
        {
            var i = await contactService.AddOrUpdateMessageBox(messageBox);
            return Ok(i);

        }
        [HttpGet(nameof(GetMessageById))]
        public IActionResult GetMessageById(int id)
        {
            var i = contactService.GetMessageById(id);
            return Ok(i);

        }

        [HttpDelete(nameof(DeleteMessage))]
        public IActionResult DeleteMessage(int id)
        {
            contactService.DeleteMessage(id);
            return Ok();

        }

        [HttpGet(nameof(GetSentMessageList))]
        public IActionResult GetSentMessageList()
        {
            var i = contactService.GetSentMessageList();
            return Ok(i);

        }
        [HttpGet(nameof(GetSentMessageById))]
        public IActionResult GetSentMessageById(int id)
        {
            var i = contactService.GetSentMessageById(id);
            return Ok(i);

        }
        [HttpGet(nameof(GetNewMessageNotification))]
        public IActionResult GetNewMessageNotification()
        {
            var i = contactService.GetNewMessageNotification();
            return Ok(i);

        }
    }
}
