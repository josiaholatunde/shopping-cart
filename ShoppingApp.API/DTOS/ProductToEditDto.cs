using System;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.ComponentModel.DataAnnotations;

namespace ShoppingApp.API.DTOS
{
    public class ProductToEditDto
    {
        public int Id { get; set; }
        public string Code { get; set; }
        [Required]
        public string Name { get; set; }
        public string Description { get; set; }
        [Required]
        public int QuantityAvailable { get; set; }
        [Required]
        public int CategoryId { get; set; }
        [Required]
        public double Price { get; set; }
        [Required]
        public int BrandId { get; set; }

        [Required]
        public int MerchantId { get; set; }
        public bool PickUpAvailable { get; set; }
        [Required]
        public int StoreId { get; set; }
        public string Image { get; set; }
        public DateTime DateStocked { get; set; }
        [Required]
        public ICollection<FeatureToCreate> Features { get; set; }
        public ProductToEditDto()
        {
            DateStocked = DateTime.Now;
            Features = new Collection<FeatureToCreate>();
        }
    }
}