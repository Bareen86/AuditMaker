using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using AuditApp.Domain.Audits;

namespace AuditApp.Application.Audits.AuditsCreating
{
    public  interface IAuditorCreator
    {
        Task CreateAudit(AddAuditCommand command);
    }
    public class AuditCreator : IAuditorCreator
    {
        private readonly IAuditRepository _auditRepository;

        public AuditCreator( IAuditRepository auditRepository )
        {
            _auditRepository = auditRepository;
        }
        public async Task CreateAudit( AddAuditCommand command )
        {
            Audit audit = new Audit(command.Title, command.Location, command.Data, command.UserId);
            await _auditRepository.CreateAuditAsyc( audit );
        }
    }
}
