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
        Task Remove( string auditId );
    }
    public class AuditRemover : IAuditRemover
    {
        private readonly IAuditRepository _auditRepository;

        public AuditRemover( IAuditRepository auditRepository )
        {
            _auditRepository = auditRepository;
        }
        public async Task Remove( string id )
        {
            Guid auditId = new Guid( id );
            var searchedAudit = await _auditRepository.GetAuditByIdAsynk( auditId );
            await _auditRepository.DeleteAuditByIdAsynk( searchedAudit );
        }
    }
}
