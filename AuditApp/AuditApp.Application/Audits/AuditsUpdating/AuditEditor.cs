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
            Audit audit = await _auditRepository.GetAuditByIdAsync( command.AuditId );
            audit.UpdateFields( audit.Title, audit.Location );
        }
    }
}
