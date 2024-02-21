using Entities;

namespace API.Repository.Interface
{
    public interface IDishCategorySevice
    {
        public DishCategory GetDishCategoryById(int Id);
        public Task<int> AddOrUpdateDishCategory(DishCategory dishCategory);
        public Task<int> UpdateCategoryStatus(DishCategory dishCategory);
        public IEnumerable<Foodkart> GetDishCategoryListById(int id);
        public IEnumerable<Foodkart> GetDishCategoryListByPrizeWithCategory(params object[] parameters);
        public IEnumerable<Foodkart> GetDishByPrize(decimal price);
        public IEnumerable<Foodkart> GetDishVarientListByDishId(int id);
        public IEnumerable<Foodkart> GetDishVarientList();
        public IEnumerable<DishCategory> GetdishcategoryList();
        public IEnumerable<Foodkart> GetFoodOnSearch(string name);
        public IEnumerable<Foodkart> SpecialDish();
        public IEnumerable<Foodkart> RelatedProducts(int id);
        public Task<int> RecentView(RecentView recentView);
        public IEnumerable<Foodkart> GetRecentView(string email);

    }
}
