using Entities;

namespace API.Repository.Interface
{
    public interface IPaymentDetailService
    {
        public Task<int> addPaymentDetail(PaymentDetails paymentDetails);
        public IEnumerable<PaymentDetails> GetPaymentDetail();
        public PaymentDetails GetPaymentDetailById(int id);
    }
}
