using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using BSS_Chat_API.Model;

namespace BSS_Chat_API.Data
{
    public class BSS_Chat_APIContext : DbContext
    {
        public BSS_Chat_APIContext (DbContextOptions<BSS_Chat_APIContext> options)
            : base(options)
        {
        }

        public DbSet<BSS_Chat_API.Model.User> User { get; set; } = default!;

        public DbSet<BSS_Chat_API.Model.Massage>? Massage { get; set; }
    }
}
