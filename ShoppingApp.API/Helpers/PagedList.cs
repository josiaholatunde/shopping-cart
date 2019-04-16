using System.Collections.Generic;

namespace ShoppingApp.API.Helpers
{
    public class PagedList<T> where T: class
    {
        public int Count { get; set; }
        public IEnumerable<T> Items { get; set; }

    }
}