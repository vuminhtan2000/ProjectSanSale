
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using Project1.Models;
using System;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;

namespace InventoryService.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TokenController : ControllerBase
    {
        public IConfiguration _configuration;
        private readonly SanSaleContext _context;

        public TokenController(IConfiguration config, SanSaleContext context)
        {
            _configuration = config;
            _context = context;
        }

        [HttpPost]
        public async Task<IActionResult> Post(Admin _userData)
        {

            if (_userData != null && _userData.Username != null && _userData.Password != null)
            {
                var user = await GetUser(_userData.Username, _userData.Password);

                if (user != null)
                {
                    //create claims details based on the user information
                    var claims = new[] {
                    new Claim(JwtRegisteredClaimNames.Sub, _configuration["Jwt:Subject"]),
                    new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString()),
                    new Claim(JwtRegisteredClaimNames.Iat, DateTime.UtcNow.ToString()),
                    new Claim("Id", user.Id.ToString()),
                    
                    new Claim("UserName", user.Username),
                    new Claim("name", user.Name)
                   };

                    var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_configuration["JWTSettings:SecretKey"]));

                    var signIn = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);

                    var token = new JwtSecurityToken(_configuration["JWTSettings:SecretKey"], _configuration["JWTSettings:SecretKey"], claims, expires: DateTime.UtcNow.AddDays(1), signingCredentials: signIn);

                    return Ok(new JwtSecurityTokenHandler().WriteToken(token));
                }
                else
                {
                    return BadRequest("Invalid credentials");
                }
            }
            else
            {
                return BadRequest();
            }
        }

        private async Task<Admin> GetUser(string email, string password)
        {
            return await _context.Admins.FirstOrDefaultAsync(u => u.Username == email && u.Password == password);
        }
    }
}