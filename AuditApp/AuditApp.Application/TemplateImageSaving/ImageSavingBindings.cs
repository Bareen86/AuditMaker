using Microsoft.Extensions.DependencyInjection;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

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
