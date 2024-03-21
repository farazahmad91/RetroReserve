using Entities;

namespace API.Repository.Interface
{
    public interface IAddressService
    {
        public Task<Response> AddOrUpdateUserAddress(Address address);
        public IEnumerable<Address> UserAddressList();
        public Task<int> UpdatePostalCodeStatus(PostalCodes postalCodes);
        public IEnumerable<Address> GetAddressByUserId(string email);
        public Address GetAddressById(int id);
        public IEnumerable<State> StateList();
        public IEnumerable<City> CityList();
        public IEnumerable<Address> FullAddressList();
        public Task<int> RemoveAddress(Address address);
    }
}
