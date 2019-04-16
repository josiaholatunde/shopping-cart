using System.Collections.Generic;
using System.Collections.ObjectModel;

namespace ShoppingApp.API.Models
{
    public class SubCategory 
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public int ParentSubCatId { get; set; }
        public Category Category { get; set; }
        public int CategoryId { get; set; }
        public CategoryTypeEnum CategoryTypeEnum { get; set; }
    }
    
}