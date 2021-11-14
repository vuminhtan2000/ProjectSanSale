using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Project1.Models
{
    public class RefreshRequet
    {
        public string AccessToken { get; set; }
        public string RefreshToken { get; set; }
    }
}
