using Entities;
namespace API.Repository.Interface
{
    public interface IFoodKartService
    {
        public Task<int>AddOrUpdateFoodKart(Foodkart foodkart);
        public Task<int> AddOrUpdateVariant(Foodkart foodkart);
        public Task<int> UpdateFoodVarientStatus(Foodkart foodkart);
        public Foodkart GetFoodVarientById(int id);
        public Task<int> UpdateFoodKartStatus(Foodkart foodkart);
        public Foodkart GetFoodkartById(int id);
        public IEnumerable<Foodkart> GetFoodkartList();
        public IEnumerable<Foodkart> GetFullDetailsFoodkartList();
        public IEnumerable<Foodkart> GetFoodkartDisplayList();
        public int DeleteFoodkart(int id);
        public Foodkart GetDishDetailById(int id);
    }
    public interface ITeaKartService
    {
        public Task<int> AddOrUpdateTeaKart(TeaKart teaKart);
        public TeaKart GetTeaKartById(int id);
        public IEnumerable<TeaKart> GetTeaKartList();
        public int DeleteTeaKart(int id);
        public Task<int> UpdateTeaKartStatus(TeaKart teaKart);
    }
}
