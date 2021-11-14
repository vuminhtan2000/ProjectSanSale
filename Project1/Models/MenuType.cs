﻿using System;
using System.Collections.Generic;

// Code scaffolded by EF Core assumes nullable reference types (NRTs) are not used or disabled.
// If you have enabled NRTs for your project, then un-comment the following line:
// #nullable disable

namespace Project1.Models
{
    public partial class MenuType
    {
        public MenuType()
        {
            Menus = new HashSet<Menu>();
        }

        public int Id { get; set; }
        public string Name { get; set; }

        public virtual ICollection<Menu> Menus { get; set; }
    }
}
