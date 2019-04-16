using System.Linq;
using ShoppingApp.API.DTOS;
using ShoppingApp.API.Models;

namespace ShoppingApp.API.Profile
{
    public class AutoMapperProfile: AutoMapper.Profile
    {
        public AutoMapperProfile()
        {
            CreateMap<UserToRegisterDto, User>();
            CreateMap<UserToLoginDto, User>();
            CreateMap<ProductToCreateDto, Product>();
            CreateMap<MerchantToCreateDto, Merchant>();
            CreateMap<StoreToCreateDto, Store>();
            CreateMap<BrandToCreateDto, Brand>();
            CreateMap<CategoryToCreateDto, Category>();
            CreateMap<SubCategoryToCreateDto, SubCategory>();
            CreateMap<FeatureToCreate, Feature>();
            CreateMap<ProductToEditDto, Product>()
            .ForMember(dest => dest.ImgUrl, opt => opt.MapFrom(src => src.Image));
;


            // Domain to API Resource
            CreateMap<User, UserToReturnDto>();
            CreateMap<Product, ProductToReturnDto>()
            .ForMember(dest => dest.MerchantName, opt => opt.MapFrom(src => src.Merchant.Name))
            .ForMember(dest => dest.BrandName, opt => opt.MapFrom(src => src.Brand.Name))
            .ForMember(dest => dest.CategoryName, opt => opt.MapFrom(src => src.CategoryName.Name));
            CreateMap<Feature, FeatureToReturn>();
            CreateMap<Brand, BrandToCreateDto>();
            CreateMap<Brand, BrandToReturnDto>();
            CreateMap<Store, StoreToCreateDto>();
            CreateMap<SubCategory, SubCategoryToCreateDto>();
            CreateMap<Category, CategoryToReturnDto>()
            .ForMember(dest => dest.SubCategory, opt => opt.MapFrom(src => src.SubCategory.Where(sb => sb.CategoryTypeEnum == CategoryTypeEnum.SubCategory)))
            .ForMember(dest => dest.ThirdSubCategory, opt => opt.MapFrom(src => src.SubCategory.Where(sb => sb.CategoryTypeEnum == CategoryTypeEnum.ThirdSubCategory)));


            CreateMap<Store, StoreToReturn>()
            .ForMember(dest => dest.Name, opt => opt.MapFrom(src => $"{src.Name}, {src.Location}"));
            CreateMap<BrandCategory, BrandToReturnDto>()
            .ForMember(dest => dest.Name, opt => opt.MapFrom(src => src.Brand.Name))
            .ForMember(dest => dest.BrandId, opt => opt.MapFrom(src => src.Brand.Id));
        }
    }
}