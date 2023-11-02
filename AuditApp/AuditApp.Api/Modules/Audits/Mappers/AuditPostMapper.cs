using AuditApp.Application.Audits.AuditsCreating;
using AuditApp.Extranet.Modules.Audits.Dtos;
using System.Text.Json;

namespace AuditApp.Extranet.Modules.Audits.Mappers
{
    public static class AuditPostMapper
    {
        public static AddAuditCommand Map(this AddAuditCommandDto command )
        {
            string textblock = JsonSerializer.Serialize( command.Data );
            return new AddAuditCommand
            {
                Location = command.Location,
                Data = textblock,
                Url = command.Url,
                Title = command.Title,
                AuditType = command.AuditType,
                UserId = command.UserId,
            };
        }
    }
}
