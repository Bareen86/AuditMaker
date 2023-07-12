using AuditApp.Domain.Audits;
using AuditApp.Domain.Users;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Microsoft.EntityFrameworkCore.Metadata.Internal;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AuditApp.Infrastructure.Data.Users
{
    internal class UserConfiguration : IEntityTypeConfiguration<User>
    {
        public void Configure(EntityTypeBuilder<User> builder)
        {
            builder.ToTable("User");

            builder.HasMany(u => u.Audits)
                .WithOne()
                .HasForeignKey( a => a.UserId )
                .OnDelete( DeleteBehavior.Cascade )
                .IsRequired();
        }
    }
}
