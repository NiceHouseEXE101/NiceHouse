using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.EntityFrameworkCore;
using NiceHouse.Models;

namespace NiceHouse.Controllers
{
    public class DormitoryController : Controller
    {
        private readonly ApplicationDbContext _context;

        public DormitoryController(ApplicationDbContext context)
        {
            _context = context;
        }

        // GET: Dormitory
        public async Task<IActionResult> Index()
        {
              return _context.Dormitories != null ? 
                          View(await _context.Dormitories.ToListAsync()) :
                          Problem("Entity set 'ApplicationDbContext.Dormitories'  is null.");
        }

        // GET: Dormitory/Details/5
        public async Task<IActionResult> Details(int? id)
        {
            if (id == null || _context.Dormitories == null)
            {
                return NotFound();
            }

            var dormitory = await _context.Dormitories
                .FirstOrDefaultAsync(m => m.Id == id);
            if (dormitory == null)
            {
                return NotFound();
            }

            return View(dormitory);
        }

        // GET: Dormitory/Create
        public IActionResult Create()
        {
            return View();
        }

        // POST: Dormitory/Create
        // To protect from overposting attacks, enable the specific properties you want to bind to.
        // For more details, see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Create([Bind("Id,Name,Type,Address,Description,MaxRoomPrice,MinRoomPrice,NumberOfPeople")] Dormitory dormitory)
        {
            if (ModelState.IsValid)
            {
                _context.Add(dormitory);
                await _context.SaveChangesAsync();
                return RedirectToAction(nameof(Index));
            }
            return View(dormitory);
        }

        // GET: Dormitory/Edit/5
        public async Task<IActionResult> Edit(int? id)
        {
            if (id == null || _context.Dormitories == null)
            {
                return NotFound();
            }

            var dormitory = await _context.Dormitories.FindAsync(id);
            if (dormitory == null)
            {
                return NotFound();
            }
            return View(dormitory);
        }

        // POST: Dormitory/Edit/5
        // To protect from overposting attacks, enable the specific properties you want to bind to.
        // For more details, see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Edit(int id, [Bind("Id,Name,Type,Address,Description,MaxRoomPrice,MinRoomPrice,NumberOfPeople")] Dormitory dormitory)
        {
            if (id != dormitory.Id)
            {
                return NotFound();
            }

            if (ModelState.IsValid)
            {
                try
                {
                    _context.Update(dormitory);
                    await _context.SaveChangesAsync();
                }
                catch (DbUpdateConcurrencyException)
                {
                    if (!DormitoryExists(dormitory.Id))
                    {
                        return NotFound();
                    }
                    else
                    {
                        throw;
                    }
                }
                return RedirectToAction(nameof(Index));
            }
            return View(dormitory);
        }

        // GET: Dormitory/Delete/5
        public async Task<IActionResult> Delete(int? id)
        {
            if (id == null || _context.Dormitories == null)
            {
                return NotFound();
            }

            var dormitory = await _context.Dormitories
                .FirstOrDefaultAsync(m => m.Id == id);
            if (dormitory == null)
            {
                return NotFound();
            }

            return View(dormitory);
        }

        // POST: Dormitory/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> DeleteConfirmed(int id)
        {
            if (_context.Dormitories == null)
            {
                return Problem("Entity set 'ApplicationDbContext.Dormitories'  is null.");
            }
            var dormitory = await _context.Dormitories.FindAsync(id);
            if (dormitory != null)
            {
                _context.Dormitories.Remove(dormitory);
            }
            
            await _context.SaveChangesAsync();
            return RedirectToAction(nameof(Index));
        }

        private bool DormitoryExists(int id)
        {
          return (_context.Dormitories?.Any(e => e.Id == id)).GetValueOrDefault();
        }
    }
}
