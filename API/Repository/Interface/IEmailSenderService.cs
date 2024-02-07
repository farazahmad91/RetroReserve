namespace API.Repository.Interface
{
    public interface IEmailSenderService
    {
        public void SendEmail(string email, string Subject, string body);
    }
}
