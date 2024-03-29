﻿using Entities;
namespace API.Repository.Interface
{
    public interface ICartService
    {
        public Task<int> AddOrUpdateCartValue(Cart cartValue);
        public IEnumerable<Cart> GetCartValueById(string id);
        public IEnumerable<Cart> GetCartValueList();
        public int DeleteCart(int id);
        public Task<int> QtyUpdateInCart(CartQTY cartQTY);
        public Cart GetQtyInCart(string id);
        public IEnumerable<Cart> GetCartCheckOutPrice(string id);
    }
}
