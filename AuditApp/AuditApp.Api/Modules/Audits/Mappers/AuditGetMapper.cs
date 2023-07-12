using System.Text.Json;
using AuditApp.Domain.Audits;
using AuditApp.Extranet.Modules.Audits.Dtos;

namespace AuditApp.Extranet.Modules.Audits.Mappers
{
    public static class AuditGetMapper
    {
        public static AuditDto Map(this Audit audit)
        {
            AuditTextBlocks auditTextBlocks = JsonSerializer.Deserialize<AuditTextBlocks>( audit.Data );
            return new AuditDto
            {
                Title = audit.Title,
                Id = audit.UserId,
                TextBlocks = auditTextBlocks,
                Location = audit.Location,
            };
        }
    }
}
