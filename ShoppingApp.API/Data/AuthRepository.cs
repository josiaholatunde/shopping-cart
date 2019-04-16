using System;
using System.Text;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using ShoppingApp.API.DTOS;
using ShoppingApp.API.Models;

namespace ShoppingApp.API.Data
{
    public class AuthRepository : IAuthRepository
    {
        private readonly DataContext _context;

        public AuthRepository(DataContext context)
        {
            _context = context;
        }
        public async Task<User> LoginUser(UserToLoginDto UserToLoginDto)
        {
            User userFromRepo =await _context.Users.FirstOrDefaultAsync(u => u.Username == UserToLoginDto.Username.ToLower());
            if (userFromRepo == null)
                return null;
            if (!ConfirmPasswordHash(userFromRepo.PasswordHash, userFromRepo.PasswordSalt, UserToLoginDto.Password))
                return null;
            return userFromRepo;
        }

        private bool ConfirmPasswordHash(byte[] passwordHash, byte[] passwordSalt, string password)
        {
            using (var hmac = new System.Security.Cryptography.HMACSHA512(passwordSalt))
            {
                var computedPasswordHash = hmac.ComputeHash(Encoding.UTF8.GetBytes(password));
                for (int i = 0; i < passwordHash.Length; i++)
                {
                    if (passwordHash[i] != computedPasswordHash[i])
                        return false;
                }
                return true;
            }
        }

        public async Task<User> RegisterUser(User userToCreateDto, string password)
        {
            byte[] passwordHash, passwordSalt;
            GeneratePasswordHash(out passwordHash, out passwordSalt, password);
            userToCreateDto.PasswordHash = passwordHash;
            userToCreateDto.PasswordSalt = passwordSalt;
            _context.Users.Add(userToCreateDto);
            await _context.SaveChangesAsync();
            return userToCreateDto; 
        }

        private void GeneratePasswordHash(out byte[] passwordHash, out byte[] passwordSalt, string password)
        {
            using (var hmac = new System.Security.Cryptography.HMACSHA512())
            {
                passwordSalt = hmac.Key;
                passwordHash = hmac.ComputeHash(Encoding.UTF8.GetBytes(password));
            }
        }

        public Task<User> GetUser(int userId)
        {
            var userFromRepo = _context.Users.FirstOrDefaultAsync(u => u.Id == userId);
            if (userFromRepo == null)
                return null;
            return userFromRepo;
        }

        public async Task<bool> UserExists(string username)
        {
            if (await _context.Users.AnyAsync(u => u.Username == username.ToLower()))
                return true;
            return false;
        }
    }
}