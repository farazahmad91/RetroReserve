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
            int res = 0;

            try
            {
                var sp = "sp_AddOrUpdateContactus";
                var param = new
                {
                    ContactId = contact.ContactId,
                    UserName = contact.UserName,
                    Email = contact.Email,
                    subject = contact.subject,
                    Comment = contact.Comment,
                    status = contact.status
                };
               
                var i = await dapper.Insert(param, sp);
                if (i == 1)
                {
                    Contactmessage(contact.UserName, contact.Email);
                }
                res = i;
                return i;
            }
            catch (Exception ex)
            {
                var error = new Response
                {
                    ClassName = GetType().Name,
                    FunctionName = "AddOrUpdateContact",
                    ResponseText = ex.Message,
                    Proc_Name = "sp_AddOrUpdateContactus",
                };
                var _ = new ErrorLogService(dapper).Error(error);
                return res;
            }
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
            catch (Exception ex)
            {
                var error = new Response
                {
                    ClassName = GetType().Name,
                    FunctionName = "Contactmessage",
                    ResponseText = ex.Message,
                    Proc_Name = "",
                };
                var _ = new ErrorLogService(dapper).Error(error);
            }
        }


        public int DeleteFeedback(int id)
        {
            try
            {
                var sp = "sp_DeleteFeedback";
                var param = new
                {
                    ContactId = id,
                };
                return dapper.Delete(param, sp);
            }
            catch (Exception)
            {

                throw;
            }
        }

        public Contact GetContactUsById(int id)
        {
            try
            {
                var sp = "sp_GetContactUsById";
                var param = new
                {
                    ContactId = id,

                };
                var i = dapper.GetById<Contact>(param, sp);
                return i;
            }
            catch (Exception)
            {

                throw;
            }
        }

        public async Task<int> UpdateContactUsStatus(Contact contact)
        {
            try
            {
                var sp = "sp_UpdateContactUsStatus";

                object param;

                if (contact.status == 1)
                {
                    param = new
                    {
                        ContactId = contact.ContactId,
                        Status = contact.status,
                        ProblemSolveDate = contact.ProblemSolveDate,
                    };
                }
                else
                {
                    param = new
                    {
                        ContactId = contact.ContactId,
                        Status = contact.status,
                        ProblemSolveDate = contact.ProblemSolveDate,
                    };
                }

                if (contact.status == 2)
                {
                    ResContactmessage(contact.UserName, contact.Email);
                }

                var i = await dapper.Insert(param, sp);

                return i;
            }
            catch (Exception)
            {

                throw;
            }
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
            catch (Exception ex)
            {
                var error = new Response
                {
                    ClassName = GetType().Name,
                    FunctionName = "Contactmessage",
                    ResponseText = ex.Message,
                    Proc_Name = "",
                };
                var _ = new ErrorLogService(dapper).Error(error);
            }
        }
        public IEnumerable<Contact> GetContactusList()
        {
            try
            {
                var sp = "sp_GetContactusList";
                var i = dapper.GetAll<Contact>(sp);
                return i;
            }
            catch (Exception)
            {

                throw;
            }
        }
        public IEnumerable<MessageBox> GetSentMessageList()
        {
            try
            {
                var sp = "sp_GetAllSentMessage";
                var i = dapper.GetAll<MessageBox>(sp);
                return i;
            }
            catch (Exception)
            {

                throw;
            }
        }
        public async Task<int> AddOrUpdateMessageBox(MessageBox messageBox)
        {
            try
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
            catch (Exception)
            {

                throw;
            }
        }

        public int DeleteMessage(int id)
        {
            try
            {
                var sp = "sp_DeleteMassage";
                var param = new
                {
                    MessageId = id,
                };
                return dapper.Delete(param, sp);
            }
            catch (Exception)
            {

                throw;
            }
        }

        public MessageBox GetMessageById(int id)
        {
            try
            {
                var sp = "sp_GetMassageById";
                var param = new
                {
                    MessageId = id,
                };
                var i = dapper.GetById<MessageBox>(param, sp);
                return i;
            }
            catch (Exception)
            {

                throw;
            }
        }

        public MessageBox GetSentMessageById(int id)
        {
            try
            {
                var sp = "sp_GetAllSentMessageById";
                var param = new
                {
                    MessageId = id,

                };
                var i = dapper.GetById<MessageBox>(param, sp);
                return i;
            }
            catch (Exception)
            {

                throw;
            }
        }

        public IEnumerable<Contact> GetNewMessageNotification()
        {
            try
            {
                var sp = "sp_NewMessageNotify";
                var i = dapper.GetAll<Contact>(sp);
                return i;
            }
            catch (Exception)
            {

                throw;
            }
        }
    }
}
