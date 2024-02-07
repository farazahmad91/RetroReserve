using API.Repository.Interface;
using System.Net;
using System.Net.Mail;
using System.Net.Mime;
namespace API.Repository.Impliments
{
    public class EmailSenderService : IEmailSenderService
    {
        public void SendEmail(string email, string subject, string body)
        {
            try
            {
                using (MailMessage mail = new MailMessage())
                using (SmtpClient smtpServer = new SmtpClient("smtp.gmail.com"))
                {
                    string fromAddress = "cozmotest91@gmail.com";
                    mail.From = new MailAddress(fromAddress);
                    mail.To.Add(email);
                    mail.Subject = subject;
                    mail.Body = body;
                    smtpServer.Port = 587;
                    smtpServer.Credentials = new System.Net.NetworkCredential("cozmotest91@gmail.com", "cuncfbllgbiwwyax");
                    smtpServer.EnableSsl = true;

                    smtpServer.Send(mail);
                }
            }
            catch (Exception ex)
            {
                // Handle specific exceptions or log the error for debugging
                throw new Exception("Error sending email", ex);
            }
        }


    }
}

