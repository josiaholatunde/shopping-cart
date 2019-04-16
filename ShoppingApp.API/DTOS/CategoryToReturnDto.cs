using System.Collections.Generic;

namespace ShoppingApp.API.DTOS
{
    public class CategoryToReturnDto
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public ICollection<SubCategoryToCreateDto> SubCategory { get; set; }
        public ICollection<SubCategoryToCreateDto> ThirdSubCategory { get; set; }
    }
}