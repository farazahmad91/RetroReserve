using System.ComponentModel.DataAnnotations;

namespace API.Entities
{
    public class LoginRequest
    {
   
        
        public string Email { get; set; }

  
        public string? Password { get; set; }


    }
}
