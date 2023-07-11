using Microsoft.Extensions.DependencyInjection;

namespace AuditApp.Application.ImageSaving
{
    public static class ImageSavingBindings
    {
        public static IServiceCollection AddTemplateImageSaving(this IServiceCollection services)
        {
            services.AddScoped<IImageSaver, ImageSaver>();
            return services;
        }
    }
}
