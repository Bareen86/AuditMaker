using AuditApp.Application;
using AuditApp.Infrastructure.CommonServices.FileStorage;
using Microsoft.Extensions.DependencyInjection;

namespace AuditApp.Infrastructure
{
    public static class InfrastructureBindings
    {
        public static IServiceCollection AddInfrastructure(this IServiceCollection service)
        {
            service.AddScoped<IFileStorage, FileStorage>();
            return service;
        }
    }
}
