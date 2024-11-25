namespace RetroReserve.Models
{
	public class BaseUrl : IBaseUrl
	{
		private readonly IWebHostEnvironment _webHostEnvironment;
		public BaseUrl(IWebHostEnvironment webHostEnvironment)
		{
			_webHostEnvironment = webHostEnvironment;

		}
		public string GetBaseUrl()
		{
			string baseUrl = "";
			if (_webHostEnvironment.IsDevelopment())
			{
				baseUrl = "https://localhost:7291";
			}
			else
			{
				baseUrl = "http://restroapi.runasp.net";
			}
			return baseUrl;
		}
	}

}
