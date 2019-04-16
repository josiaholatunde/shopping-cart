using System.ComponentModel.DataAnnotations;

namespace ShoppingApp.API.DTOS
{
    public class UserToLoginDto
    {
        public int Id { get; set; }
        [Required]
        public string Username { get; set; }
        [Required]
        [StringLength(15, MinimumLength = 7,ErrorMessage="Number of Characters must be greater than 7 and less than 15")]
        public string Password { get; set; }
    }
}