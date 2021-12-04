using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;

// Code scaffolded by EF Core assumes nullable reference types (NRTs) are not used or disabled.
// If you have enabled NRTs for your project, then un-comment the following line:
// #nullable disable

namespace Project1.Models
{
    public partial class Category
    {
        public Category()
        {
            Clients = new HashSet<Client>();
            Contents = new HashSet<Content>();
            Products = new HashSet<Product>();
        }

        public int Id { get; set; }
        public string NameCategory { get; set; }
        public bool? Status { get; set; }
        public string MetaTitle { get; set; }

        public virtual ICollection<Client> Clients { get; set; }
        public virtual ICollection<Content> Contents { get; set; }
        public virtual ICollection<Product> Products { get; set; }
        [NotMapped]
        public IFormFile ImageFile { get; set; }
        [NotMapped]
        public string ImageSrc { get; set; }
    }
}
