using AuditApp.Domain.Audits;
using AuditApp.Infrastructure.Foundation;
using Microsoft.EntityFrameworkCore;
using static AuditApp.Domain.Audits.AuditTypeEnum;

namespace AuditApp.Infrastructure.Data.Audits
{
    public class AuditRepository : IAuditRepository
    {
        private readonly AuditsDbContext _dbContext;

        private DbSet<Audit> _audits => _dbContext.Set<Audit>();
        public AuditRepository( AuditsDbContext dbContext )
        {
            _dbContext = dbContext;
        }
        public async Task AddAsync( Audit audit )
        {
            await _audits.AddAsync( audit );
        }

        public async Task DeleteAuditByIdAsync( Audit audit )
        {
            _audits.Remove( audit );
        }

        public async Task<Audit> GetAuditByIdAsync( int id )
        {
            return await _audits.FirstOrDefaultAsync( a => a.Id == id );
        }

        public async Task<List<Audit>> GetAuditsByType( AuditType auditType )
        {
            return await _audits.Where( a => a.AuditType == auditType ).ToListAsync();
        }
    }
}
