using Entities;

namespace API.Repository.Interface
{
    public interface IUserProfileService
    {
        public Task<Response> AddOrUpdateUserProfile(UserProfile userProfile);
        public IEnumerable<UserProfile> UserProfileList();
        public UserProfile UserProfileListByEmail(string email);
        public Task<int> UpdateUserProfileImg(UserProfile userProfile);
        public Task<int> UpdateUserProfile(UserProfile userProfile);

    }
}
