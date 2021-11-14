using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.IO;
using Microsoft.AspNetCore.Hosting;
using Project1.Models;

namespace Project1.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SlidesController : ControllerBase
    {
        private readonly SanSaleContext _context;
        private readonly IWebHostEnvironment _hostEnvironment;

        public SlidesController(SanSaleContext context, IWebHostEnvironment hostEnvironment)
        {
            _context = context;
            this._hostEnvironment = hostEnvironment;
        }

        // GET: api/Slides
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Slide>>> GetSlides()
        {
            return await _context.Slides
                .Select(x => new Slide()
                {
                    Id = x.Id,
                    Image = x.Image,
                    Link = x.Link,
                    Description = x.Description,
                    ImageSrc = String.Format("{0}://{1}{2}/Images/{3}", Request.Scheme, Request.Host, Request.PathBase, x.Image)
                })
                .ToListAsync();
        }

            // GET: api/Slides/5
            [HttpGet("{id}")]
        public async Task<ActionResult<Slide>> GetSlide(int id)
        {
            var slide = await _context.Slides.FindAsync(id);

            if (slide == null)
            {
                return NotFound();
            }

            return slide;
        }

        // PUT: api/Slides/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutSlide(int id, [FromForm] Slide slide)
        {
            if (id != slide.Id)
            {
                return BadRequest();
            }
            if (slide.ImageFile != null)
            {
                DeleteImage(slide.Image);
                slide.Image = await SaveImage(slide.ImageFile);
            }
            _context.Entry(slide).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!SlideExists(id))
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

        // POST: api/Slides
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<ActionResult<Slide>> PostSlide([FromForm] Slide slide)
        {
            slide.Image = await SaveImage(slide.ImageFile);
            _context.Slides.Add(slide);
            await _context.SaveChangesAsync();

            return StatusCode(201);
        }

        // DELETE: api/Slides/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<Slide>> DeleteSlide(int id)
        {
            var slide = await _context.Slides.FindAsync(id);
            if (slide == null)
            {
                return NotFound();
            }
            DeleteImage(slide.Image);
            _context.Slides.Remove(slide);
            await _context.SaveChangesAsync();

            return slide;
        }

        private bool SlideExists(int id)
        {
            return _context.Slides.Any(e => e.Id == id);
        }
            [NonAction]
            public async Task<string> SaveImage(IFormFile imageFile)
            {
                string imageName = new String(Path.GetFileNameWithoutExtension(imageFile.FileName).Take(10).ToArray()).Replace(' ', '+');
                imageName = imageName + DateTime.Now.ToString("yymmssfff") + Path.GetExtension(imageFile.FileName);
                var imagePath = Path.Combine(_hostEnvironment.ContentRootPath, "Images", imageName);
                using (var fileStream = new FileStream(imagePath, FileMode.Create))
                {
                    await imageFile.CopyToAsync(fileStream);
                }
                return imageName;
            }

            [NonAction]
            public void DeleteImage(string imageName)
            {
                var imagePath = Path.Combine(_hostEnvironment.ContentRootPath, "Images", imageName);
                if (System.IO.File.Exists(imagePath))
                    System.IO.File.Delete(imagePath);
            }
        }
}
