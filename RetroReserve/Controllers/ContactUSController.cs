using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using RetroReserve.Models;
using Entities;

namespace RetroReserve.Controllers
{
    [Authorize]
    public class ContactUSController : Controller
    {
        private readonly  APIrequest apirequest;
        private readonly IWebHostEnvironment webHostEnvironment;
        private readonly UploadImage uploadImage;
        public ContactUSController(APIrequest apirequest, IWebHostEnvironment webHostEnvironment, UploadImage uploadImage)
        {
            this.apirequest = apirequest;
            this.webHostEnvironment = webHostEnvironment; 
            this.uploadImage = uploadImage;
        }
        [Route("/Inbox")]
        public async Task<IActionResult> ContactusList()
        {
            var i = await apirequest.GetData<List<Contact>>("Contact/GetContactusList");
            return View(i);
        }

        public async Task<IActionResult> ContactDetails(int id)
        {
            var i = await apirequest.GetData<Contact>(($"Contact/GetContactUsById?Id={id}"));
            return PartialView(i);
        }
        [Route("/Contact")]
        public ActionResult ContactUS()
        {
            return View();
        }

        public async Task<IActionResult> AddOrUpdateContact(Contact contact)
        {
            var i = await apirequest.Post("Contact/AddOrUpdateContact", contact);
            return Json(i);
        }
        public async Task<IActionResult> UpdateContactUsStatus(Contact contact)
        {
            var i = await apirequest.Post("Contact/UpdateContactUsStatus", contact);
            return Json(i);

        }
        [Route("/Compose")]
		public ActionResult Compose()
		{
			return View();
		}
        public async Task<IActionResult> SendMsg(MessageBox messageBox)
        {
            var i = await apirequest.Post("Contact/AddOrUpdateMessageBox", messageBox);
            return Json(i);

        }
        [Route("/Sent")]
        public async Task<IActionResult> sentmessage()
        {
            var i = await apirequest.GetData<List<MessageBox>>("Contact/GetSentMessageList");
            return View(i);
        }
        public async Task<IActionResult> SentMessageDetail(int id)
        {
            var i = await apirequest.GetData<MessageBox>(($"Contact/GetSentMessageById?Id={id}"));
            return PartialView(i);
        }
        public async Task<IActionResult> GetNewMessageNotification()
        {
            var i = await apirequest.GetData<List<Contact>>("Contact/GetNewMessageNotification");
            return Json(i);
        }
    }
}
