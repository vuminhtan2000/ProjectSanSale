using System;
using System.Collections.Generic;

// Code scaffolded by EF Core assumes nullable reference types (NRTs) are not used or disabled.
// If you have enabled NRTs for your project, then un-comment the following line:
// #nullable disable

namespace Project1.Models
{
    public partial class Category
    {
        public Category()
        {
            Contents = new HashSet<Content>();
            Products = new HashSet<Product>();
        }

        public int Id { get; set; }
        public string NameCategory { get; set; }
        public bool? Status { get; set; }
        public string MetaTitle { get; set; }

        public virtual ICollection<Content> Contents { get; set; }
        public virtual ICollection<Product> Products { get; set; }
    }
}
