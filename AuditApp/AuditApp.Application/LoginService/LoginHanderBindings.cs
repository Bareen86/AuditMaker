using Microsoft.Extensions.DependencyInjection;

namespace AuditApp.Application.LoginService
{
    public static class LoginHanderBindings
    {
        public static IServiceCollection AddLoginHandler(this IServiceCollection services )
        {
            services.AddScoped<IUserAuthentificator, UserAuthentificator>();
            return services;
        }
    }
}
