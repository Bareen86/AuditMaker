using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.Extensions.DependencyInjection;

namespace AuditApp.Application.Audits.AuditsDeleting
{
    public static class AuditsDeletingBindings
    {
        public static IServiceCollection AddAuditRemover(this IServiceCollection services )
        {
            services.AddScoped<IAuditRemover, AuditRemover>();
            return services;
        }
    }
}
