namespace ShoppingApp.API.DTOS
{
    public class FeatureToCreate
    {
        public int Id { get; set; }
        public string Key { get; set; }
        public string Value { get; set; }
        public int ProductId { get; set; }

    }
}