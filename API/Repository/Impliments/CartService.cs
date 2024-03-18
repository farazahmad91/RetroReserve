using API.Repository.Interface;
using Entities;
using System.Collections.Generic;
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
            int res = 0;
            try
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
                res = i;
                return i;
            }
            catch (Exception ex)
            {
                var error = new Response
                {
                    ClassName = GetType().Name,
                    FunctionName = "AddOrUpdateCartValue",
                    ResponseText = ex.Message,
                    Proc_Name = "sp_AddOrUpdateCartValue",
                };
                var _ = new ErrorLogService(dapper).Error(error);
                return res;
            }
        }

        public int DeleteCart(int id)
        {
            var res = 0;
            try
            {
                var sp = "sp_DeleteCartValue";
                var param = new
                {
                    CartId = id,
                };
                var i = dapper.Delete(param, sp);
                res = i;
                return i;
            }
            catch (Exception ex)
            {
                var error = new Response
                {
                    ClassName = GetType().Name,
                    FunctionName = "DeleteCart",
                    ResponseText = ex.Message,
                    Proc_Name = "sp_DeleteCartValue",
                };
                var _ = new ErrorLogService(dapper).Error(error);
                return res;
            }
        }

        public IEnumerable<Cart> GetCartValueById(string id)
        {
            IEnumerable<Cart> res = new List<Cart>();
            try
            {
                var sp = "sp_GetCartValueById";
                var param = new
                {
                    UserID = id,
                };
                var i = dapper.GetItemsById<Cart>(param, sp);
                res = i;    
                return i;
            }
            catch (Exception ex)
            {
                var error = new Response
                {
                    ClassName = GetType().Name,
                    FunctionName = "GetCartValueById",
                    ResponseText = ex.Message,
                    Proc_Name = "sp_GetCartValueById",
                };
                var _ = new ErrorLogService(dapper).Error(error);
                return res;
            }
        }
        public Cart GetQtyInCart(string id)
        {  Cart res = new Cart();    
            try
            {
                var sp = "sp_GetNumberInCartItem";
                var param = new
                {
                    UserID = id,
                };
                var i = dapper.GetById<Cart>(param, sp);
                res = i;
                return i;
            }
            catch (Exception ex) 
            {
                var error = new Response
                {
                    ClassName = GetType().Name,
                    FunctionName = "GetQtyInCart",
                    ResponseText = ex.Message,
                    Proc_Name = "sp_GetNumberInCartItem",
                };
                var _ = new ErrorLogService(dapper).Error(error);
                return res;
            }
        }

        public IEnumerable<Cart> GetCartValueList()
        {
            IEnumerable <Cart> res = new List<Cart>();  
            try
            {
                var sp = "sp_CartValueById";
                var i = dapper.GetAll<Cart>(sp);
                res = i;
                return i;
            }
            catch (Exception ex)
            {
                var error = new Response
                {
                    ClassName = GetType().Name,
                    FunctionName = "GetCartValueList",
                    ResponseText = ex.Message,
                    Proc_Name = "sp_CartValueById",
                };
                var _ = new ErrorLogService(dapper).Error(error);
                return res;
            }
        }

        public IEnumerable<Cart> GetCartCheckOutPrice(string id)
        {
            IEnumerable<Cart> res = new List<Cart>();
            try
            {
                var sp = "sp_CartCheckOutById";
                var param = new
                {
                    UserID = id,
                };
                var i = dapper.GetItemsById<Cart>(param, sp);
                return i;
            }
            catch (Exception ex)
            {
                var error = new Response
                {
                    ClassName = GetType().Name,
                    FunctionName = "GetCartCheckOutPrice",
                    ResponseText = ex.Message,
                    Proc_Name = "sp_CartCheckOutById",
                };
                var _ = new ErrorLogService(dapper).Error(error);
                return res;
            }
        }

        public async Task<int> QtyUpdateInCart(CartQTY cartQTY)
        {
            var res = 0;
            try
            {
                var sp = "sp_DishQtyUpdateInCartValue";
                var param = new
                {
                    CartId = cartQTY.CartId,
                    Quantity = cartQTY.Quantity,
                };
                var i = await dapper.Insert(param, sp);
                res= i;
                return i;
            }
            catch (Exception ex)
            {
                var error = new Response
                {
                    ClassName = GetType().Name,
                    FunctionName = "QtyUpdateInCart",
                    ResponseText = ex.Message,
                    Proc_Name = "sp_DishQtyUpdateInCartValue",
                };
                var _ = new ErrorLogService(dapper).Error(error);
                return res;
            }
        }
    }
}
