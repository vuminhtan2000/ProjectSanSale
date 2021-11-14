using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Project1.Models;

namespace Project1.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MenuTypesController : ControllerBase
    {
        private readonly SanSaleContext _context;

        public MenuTypesController(SanSaleContext context)
        {
            _context = context;
        }

        // GET: api/MenuTypes
        [HttpGet]
        public async Task<ActionResult<IEnumerable<MenuType>>> GetMenuTypes()
        {
            return await _context.MenuTypes.ToListAsync();
        }

        // GET: api/MenuTypes/5
        [HttpGet("{id}")]
        public async Task<ActionResult<MenuType>> GetMenuType(int id)
        {
            var menuType = await _context.MenuTypes.SingleAsync(mnt => mnt.Id == id);

            _context.Entry(menuType)
                .Collection(mnt => mnt.Menus)
                .Query()
                .Load();
           

            if (menuType == null)
            {
                return NotFound();
            }

            return menuType;
        }

        // PUT: api/MenuTypes/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutMenuType(int id, MenuType menuType)
        {
            if (id != menuType.Id)
            {
                return BadRequest();
            }

            _context.Entry(menuType).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!MenuTypeExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/MenuTypes
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<ActionResult<MenuType>> PostMenuType(MenuType menuType)
        {
            _context.MenuTypes.Add(menuType);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetMenuType", new { id = menuType.Id }, menuType);
        }

        // DELETE: api/MenuTypes/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<MenuType>> DeleteMenuType(int id)
        {
            var menuType = await _context.MenuTypes.FindAsync(id);
            if (menuType == null)
            {
                return NotFound();
            }

            _context.MenuTypes.Remove(menuType);
            await _context.SaveChangesAsync();

            return menuType;
        }

        private bool MenuTypeExists(int id)
        {
            return _context.MenuTypes.Any(e => e.Id == id);
        }
    }
}
