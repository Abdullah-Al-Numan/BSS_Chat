using Microsoft.EntityFrameworkCore;
using BSS_Chat_API.Data;
using BSS_Chat_API.Model;
namespace BSS_Chat_API.Controllers;

public static class UserEndpoints
{
    public static void MapUserEndpoints (this IEndpointRouteBuilder routes)
    {
        routes.MapGet("/api/Users", async (BSS_Chat_APIContext db) =>
        {
            return await db.User.ToListAsync();
        })
        .WithName("GetAllUsers");

        routes.MapGet("/api/User/{Id}", async (int Id, BSS_Chat_APIContext db) =>
        {
            return await db.User.FindAsync(Id)
                is User model
                    ? Results.Ok(model)
                    : Results.NotFound();
        })
        .WithName("GetUserById");

        routes.MapGet("/api/email", async (string email, BSS_Chat_APIContext db) =>
        {
            IQueryable<User> query = db.User;

            if(!string.IsNullOrEmpty(email))
            {
                query = query.Where(e=> e.email.Contains(email));
            }
            return await query.ToListAsync();

        })
        .WithName("GetEmail");

        routes.MapPost("/api/User/", async (User user, BSS_Chat_APIContext db) =>
        {
            db.User.Add(user);
            await db.SaveChangesAsync();
            return Results.Created($"/Users/{user.Id}", user);
        })
        .WithName("CreateUser");
    }
}
