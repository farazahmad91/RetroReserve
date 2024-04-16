using System.ComponentModel.DataAnnotations;
namespace Entities
{
    public class ForgotPasswordViewModel
    {
        [Required]
        [EmailAddress]
        public string Email { get; set; }
    }
}
