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
    public class FootersController : ControllerBase
    {
        private readonly SanSaleContext _context;

        public FootersController(SanSaleContext context)
        {
            _context = context;
        }

        // GET: api/Footers
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Footer>>> GetFooters()
        {
            return await _context.Footers.ToListAsync();
        }

        // GET: api/Footers/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Footer>> GetFooter(string id)
        {
            var footer = await _context.Footers.FindAsync(id);

            if (footer == null)
            {
                return NotFound();
            }

            return footer;
        }

        // PUT: api/Footers/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutFooter(string id, Footer footer)
        {
            if (id != footer.Id)
            {
                return BadRequest();
            }

            _context.Entry(footer).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!FooterExists(id))
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

        // POST: api/Footers
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<ActionResult<Footer>> PostFooter(Footer footer)
        {
            _context.Footers.Add(footer);
            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateException)
            {
                if (FooterExists(footer.Id))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtAction("GetFooter", new { id = footer.Id }, footer);
        }

        // DELETE: api/Footers/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<Footer>> DeleteFooter(string id)
        {
            var footer = await _context.Footers.FindAsync(id);
            if (footer == null)
            {
                return NotFound();
            }

            _context.Footers.Remove(footer);
            await _context.SaveChangesAsync();

            return footer;
        }

        private bool FooterExists(string id)
        {
            return _context.Footers.Any(e => e.Id == id);
        }
    }
}
