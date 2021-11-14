using System;
using System.Collections.Generic;

// Code scaffolded by EF Core assumes nullable reference types (NRTs) are not used or disabled.
// If you have enabled NRTs for your project, then un-comment the following line:
// #nullable disable

namespace Project1.Models
{
    public partial class RefreshToken
    {
        public int TokenId { get; set; }
        public int AdminId { get; set; }
        public string Token { get; set; }
        public DateTime ExpiryDate { get; set; }

        public virtual Admin Admin { get; set; }
    }
}
