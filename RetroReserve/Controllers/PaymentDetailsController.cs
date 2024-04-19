using Entities;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using RetroReserve.Models;

namespace RetroReserve.Controllers
{
    public class PaymentDetailsController : Controller
    {
        private readonly APIrequest _request;
        public PaymentDetailsController(APIrequest request) 
        { 
            _request = request;
        }
        [Route("/Payment_")]
        public async Task<ActionResult> AllPayment()
        {
          var i= await  _request.GetData<List<PaymentDetails>>("PaymentDetails/GetPaymentDetail");
            return View(i);
        }
        [Route("/Payment_Detail")]
        public async Task<ActionResult> Detail(int id)
        {
            var i = await _request.GetData<PaymentDetails>($"PaymentDetails/GetPaymentDetailById?id={id}");
            return PartialView(i);
        }
    }
}
