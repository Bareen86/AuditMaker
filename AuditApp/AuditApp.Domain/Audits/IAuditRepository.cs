namespace AuditApp.Domain.Audits
{
    public interface IAuditRepository
    {
        Task CreateAuditAsyc(Audit audit);
        Task DeleteAuditByIdAsynk(Audit audit);
        Task<Audit> GetAuditByIdAsynk(Guid id);
        Task<List<Audit>> GetUsersAuditsAsynk(Guid id);
        Task<List<Audit>> GetAllAuditsAsynk();
    }
}
