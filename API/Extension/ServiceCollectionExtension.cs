using IdentityAPI.Services;
using Microsoft.AspNetCore.Identity;
using Microsoft.OpenApi.Models;
using API.Services;
using System.Text;
using API.Connection;
using API.Data;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.IdentityModel.Tokens;
using Microsoft.EntityFrameworkCore;

namespace API.Extension
{
    public static class ServiceCollectionExtension
    {
        public static void RegisterService(this IServiceCollection services, IConfiguration configuration)
        {
            string dbConnectionString = configuration.GetConnectionString("Default");
            IConnectionString ch = new ConnectionProvidor { ConnectionString = dbConnectionString };
            services.AddSingleton<IConnectionString>(ch);
            //servicess
            services.AddScoped<IUserService, UserService>();

            
            services.AddDbContext<ApplicationDbContext>(options =>
            {
                options.UseSqlServer(ch.ConnectionString);
            });

            services.AddIdentity<ApplicationUser, IdentityRole>(
                 options =>

                 {
                     options.Password.RequireDigit = true;
                     options.Password.RequiredLength = 5;
                     options.Password.RequireLowercase = true;
                 }
                 ).AddEntityFrameworkStores<ApplicationDbContext>().AddDefaultTokenProviders();
            services.AddAuthentication(auth =>
            {
                auth.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
                auth.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
                auth.DefaultScheme = JwtBearerDefaults.AuthenticationScheme;
            }).AddJwtBearer(options =>
            {
                options.TokenValidationParameters = new TokenValidationParameters
                {
                    ValidateIssuer = true,
                    ValidateAudience = true,
                    ValidAudience = configuration["AuthSettings:Audience"],
                    ValidIssuer = configuration["AuthSettings:Issuer"],
                    RequireExpirationTime = true,
                    IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(configuration["AuthSettings:Secretkey"])),
                    ValidateIssuerSigningKey = true
                };
            });

            services.AddSwaggerGen(c =>
            {
                c.SwaggerDoc("v1", new OpenApiInfo { Title = "RetroReserve", Version = "v1" });

                // Configure Swagger to use JWT for authorization
                c.AddSecurityDefinition("Bearer", new OpenApiSecurityScheme
                {
                    Description = "JWT Authorization header using the Bearer scheme.",
                    Type = SecuritySchemeType.Http,
                    Scheme = "bearer"
                });

                c.AddSecurityRequirement(new OpenApiSecurityRequirement
 {
    {
        new OpenApiSecurityScheme
        {
            Reference = new OpenApiReference
            {
                Type = ReferenceType.SecurityScheme,
                Id = "Bearer"
            }
        },
        new string[] { }
    }
 });
            });

        }
    }
}
