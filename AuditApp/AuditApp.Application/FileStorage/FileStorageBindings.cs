using Microsoft.Extensions.DependencyInjection;

namespace AuditApp.Application.FileStorage
{
    public static class FileStorageBindings
    {
        public static IServiceCollection AddFileStorage(this IServiceCollection services)
        {
            services.AddScoped<IFileStorage, FileStorage>();
            return services;
        }
    }
}
