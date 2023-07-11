using AuditApp.Application.Audits.AuditsCreating;
using AuditApp.Application.Audits.AuditsDeleting;
using AuditApp.Application.Audits.AuditsUpdating;
using AuditApp.Application.ImageResolving;
using AuditApp.Application.ImageSaving;
using AuditApp.Application.LoginService;
using AuditApp.Application.Users.UsersCreating;
using AuditApp.Application.Users.UsersLoginValidating;
using Microsoft.Extensions.DependencyInjection;

namespace AuditApp.Application
{
    public static class ApplicationBindings
    {
        public static IServiceCollection AddApplication(this IServiceCollection services)
        {
            services.AddTemplateImageSaving();
            services.AddTemplateImageResolving();
            services.AddLoginHandler();
            services.AddUsersCreator();
            services.AddAuditsCreator();
            services.AddAuditRemover();
            services.AddAuditEditor();
            services.AddUserLoginValidator();
            return services;
        }
    }
}
