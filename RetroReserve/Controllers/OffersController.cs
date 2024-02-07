using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace RetroReserve.Controllers
{
    [Authorize]
    public class OffersController : Controller
    {
        // GET: OffersController
        public ActionResult NewOffer()
        {
            return View();
        }

        // GET: OffersController/Details/5
        public ActionResult ManageOffers()
        {
            return View();
        }

        // GET: OffersController/Create
        public ActionResult Create()
        {
            return View();
        }

        // POST: OffersController/Create
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

        // GET: OffersController/Edit/5
        public ActionResult Edit(int id)
        {
            return View();
        }

        // POST: OffersController/Edit/5
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

        // GET: OffersController/Delete/5
        public ActionResult Delete(int id)
        {
            return View();
        }

        // POST: OffersController/Delete/5
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
