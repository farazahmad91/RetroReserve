﻿using Entities;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using RetroReserve.Models;
using System.Security.Claims;

namespace RetroReserve.Controllers
{
    public class AddressController : Controller
    {
        private readonly APIrequest _apirequest;
        public AddressController(APIrequest apirequest)
        {
            this._apirequest = apirequest;
        }
        public async Task<IActionResult> AddressList()
        {
            var i = await _apirequest.GetData<List<Address>>("Address/GetbannerList");
            return View(i);
        }
        public async Task<IActionResult> UserAddressList()
        {
            var i = await _apirequest.GetData<List<Address>>("Address/UserAddressList");
            return View(i);
        }
        [Route("/Address")]
        public async Task<IActionResult> UserAddress()
        {
            var email = User.FindFirstValue(ClaimTypes.Email);
            var i = await _apirequest.GetData<List<Address>>($"Address/GetAddressByUserId?email={email}");
            return View(i);
        }
        public async Task<IActionResult> CheckoutAddress()
        {
            var email = User.FindFirstValue(ClaimTypes.Email);
            var i = await _apirequest.GetData<List<Address>>($"Address/GetAddressByUserId?email={email}");
            return PartialView(i);
        }
        public async Task<IActionResult> EditAddress(int id)
        {
            var i = await _apirequest.GetData<Address>($"Address/GetAddressById?id={id}");
            return PartialView(i);
        }
        [HttpPost]
        public async Task<IActionResult> AddOrUpdateAddress(Address address)
        {
            var email = User.FindFirstValue(ClaimTypes.Email);
            address.UserId = email;
            var i = await _apirequest.Post("Address/AddOrUpdateUserAddress", address);
            var res = JsonConvert.DeserializeObject<Entities.Response>(i);
            return Json(res);
        }

        public async Task<IActionResult> UpdateStatus(Address address)
        {
            var i = await _apirequest.Post("Banners/UpdateBannerStatus", address);
            return Json(i);
        }
        public async Task<IActionResult> StateList()
        {
            var i = await _apirequest.GetData<List<State>>("Address/StateList");
            return View(i);

        }
        public async Task<IActionResult> CityList()
        {
            var i = await _apirequest.GetData<List<City>>("Address/CityList");
            return View(i);
        }
        public async Task<IActionResult> FullAddressList()
        {
            var i = await _apirequest.GetData<List<Address>>("Address/FullAddressList");
            return View(i);
        }
        public async Task<IActionResult> ShowBanner1()
        {

            var i = await _apirequest.GetData<List<Address>>("Banners/ShowBanner1");
            return PartialView(i);
        }

        public async Task<IActionResult> RemoveAddress(Address address)
        {
            var i = await _apirequest.Post("Address/RemoveAddress", address);
            return Json(i);
        }
    }
}
