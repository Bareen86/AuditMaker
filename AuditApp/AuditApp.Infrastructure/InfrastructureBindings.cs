using AuditApp.Application;
using AuditApp.Domain.Audits;
using AuditApp.Domain.Users;
using AuditApp.Infrastructure.CommonServices.FileStorage;
using AuditApp.Infrastructure.Data.Audits;
using AuditApp.Infrastructure.Data.Users;
using AuditApp.Infrastructure.Foundation;
using Microsoft.Extensions.DependencyInjection;

namespace AuditApp.Infrastructure
{
    public static class InfrastructureBindings
    {
        public static IServiceCollection AddInfrastructure(this IServiceCollection service)
        {
            service.AddScoped<IUnitOfWork, UnitOfWork>();
            service.AddScoped<IFileStorage, FileStorage>();
            service.AddScoped<IUserRepository, UserRepository>();
            service.AddScoped<IAuditRepository, AuditRepository>();
            return service;
        }
    }
}
