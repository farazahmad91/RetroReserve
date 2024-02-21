using API.Repository.Interface;
using Entities;

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

            var sp = "sp_AddOrUpdateDishCategory";
            var param = new
            {
                DishCategoryId = dishCategory.DishCategoryId,
                DishCategoryName = dishCategory.DishCategoryName,
                Icon = dishCategory.Icon,
                Status = dishCategory.Status,
            };
            var i = await dapper.Insert(param, sp);
            return i;
        }
        public DishCategory GetDishCategoryById(int Id)
        {
            var sp = "sp_GetCategoryById";
            var param = new
            {
                DishCategoryId = Id,
            };
            var i = dapper.GetById<DishCategory>(param, sp);
            return i;
        }
        public async Task<int> UpdateCategoryStatus(DishCategory dishCategory)
        {
            var sp = "sp_UpdateCategoryStatus";
            var param = new
            {
                DishCategoryId = dishCategory.DishCategoryId,
                Status = dishCategory.Status,
            };
            var i = await dapper.Insert(param, sp);
            return i;
        }

        public IEnumerable<Foodkart> GetDishCategoryListById(int id)
        {
            var sp = "sp_GetDishCategoryList";
            var param = new
            {
                DishCategoryId = id,
            };
            var i = dapper.GetItemsById<Foodkart>(param, sp);
            return i;
        }

        public IEnumerable<Foodkart> GetDishVarientListByDishId(int id)
        {
            var sp = "sp_GetDishVarientListByDishId";
            var param = new
            {
                DishId = id,
            };
            var i = dapper.GetItemsById<Foodkart>(param, sp);
            return i;
        }

        public IEnumerable<Foodkart> GetDishVarientList()
        {
            var sp = "sp_GetDishVarientList";
            var i = dapper.GetAll<Foodkart>(sp);
            return i;
        }

        public IEnumerable<Foodkart> GetDishByPrize(decimal price)
        {
            var sp = "sp_GetDishListByPrize";
            var param = new
            {
                SellingCost = price,
            };
            var i = dapper.GetItemsById<Foodkart>(param, sp);
            return i;
        }

        public IEnumerable<Foodkart> GetDishCategoryListByPrizeWithCategory(params object[] parameters)
        {
            var sp = "sp_GetDishCategoryListByPrizeWithCategory";
            var param = new
            {
                DishCategoryId = (int)parameters[0],
                MinPrize = (decimal)parameters[1],
                MaxPrize = (decimal)parameters[2],
            };
            var i = dapper.GetItemsById<Foodkart>(param, sp);
            return i;
        }

        public IEnumerable<DishCategory> GetdishcategoryList()
        {
            var sp = "sp_GetAllDishCategoryList";
            var i = dapper.GetAll<DishCategory>(sp);
            return i;
        }

        public IEnumerable<Foodkart> GetFoodOnSearch(string name)
        {
            var sp = "sp_GetFoodOnSearch";
            var param = new
            {
                DishName = name,
            };
            var i = dapper.GetItemsById<Foodkart>(param, sp);
            return i;
        }
        public IEnumerable<Foodkart> SpecialDish()
        {
            var sp = "sp_GetSpecialDish";
            var i = dapper.GetAll<Foodkart>(sp);
            return i;
        }

        public IEnumerable<Foodkart> RelatedProducts(int id)
        {
            var sp = "sp_GetRelatedProduct";
            var param = new
            {
                DishCategoryId = id,
            };
            var i = dapper.GetItemsById<Foodkart>(param, sp);
            return i;
        }

        public async Task<int> RecentView(RecentView recentView)
        {

            var sp = "sp_AddRecentViewdata";
            var param = new
            {
                DishId = recentView.DishId,
                UserID = recentView.UserID,
            };
            var i = await dapper.Insert(param, sp);
            return i;

        }

        public IEnumerable<Foodkart> GetRecentView(string email)
        {
            var sp = "sp_GetRecentViewById";
            var param = new
            {
                UserID = email,
            };
            var i = dapper.GetItemsById<Foodkart>(param, sp);
            return i;
        }
    }
}