using Entities;

namespace API.Repository.Interface
{
    public interface IDishCategorySevice
    {
        public IEnumerable<Foodkart> GetDishCategoryListById(int id);
        public IEnumerable<Foodkart> GetDishCategoryListByPrizeWithCategory(params object[] parameters);
        public IEnumerable<Foodkart> GetDishCategoryListByPrize(params object[] parameters);
        public IEnumerable<Foodkart> GetDishVarientListByDishId(int id);

    }
}
