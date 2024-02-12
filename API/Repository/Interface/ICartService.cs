using Entities;
namespace API.Repository.Interface
{
    public interface ICartService
    {
        public Task<int> AddOrUpdateCartValue(Cart cartValue);
        public IEnumerable<Cart> GetCartValueById(string id);
        public IEnumerable<Cart> GetCartValueList();
        public int DeleteCart(int id);
        public Task<int> QtyUpdateInCart(Cart cart);
        public Cart GetNumberInCartItem(string id);
    }
}
