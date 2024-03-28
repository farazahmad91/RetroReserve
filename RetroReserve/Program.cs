using API.Connection;
using API.Data;
using API.Repository.Impliments;
using API.Repository.Interface;
using API.Services;
using Entities;
using IdentityAPI.Services;
using Microsoft.AspNetCore.Authentication.Cookies;
using Microsoft.EntityFrameworkCore;
using RetroReserve.Models;
using Stripe;
using System.Configuration;

var builder = WebApplication.CreateBuilder(args);
string dbConnectionString = builder.Configuration.GetConnectionString("Default");
IConnectionString ch = new ConnectionProvidor { ConnectionString = dbConnectionString };
builder.Services.AddSingleton<IConnectionString>(ch);
builder.Services.AddDbContext<ApplicationDbContext>(options =>
{
    options.UseSqlServer(ch.ConnectionString);
});
builder.Services.AddScoped<IDapperService, DapperService>();
builder.Services.AddScoped<APIrequest>();
builder.Services.AddScoped<UploadImage>();

// Configuration
builder.Configuration.Bind("BaseAPIUrl", new BaseAPIUrl());

builder.Services.AddAuthentication(CookieAuthenticationDefaults.AuthenticationScheme).AddCookie(options =>
{
    options.LoginPath = "/Account/Login";
    options.LogoutPath = "/Account/logout";
    options.AccessDeniedPath = "/Home/Error";
});
builder.Services.AddSession(options =>
{
    options.IdleTimeout = TimeSpan.FromMinutes(30); // You can adjust the timeout as needed
});
builder.Services.AddControllersWithViews().AddRazorRuntimeCompilation();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (!app.Environment.IsDevelopment())
{
	app.UseExceptionHandler("/Home/Error");
	// The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
	app.UseHsts();
}

app.UseHttpsRedirection();
app.UseStaticFiles();

app.UseRouting();

app.UseAuthorization();

app.MapControllerRoute(
	name: "default",
	pattern: "{controller=User}/{action=Index}/{id?}");

app.Run();
