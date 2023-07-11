using AuditApp.Domain.Audits;
using AuditApp.Infrastructure.Foundation;
using Microsoft.EntityFrameworkCore;

namespace AuditApp.Infrastructure.Data.Audits
{
    internal class AuditRepository : IAuditRepository
    {
        private readonly AuditsDbContext _dbContext;

        private DbSet<Audit> _audits => _dbContext.Set<Audit>();
        public AuditRepository( AuditsDbContext dbContext )
        {
            _dbContext = dbContext;
        }
        public async Task CreateAuditAsyc( Audit audit )
        {
            await _audits.AddAsync( audit );
        }

        public async Task DeleteAuditAsynk( Audit audit )
        {
            _audits.Remove( audit );
        }

        public async Task<List<Audit>> GetAllAuditsAsynk()
        {
            return await _audits.ToListAsync();
        }

        public async Task<Audit> GetAuditByIdAsynk( Guid id )
        {
            return await _audits.FirstOrDefaultAsync( a => a.Id == id );
        }

        public async Task<List<Audit>> GetUsersAuditsAsynk( Guid id )
        {
            return await _audits.Where( a => a.UserId == id ).ToListAsync();
        }

        public async Task UpdateAuditAsync( Audit audit )
        {
            var searchedAudit = await GetAuditByIdAsynk( audit.Id );
            searchedAudit.UpdateData( audit.Data );
            searchedAudit.UpdateLastDate();
        }
    }
}
