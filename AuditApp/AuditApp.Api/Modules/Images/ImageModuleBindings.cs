using AuditApp.Extranet.Modules.Images.Builder;

namespace AuditApp.Extranet.Modules.Images
{
    public static class ImageModuleBindings
    {
        public static IServiceCollection AddImageModule(this IServiceCollection services)
        {
            services.AddScoped<IImageBuilder, ImageBuilder>();
            return services;
        }
    }
}
