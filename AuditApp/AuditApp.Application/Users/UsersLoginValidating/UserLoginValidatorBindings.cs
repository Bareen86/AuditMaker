using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.Extensions.DependencyInjection;

namespace AuditApp.Application.Users.UsersLoginValidating
{
    public static class UserLoginValidatorBindings
    {
        public static IServiceCollection AddUserLoginValidator(this IServiceCollection services )
        {
            services.AddScoped<IUserLoginValidator, UserLoginValidator>();
            return services;
        }
    }
}
