using API.Repository.Interface;
using Entities;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PaymentDetailsController : ControllerBase
    {
        private readonly IPaymentDetailService _paymentDetailService;
        public PaymentDetailsController(IPaymentDetailService paymentDetailService)
        {
                this._paymentDetailService = paymentDetailService;
        }
        [HttpPost (nameof(addPaymentDetail))]

        public IActionResult addPaymentDetail(PaymentDetails paymentDetails)
        {
            var i = _paymentDetailService.addPaymentDetail(paymentDetails);
            return Ok(i);
        }

        [HttpGet(nameof(GetPaymentDetail))]

        public IActionResult GetPaymentDetail() 
        {
            var i = _paymentDetailService.GetPaymentDetail();
            return Ok(i); 
        }

        [HttpGet(nameof(GetPaymentDetailById))]

        public IActionResult GetPaymentDetailById(int id)
        {
            var i = _paymentDetailService.GetPaymentDetailById(id);
            return Ok(i);
        }
    }
}
