using System;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;
using Microsoft.IdentityModel.Tokens;
using ShoppingApp.API.Data;
using ShoppingApp.API.DTOS;
using ShoppingApp.API.Helpers;
using ShoppingApp.API.Models;

namespace ShoppingApp.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController: ControllerBase
    {
        private readonly IAuthRepository _authRepo;
        private readonly IMapper _mapper;
        private readonly IOptions<AppSettings> _appSettings;

        public AuthController(IAuthRepository authRepo, IMapper mapper, IOptions<AppSettings> appSettings)
        {
            _authRepo = authRepo;
            _mapper = mapper;
            _appSettings = appSettings;
        }
        [HttpPost("login")]
        public async Task<IActionResult> LoginUser([FromBody] UserToLoginDto userToLoginDto)
        {
            if (string.IsNullOrWhiteSpace(userToLoginDto.Username) || string.IsNullOrWhiteSpace(userToLoginDto.Password))
                return BadRequest("Invalid Username or Password");
            var userToLogin = await _authRepo.LoginUser(userToLoginDto);
            if (userToLogin == null)
                return Unauthorized();

            var userToReturn = _mapper.Map<UserToReturnDto>(userToLogin);
            var key = Encoding.ASCII.GetBytes(_appSettings.Value.Secret);
            var tokenDescriptor = new SecurityTokenDescriptor {
                Subject = new ClaimsIdentity(new Claim[]{
                    new Claim(ClaimTypes.NameIdentifier, userToLogin.Id.ToString()),
                    new Claim(ClaimTypes.Name, userToLogin.Username),
                    new Claim(ClaimTypes.Role, userToLogin.UserRole.ToString())
                }),
                Expires = DateTime.UtcNow.AddDays(1),
                SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(key),SecurityAlgorithms.HmacSha512Signature)
            };
            var tokenHandler = new JwtSecurityTokenHandler();
            var token = tokenHandler.CreateToken(tokenDescriptor);
            var tokenToReturn = tokenHandler.WriteToken(token);
            return Ok(new {
                user = userToReturn,
                token = tokenToReturn
            });

        }
        [HttpPost("register")]
        public async Task<IActionResult> RegisterUser([FromBody] UserToRegisterDto UserToRegisterDto)
        {
            if (string.IsNullOrWhiteSpace(UserToRegisterDto.Username) || string.IsNullOrWhiteSpace(UserToRegisterDto.Password))
                return BadRequest("Invalid Registeration Credentials");
            if (await _authRepo.UserExists(UserToRegisterDto.Username.ToLower()))
                return BadRequest("Username Exists");
            var userToRegister = _mapper.Map<User>(UserToRegisterDto);
            var createdUser = await _authRepo.RegisterUser(userToRegister, UserToRegisterDto.Password);
            var userToReturn = _mapper.Map<UserToReturnDto>(createdUser);
            return CreatedAtRoute("GetUser", new {Controller="User", id = createdUser.Id}, userToReturn);
        }
        
    }
}