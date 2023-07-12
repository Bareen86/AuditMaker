using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.Extensions.DependencyInjection;

namespace AuditApp.Application.Audits.AuditsUpdating
{
    public static class AuditsUpdatingBindings
    {
        public static IServiceCollection AddAuditEditor(this IServiceCollection services )
        {
            services.AddScoped<IAuditEditor, AuditEditor>();
            return services;
        }
    }
}
