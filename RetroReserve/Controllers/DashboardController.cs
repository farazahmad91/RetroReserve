using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using RetroReserve.Models;
using Entities;
using System.Diagnostics;
using System.Security.Claims;

namespace RetroReserve.Controllers
{
    [Authorize]
    public class DashboardController : Controller
    {
        private readonly APIrequest apirequest;
        public DashboardController(APIrequest apirequest)
        {
            this.apirequest = apirequest;
        }
        [Authorize(Roles = "Admin")]
        [Route("/Dashboard")]
        public async Task<IActionResult> Admin()
        {
            if (User.IsInRole("Admin"))
            {
                var i = await apirequest.GetData<List<Status>>("Status/GetStatusList");
                return View(i);
            }
            return BadRequest("Access Denied");
        }
        public async Task<IActionResult> Status()
        {
            var i = await apirequest.GetData<List<Status>>("Status/GetStatusList");
            return Json(i);
        }
    }
}