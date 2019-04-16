using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.ComponentModel.DataAnnotations;

namespace ShoppingApp.API.DTOS
{
    public class CategoryToCreateDto
    {
        public int Id { get; set; }
        [Required]
        public string Name { get; set; }
        public ICollection<SubCategoryToCreateDto> SubCategory { get; set; }
        public CategoryToCreateDto()
        {
            SubCategory = new Collection<SubCategoryToCreateDto>();
        }

    }
}