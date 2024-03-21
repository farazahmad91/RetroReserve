using API.Repository.Impliments;
using API.Repository.Interface;
using Entities;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AddressController : ControllerBase
    {
        private readonly IAddressService _addressService;
        public AddressController(IAddressService addressService)
        {
            this._addressService = addressService;
        }
        [HttpPost(nameof(AddOrUpdateUserAddress))]
        public async Task<IActionResult> AddOrUpdateUserAddress(Address address)
        {
            var res = new Response();
            res = await _addressService.AddOrUpdateUserAddress(address);
            return Ok(res);
        }
        [HttpGet(nameof(UserAddressList))]
        public IActionResult UserAddressList()
        {
            var i = _addressService.UserAddressList();
            return Ok(i);
        }
        [HttpPost(nameof(UpdatePostalCodeStatus))]
        public IActionResult UpdatePostalCodeStatus(PostalCodes postalCodes)
        {
            var i = _addressService.UpdatePostalCodeStatus(postalCodes);
            return Ok(i);
        }

        [HttpGet(nameof(GetAddressByUserId))]
        public IActionResult GetAddressByUserId(string email)
        {
            var i = _addressService.GetAddressByUserId(email);
            return Ok(i);
        }

        [HttpGet(nameof(GetAddressById))]
        public IActionResult GetAddressById(int id)
        {
            var i = _addressService.GetAddressById(id);
            return Ok(i);
        }

        [HttpPost(nameof(RemoveAddress))]
        public async Task<IActionResult> RemoveAddress(Address address)
        {
            int i = await _addressService.RemoveAddress(address);
            return Ok(i);
        }
    }
}
