using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using AuditApp.Domain.Audits;

namespace AuditApp.Application.Audits.AuditsDeleting
{
    public interface IAuditRemover
    {
        Task Remove( int auditId );
    }

    public class AuditRemover : IAuditRemover
    {
        private readonly IAuditRepository _auditRepository;

        public AuditRemover( IAuditRepository auditRepository )
        {
            _auditRepository = auditRepository;
        }

        public async Task Remove( int id )
        {
            Audit searchedAudit = await _auditRepository.GetAuditByIdAsync( id );
            await _auditRepository.DeleteAuditByIdAsync( searchedAudit );
        }
    }
}
