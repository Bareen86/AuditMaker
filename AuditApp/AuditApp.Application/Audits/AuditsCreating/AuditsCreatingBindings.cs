using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.Extensions.DependencyInjection;

namespace AuditApp.Application.Audits.AuditsCreating
{
    public static class AuditsCreatingBindings
    {
        public static IServiceCollection AddAuditsCreator(this IServiceCollection services)
        {
            services.AddScoped<IAuditorCreator, AuditCreator>();
            return services;
        }
    }
}
