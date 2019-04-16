namespace ShoppingApp.API.Models
{
    public class ThirdSubCategory 
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public SubCategory SubCategory { get; set; }
        public int SubCategoryId { get; set; }

    }
    
}