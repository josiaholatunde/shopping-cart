using ShoppingApp.API.Models;

namespace ShoppingApp.API.DTOS
{
    public class UserToReturnDto
    {
        public int Id { get; set; }
        public string Username { get; set; }
        public UserRole UserRole { get; set; }
    }
}