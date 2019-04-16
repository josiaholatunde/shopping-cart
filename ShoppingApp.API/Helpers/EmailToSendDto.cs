namespace ShoppingApp.API.Helpers
{
    public class EmailToSendDto
    {
        public string Message { get; set; }
        public string Subject { get; set; }
        public string EmailAddress { get; set; }
    }
}