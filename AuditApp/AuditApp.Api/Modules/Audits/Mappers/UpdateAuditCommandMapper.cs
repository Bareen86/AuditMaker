using System.Text.Json;
using AuditApp.Application.Audits.AuditsUpdating;
using AuditApp.Extranet.Modules.Audits.Dtos;

namespace AuditApp.Extranet.Modules.Audits.Mappers
{
    public static class UpdateAuditCommandMapper
    {
        public static UpdateAuditCommand Map(this UpdateAuditCommandDto command )
        {
            string textblock = JsonSerializer.Serialize( command.Data );
            return new UpdateAuditCommand
            {
                Data = textblock,
                AuditId = command.AuditId,
                LastUpdatingDate = DateTime.Now,
                Location = command.Location,
                Title = command.Title,
            };
        }
    }
}
