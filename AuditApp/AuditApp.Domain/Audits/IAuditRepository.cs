namespace AuditApp.Domain.Audits
{
    public interface IAuditRepository
    {
        Task AddAsync(Audit audit);
        Task DeleteAuditByIdAsync(Audit audit);
        Task<Audit> GetAuditByIdAsync(int id);
        Task<List<Audit>> GetUserHotelAuditsAsync(int id);
        Task<List<Audit>> GetUserCampAuditsAsync( int id );
        Task<List<Audit>> GetAllAuditsAsync();
    }
}
