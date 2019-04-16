using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using ShoppingApp.API.Helpers;

namespace ShoppingApp.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AccountController: ControllerBase
    {
        private readonly IEmailSender _emailService;

        public AccountController(IEmailSender emailService)
        {
            _emailService = emailService;
        }
        [HttpPost("send-email")]
        public async Task<IActionResult> SendMessage([FromBody] EmailToSendDto emailToSendDto)
        {
            await _emailService.SendEmail(emailToSendDto.EmailAddress, emailToSendDto.Subject, emailToSendDto.Message);
            return Ok();
        }
    }
}