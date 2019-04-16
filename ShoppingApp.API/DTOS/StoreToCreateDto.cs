using System.ComponentModel.DataAnnotations;

namespace ShoppingApp.API.DTOS
{
    public class StoreToCreateDto
    {
        public int Id { get; set; }
        [Required]
        public string Name { get; set; }
        [Required]
        public string Location { get; set; }
    }
    public class StoreToReturn
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Location { get; set; }
    }
}