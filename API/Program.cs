using API.Extension;
using API.Repository.Impliments;
using API.Repository.Interface;

var builder = WebApplication.CreateBuilder(args);
// Add services to the container.
var ConnectionString = builder.Configuration.GetConnectionString("Default");
ServiceCollectionExtension.RegisterService(builder.Services, builder.Configuration);
builder.Services.AddScoped<IEmployeeService, EmployeeService>();
builder.Services.AddScoped<IDapperService, DapperService>();
builder.Services.AddScoped<IOrderService, OrdersService>();
builder.Services.AddScoped<ICartService, CartService>();
builder.Services.AddScoped<IComplaintService, ComplaintService>();
builder.Services.AddScoped<IEmployeeRoleMasterService, EmployeeRoleMasterService>();
builder.Services.AddScoped<IContactService, ContactService>();
builder.Services.AddScoped<IFoodKartService, FoodkartService>();
builder.Services.AddScoped<ITeaKartService, TeaKartService>();
builder.Services.AddScoped<IStatusService, StatusService>();
builder.Services.AddScoped<IOrderService, OrdersService>();
builder.Services.AddScoped<ITableDetailsService, TableDetailsService>();
builder.Services.AddScoped<IDishCategorySevice, DishCategorySevice>();
builder.Services.AddScoped<IBookingTableService, BookingTableService>();
builder.Services.AddScoped<IEmailSenderService, EmailSenderService>();
builder.Services.AddScoped<IEventService, EventService>();
builder.Services.AddScoped<IBannersService, BannersService>();
builder.Services.AddScoped<IReviewService, ReviewService>();
builder.Services.AddScoped<IAddressService, AddressService>();
builder.Services.AddScoped<IOffersService, OffersService>();	
builder.Services.AddScoped<IUserProfileService, UserProfileService>();
builder.Services.AddScoped <IFAQService, FAQService>();
builder.Services.AddScoped<IErrorLogService, ErrorLogService>();
builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
var app = builder.Build();
if (app.Environment.IsDevelopment())
{
	app.UseSwagger();
	app.UseSwaggerUI();
}
app.UseHttpsRedirection();
app.UseAuthorization();
app.MapControllers();
app.Run();
