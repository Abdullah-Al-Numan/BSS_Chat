using Microsoft.EntityFrameworkCore;
using BSS_Chat_API.Data;
using BSS_Chat_API.Model;
using static System.Net.Mime.MediaTypeNames;

namespace BSS_Chat_API.Controllers;

public static class MassageEndpoints
{
    public static void MapMassageEndpoints (this IEndpointRouteBuilder routes)
    {


        routes.MapGet("/api/users/Massage", async (string users, BSS_Chat_APIContext db) =>
        {
            //reverse string for finding reciever to sender
            char[] cArray = users.ToCharArray();
            string reverse = String.Empty;
            for (int i = cArray.Length - 1; i > -1; i--)
            {
                reverse += cArray[i];
            }
            // query for sender and reciever massage
            IQueryable<Massage> query = db.Massage;

            if (!string.IsNullOrEmpty(users))
            {
                query = query.Where(e => e.users.Contains(users) || e.users.Contains(reverse));
            }
            return await query.ToListAsync();

        })
        .WithName("GetUserMessage");

        routes.MapPost("/api/Massage/", async (Massage massage, BSS_Chat_APIContext db) =>
        {
            db.Massage.Add(massage);
            await db.SaveChangesAsync();
            return Results.Created($"/Massages/{massage.id}", massage);
        })
        .WithName("CreateMassage");

        routes.MapDelete("/api/Massage/{id}", async (int id, BSS_Chat_APIContext db) =>
        {
            if (await db.Massage.FindAsync(id) is Massage massage)
            {
                db.Massage.Remove(massage);
                await db.SaveChangesAsync();
                return Results.Ok(massage);
            }

            return Results.NotFound();
        })
        .WithName("DeleteMassage");
    }
}
