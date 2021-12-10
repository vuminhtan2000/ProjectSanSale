using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Authorization;
using System.IO;
using Project1.Models;
using Microsoft.AspNetCore.Hosting;

namespace Project1.Controllers
{

    [Route("api/[controller]")]
    [ApiController]
    public class ProductsController : ControllerBase
    {
        private readonly SanSaleContext _context;
        private readonly IWebHostEnvironment _hostEnvironment;

        public ProductsController(SanSaleContext context,IWebHostEnvironment hostEnvironment)
        {
            _context = context;
            this._hostEnvironment = hostEnvironment;
        }

        // GET: api/Products
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Product>>> GetProducts()
        {
            return await _context.Products
                .Select(x => new Product()
                {
                    Id = x.Id,
                    Name = x.Name,
                    Code = x.Code,
                    MetaTitle = x.MetaTitle,
                    Description= x.Description,
                    Image = x.Image,
                    MoreImages = x.MoreImages,
                    Price = x.Price,
                    PromotionPrice = x.PromotionPrice,
                    HotProduct = x.HotProduct,
                    Quantity = x.Quantity,
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
                    TopHot = x.TopHot,
                    ViewCount = x.ViewCount,
                    Link = x.Link,
                    ImageSrc = String.Format("{0}://{1}{2}/Images/{3}", Request.Scheme, Request.Host, Request.PathBase, x.Image)
                })
                .ToListAsync();
        }
        // GET: api/Products/GetProducts_categoryId=5
        [HttpGet("GetProducts_categoryId")]
        public async Task<ActionResult<IEnumerable<Product>>> GetProducts_categoryId(int categoryId)
        {
            return await _context.Products
                .Select(x => new Product()
                {
                    Id = x.Id,
                    Name = x.Name,
                    Code = x.Code,
                    MetaTitle = x.MetaTitle,
                    Description = x.Description,
                    Image = x.Image,
                    MoreImages = x.MoreImages,
                    Price = x.Price,
                    PromotionPrice = x.PromotionPrice,
                    HotProduct = x.HotProduct,
                    Quantity = x.Quantity,
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
                    TopHot = x.TopHot,
                    ViewCount = x.ViewCount,
                    Link = x.Link,
                    ImageSrc = String.Format("{0}://{1}{2}/Images/{3}", Request.Scheme, Request.Host, Request.PathBase, x.Image)
                })
                .Where(pro => pro.CategoryId == categoryId).ToListAsync();

        }

        // GET: api/Products/GetProducts_status=true/false
        [HttpGet("GetProducts_status")]
        public async Task<ActionResult<IEnumerable<Product>>> GetProducts_status(bool status)
        {
            return await _context.Products
                .Select(x => new Product()
                {
                    Id = x.Id,
                    Name = x.Name,
                    Code = x.Code,
                    MetaTitle = x.MetaTitle,
                    Description = x.Description,
                    Image = x.Image,
                    MoreImages = x.MoreImages,
                    Price = x.Price,
                    PromotionPrice = x.PromotionPrice,
                    HotProduct = x.HotProduct,
                    Quantity = x.Quantity,
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
                    TopHot = x.TopHot,
                    ViewCount = x.ViewCount,
                    Link = x.Link,
                    ImageSrc = String.Format("{0}://{1}{2}/Images/{3}", Request.Scheme, Request.Host, Request.PathBase, x.Image)
                })
                .Where(pro => pro.Status == status).ToListAsync();

        }

        // GET: api/Products/GetProducts_hotProduct=true/false
        [HttpGet("GetProducts_hotProduct")]
        public async Task<ActionResult<IEnumerable<Product>>> GetProducts_hotProduct(bool hotProduct)
        {
            return await _context.Products
                .Select(x => new Product()
                {
                    Id = x.Id,
                    Name = x.Name,
                    Code = x.Code,
                    MetaTitle = x.MetaTitle,
                    Description = x.Description,
                    Image = x.Image,
                    MoreImages = x.MoreImages,
                    Price = x.Price,
                    PromotionPrice = x.PromotionPrice,
                    HotProduct = x.HotProduct,
                    Quantity = x.Quantity,
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
                    TopHot = x.TopHot,
                    ViewCount = x.ViewCount,
                    Link = x.Link,
                    ImageSrc = String.Format("{0}://{1}{2}/Images/{3}", Request.Scheme, Request.Host, Request.PathBase, x.Image)
                })
                .Where(pro => pro.HotProduct == hotProduct).ToListAsync();

        }
        [HttpGet("GetProducts_day")]
        public async Task<ActionResult<IEnumerable<Product>>> GetProducts_day(DateTime startDate, DateTime endDate, bool hotProduct)
        {

            return await _context.Products
                .Select(x => new Product()
                {
                    Id = x.Id,
                    Name = x.Name,
                    Code = x.Code,
                    MetaTitle = x.MetaTitle,
                    Description = x.Description,
                    Image = x.Image,
                    MoreImages = x.MoreImages,
                    Price = x.Price,
                    PromotionPrice = x.PromotionPrice,
                    HotProduct = x.HotProduct,
                    Quantity = x.Quantity,
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
                    TopHot = x.TopHot,
                    ViewCount = x.ViewCount,
                    Link = x.Link,
                    ImageSrc = String.Format("{0}://{1}{2}/Images/{3}", Request.Scheme, Request.Host, Request.PathBase, x.Image)
                })
                .Where(pro => pro.CreatedDate >= startDate 
                           && pro.CreatedDate <= endDate
                           && pro.HotProduct == hotProduct)
                .ToListAsync();

        }

        // GET: api/Products/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Product>> GetProduct(int id)
        {
            var product = await _context.Products.FindAsync(id);

            if (product == null)
            {
                return NotFound();
            }

            return product;
        }

        // PUT: api/Products/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutProduct(int id, [FromForm] Product product)
        {
            if (id != product.Id)
            {
                return BadRequest();
            }
            if (product.ImageFile != null)
            {
                DeleteImage(product.Image);
                product.Image = await SaveImage(product.ImageFile);
            }

            _context.Entry(product).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ProductExists(id))
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
        [HttpPut("body/{id}")]
        public async Task<IActionResult> PutProductbody(int id, Product product)
        {
            if (id != product.Id)
            {
                return BadRequest();
            }

            _context.Entry(product).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ProductExists(id))
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

        // POST: api/Products
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.

        [HttpPost]
        public async Task<ActionResult<Product>> PostProduct([FromForm]Product product)
        {
            product.Image = await SaveImage(product.ImageFile);
            _context.Products.Add(product);
            await _context.SaveChangesAsync();

            return StatusCode(201);
        }

        // DELETE: api/Products/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<Product>> DeleteProduct(int id)
        {
            var product = await _context.Products.FindAsync(id);
            if (product == null)
            {
                return NotFound();
            }
            DeleteImage(product.Image);
            _context.Products.Remove(product);
            await _context.SaveChangesAsync();

            return product;
            
        }

        private bool ProductExists(int id)
        {
            return _context.Products.Any(e => e.Id == id);
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
