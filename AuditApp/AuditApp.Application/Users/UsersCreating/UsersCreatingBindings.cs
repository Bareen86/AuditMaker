using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.Extensions.DependencyInjection;

namespace AuditApp.Application.Users.UsersCreating
{
    public static class UsersCreatingBindings
    {
        public static IServiceCollection AddUsersCreator(this IServiceCollection services)
        {
            services.AddScoped<IUserCreator, UserCreator>();
            return services;
        }
    }
}
