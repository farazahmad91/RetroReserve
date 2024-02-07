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

        public IEnumerable<Foodkart> GetDishCategoryListByPrize(params object[] parameters)
        {
            var sp = "sp_GetDishCategoryListByPrize";
            var param = new
            {
                MinValue = (decimal)parameters[0],
                MaxValue = (decimal)parameters[1],
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
    }
}
