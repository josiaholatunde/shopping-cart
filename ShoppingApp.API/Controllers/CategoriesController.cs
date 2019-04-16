using System.Collections.Generic;
using System.Threading.Tasks;
using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using ShoppingApp.API.Data;
using ShoppingApp.API.DTOS;
using ShoppingApp.API.Models;

namespace ShoppingApp.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CategoriesController : ControllerBase
    {
        private readonly IShoppingRepository _repository;
        private readonly IMapper _mapper;
        public CategoriesController(IShoppingRepository repository, IMapper mapper)
        {
            _mapper = mapper;
            _repository = repository;
        }


        [HttpGet("{catId}/subCategories")]
        public async Task<IActionResult> GetSubCategories(int catId)
        {
            var categoryFromRepo = await _repository.GetSubCategories(catId);
            var categoryToReturn = _mapper.Map<IEnumerable<SubCategoryToCreateDto>>(categoryFromRepo);
            return Ok(categoryToReturn);
        }
        [HttpGet]
        public async Task<IActionResult> GetCategories()
        {
            var categoryFromRepo = await _repository.GetCategories();
            var categoryToReturn = _mapper.Map<IEnumerable<CategoryToReturnDto>>(categoryFromRepo);
            return Ok(categoryToReturn);
        }
        [HttpGet("all")]
        public async Task<IActionResult> GetCategoriesWithoutPage()
        {
            var categoryFromRepo = await _repository.GetCategoriesWithoutPage();
            var categoryToReturn = _mapper.Map<IEnumerable<CategoryToReturnDto>>(categoryFromRepo);
            return Ok(categoryToReturn);
        }
        [HttpGet("{categoryId}/{subCatId}/thirdSubCategory")]
        public async Task<IActionResult> GetThirdSubCategories(int categoryId, int subCatId)
        {

            var categoryFromRepo = await _repository.GetThirdSubCategory(categoryId, subCatId);
            var categoryToReturn = _mapper.Map<IEnumerable<SubCategoryToCreateDto>>(categoryFromRepo);
            return Ok(categoryToReturn);
        }
        [HttpGet("{id}", Name="GetCategory")]
        public async Task<IActionResult> Get(int id)
        {
            var categoryFromRepo = await _repository.GetCategory(id);
            if (categoryFromRepo == null)
                return NotFound();
            var categoryToReturn = _mapper.Map<CategoryToReturnDto>(categoryFromRepo);
            return Ok(categoryToReturn);
        }
     
        [HttpPost]
        public async Task<IActionResult> CreateCategory([FromBody] CategoryToCreateDto categoryToCreateDto)
        {
            var categoryToCreate = _mapper.Map<Category>(categoryToCreateDto);

            if (await _repository.EntityExists(categoryToCreate))
                return BadRequest("Category Name Exists");
            _repository.Add(categoryToCreate);
            if (await _repository.SaveAllChangesAsync())
            {
                return CreatedAtRoute("GetCategory", new {id = categoryToCreate.Id}, categoryToCreate);
            }
            return BadRequest("An Error occurred while creating the Category");
            
        }
        [HttpPost("sub")]
        public async Task<IActionResult> CreateSubCategory([FromBody] SubCategoryToCreateDto[] categoryToCreateDto)
        {
            var subCategoryToCreate = _mapper.Map<SubCategory[]>(categoryToCreateDto);

            foreach (var item in subCategoryToCreate)
            {
                if (await _repository.EntityExists(subCategoryToCreate))
                return BadRequest("SubCategory Name Exists");
                _repository.Add(item);
            }
            if (await _repository.SaveAllChangesAsync())
            {
                return Ok();
            }
            return BadRequest("An Error occurred while creating the SubCategory");
            
        }
        [HttpPut("{categoryId}")]
        public async Task<IActionResult> EditCategory(int categoryId, [FromBody] CategoryToCreateDto categoryToCreateDto)
        {
            var categoryFromRepo = await _repository.GetCategoryWithSubCategory(categoryId);
            if (categoryFromRepo == null)
                return BadRequest("Invalid Category Id");
            var categoryToCreate = _mapper.Map<CategoryToCreateDto, Category>(categoryToCreateDto, categoryFromRepo);
            _repository.Update(categoryToCreate);
            if (await _repository.SaveAllChangesAsync())
            {
                return NoContent();
            }
            return BadRequest("An Error occurred while updating the Category");

        }
        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            var catFromRepo = await _repository.GetCategory(id);
            if (catFromRepo == null)
                return NotFound();
            _repository.Delete(catFromRepo);
            if (await _repository.SaveAllChangesAsync())
                return Ok();
            return BadRequest($"An Error occurred while trying to delete Category with Id {catFromRepo.Id}");
        }

    }
}