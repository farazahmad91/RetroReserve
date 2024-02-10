using API.Repository.Interface;
using Entities;
namespace API.Repository.Impliments
{
    public class CartService : ICartService
    {
        private readonly IDapperService dapper;
        public CartService(IDapperService dapper)
        {
                this.dapper = dapper;
        }
        public async Task<int> AddOrUpdateCartValue(Cart cartValue)
        {
            var sp = "sp_AddOrUpdateCartValue";
            var param = new
            {
                UserID = cartValue.UserID,
                Id = cartValue.Id,
                Quantity = cartValue.Quantity,
                Status = cartValue.Status,
                message = cartValue.message,
            };
            var i = await dapper.Insert(param, sp);
            return i;
        }

        public int DeleteCart(int id)
        {
            var sp = "sp_DeleteCartValue";
            var param = new
            {
                CartId = id,
            };
            return dapper.Delete(param, sp);
        }

        public IEnumerable<Cart> GetCartValueById(string id)
        {
            var sp = "sp_GetCartValueById";
            var param = new
            {
                UserID = id,
            };
            var i = dapper.GetItemsById<Cart>(param, sp);
            return i;
        }
        public Cart GetNumberInCartItem(string id)
        {
            var sp = "sp_GetNumberInCartItem";
            var param = new
            {
                UserID = id,
            };
            var i = dapper.GetById<Cart>(param, sp);
            return i;
        }

        public IEnumerable<Cart> GetCartValueList()
        {
            var sp = "sp_CartValueById";
            var i = dapper.GetAll<Cart>(sp);
            return i;
        }


        public async Task<int> DishQtyUpdateInCartValue(Cart cartValue)
        {
            var sp = "sp_DishQtyUpdateInCartValue";
            var param = new
            {
                CartId = cartValue.CartId,
             Quantity = cartValue.Quantity,
            };
            var i = await dapper.Insert(param, sp);
            return i;
        }
    }
}
