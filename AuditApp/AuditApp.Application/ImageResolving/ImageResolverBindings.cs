﻿using Microsoft.Extensions.DependencyInjection;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AuditApp.Application.ImageResolving
{
    public static class ImageResolverBindings
    {
        public static IServiceCollection AddImageResolver(this IServiceCollection services)
        {
            services.AddScoped<IImageResolver, ImageResolver>();
            return services;
        }
    }
}
