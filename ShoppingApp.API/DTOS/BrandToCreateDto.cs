using System.ComponentModel.DataAnnotations;

namespace ShoppingApp.API.DTOS
{
    public class BrandToCreateDto
    {
        public int Id { get; set; }
        [Required]
        public string Name { get; set; }

    }
}