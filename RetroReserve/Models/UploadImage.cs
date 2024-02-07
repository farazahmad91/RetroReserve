namespace RetroReserve.Models
{
    public class UploadImage
    {

        private readonly IWebHostEnvironment webHostEnvironment;

        public UploadImage(IWebHostEnvironment webHostEnvironment)
        {
            this.webHostEnvironment = webHostEnvironment;
        }

        public string Image(IFormFile imageFile, string uploadFolderPath)
        {
            if (imageFile != null && imageFile.Length > 0)
            {
                var uploadsFolder = Path.Combine(webHostEnvironment.WebRootPath, "img");
                if (!Directory.Exists(uploadsFolder))
                {
                    Directory.CreateDirectory(uploadsFolder);
                }

                var uniqueFileName = Guid.NewGuid().ToString() + "_" + imageFile.FileName;
                var filePath = Path.Combine(uploadsFolder, uniqueFileName);

                using (var stream = new FileStream(filePath, FileMode.Create))
                {
                    imageFile.CopyToAsync(stream)
;
                }

                return "/img/" + uniqueFileName;
            }

            return "";
        }
    }
}
