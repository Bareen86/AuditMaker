using System.Text.Json;
using AuditApp.Domain.Audits;
using AuditApp.Extranet.Modules.Audits.Dtos;

namespace AuditApp.Extranet.Modules.Audits.Mappers
{
    public static class UserAuditsMapper
    {
        public static UserAuditsDto AuditMap(this Audit audit )
        {
            return new UserAuditsDto
            {
                Id = audit.Id,
                Title = audit.Title,
                Location = audit.Location,
                Url = audit.Url,
                ModifiedOn = audit.ModifiedOn,
            };
        }
    }
}
