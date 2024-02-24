using API.Repository.Interface;
using Entities;
namespace API.Repository.Impliments
{
    public class FoodkartService : IFoodKartService
    {
        private readonly IDapperService dapper;
        public FoodkartService(IDapperService dapper)
        {
            this.dapper = dapper;
        }
        public async Task<int> AddOrUpdateFoodKart(Foodkart foodkart)
        {
            var sp = "sp_AddOrUpdateFoodkart";
            var param = new
            {
                DishId = foodkart.DishId,
                DishCategoryId = foodkart.DishCategoryId,
                DishType =foodkart.DishType,
                DishName=foodkart.DishName,
                DishImage = foodkart.DishImage,
                DishPrize=  foodkart.DishPrize,
                DishDescription = foodkart.DishDescription,
                DishStatus = foodkart.DishStatus,
                Quantity = foodkart.Quantity
            };
            var i = await dapper.Insert(param, sp);
            return i;
        }

        public async Task<int> AddOrUpdateVariant(Foodkart foodkart)
        {
            var sp = "sp_AddOrUpdateVariant";
            var param = new
            {
                DishId = foodkart.DishId,
                Id = foodkart.Id,
                VName = foodkart.DishName,
                DishImage = foodkart.DishImage,
                MRP = foodkart.MRP,
                SellingCost = foodkart.SellingCost,
                DishDescription = foodkart.DishDescription,
                DishStatus = foodkart.DishStatus,
                DishQuantity = foodkart.DishQuantity,
            };
            var i = await dapper.Insert(param, sp);
            return i;
        }

        public Foodkart GetFoodVarientById(int id)
        {
            var sp = "Select * From tbl_Variant where Id = @id";
            var param = new
            {
               Id = id,

            };
            var i = dapper.GetById<Foodkart>(param, sp);
            return i;
        }
        public async Task<int> UpdateFoodVarientStatus(Foodkart foodkart)
        {
            var sp = "sp_UpdateFoodVarientStatus";
            var param = new
            {
                Id = foodkart.Id,
                DishStatus = foodkart.DishStatus,
            };
            var i = await dapper.Insert(param, sp);
            return i;
        }


        public async Task<int> UpdateFoodKartStatus(Foodkart foodkart)
        {
            var sp = "sp_UpdateFoodkartStatus";
            var param = new
            {
                DishId = foodkart.DishId,
                DishStatus = foodkart.DishStatus,
            };
            var i = await dapper.Insert(param, sp);
            return i;
        }

        public int DeleteFoodkart(int id)
        {
            var sp = "sp_DeleteFoodkart";
            var param = new
            {
                DishId = id,
               
            };
            return dapper.Delete(param, sp);
        }

        public Foodkart GetFoodkartById(int id)
        {
            var sp = "sp_GetFoodkartById";
            var param = new
            {
                DishId = id,

            };
            var i = dapper.GetById<Foodkart>(param, sp);
            return i;
        }

        public  IEnumerable<Foodkart> GetFoodkartList()
        {
            var sp = "sp_GetFoodkartList";
            var i = dapper.GetAll<Foodkart>(sp);
            return i;
        }

        public IEnumerable<Foodkart> GetFullDetailsFoodkartList()
        {
            var sp = "sp_FullDetailsFoodkartList";
            var i = dapper.GetAll<Foodkart>(sp);
            return i;
        }

        public IEnumerable<Foodkart> GetFoodkartDisplayList()
        {
            var sp = "sp_FoodkartDisplayList";
            var i = dapper.GetAll<Foodkart>(sp);
            return i;
        }

        public Foodkart GetDishDetailById(int id)
        {
            var sp = "sp_GetDishDetailById";
            var param = new
            {
                DishId = id,

            };
            var i = dapper.GetById<Foodkart>(param, sp);
            return i;
        }


    }








    public class TeaKartService : ITeaKartService
    {
        private readonly IDapperService dapper;
        public TeaKartService(IDapperService dapper)
        {
            this.dapper = dapper;
        }
        public async Task<int> AddOrUpdateTeaKart(TeaKart teaKart)
        {
            var sp = "sp_AddOrUpdateTeakart";
            var param = new
            {
               TeaId = teaKart.TeaId,
               TeaCategoryId = teaKart.TeaCategoryId,
               TeaType = teaKart.TeaType,
               TeaName = teaKart.TeaName,
               TeaImage = teaKart.TeaImage,
               TeaPrize = teaKart.TeaPrize,
               TeaDescription = teaKart.TeaDescription,
               Status = teaKart.Status,
                Quantity = teaKart.Quantity

            };
            var i = await dapper.Insert(param, sp);
            return i;
        }

        public int DeleteTeaKart(int id)
        {
            var sp = "sp_DeleteTeakart";
            var param = new
            {
                TeaId = id,

            };
            return dapper.Delete(param, sp);
        }

        public TeaKart GetTeaKartById(int id)
        {
            var sp = "sp_GetTeakartById";
            var param = new
            {
                TeaId = id,

            };
            var i = dapper.GetById<TeaKart>(param, sp);
            return i;
        }

        public IEnumerable<TeaKart> GetTeaKartList()
        {
            var sp = "sp_GetTeakartList";
            var i = dapper.GetAll<TeaKart>(sp);
            return i;
        }
        public async Task<int> UpdateTeaKartStatus(TeaKart teaKart)
        {
            var sp = "sp_UpdateTeakartStatus";
            var param = new
            {
                TeaId = teaKart.TeaId,
                Status = teaKart.Status,
            };
            var i = await dapper.Insert(param, sp);
            return i;
        }
    }

}
