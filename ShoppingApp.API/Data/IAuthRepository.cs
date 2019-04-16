using System.Threading.Tasks;
using ShoppingApp.API.DTOS;
using ShoppingApp.API.Models;

namespace ShoppingApp.API.Data
{
    public interface IAuthRepository
    {
        Task<User> LoginUser(UserToLoginDto user);
        Task<User> GetUser(int userId);
        Task<User> RegisterUser(User userToCreateDto, string password);
        Task<bool> UserExists(string username);
    }
}