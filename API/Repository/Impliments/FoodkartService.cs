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
            var res = 0;
            try
            {
                var sp = "sp_AddOrUpdateFoodkart";
                var param = new
                {
                    DishId = foodkart.DishId,
                    DishCategoryId = foodkart.DishCategoryId,
                    DishType = foodkart.DishType,
                    DishName = foodkart.DishName,
                    DishImage = foodkart.DishImage,
                    DishPrize = foodkart.DishPrize,
                    DishDescription = foodkart.DishDescription,
                    DishStatus = foodkart.DishStatus,
                    Quantity = foodkart.Quantity
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
                    FunctionName = "AddOrUpdateFoodKart",
                    ResponseText = ex.Message,
                    Proc_Name = "sp_AddOrUpdateFoodkart",
                };
                var _ = new ErrorLogService(dapper).Error(error);
                return res;
            }
        }

        public async Task<int> AddOrUpdateVariant(Foodkart foodkart)
        {
            var res = 0;
            try
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
                res = i;
                return i;
            }
            catch (Exception ex)
            {
                var error = new Response
                {
                    ClassName = GetType().Name,
                    FunctionName = "AddOrUpdateVariant",
                    ResponseText = ex.Message,
                    Proc_Name = "sp_AddOrUpdateVariant",
                };
                var _ = new ErrorLogService(dapper).Error(error);
                return res;
            }
        }

        public Foodkart GetFoodVarientById(int id)
        {
            Foodkart res = new Foodkart();
            try
            {
                var sp = "Select * From tbl_Variant where Id = @id";
                var param = new
                {
                    Id = id,

                };
                var i = dapper.GetById<Foodkart>(param, sp);
                res = i;
                return i;
            }
            catch (Exception ex)
            {
                var error = new Response
                {
                    ClassName = GetType().Name,
                    FunctionName = "GetFoodVarientById",
                    ResponseText = ex.Message,
                    Proc_Name = "Inline Query",
                };
                var _ = new ErrorLogService(dapper).Error(error);
                return res;
            }
        }

        public IEnumerable<Foodkart> GetFoodVarientdetailsById(int id)
        {
            IEnumerable<Foodkart> res = new List<Foodkart>();
            try
            {
                var sp = "Select * From tbl_Variant where DishId = @id";
                var param = new
                {
                    Id = id,

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
                    FunctionName = "GetFoodVarientdetailsById",
                    ResponseText = ex.Message,
                    Proc_Name = "Inline Query",
                };
                var _ = new ErrorLogService(dapper).Error(error);
                return res;
            }
        }
        public async Task<int> UpdateFoodVarientStatus(Foodkart foodkart)
        {
            var res = 0;
            try
            {
                var sp = "sp_UpdateFoodVarientStatus";
                var param = new
                {
                    Id = foodkart.Id,
                    DishStatus = foodkart.DishStatus,
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
                    FunctionName = "UpdateFoodVarientStatus",
                    ResponseText = ex.Message,
                    Proc_Name = "sp_UpdateFoodVarientStatus",
                };
                var _ = new ErrorLogService(dapper).Error(error);
                return res;
            }
        }


        public async Task<int> UpdateFoodKartStatus(Foodkart foodkart)
        {
            var res = 0;
            try
            {
                var sp = "sp_UpdateFoodkartStatus";
                var param = new
                {
                    DishId = foodkart.DishId,
                    DishStatus = foodkart.DishStatus,
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
                    FunctionName = "UpdateFoodVarientStatus",
                    ResponseText = ex.Message,
                    Proc_Name = "sp_UpdateFoodkartStatus",
                };
                var _ = new ErrorLogService(dapper).Error(error);
                return res;
            }
        }

        public int DeleteFoodkart(int id)
        {
            var res = 0;
            var sp = "sp_DeleteFoodkart";
            var param = new
            {
                DishId = id,
               
            };
           var i= dapper.Delete(param, sp);
            res = i;
            return i;
        }

        public Foodkart GetFoodkartById(int id)
        {
            Foodkart res = new Foodkart();
            try
            {
                var sp = "sp_GetFoodkartById";
                var param = new
                {
                    DishId = id,

                };
                var i = dapper.GetById<Foodkart>(param, sp);
                res = i;
                return i;
            }
            catch (Exception ex)
            {
                var error = new Response
                {
                    ClassName = GetType().Name,
                    FunctionName = "GetFoodkartById",
                    ResponseText = ex.Message,
                    Proc_Name = "sp_GetFoodkartById",
                };
                var _ = new ErrorLogService(dapper).Error(error);
                return res;
            }
        }

        public  IEnumerable<Foodkart> GetFoodkartList()
        {
            IEnumerable<Foodkart> res = new List<Foodkart>();
            try
            {
                var sp = "sp_GetFoodkartList";
                var i = dapper.GetAll<Foodkart>(sp);
                res = i;
                return i;
            }
            catch (Exception ex)
            {
                var error = new Response
                {
                    ClassName = GetType().Name,
                    FunctionName = "GetFoodkartList",
                    ResponseText = ex.Message,
                    Proc_Name = "sp_GetFoodkartList",
                };
                var _ = new ErrorLogService(dapper).Error(error);
                return res;
            }
        }

        public IEnumerable<Foodkart> GetFullDetailsFoodkartList()
        {
            IEnumerable<Foodkart> res = new List<Foodkart>();
            try
            {
                var sp = "sp_FullDetailsFoodkartList";
                var i = dapper.GetAll<Foodkart>(sp);
                res = i;
                return i;
            }
            catch (Exception ex)
            {
                var error = new Response
                {
                    ClassName = GetType().Name,
                    FunctionName = "GetFullDetailsFoodkartList",
                    ResponseText = ex.Message,
                    Proc_Name = "sp_FullDetailsFoodkartList",
                };
                var _ = new ErrorLogService(dapper).Error(error);
                return res;
            }
        }

        public IEnumerable<Foodkart> GetFoodkartDisplayList()
        {
            IEnumerable<Foodkart> res = new List<Foodkart>();
            try
            {
                var sp = "sp_FoodkartDisplayList";
                var i = dapper.GetAll<Foodkart>(sp);
                res = i;
                return i;
            }
            catch (Exception ex)
            {
                var error = new Response
                {
                    ClassName = GetType().Name,
                    FunctionName = "GetFoodkartDisplayList",
                    ResponseText = ex.Message,
                    Proc_Name = "sp_FoodkartDisplayList",
                };
                var _ = new ErrorLogService(dapper).Error(error);
                return res;
            }
        }

        public Foodkart GetDishDetailById(int id)
        {
            Foodkart res = new Foodkart();
            try
            {
                var sp = "sp_GetDishDetailById";
                var param = new
                {
                    DishId = id,

                };
                var i = dapper.GetById<Foodkart>(param, sp);
                res = i;
                return i;
            }
            catch (Exception ex)
            {
                var error = new Response
                {
                    ClassName = GetType().Name,
                    FunctionName = "GetDishDetailById",
                    ResponseText = ex.Message,
                    Proc_Name = "sp_GetDishDetailById",
                };
                var _ = new ErrorLogService(dapper).Error(error);
                return res;
            }
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
            var res = 0;
            try
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
                res = i;
                return i;
            }
            catch (Exception ex)
            {
                var error = new Response
                {
                    ClassName = GetType().Name,
                    FunctionName = "AddOrUpdateTeaKart",
                    ResponseText = ex.Message,
                    Proc_Name = "sp_AddOrUpdateTeakart",
                };
                var _ = new ErrorLogService(dapper).Error(error);
                return res;
            }
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
            TeaKart res = new TeaKart();
            try
            {
                var sp = "sp_GetTeakartById";
                var param = new
                {
                    TeaId = id,

                };
                var i = dapper.GetById<TeaKart>(param, sp);
                res = i;
                return i;
            }
            catch (Exception ex)
            {
                var error = new Response
                {
                    ClassName = GetType().Name,
                    FunctionName = "GetTeaKartById",
                    ResponseText = ex.Message,
                    Proc_Name = "sp_GetTeakartById",
                };
                var _ = new ErrorLogService(dapper).Error(error);
                return res;
            }
        }

        public IEnumerable<TeaKart> GetTeaKartList()
        {
            IEnumerable<TeaKart> res = new List<TeaKart>();
            try
            {
                var sp = "sp_GetTeakartList";
                var i = dapper.GetAll<TeaKart>(sp);
                res = i;
                return i;
            }
            catch (Exception ex)
            {
                var error = new Response
                {
                    ClassName = GetType().Name,
                    FunctionName = "GetTeaKartList",
                    ResponseText = ex.Message,
                    Proc_Name = "sp_GetTeakartList",
                };
                var _ = new ErrorLogService(dapper).Error(error);
                return res;
            }
        }
        public async Task<int> UpdateTeaKartStatus(TeaKart teaKart)
        {
            var res = 0;
            try
            {
                var sp = "sp_UpdateTeakartStatus";
                var param = new
                {
                    TeaId = teaKart.TeaId,
                    Status = teaKart.Status,
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
                    FunctionName = "UpdateTeaKartStatus",
                    ResponseText = ex.Message,
                    Proc_Name = "sp_UpdateTeakartStatus",
                };
                var _ = new ErrorLogService(dapper).Error(error);
                return res;
            }
        }
    }

}
