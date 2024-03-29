﻿using System.ComponentModel.DataAnnotations;

namespace API.Entities
{
    public class RegisterViewModel
    {
        [Required]
        [StringLength(50)]

        public string Name { get; set; }

        [Required]
        [StringLength(50, MinimumLength = 5)]
        [EmailAddress]
        public string Email { get; set; }

        [Required]
        [StringLength(20, MinimumLength = 5)]
        public string Adhaar { get; set; }


        [Required]
        [StringLength(50, MinimumLength = 5)]
        public string Password { get; set; }


        [Required]
        [StringLength(50, MinimumLength = 5)]
        public string ConfirmPassword { get; set; }

        public string?Role { get; set; }
    }
    public class User
    {
        public string Id { get; set; }
        public string  Email { get; set; }
        public string Name { get; set; }
        public string UserName { get; set; }
        public string? Role { get; set; }
    }

}
