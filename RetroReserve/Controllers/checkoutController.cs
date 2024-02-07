using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using RetroReserve.Models;
using Entities;

namespace RetroReserve.Controllers
{
    [Authorize]
    public class checkoutController : Controller
    {
        private readonly APIrequest apirequest;
        public checkoutController(APIrequest apirequest)
        {
            this.apirequest = apirequest;
        }
        public async Task<ActionResult> checkout()
        {
            var i = await apirequest.GetData<List<Cart>>("Cart/GetCartValueList");
            return PartialView(i);
        }

        // GET: checkoutController/Details/5
        public ActionResult Details(int id)
        {
            return View();
        }

        // GET: checkoutController/Create
        public ActionResult Create()
        {
            return View();
        }
        public ActionResult Payment()
        {
            return View();
        }

        // POST: checkoutController/Create
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Create(IFormCollection collection)
        {
            try
            {
                return RedirectToAction(nameof(Index));
            }
            catch
            {
                return View();
            }
        }

        // GET: checkoutController/Edit/5
        public ActionResult Edit(int id)
        {
            return View();
        }

        // POST: checkoutController/Edit/5
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Edit(int id, IFormCollection collection)
        {
            try
            {
                return RedirectToAction(nameof(Index));
            }
            catch
            {
                return View();
            }
        }

        // GET: checkoutController/Delete/5
        public ActionResult Delete(int id)
        {
            return View();
        }

        // POST: checkoutController/Delete/5
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Delete(int id, IFormCollection collection)
        {
            try
            {
                return RedirectToAction(nameof(Index));
            }
            catch
            {
                return View();
            }
        }
    }
}
