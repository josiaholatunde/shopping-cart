using System.Net;
using System.Net.Mail;
using System.Threading.Tasks;
using Microsoft.Extensions.Configuration;

namespace ShoppingApp.API.Helpers
{
    public class EmailSender : IEmailSender
    {
        private readonly IConfiguration _configuration;
        public EmailSender(IConfiguration configuration)
        {
            _configuration = configuration;

        }
        public async Task SendEmail(string email, string subject, string message)
        {
            using (var client = new SmtpClient())
            {
                var credentials = new NetworkCredential
                {
                    UserName = _configuration["EmailSettings:Email"],
                    Password = _configuration["EmailSettings:Password"]
                };
                client.Credentials = credentials;
                client.Host = _configuration["EmailSettings:Host"];
                client.Port = int.Parse(_configuration["EmailSettings:Port"]);
                client.EnableSsl = true;

                using (var emailMessage = new MailMessage())
                {
                    emailMessage.To.Add(new MailAddress(email));
                    emailMessage.From = new MailAddress(_configuration["EmailSettings:Email"]);
                    emailMessage.Subject = subject;
                    emailMessage.Body = message;
                    client.Send(emailMessage);
                }
                await Task.CompletedTask;
            }
        }
    }
}