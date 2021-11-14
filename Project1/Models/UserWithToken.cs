using Project1.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Project1.Models
{
    public class UserWithToken : Admin
    {
        

            public string AccessToken { get; set; }
            public string RefreshToken { get; set; }

            public UserWithToken(Admin user)
            {
                this.Id = user.Id;
                this.Username = user.Username;
                this.Password = user.Password;
                this.Name = user.Name;
               

                this.Role = user.Role;
            }
        }
    }

