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
    public class MerchantsController : ControllerBase
    {
        private readonly IShoppingRepository _repository;
        private readonly IMapper _mapper;
        public MerchantsController(IShoppingRepository repository, IMapper mapper)
        {
            _mapper = mapper;
            _repository = repository;
        }


        [HttpGet]
        public async Task<IActionResult> Get()
        {
            var customerFromRepo = await _repository.GetMerchants();
            if (customerFromRepo == null)
                return NotFound();
            return Ok(customerFromRepo);
        }
        [HttpGet("{id}", Name="GetMerchant")]
        public async Task<IActionResult> Get(int id)
        {
            var customerFromRepo = await _repository.GetMerchant(id);
            if (customerFromRepo == null)
                return NotFound();
            return Ok(customerFromRepo);
        }
        [HttpPost]
        public async Task<IActionResult> CreateMerchant([FromBody] MerchantToCreateDto customerToCreateDto)
        {
            var customerToCreate = _mapper.Map<Merchant>(customerToCreateDto);

            if (await _repository.EntityExists(customerToCreate))
                return BadRequest("Merchant Name Exists");
            _repository.Add(customerToCreate);
            if (await _repository.SaveAllChangesAsync())
            {
                return CreatedAtRoute("GetMerchant", new {id = customerToCreate.Id}, customerToCreate);
            }
            return BadRequest("An Error occurred while creating the Merchant");
            
        }
        [HttpPut("{id}")]
        public async Task<IActionResult> EditMerchant(int id, [FromBody] MerchantToCreateDto customerToCreateDto)
        {
            var merchantFromRepo = await _repository.GetMerchant(id);
            if (merchantFromRepo == null)
                return NotFound();
            var customerToEdit = _mapper.Map<MerchantToCreateDto, Merchant>(customerToCreateDto, merchantFromRepo);

            _repository.Update(customerToEdit);
            if (await _repository.SaveAllChangesAsync())
            {
                return NoContent();
            }
            return BadRequest("An Error occurred while editing eating the Merchant");
            
        }
        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            var merchantFromRepo = await _repository.GetMerchant(id);
            if (merchantFromRepo == null)
                return NotFound();
            _repository.Delete(merchantFromRepo);
            if (await _repository.SaveAllChangesAsync())
                return Ok();
            return BadRequest($"An Error occurred while trying to delete Merchant with Id {merchantFromRepo.Id}");
        }

    }
}