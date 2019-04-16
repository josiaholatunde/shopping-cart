using ShoppingApp.API.Models;

namespace ShoppingApp.API.DTOS
{
    public class SubCategoryToCreateDto
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public int CategoryId { get; set; }
        public int ParentSubCatId { get; set; }

        public CategoryTypeEnum CategoryTypeEnum { get; set; }

    }
}