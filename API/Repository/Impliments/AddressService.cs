using API.Repository.Interface;
using Entities;

namespace API.Repository.Impliments
{
    public class AddressService : IAddressService
    {
        private readonly IDapperService _dapper;
        public AddressService(IDapperService dapper)
        {
            this._dapper = dapper;
        }
        public async Task<Response> AddOrUpdateUserAddress(Address address)
        {
            var res = new Response()
            {
                ResponseText = "Failed To Save",
                StatusCode = -1,
            };

            try
            {
                var sp = "sp_AddOrUpdateAddress";
                var param = new
                {
                    AddressId = address.AddressId,
                    UserId = address.UserId,
                    RecipientName = address.RecipientName,
                    RecipientContact = address.RecipientContact,
                    StreetAddress = address.StreetAddress,
                    Landmark = address.Landmark,
                    State = address.State,
                    City = address.City,
                    PostalCode = address.PostalCode,
                    UpdatedAt = address.UpdatedAt,
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

        public IEnumerable<Address> UserAddressList()
        {
            var sp = "sp_GetAllAddress";
            var i = _dapper.GetAll<Address>(sp);
            return i;
        }

        public Address GetAddressByUserId(string email)
        {
            var sp = "sp_GetAllAddressByUserId";
            var param = new
            {
                UserId = email,
            };
            var i = _dapper.GetById<Address>(param, sp);
            return i;
        }

        public Address GetAddressById(int id)
        {
            var sp = "sp_GetAddressById";
            var param = new
            {
                AddressId = id,
            };
            var i = _dapper.GetById<Address>(param, sp);
            return i;
        }

        public IEnumerable<State> StateList()
        {
            var sp = "sp_GetStateList";
            var i = _dapper.GetAll<State>(sp);
            return i;
        }
        public IEnumerable<City> CityList()
        {
            var sp = "sp_GetCityList";
            var i = _dapper.GetAll<City>(sp);
            return i;
        }
        public IEnumerable<Address> FullAddressList()
        {
            var sp = "sp_GetAllAddress";
            var i = _dapper.GetAll<Address>(sp);
            return i;
        }
        public async Task<int> UpdatePostalCodeStatus(PostalCodes postalcode)
        {
            var sp = "sp_UpdatePostalStatus";
            var param = new
            {
                postal_id = postalcode.PostalId,
                Status = postalcode.Status,
            };
            var i = await _dapper.Insert(param, sp);
            return i;
        }
    }
}
