using AuditApp.Application.FileStorage;
using Microsoft.Extensions.DependencyInjection;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AuditApp.Application
{
    public static class ApplicationBindings
    {
        public static IServiceCollection AddApplication(this IServiceCollection services)
        {
            services.AddFileStorage();
            return services;
        }
    }
}
