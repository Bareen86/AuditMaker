using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using AuditApp.Application.LoginService;
using Microsoft.Extensions.DependencyInjection;

namespace AuditApp.Application.Users.UsersLoginValidating
{
    public static class AddUserValidatorBindings
    {
        public static IServiceCollection AddUserValidator(this IServiceCollection services )
        {
            services.AddScoped<IAddUserValidator, AddUserValidator>();
            return services;
        }
    }
}
