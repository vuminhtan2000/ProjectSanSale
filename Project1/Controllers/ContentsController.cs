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
    public class ContentsController : ControllerBase
    {
        private readonly SanSaleContext _context;

        public ContentsController(SanSaleContext context)
        {
            _context = context;
        }

        // GET: api/Contents
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Content>>> GetContents()
        {
            return await _context.Contents.Select(x => new Content()
            {
                Id = x.Id,
                Name = x.Name,
                MetaTitle = x.MetaTitle,
                Description = x.Description,
                Image = x.Image,
                CategoryId = x.CategoryId,
                Detail = x.Detail,
                Warranty = x.Warranty,
                CreatedDate = x.CreatedDate,
                CreatedBy = x.CreatedBy,
                ModifiedDate = x.ModifiedDate,
                ModifiedBy = x.ModifiedBy,
                MetaKeywords = x.MetaKeywords,
                MetaDescriptions = x.MetaDescriptions,
                Status = x.Status,
                ViewCount = x.ViewCount,
                Tags = x.Tags,
                Language = x.Language,
                Content1 = x.Content1
            })
                .ToListAsync();
        }

        // GET: api/Contents/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Content>> GetContent(int id)
        {
            var content = await _context.Contents.FindAsync(id);

            if (content == null)
            {
                return NotFound();
            }

            return content;
        }

        // PUT: api/Contents/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutContent(int id, [FromForm] Content content)
        {
            if (id != content.Id)
            {
                return BadRequest();
            }

            _context.Entry(content).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ContentExists(id))
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

        // POST: api/Contents
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<ActionResult<Content>> PostContent([FromForm] Content content)
        {
            _context.Contents.Add(content);
            await _context.SaveChangesAsync();

            return content;
        }

        // DELETE: api/Contents/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<Content>> DeleteContent(int id)
        {
            var content = await _context.Contents.FindAsync(id);
            if (content == null)
            {
                return NotFound();
            }

            _context.Contents.Remove(content);
            await _context.SaveChangesAsync();

            return content;
        }

        private bool ContentExists(int id)
        {
            return _context.Contents.Any(e => e.Id == id);
        }
    }
}