using API.Repository.Interface;
using Entities;

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
                res.ResponseText = ex.Message;
                res.StatusCode = -1;
                return res;
            }
        }

        public IEnumerable<UserProfile> UserProfileList()
        {
            var sp = "sp_GetUserProfileList";
            var i = _dapper.GetAll<UserProfile>(sp);
            return i;
        }
        public UserProfile UserProfileListByEmail(string email)
        {
            var sp = "sp_GetUserProfileByemail";
            var param = new
            {
                Email = email,
            };
            var i = _dapper.GetById<UserProfile>(param, sp);
            return i;
        }

        public async Task<int> UpdateUserProfileImg(UserProfile userProfile)
        {
            var sp = "sp_UpdateUserImageByEmail";
            var param = new
            {
               Email = userProfile.Email,
                Image = userProfile.Image,
            };
            var i = await _dapper.Insert(param, sp);
            return i;
        }

        public async Task<int> UpdateUserProfile(UserProfile userProfile)
        {
            var sp = "sp_UpdateUserProfileById";
            var param = new
            {
                UId = userProfile.UId,
                BirthDay = userProfile.BirthDay,
                Phone = userProfile.Phone,
            };
            var i = await _dapper.Insert(param, sp);
            return i;
        }
    }
}
