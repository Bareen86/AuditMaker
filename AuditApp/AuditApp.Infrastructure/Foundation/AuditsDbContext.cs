using Microsoft.EntityFrameworkCore;
using System.Reflection;

namespace AuditApp.Infrastructure.Foundation
{
    public class AuditsDbContext : DbContext
    {
        public AuditsDbContext(DbContextOptions options) : base(options)
        {

        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.ApplyConfigurationsFromAssembly(Assembly.GetExecutingAssembly());
        }
    }
}
