using Entities;
using Microsoft.Extensions.Options;
using Newtonsoft.Json;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Text;

namespace RetroReserve.Models
{
    public class APIrequest
    {
        private readonly string _BaseUrl;

        public APIrequest(IConfiguration configuration)
        {
            _BaseUrl = configuration.GetSection("BaseAPIUrl").GetValue<string>("Url");
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

                if (response.IsSuccessStatusCode)
                {
                    string responseContent = await response.Content.ReadAsStringAsync();
                    return JsonConvert.DeserializeObject<T>(responseContent);
                }

                return default(T);
            }
        }

        public async Task<T> GetMultipleDataById<T>(string relativeUrl, params object[] parameters)
        {
            using (HttpClient httpClient = new HttpClient())
            {
                httpClient.BaseAddress = new Uri(_BaseUrl);
                httpClient.DefaultRequestHeaders.Accept.Clear();
                httpClient.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));

                // string queryString = string.Join("&", parameters.Select(p => $"id={Uri.EscapeDataString(p.ToString())}"));

                HttpResponseMessage response = await httpClient.GetAsync(relativeUrl);

                if (response.IsSuccessStatusCode)
                {
                    string responseContent = await response.Content.ReadAsStringAsync();
                    return JsonConvert.DeserializeObject<T>(responseContent);
                }

                return default(T);
            }
        }


        public async Task<T> GetMultipleParameter<T>(string relativeUrl, params object[] parameters)
        {
            using (HttpClient httpClient = new HttpClient())
            {
                httpClient.BaseAddress = new Uri(_BaseUrl);
                httpClient.DefaultRequestHeaders.Accept.Clear();
                httpClient.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));

                string queryString = string.Join("&", parameters.Select((param, index) => $"param{index}={param}"));

                HttpResponseMessage response = await httpClient.GetAsync($"{relativeUrl}?{queryString}");

                if (response.IsSuccessStatusCode)
                {
                    string responseContent = await response.Content.ReadAsStringAsync();
                    return JsonConvert.DeserializeObject<T>(responseContent);
                }

                return default(T);
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
