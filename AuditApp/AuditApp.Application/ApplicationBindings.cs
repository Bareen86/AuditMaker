using AuditApp.Application.ImageResolving;
using AuditApp.Application.ImageSaving;
using Microsoft.Extensions.DependencyInjection;

namespace AuditApp.Application
{
    public static class ApplicationBindings
    {
        public static IServiceCollection AddApplication(this IServiceCollection services)
        {
            services.AddImageSaver();
            services.AddImageResolver();
            return services;
        }
    }
}
