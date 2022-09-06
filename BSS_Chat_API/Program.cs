using Microsoft.EntityFrameworkCore;
using BSS_Chat_API.Hubs;
using BSS_Chat_API.Data;
using BSS_Chat_API.Controllers;
var builder = WebApplication.CreateBuilder(args);
builder.Services.AddSignalR();
builder.Services.AddDbContext<BSS_Chat_APIContext>(options =>
    options.UseSqlServer(builder.Configuration.GetConnectionString("BSS_Chat_APIContext") ?? throw new InvalidOperationException("Connection string 'BSS_Chat_APIContext' not found.")));

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();
app.UseCors(builder =>
builder.WithOrigins("http://localhost:3000")
.AllowAnyHeader()
.AllowCredentials()
.AllowAnyMethod());

app.UseAuthorization();

app.MapControllers();

app.MapUserEndpoints();
app.MapMassageEndpoints();
app.MapHub<ChatHub>("/chatHub");
app.Run();
