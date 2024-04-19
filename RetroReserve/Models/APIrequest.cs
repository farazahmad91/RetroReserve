﻿using API.Repository.Impliments;
using API.Repository.Interface;
using Entities;
using Newtonsoft.Json;
using System.Net.Http.Headers;
using System.Text;

namespace RetroReserve.Models
{
    public class APIrequest
    {
        
        private readonly string _BaseUrl;
        private readonly IDapperService _dapper;
        public APIrequest(IConfiguration configuration, IDapperService dapper)
        {
            _BaseUrl = configuration.GetSection("BaseAPIUrl").GetValue<string>("Url");
            this._dapper=dapper;
        }
        //public APIrequest(BaseAPIUrl baseAPIUrl)
        //{
        //    _BaseUrl = baseAPIUrl.Url;
        //}
        public async Task<T> GetData<T>(string relativeUrl)
        {
            using (HttpClient httpClient = new HttpClient())
            {

                httpClient.BaseAddress = new Uri(_BaseUrl);
                httpClient.DefaultRequestHeaders.Accept.Clear();
                httpClient.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));

                HttpResponseMessage response = await httpClient.GetAsync(relativeUrl);

                try
                {
                    if (response.IsSuccessStatusCode)
                    {
                        string responseContent = await response.Content.ReadAsStringAsync();
                        return JsonConvert.DeserializeObject<T>(responseContent);
                        
                    }
                    return default(T);
                }
                catch (Exception ex)
                {

                    var error = new Entities.Response
                    {
                        ClassName = GetType().Name,
                        FunctionName = "GetData",
                        ResponseText = ex.Message,
                        Proc_Name = "",
                    };
                    var _ = new ErrorLogService(_dapper).Error(error);
                    return default(T);
                }

                
            }
        }



        public async Task<string> Post(string relativeUrl, object data)
        {
            using (HttpClient httpClient = new HttpClient())
            {
                httpClient.BaseAddress = new Uri(_BaseUrl);
                httpClient.DefaultRequestHeaders.Accept.Clear();
                httpClient.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));

                var content = new StringContent(JsonConvert.SerializeObject(data), Encoding.UTF8, "application/json");
                try
                {
                    using (HttpResponseMessage response = await httpClient.PostAsync(relativeUrl, content))
                    {
                        if (response.IsSuccessStatusCode)
                        {
                            var responseContent = await response.Content.ReadAsStringAsync();
                            return responseContent;
                        }
                    }
                }
                catch (Exception ex)
                {
                    var error = new Entities.Response
                    {
                        ClassName = GetType().Name,
                        FunctionName = "Post",
                        ResponseText = ex.Message,
                        Proc_Name = "",
                    };
                    var _ = new ErrorLogService(_dapper).Error(error);
                    
                }

                

            }
            return ("Error");
        }
        public async Task<bool> Delete(string relativeUrl)
        {
            using (HttpClient httpClient = new HttpClient())
            {
                httpClient.BaseAddress = new Uri(_BaseUrl);
                httpClient.DefaultRequestHeaders.Accept.Clear();
                httpClient.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
                HttpResponseMessage response = await httpClient.DeleteAsync(relativeUrl);

                return response.IsSuccessStatusCode;
            }
        }
    }
}
