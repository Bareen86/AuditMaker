using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using AuditApp.Domain.Audits;

namespace AuditApp.Application.Audits.AuditsUpdating
{
    public interface IAuditEditor
    {
        Task Update(UpdateAuditCommand command);
    }
    public class AuditEditor : IAuditEditor
    {
        private readonly IAuditRepository _auditRepository;

        public AuditEditor( IAuditRepository auditRepository )
        {
            _auditRepository = auditRepository;
        }

        public async Task Update( UpdateAuditCommand command )
        {
            Audit audit = await _auditRepository.GetAuditByIdAsynk( command.AuditId );
            UpdateFields( audit, command);
        }
        private void UpdateFields(Audit audit, UpdateAuditCommand command )
        {
            audit.Data = command.Data;
            audit.LastUpdatingDate = command.LastUpdatingDate;
            audit.Location = command.Location;
            audit.Title = command.Title;
        }
    }
}
