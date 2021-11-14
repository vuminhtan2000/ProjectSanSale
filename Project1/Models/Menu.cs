using System;
using System.Collections.Generic;

// Code scaffolded by EF Core assumes nullable reference types (NRTs) are not used or disabled.
// If you have enabled NRTs for your project, then un-comment the following line:
// #nullable disable

namespace Project1.Models
{
    public partial class Menu
    {
        public int Id { get; set; }
        public string Text { get; set; }
        public string Link { get; set; }
        public int? DisplayOrder { get; set; }
        public string Target { get; set; }
        public bool? Status { get; set; }
        public int? TypeId { get; set; }

        public virtual MenuType Type { get; set; }
    }
}
