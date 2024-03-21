using API.Repository.Interface;
using Entities;
using System.Collections.Generic;

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
                var error = new Response
                {
                    ClassName = GetType().Name,
                    FunctionName = "AddOrUpdateUserAddress",
                    ResponseText = ex.Message,
                    Proc_Name = "sp_AddOrUpdateAddress",
                };
                var _ = new ErrorLogService(_dapper).Error(error);
                return res;
            }
        }

        public IEnumerable<Address> UserAddressList()
        {
            IEnumerable <Address> res = new List<Address>();
            try
            {
                var sp = "sp_GetAllAddress";
                var i = _dapper.GetAll<Address>(sp);
                res = i;
                return i;
            }
            catch (Exception ex)
            {
                var error = new Response
                {
                    ClassName = GetType().Name,
                    FunctionName = "UserAddressList",
                    ResponseText = ex.Message,
                    Proc_Name = "sp_GetAllAddress",
                };
                var _ = new ErrorLogService(_dapper).Error(error);
                return res;
            }
        }

        public IEnumerable<Address> GetAddressByUserId(string email)
        {
            IEnumerable<Address> res = new List<Address>();
            try
            {
                var sp = "sp_GetAllAddressByUserId";
                var param = new
                {
                    UserId = email,
                };
                var i = _dapper.GetItemsById<Address>(param, sp);
                res = i;
                return i;
            }
            catch (Exception ex)
            {
                var error = new Response
                {
                    ClassName = GetType().Name,
                    FunctionName = "GetAddressByUserId",
                    ResponseText = ex.Message,
                    Proc_Name = "sp_GetAllAddressByUserId",
                };
                var _ = new ErrorLogService(_dapper).Error(error);
                return res;
            }
        }

        public Address GetAddressById(int id)
        {
            Address res = new Address();
            try
            {
                var sp = "sp_GetAddressById";
                var param = new
                {
                    AddressId = id,
                };
                var i = _dapper.GetById<Address>(param, sp);
                res = i;
                return i;
            }
        
            catch (Exception ex)
            {
                var error = new Response
                {
                    ClassName = GetType().Name,
                    FunctionName = "GetAddressById",
                    ResponseText = ex.Message,
                    Proc_Name = "sp_GetAddressById",
                };
                var _ = new ErrorLogService(_dapper).Error(error);
                return res;
            }
        }
        public IEnumerable<State> StateList()
        {
            IEnumerable <State> res = new List<State>();
            try
            {
                var sp = "sp_GetStateList";
                var i = _dapper.GetAll<State>(sp);
                res = i;
                return i;
            }

            catch (Exception ex)
            {
                var error = new Response
                {
                    ClassName = GetType().Name,
                    FunctionName = "StateList",
                    ResponseText = ex.Message,
                    Proc_Name = "sp_GetStateList",
                };
                var _ = new ErrorLogService(_dapper).Error(error);
                return res;
            }
        }
        public IEnumerable<City> CityList()
        {
            IEnumerable<City> res = new List<City>();
            try
            {
                var sp = "sp_GetCityList";
                var i = _dapper.GetAll<City>(sp);
                res = i;
                return i;
            }

            catch (Exception ex)
            {
                var error = new Response
                {
                    ClassName = GetType().Name,
                    FunctionName = "CityList",
                    ResponseText = ex.Message,
                    Proc_Name = "sp_GetCityList",
                };
                var _ = new ErrorLogService(_dapper).Error(error);
                return res;
            }
        }
        public IEnumerable<Address> FullAddressList()
        {
            IEnumerable<Address> res = new List<Address>();
            try
            {
                var sp = "sp_GetAllAddress";
                var i = _dapper.GetAll<Address>(sp);
                res = i;
                return i;
            }

            catch (Exception ex)
            {
                var error = new Response
                {
                    ClassName = GetType().Name,
                    FunctionName = "FullAddressList",
                    ResponseText = ex.Message,
                    Proc_Name = "sp_GetAllAddress",
                };
                var _ = new ErrorLogService(_dapper).Error(error);
                return res;
            }
        }
        public async Task<int> UpdatePostalCodeStatus(PostalCodes postalcode)
        { 
            int res = 0;
            try
            {
                var sp = "sp_UpdatePostalStatus";
                var param = new
                {
                    postal_id = postalcode.PostalId,
                    Status = postalcode.Status,
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
                    FunctionName = "UpdatePostalCodeStatus",
                    ResponseText = ex.Message,
                    Proc_Name = "sp_UpdatePostalStatus",
                };
                var _ = new ErrorLogService(_dapper).Error(error);
                return res;
            }
        }

        public async Task<int> RemoveAddress(Address address)
        {
            int res = 0;
            try
            {
                var sp = "sp_UpdateStatus";
                var param = new
                {
                    AddressId = address.AddressId,
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
                    FunctionName = "RemoveAddress",
                    ResponseText = ex.Message,
                    Proc_Name = "sp_UpdateStatus",
                };
                var _ = new ErrorLogService(_dapper).Error(error);
                return res;
            }
        }
    }
}
