using Microsoft.Extensions.DependencyInjection;

namespace AuditApp.Application.ImageResolving
{
    public static class ImageResolverBindings
    {
        public static IServiceCollection AddTemplateImageResolving(this IServiceCollection services)
        {
            services.AddScoped<IImageResolver, ImageResolver>();
            return services;
        }
    }
}
