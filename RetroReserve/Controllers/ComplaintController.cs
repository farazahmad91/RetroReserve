using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace RetroReserve.Controllers
{
    [Authorize]
    public class ComplaintController : Controller
    {
        // GET: ComplaintController
        public ActionResult Complaint()
        {
            return View();
        }

        // GET: ComplaintController/Details/5
        public ActionResult ManageComplaint(int id)
        {
            return View();
        }

        // GET: ComplaintController/Create
        public ActionResult ComplaintSolve()
        {
            return View();
        }

        // POST: ComplaintController/Create
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

        // GET: ComplaintController/Edit/5
        public ActionResult Edit(int id)
        {
            return View();
        }

        // POST: ComplaintController/Edit/5
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

        // GET: ComplaintController/Delete/5
        public ActionResult Delete(int id)
        {
            return View();
        }

        // POST: ComplaintController/Delete/5
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
