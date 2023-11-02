using AuditApp.Extranet.Modules.Audits.Builder;

namespace AuditApp.Extranet.Modules.Audits
{
    public static class AuditModuleBindings
    {
        public static IServiceCollection AddAuditModule(this IServiceCollection services )
        {
            services.AddScoped<IAuditBuilder, AuditBuilder>();
            return services;
        }
    }
}
