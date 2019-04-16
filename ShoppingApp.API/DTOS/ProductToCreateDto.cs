using System;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.ComponentModel.DataAnnotations;
using Microsoft.AspNetCore.Http;
using ShoppingApp.API.Models;

namespace ShoppingApp.API.DTOS
{
    public class ProductToCreateDto
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
        public IFormFile Image { get; set; }
        public DateTime DateStocked { get; set; }
        [Required]
        public ICollection<FeatureToCreate> Features { get; set; }
        public ProductToCreateDto()
        {
            DateStocked = DateTime.Now;
            Features = new Collection<FeatureToCreate>();
        }
    }
}