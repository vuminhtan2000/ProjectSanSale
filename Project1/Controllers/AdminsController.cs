using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Options;
using System.IdentityModel.Tokens.Jwt;
using System.Text;
using System.Security.Claims;
using Microsoft.IdentityModel.Tokens;
using System.Security.Cryptography;
using Microsoft.AspNetCore.Authorization;
using Project1.Models;

namespace Project1.Controllers
{

    [Route("api/[controller]")]
    [ApiController]
    public class AdminsController : ControllerBase
    {
        private readonly SanSaleContext _context;
        private readonly JWTSettings _jwtsettings;

        public AdminsController(SanSaleContext context,IOptions<JWTSettings> jwtsettings )
        {
            _context = context;
            _jwtsettings = jwtsettings.Value;
        }

        // GET: api/Admins
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Admin>>> GetAdmins()
        {
            return await _context.Admins.ToListAsync();
        }

        // GET: api/Admins/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Admin>> GetAdmin(int id)
        {
            var admin = await _context.Admins.FindAsync(id);

            if (admin == null)
            {
                return NotFound();
            }

            return admin;
        }
       

        [HttpPost("Login")]
        public async Task<ActionResult<UserWithToken>> Login([FromBody] Admin admin)
        {
           
            admin = await _context.Admins.Where(adm => adm.Username == admin.Username
                                                   && adm.Password == admin.Password)
                                                    .FirstOrDefaultAsync();
            UserWithToken userWithToken = null;

            if (admin != null)
            {
                RefreshToken refeshToken = GenerateRefreshToken();
                admin.RefreshTokens.Add(refeshToken);
                await _context.SaveChangesAsync();
                userWithToken = new UserWithToken(admin);
                userWithToken.RefreshToken = refeshToken.Token;

            }

            if (userWithToken == null)
            {
                return NotFound();
            }
            

            userWithToken.AccessToken = GenerateAccessToken(admin.Id);

            return userWithToken;
        }


        ////[HttpPost("checktoken")]
        ////public async Task<ActionResult<UserWithToken>> Checktoken([FromBody] RefreshRequet refreshRequet)
        ////{
        ////    Admin admin = GetUserFromAccessToken(refreshRequet.AccessToken);

        ////    if (admin != null && ValidateRefreshToken(admin, refreshRequet.RefreshToken))

        ////    {
        ////        UserWithToken userWithToken = new UserWithToken(admin);
        ////        //userWithToken.AccessToken = GenerateAccessToken(admin.Id);

        ////        return userWithToken;
        ////    }

        ////    return null;

        //}
        [Authorize]
        [HttpPost("RefreshToken")]
        public async Task<ActionResult<RefreshRequet>> RefreshToken([FromBody] RefreshRequet refreshRequet)
        {
            Admin admin = GetUserFromAccessToken(refreshRequet.AccessToken);

            if (admin != null && ValidateRefreshToken(admin, refreshRequet.RefreshToken))

            {
                UserWithToken userWithToken = new UserWithToken(admin);
                //userWithToken.AccessToken = GenerateAccessToken(admin.Id);

                return refreshRequet;
            }

            return null;

        }



        private bool ValidateRefreshToken(Admin admin, string refreshToken)
        {

            RefreshToken refreshTokenUser = _context.RefreshTokens.Where(rt => rt.Token == refreshToken)
                                                 .OrderByDescending(rt => rt.ExpiryDate)
                                                 .FirstOrDefault();

            if (refreshTokenUser != null && refreshTokenUser.AdminId == admin.Id
                && refreshTokenUser.ExpiryDate > DateTime.UtcNow)
            {
                return true;
            }

            return false;
        }

        private Admin GetUserFromAccessToken(string accessToken)
        {
            var tokenHandler = new JwtSecurityTokenHandler();
            var key = Encoding.ASCII.GetBytes(_jwtsettings.SecretKey);

            var tokenValidationParameters = new TokenValidationParameters
            {
                ValidateIssuerSigningKey = true,
                IssuerSigningKey = new SymmetricSecurityKey(key),
                ValidateIssuer = false,
                ValidateAudience = false,
                ClockSkew = TimeSpan.Zero
            };
            SecurityToken securityToken;
            var principle =tokenHandler.ValidateToken(accessToken, tokenValidationParameters, out securityToken);
            JwtSecurityToken jwtSecurityToken = securityToken as JwtSecurityToken;

            if(jwtSecurityToken !=null && jwtSecurityToken.Header.Alg.Equals(SecurityAlgorithms.HmacSha256 , StringComparison.InvariantCultureIgnoreCase))
            {
                var adminid = principle.FindFirst(ClaimTypes.Name)?.Value;

                return _context.Admins
                                    .Where(u => u.Id == Convert.ToInt32(adminid)).FirstOrDefault();

            }

            return null;

        }

        private RefreshToken GenerateRefreshToken()
        {
            RefreshToken refreshToken = new RefreshToken();
            var randomNumber = new byte[32];
            using (var rng = RandomNumberGenerator.Create())
            {
                rng.GetBytes(randomNumber);
                refreshToken.Token = Convert.ToBase64String(randomNumber);
            }
            refreshToken.ExpiryDate = DateTime.UtcNow.AddMonths(6);
            return refreshToken;
        }

        private string GenerateAccessToken(int Id)
        {
            var tokenHandler = new JwtSecurityTokenHandler();
            var key = Encoding.ASCII.GetBytes(_jwtsettings.SecretKey);
            var tokenDescriptor = new SecurityTokenDescriptor
            {
                Subject = new ClaimsIdentity(new Claim[]
                {
                    new Claim(ClaimTypes.Name, Convert.ToString(Id))
                }),
                Expires = DateTime.UtcNow.AddDays(1),
                SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(key),
                SecurityAlgorithms.HmacSha256Signature)
            };
            var token = tokenHandler.CreateToken(tokenDescriptor);
            return tokenHandler.WriteToken(token);
        }
        //// get admin
        //[HttpGet("GetAdmin")]
        //public async Task<ActionResult<Admin>> GetAdmin()
        //{
        //    string username = HttpContext.User.Identity.Name;

        //    var admin = await _context.Admins.Where(adm => adm.Username == username
        //                                            ).FirstOrDefaultAsync();
        //    admin.Password = null;
        //    if (admin == null)
        //    {
        //        return NotFound();
        //    }

        //    return admin;
        //}
        // PUT: api/Admins/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutAdmin(int id, Admin admin)
        {
            if (id != admin.Id)
            {
                return BadRequest();
            }

            _context.Entry(admin).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!AdminExists(id))
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

        // POST: api/Admins
        


        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        //[HttpPost]
        //public async Task<ActionResult<Admin>> PostAdmin(Admin admin)
        //{
        //    _context.Admins.Add(admin);
        //    await _context.SaveChangesAsync();

        //    return CreatedAtAction("GetAdmin", new { id = admin.Id }, admin);
        //}

        // DELETE: api/Admins/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<Admin>> DeleteAdmin(int id)
        {
            var admin = await _context.Admins.FindAsync(id);
            if (admin == null)
            {
                return NotFound();
            }

            _context.Admins.Remove(admin);
            await _context.SaveChangesAsync();

            return admin;
        }

        private bool AdminExists(int id)
        {
            return _context.Admins.Any(e => e.Id == id);
        }
    }
}
