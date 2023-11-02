using static AuditApp.Domain.Audits.AuditTypeEnum;

namespace AuditApp.Domain.Audits
{
    public interface IAuditRepository
    {
        Task AddAsync(Audit audit);
        Task DeleteAuditByIdAsync(Audit audit);
        Task<Audit> GetAuditByIdAsync(int id);
        Task<List<Audit>> GetAuditsByType(AuditType auditType);
    }
}
