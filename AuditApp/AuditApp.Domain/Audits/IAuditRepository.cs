namespace AuditApp.Domain.Audits
{
    public interface IAuditRepository
    {
        Task CreateAuditAsyc(Audit audit);
        Task UpdateAuditAsync(Audit audit);
        Task DeleteAuditAsynk(Audit audit);
        Task<Audit> GetAuditByIdAsynk(Guid id);
        Task<List<Audit>> GetUsersAuditsAsynk(Guid id);
        Task<List<Audit>> GetAllAuditsAsynk();
    }
}
