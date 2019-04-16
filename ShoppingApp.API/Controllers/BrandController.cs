using System.Collections.Generic;
using System.Threading.Tasks;
using AutoMapper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using ShoppingApp.API.Data;
using ShoppingApp.API.DTOS;
using ShoppingApp.API.Helpers;
using ShoppingApp.API.Models;

namespace ShoppingApp.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BrandsController : ControllerBase
    {
        private readonly IShoppingRepository _repository;
        private readonly IMapper _mapper;
        public BrandsController(IShoppingRepository repository, IMapper mapper)
        {
            _mapper = mapper;
            _repository = repository;
        }

         [HttpGet("all")]
        public async Task<IActionResult> GetAllBrands()
        {
            var brandFromRepo = await _repository.GetAllBrands();
            var brandToReturn = _mapper.Map<IEnumerable<BrandToReturnDto>>(brandFromRepo);
            return Ok(brandToReturn);
        }

        [HttpGet]
        public async Task<IActionResult> GetBrands([FromQuery] QueryParams queryParams)
        {
            var brandFromRepo = await _repository.GetBrands(queryParams);
            var brandToReturn = _mapper.Map<IEnumerable<BrandToReturnDto>>(brandFromRepo);
            return Ok(brandToReturn);
        }
        [HttpGet("{id}", Name="GetBrand")]
        public async Task<IActionResult> Get(int id)
        {
            var brandFromRepo = await _repository.GetBrand(id);
            if (brandFromRepo == null)
                return NotFound();
            return Ok(brandFromRepo);
        }
        [Authorize]
        [HttpPost]
        public async Task<IActionResult> CreateBrand([FromBody] BrandToCreateDto brandToCreateDto)
        {
            var brandToCreate = _mapper.Map<Brand>(brandToCreateDto);
            if (await _repository.EntityExists(brandToCreate))
                return BadRequest("Brand Name Exists");
            _repository.Add(brandToCreate);
            if (await _repository.SaveAllChangesAsync())
            {
                var brandToReturn = _mapper.Map<BrandToCreateDto>(brandToCreateDto);
                return CreatedAtRoute("GetBrand", new {id = brandToCreate.Id}, brandToReturn);
            }
            return BadRequest("An Error occurred while creating the brand");
            
        }
        [Authorize]
        [HttpPut("{id}")]
        public async Task<IActionResult> EditBrand(int id,[FromBody] BrandToCreateDto brandToEditDto)
        {
            var brandFromRepo = await _repository.GetBrand(id);
            if (brandFromRepo == null)
            {
                return NotFound();
            }
            var brandToEdit = _mapper.Map<BrandToCreateDto,Brand>(brandToEditDto, brandFromRepo);
        
            _repository.Update(brandToEdit);
            if (await _repository.SaveAllChangesAsync())
            {
                var brandToReturn = _mapper.Map<BrandToCreateDto>(brandToEdit);
                return CreatedAtRoute("GetBrand", new {id = brandToEdit.Id}, brandToReturn);
            }
            return BadRequest("An Error occurred while editing the brand");
            
        }
        [Authorize]
        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            var brandFromRepo = await _repository.GetBrand(id);
            if (brandFromRepo == null)
                return NotFound();
            _repository.Delete(brandFromRepo);
            if (await _repository.SaveAllChangesAsync())
                return Ok();
            return BadRequest($"An Error occurred while trying to delete Category with Id {brandFromRepo.Id}");
        }

    }
}