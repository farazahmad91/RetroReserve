using Entities;
using API.Repository.Interface;
using System.Net.Mail;

namespace API.Repository.Impliments
{
    public class ContactService : IContactService
    {
        private readonly IDapperService dapper;
        private readonly IEmailSenderService _emailSenderService;
        public ContactService(IDapperService dapper, IEmailSenderService emailSenderService)
        {
            this.dapper = dapper;
            _emailSenderService = emailSenderService;
        }
        public async Task<int> AddOrUpdateContact(Contact contact)
        {
            
            var sp = "sp_AddOrUpdateContactus";
            var param = new
            {
                ContactId=contact.ContactId,
                UserName=contact.UserName,
                Email=contact.Email,
                subject= contact.subject,
                Comment =contact.Comment,
                status= contact.status
            };
            Contactmessage(contact.UserName , contact.Email);
            var i = await dapper.Insert(param, sp);
            return i;
        }

        private void Contactmessage(string name, string email)
        {
            MailMessage mail = new MailMessage();
            SmtpClient SmtpServer = new SmtpClient("smtp.gmail.com");
            string fromaddress = "cozmotest91@gmail.com";
            mail.From = new MailAddress(fromaddress);
            string toaddress = email;
            mail.To.Add(toaddress);
            mail.Subject = "Contact Message (RetroReserve)";
            mail.Body = $"Dear {name},\n\nYour message has been received. We appreciate you for contacting us. We will make every effort to solve your problem.\n\n\nThank you & Regards,\nRetroReserve";

            SmtpServer.Port = 587;
            SmtpServer.Credentials = new System.Net.NetworkCredential("cozmotest91@gmail.com", "cuncfbllgbiwwyax");
            SmtpServer.EnableSsl = true;
            try
            {
                SmtpServer.Send(mail);
            }
            catch
            {
                throw;
            }
        }


        public int DeleteFeedback(int id)
        {
            var sp = "sp_DeleteFeedback";
            var param = new
            {
                ContactId = id,
            };
            return dapper.Delete(param, sp);
        }

        public Contact GetContactUsById(int id)
        {
            var sp = "sp_GetContactUsById";
            var param = new
            {
                ContactId = id,
                
            };
            var i =  dapper.GetById<Contact>(param, sp);
            return i;
        }

        public async Task<int> UpdateContactUsStatus(Contact contact)
        {
            var sp = "sp_UpdateContactUsStatus";
            var param = new
            {
                ContactId = contact.ContactId,
                status = contact.status,
                ProblemSolveDate = contact.ProblemSolveDate,
            };
            if (contact.status == 1)
            {
                ResContactmessage(contact.UserName, contact.Email);
            }
          
            var i = await dapper.Insert(param, sp);
      
            return i;
        }
        private void ResContactmessage(string name, string email)
        {
            MailMessage mail = new MailMessage();
            SmtpClient SmtpServer = new SmtpClient("smtp.gmail.com");
            string fromaddress = "cozmotest91@gmail.com";
            mail.From = new MailAddress(fromaddress);
            string toaddress = email;
            mail.To.Add(toaddress);
            mail.Subject = "Problem";
            mail.Body = "Dear " + name + ",\n\nWe are pleased to inform you that your issue has been successfully resolved. Our team has made every effort to address your concerns, and we appreciate your patience.\n\nIf you have any further questions or need additional assistance, please feel free to reach out to us. Your satisfaction is our priority.\n\nThank you for choosing RetroReserve.\n\nBest Regards,\n";

            SmtpServer.Port = 587;
            SmtpServer.Credentials = new System.Net.NetworkCredential("cozmotest91@gmail.com", "cuncfbllgbiwwyax");
            SmtpServer.EnableSsl = true;
            try
            {
                SmtpServer.Send(mail);
            }
            catch
            {
                throw;
            }
        }
        public IEnumerable<Contact> GetContactusList()
        {
            var sp = "sp_GetContactusList";
            var i = dapper.GetAll<Contact>(sp);
            return i;
        }
        public IEnumerable<MessageBox> GetSentMessageList()
        {
            var sp = "sp_GetAllSentMessage";
            var i = dapper.GetAll<MessageBox>(sp);
            return i;
        }
        public async Task<int> AddOrUpdateMessageBox(MessageBox messageBox)
        {
            var sp = "sp_AddOrUpdateMassagebox";
            var param = new
            {
                MessageId = messageBox.MessageId,
                Email = messageBox.Email,
                Subject = messageBox.Subject,
                Description = messageBox.Description,
                Status = messageBox.Status,

            };
            _emailSenderService.SendEmail(messageBox.Email, messageBox.Subject, messageBox.Description);
            var i = await dapper.Insert(param, sp);
            return i;
        }

        public int DeleteMessage(int id)
        {
            var sp = "sp_DeleteMassage";
            var param = new
            {
                MessageId = id,
            };
            return dapper.Delete(param, sp);
        }

        public MessageBox GetMessageById(int id)
        {
            var sp = "sp_GetMassageById";
            var param = new
            {
                MessageId = id,
            };
            var i = dapper.GetById<MessageBox>(param, sp);
            return i;
        }

        public MessageBox GetSentMessageById(int id)
        {
            var sp = "sp_GetAllSentMessageById";
            var param = new
            {
                MessageId = id,

            };
            var i = dapper.GetById<MessageBox>(param, sp);
            return i;
        }
    }
}
