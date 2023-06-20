namespace AuditApp.Extranet.Modules.Images.Builder
{
    public static class ImageBuilderBindings
    {
        public static IServiceCollection AddImageBuilder(this IServiceCollection services)
        {
            services.AddScoped<IImageBuilder, ImageBuilder>();
            return services;
        }
    }
}
