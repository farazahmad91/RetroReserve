﻿using Entities;
using Microsoft.AspNetCore.Mvc;
using Microsoft.VisualStudio.Web.CodeGenerators.Mvc.Templates.BlazorIdentity.Pages.Manage;
using Newtonsoft.Json;
using RetroReserve.Models;
using System.Security.Claims;

namespace RetroReserve.Controllers
{
    public class DeliveryBoyController : Controller
    {
        private readonly APIrequest _aPIrequest;
        public DeliveryBoyController(APIrequest aPIrequest)
        {
            _aPIrequest = aPIrequest;
        }
        [Route("/MyOrder")]
        public async Task<IActionResult> MyOrder()
        {
            var email = User.FindFirstValue(ClaimTypes.Email);
            var i = await _aPIrequest.GetData<List<DeliveredOrder>>($"Employee/GetOrderListByDboy?email={email}");
            return View(i);
        }
        public IActionResult OTPVerify()
        {
            return PartialView();
        }
        [HttpPost]
        public async Task<IActionResult> OTPVerification(Orders orders)
        {
            var i = await _aPIrequest.Post("Orders/OTPVerify", orders);
            var res = JsonConvert.DeserializeObject<Entities.Response>(i);
            return Json(res);
        }
        [Route("/_Review")]
        public IActionResult DBoyReview()
        {
            return PartialView();
        }
        [Route("/AddorUpdateDboyReview")]
        public async Task<IActionResult> AddorUpdateDboyReview(DboyReview dboyReview)
        {
            string email = User.FindFirstValue(ClaimTypes.Email);
            dboyReview.Email = email;
            var i = await _aPIrequest.Post("Reviews/AddorUpdateDboyReview", dboyReview);
            var res = JsonConvert.DeserializeObject<Entities.Response>(i);
            return Json(res);
        }
        [Route("Reviews_")]
        public async Task<IActionResult> ShowReview()
        {
            string email = User.FindFirstValue(ClaimTypes.Email);
            var i = _aPIrequest.GetData<Employees>($"Employee/GetDboyIdByEmail?email={email}");
            int Id = i.Result.EmpId;
            
            var res = await _aPIrequest.GetData<List<DboyReviewStatistics>>($"Reviews/GetDboyReviewStatistics?id={Id}");
            return PartialView(res);
        }

        [Route("MySalaryInfo")]
        public async Task<IActionResult> MySalaryInfo()
        {
            string email = User.FindFirstValue(ClaimTypes.Email);
            var i = _aPIrequest.GetData<Employees>($"Employee/GetDboyIdByEmail?email={email}");
            int Id = i.Result.EmpId;
            var res = await _aPIrequest.GetData<List<Employees>>($"Employee/GetEmployeeSalaryDetailById?id={Id}");
            return View(res);
        }

        [Route("/MyCommition")]
        public async Task<ActionResult> MyCommition(Employees employees)
        {
            string email = User.FindFirstValue(ClaimTypes.Email);
            var i = _aPIrequest.GetData<Employees>($"Employee/GetDboyIdByEmail?email={email}");
            int Id = i.Result.EmpId;
            var res = await _aPIrequest.GetData<List<DeliveredOrder>>($"Employee/GetDBoyCommitionById?id={Id}");
            return View(res);
        }
    }
}
