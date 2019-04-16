using System.Threading.Tasks;
using AutoMapper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using ShoppingApp.API.Data;
using ShoppingApp.API.DTOS;
using ShoppingApp.API.Models;

namespace ShoppingApp.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController: ControllerBase
    {
        private readonly IAuthRepository _authRepo;
        private readonly IMapper _mapper;

        public UserController(IAuthRepository authRepo, IMapper mapper)
        {
            _authRepo = authRepo;
            _mapper = mapper;
        }
        [Authorize(Roles= nameof(UserRole.Admin))]
        [HttpGet("{id}", Name="GetUser")]
        public async Task<IActionResult> GetUser(int id)
        {
            var userFromRepo = await _authRepo.GetUser(id);
            if (userFromRepo == null)
                return NotFound();
            var userToReturn = _mapper.Map<UserToReturnDto>(userFromRepo);
            return Ok(userToReturn);
        }
        
    }
}