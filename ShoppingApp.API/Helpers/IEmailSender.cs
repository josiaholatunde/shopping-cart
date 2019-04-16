using System.Threading.Tasks;

namespace ShoppingApp.API.Helpers
{
    public interface IEmailSender
    {
         Task SendEmail(string email, string subject, string message);
    }
}