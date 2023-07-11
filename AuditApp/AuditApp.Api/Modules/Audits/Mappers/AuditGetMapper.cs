using System.Text.Json;
using AuditApp.Domain.Audits;
using AuditApp.Extranet.Modules.Audits.Dtos;

namespace AuditApp.Extranet.Modules.Audits.Mappers
{
    public static class AuditGetMapper
    {
        public static AuditCommandDto Map(this Audit audit)
        {
            AuditTextBlocks auditTextBlocks = JsonSerializer.Deserialize<AuditTextBlocks>( audit.Data );
            return new AuditCommandDto
            {
                Title = audit.Title,
                UserId = audit.UserId,
                Data = auditTextBlocks,
                Location = audit.Location,
                CreationdDate = audit.CreationDate,
                LastUpdatingDate = audit.LastUpdatingDate,
            };
        }
    }
}
