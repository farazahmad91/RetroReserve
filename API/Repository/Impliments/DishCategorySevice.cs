using API.Repository.Interface;
using Entities;
using System.Collections.Generic;

namespace API.Repository.Impliments
{
    public class DishCategorySevice : IDishCategorySevice
    {
        private readonly IDapperService dapper;
        public DishCategorySevice(IDapperService dapper)
        {
            this.dapper = dapper;
        }
        public async Task<int> AddOrUpdateDishCategory(DishCategory dishCategory)
        {
            var res = 0;
            try
            {
                var sp = "sp_AddOrUpdateDishCategory";
                var param = new
                {
                    DishCategoryId = dishCategory.DishCategoryId,
                    DishCategoryName = dishCategory.DishCategoryName,
                    Icon = dishCategory.Icon,
                    Status = dishCategory.Status,
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
                    FunctionName = "AddOrUpdateDishCategory",
                    ResponseText = ex.Message,
                    Proc_Name = "sp_AddOrUpdateDishCategory",
                };
                var _ = new ErrorLogService(dapper).Error(error);
                return res;
            }
        }
        public DishCategory GetDishCategoryById(int Id)
        {
            DishCategory res = new DishCategory();

            try
            {
                var sp = "sp_GetCategoryById";
                var param = new
                {
                    DishCategoryId = Id,
                };
                var i = dapper.GetById<DishCategory>(param, sp);
                res = i;
                return i;
            }
            catch (Exception ex)
            {
                var error = new Response
                {
                    ClassName = GetType().Name,
                    FunctionName = "GetDishCategoryById",
                    ResponseText = ex.Message,
                    Proc_Name = "sp_GetCategoryById",
                };
                var _ = new ErrorLogService(dapper).Error(error);
                return res;
            }
        }
        public async Task<int> UpdateCategoryStatus(DishCategory dishCategory)
        { 
            var res = 0;
            try
            {
                var sp = "sp_UpdateCategoryStatus";
                var param = new
                {
                    DishCategoryId = dishCategory.DishCategoryId,
                    Status = dishCategory.Status,
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
                    FunctionName = "UpdateCategoryStatus",
                    ResponseText = ex.Message,
                    Proc_Name = "sp_UpdateCategoryStatus",
                };
                var _ = new ErrorLogService(dapper).Error(error);
                return res;
            }
        }

        public IEnumerable<Foodkart> GetDishCategoryListById(int id)
        {
            IEnumerable<Foodkart> res = new List<Foodkart>();
            try
            {
                var sp = "sp_GetDishCategoryList";
                var param = new
                {
                    DishCategoryId = id,
                };
                var i = dapper.GetItemsById<Foodkart>(param, sp);
                res = i;
                return i;
            }
            catch (Exception ex)
            {
                var error = new Response
                {
                    ClassName = GetType().Name,
                    FunctionName = "GetDishCategoryListById",
                    ResponseText = ex.Message,
                    Proc_Name = "sp_GetDishCategoryList",
                };
                var _ = new ErrorLogService(dapper).Error(error);
                return res;
            }
        }

        public IEnumerable<Foodkart> GetDishVarientListByDishId(int id)
        {
            IEnumerable<Foodkart> res = new List<Foodkart>();
            try
            {
                var sp = "sp_GetDishVarientListByDishId";
                var param = new
                {
                    DishId = id,
                };
                var i = dapper.GetItemsById<Foodkart>(param, sp);
                res = i;
                return i;
            }
            catch (Exception ex)
            {
                var error = new Response
                {
                    ClassName = GetType().Name,
                    FunctionName = "GetDishVarientListByDishId",
                    ResponseText = ex.Message,
                    Proc_Name = "sp_GetDishVarientListByDishId",
                };
                var _ = new ErrorLogService(dapper).Error(error);
                return res;
            }
        }

        public IEnumerable<Foodkart> GetDishVarientList()
        {
            IEnumerable<Foodkart> res = new List<Foodkart>();
            try
            {
                var sp = "sp_GetDishVarientList";
                var i = dapper.GetAll<Foodkart>(sp);
                res = i;
                return i;
            }
            catch (Exception ex)
            {
                var error = new Response
                {
                    ClassName = GetType().Name,
                    FunctionName = "GetDishVarientList",
                    ResponseText = ex.Message,
                    Proc_Name = "sp_GetDishVarientList",
                };
                var _ = new ErrorLogService(dapper).Error(error);
                return res;
            }
        }

        public IEnumerable<Foodkart> GetDishByPrize(decimal price)
        {
            IEnumerable<Foodkart> res = new List<Foodkart>();
            try
            {
                var sp = "sp_GetDishListByPrize";
                var param = new
                {
                    SellingCost = price,
                };
                var i = dapper.GetItemsById<Foodkart>(param, sp);
                return i;
            }
            catch (Exception ex)
            {
                var error = new Response
                {
                    ClassName = GetType().Name,
                    FunctionName = "GetDishByPrize",
                    ResponseText = ex.Message,
                    Proc_Name = "sp_GetDishListByPrize",
                };
                var _ = new ErrorLogService(dapper).Error(error);
                return res;
            }
        }

        public IEnumerable<Foodkart> GetDishCategoryListByPrizeWithCategory(params object[] parameters)
        {
            IEnumerable<Foodkart> res = new List<Foodkart>();
            try
            {
                var sp = "sp_GetDishCategoryListByPrizeWithCategory";
                var param = new
                {
                    DishCategoryId = (int)parameters[0],
                    MinPrize = (decimal)parameters[1],
                    MaxPrize = (decimal)parameters[2],
                };
                var i = dapper.GetItemsById<Foodkart>(param, sp);
                res= i;
                return i;
            }
            catch (Exception ex)
            {
                var error = new Response
                {
                    ClassName = GetType().Name,
                    FunctionName = "GetDishCategoryListByPrizeWithCategory",
                    ResponseText = ex.Message,
                    Proc_Name = "sp_GetDishCategoryListByPrizeWithCategory",
                };
                var _ = new ErrorLogService(dapper).Error(error);
                return res;
            }
        }

        public IEnumerable<DishCategory> GetdishcategoryList()
        {
            IEnumerable<DishCategory> res = new List<DishCategory>();
            try
            {
                var sp = "sp_GetAllDishCategoryList";
                var i = dapper.GetAll<DishCategory>(sp);
                res= i;
                return i;
            }
            catch (Exception ex)
            {
                var error = new Response
                {
                    ClassName = GetType().Name,
                    FunctionName = "GetdishcategoryList",
                    ResponseText = ex.Message,
                    Proc_Name = "sp_GetAllDishCategoryList",
                };
                var _ = new ErrorLogService(dapper).Error(error);
                return res;
            }
        }

        public IEnumerable<Foodkart> GetFoodOnSearch(string name)
        {
            IEnumerable<Foodkart> res = new List<Foodkart>();
            try
            {
                var sp = "sp_GetFoodOnSearch";
                var param = new
                {
                    DishName = name,
                };
                var i = dapper.GetItemsById<Foodkart>(param, sp);
                res= i;
                return i;
            }
            catch (Exception ex)
            {
                var error = new Response
                {
                    ClassName = GetType().Name,
                    FunctionName = "GetFoodOnSearch",
                    ResponseText = ex.Message,
                    Proc_Name = "sp_GetFoodOnSearch",
                };
                var _ = new ErrorLogService(dapper).Error(error);
                return res;
            }
        }
        public IEnumerable<Foodkart> SpecialDish()
        {
            IEnumerable<Foodkart> res = new List<Foodkart>();
            try
            {
                var sp = "sp_GetSpecialDish";
                var i = dapper.GetAll<Foodkart>(sp);
                res= i;
                return i;
            }
            catch (Exception ex)
            {
                var error = new Response
                {
                    ClassName = GetType().Name,
                    FunctionName = "SpecialDish",
                    ResponseText = ex.Message,
                    Proc_Name = "sp_GetSpecialDish",
                };
                var _ = new ErrorLogService(dapper).Error(error);
                return res;
            }
        }

        public IEnumerable<Foodkart> RelatedProducts(int id)
        {
            IEnumerable<Foodkart> res = new List<Foodkart>();
            try
            {
                var sp = "sp_GetRelatedProduct";
                var param = new
                {
                    DishCategoryId = id,
                };
                var i = dapper.GetItemsById<Foodkart>(param, sp);
                res= i;
                return i;
            }
            catch (Exception ex)
            {
                var error = new Response
                {
                    ClassName = GetType().Name,
                    FunctionName = "RelatedProducts",
                    ResponseText = ex.Message,
                    Proc_Name = "sp_GetRelatedProduct",
                };
                var _ = new ErrorLogService(dapper).Error(error);
                return res;
            }
        }

        public async Task<int> RecentView(RecentView recentView)
        {
            var res = 0;

            try
            {
                var sp = "sp_AddRecentViewdata";
                var param = new
                {
                    DishId = recentView.DishId,
                    UserID = recentView.UserID,
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
                    FunctionName = "RecentView",
                    ResponseText = ex.Message,
                    Proc_Name = "sp_AddRecentViewdata",
                };
                var _ = new ErrorLogService(dapper).Error(error);
                return res;
            }

        }

        public IEnumerable<Foodkart> GetRecentView(string email)
        {
            IEnumerable<Foodkart> res = new List<Foodkart>();
            try
            {
                var sp = "sp_GetRecentViewById";
                var param = new
                {
                    UserID = email,
                };
                var i = dapper.GetItemsById<Foodkart>(param, sp);
                res = i;
                return i;
            }
            catch (Exception ex)
            {
                var error = new Response
                {
                    ClassName = GetType().Name,
                    FunctionName = "GetRecentView",
                    ResponseText = ex.Message,
                    Proc_Name = "sp_GetRecentViewById",
                };
                var _ = new ErrorLogService(dapper).Error(error);
                return res;
            }
        }
    }
}