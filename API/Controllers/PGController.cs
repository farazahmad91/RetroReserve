using Entities;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;
using Stripe;
using Stripe.Checkout;


namespace API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PGController : ControllerBase
    {
        private readonly StripeSettings _stripeSettings;

        public PGController(IOptions<StripeSettings> stripesettings)
        {
            _stripeSettings = stripesettings.Value;
        }

        [HttpPost(nameof(CreatCheckOutSession)+"/{ammount}")]
        public IActionResult CreatCheckOutSession(string ammount)
        {
            try
            {
                var currency = "usd";
                var successUrl = "https://localhost:7173/Success";
                var cancelUrl = "https://localhost:7173/Checkout";
                StripeConfiguration.ApiKey = _stripeSettings.SecretKey;
                var options = new SessionCreateOptions
                {
                    PaymentMethodTypes = new List<string>
            {
                "card"
            },
                    LineItems = new List<SessionLineItemOptions>
            {
                new SessionLineItemOptions
                {
                    PriceData = new SessionLineItemPriceDataOptions
                    {
                        Currency = currency,
                        UnitAmount= Convert.ToInt32(ammount)*100,
                        ProductData = new SessionLineItemPriceDataProductDataOptions
                        {
                            Name = "Product Name",
                            Description= "Description"
                        }
                    },
                    Quantity = 1,
                }
            },
                    Mode = "payment",

                    SuccessUrl = successUrl,
                    CancelUrl = cancelUrl
                };
                var service = new SessionService();
                var session = service.Create(options);
                return Ok(session.Url);
            }
            catch (Exception ex)
            {

                throw;
            }
        }
    }
}
