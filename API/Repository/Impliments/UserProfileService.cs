using API.Repository.Interface;
using Entities;
using Stripe;

namespace API.Repository.Impliments
{
    public class UserProfileService: IUserProfileService
    {
        private readonly IDapperService _dapper;
        public UserProfileService(IDapperService dapper)
        {
            this._dapper = dapper;
        }
        public async Task<Response> AddOrUpdateUserProfile(UserProfile userProfile)
        {
            var res = new Response()
            {
                ResponseText = "Failed To Save",
                StatusCode = -1,
            };

            try
            {
                var sp = "sp_AddOrUpdateUProfile";
                var param = new
                {
                    UId = userProfile.UId,
                    Name = userProfile.Name,
                    Email = userProfile.Email,
                    Password = userProfile.Password,
                };
                res = await _dapper.GetAsync<Response>(sp, param);

                return res;
            }
            catch (Exception ex)
            {
                var error = new Response
                {
                    ClassName = GetType().Name,
                    FunctionName = "AddOrUpdateUserProfile",
                    ResponseText = ex.Message,
                    Proc_Name = "sp_AddOrUpdateUProfile",
                };
                var _ = new ErrorLogService(_dapper).Error(error);
                return res;
            }
        }

        public IEnumerable<UserProfile> UserProfileList()
        {
            IEnumerable<UserProfile> res = new List<UserProfile>();
            try
            {
                var sp = "sp_GetUserProfileList";
                var i = _dapper.GetAll<UserProfile>(sp);
                res = i;
                return i;
            }
            catch (Exception ex)
            {
                var error = new Response
                {
                    ClassName = GetType().Name,
                    FunctionName = "UserProfileList",
                    ResponseText = ex.Message,
                    Proc_Name = "sp_GetUserProfileList",
                };
                var _ = new ErrorLogService(_dapper).Error(error);
                return res;
            }
        }
        public UserProfile UserProfileListByEmail(string email)
        {
            UserProfile res = new UserProfile();
            try
            {
                var sp = "sp_GetUserProfileByemail";
                var param = new
                {
                    Email = email,
                };
                var i = _dapper.GetById<UserProfile>(param, sp);
                res = i;
                return i;
            }
            catch (Exception ex)
            {
                var error = new Response
                {
                    ClassName = GetType().Name,
                    FunctionName = "UserProfileListByEmail",
                    ResponseText = ex.Message,
                    Proc_Name = "sp_GetUserProfileByemail",
                };
                var _ = new ErrorLogService(_dapper).Error(error);
                return res;
            }
        }

        public async Task<int> UpdateUserProfileImg(UserProfile userProfile)
        {
            var res = 0;
            try
            {
                var sp = "sp_UpdateUserImageByEmail";
                var param = new
                {
                    Email = userProfile.Email,
                    Image = userProfile.Image,
                };
                var i = await _dapper.Insert(param, sp);
                res = i;
                return i;
            }
            catch (Exception ex)
            {
                var error = new Response
                {
                    ClassName = GetType().Name,
                    FunctionName = "UpdateUserProfileImg",
                    ResponseText = ex.Message,
                    Proc_Name = "sp_UpdateUserImageByEmail",
                };
                var _ = new ErrorLogService(_dapper).Error(error);
                return res;
            }
        }

        public async Task<int> UpdateUserProfile(UserProfile userProfile)
        {
            var res = 0;
            try
            {
                var sp = "sp_UpdateUserProfileById";
                var param = new
                {
                    UId = userProfile.UId,
                    BirthDay = userProfile.BirthDay,
                    Phone = userProfile.Phone,
                };
                var i = await _dapper.Insert(param, sp);
                res = i;
                return i;
            }
            catch (Exception ex)
            {
                var error = new Response
                {
                    ClassName = GetType().Name,
                    FunctionName = "UpdateUserProfile",
                    ResponseText = ex.Message,
                    Proc_Name = "sp_UpdateUserProfileById",
                };
                var _ = new ErrorLogService(_dapper).Error(error);
                return res;
            }
        }
    }
}
