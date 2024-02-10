using Entities;

namespace API.Repository.Interface
{
    public interface IContactService
    {
        public Task<int> AddOrUpdateContact(Contact contact);
        public Contact GetContactUsById(int id);
        public IEnumerable<Contact> GetContactusList();
        public Task<int> UpdateContactUsStatus(Contact contact);
        public int DeleteFeedback(int id);
        public Task<int> AddOrUpdateMessageBox(MessageBox messageBox);
        public MessageBox GetMessageById(int id);
        public int DeleteMessage(int id);
        public IEnumerable<MessageBox> GetSentMessageList();
        public MessageBox GetSentMessageById(int id);
        public IEnumerable<Contact> GetNewMessageNotification();
    }
}
