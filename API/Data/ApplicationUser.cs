using Microsoft.AspNetCore.Identity;

namespace API.Data
{
    public class ApplicationUser : IdentityUser
    {
        public string Name { get; set; }

        public string Adhaar { get; set; }
    }
}
