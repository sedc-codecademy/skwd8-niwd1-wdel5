using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using SEDC.FoodApp.Auth.Models;

namespace SEDC.FoodApp.Web.Auth
{
    [Route("api/[controller]")]
    [ApiController]
    public class ApplicationUserController : ControllerBase
    {
        public IConfiguration Configuration { get; }
        private UserManager<ApplicationUser> _userManager;

        public ApplicationUserController(IConfiguration configuration,
                                         UserManager<ApplicationUser> userManager)
        {
            Configuration = configuration;
            _userManager = userManager;
        }

        //http://localhost:45551/api/applicationuser/register
        [HttpPost("Register")]
        public async Task<IActionResult> RegisterUser([FromBody] RegisterRequestModel model) 
        {
            var usernameExist = await _userManager.FindByNameAsync(model.Username);

            if (usernameExist != null) 
            {
                return BadRequest("This username is already used!");
            }

            var mailExists = await _userManager.FindByEmailAsync(model.Email);

            if (mailExists != null)
            {
                return BadRequest("This email address is already used!");
            }

            model.Role = "CUSTOMER";

            var applicationUser = new ApplicationUser()
            {
                UserName = model.Username,
                Email = model.Email,
                FullName = model.FullName
            };
           
            try
            {
                var result = await _userManager.CreateAsync(applicationUser, model.Password);
                await _userManager.AddToRoleAsync(applicationUser, model.Role);
                return Ok(result);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        //http://localhost:45551/api/applicationuser/login
        [HttpGet("Login")]
        public async Task<IActionResult> LoginUser([FromBody] LoginRequestModel model) 
        {
            var user = await _userManager.FindByNameAsync(model.Username);
            if (user != null && await _userManager.CheckPasswordAsync(user, model.Password))
            {
                //get roles assinged to user
                var role = await _userManager.GetRolesAsync(user);
                var options = new IdentityOptions();

                try
                {
                    var tokenDescriptor = new SecurityTokenDescriptor()
                    {
                        Subject = new ClaimsIdentity(new Claim[]
                        {
                            new Claim("UserId", user.Id.ToString()),
                            new Claim("Username", user.UserName),
                            new Claim(options.ClaimsIdentity.RoleClaimType, role.FirstOrDefault())
                        }),
                        Expires = DateTime.UtcNow.AddDays(1),
                        SigningCredentials = new SigningCredentials(
                            new SymmetricSecurityKey(
                                Encoding.UTF8.GetBytes(
                                    Configuration.GetSection("ApplicationSettings").GetValue<string>("JWT_secret"))),
                        SecurityAlgorithms.HmacSha256Signature),
                    };

                    var tokenHandler = new JwtSecurityTokenHandler();
                    var securityToken = tokenHandler.CreateToken(tokenDescriptor);
                    var token = tokenHandler.WriteToken(securityToken);
                    return Ok(new { token });
                }
                catch (Exception ex)
                {
                    throw ex;
                }
            }
            else 
            {
                return BadRequest("Username or password are invalid!");
            }
        }


    }
}
