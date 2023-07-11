using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AuditApp.Infrastructure.Foundation
{
    public interface IUnitOfWork
    {
        Task CommitAsync();
    }
    internal class UnitOfWork : IUnitOfWork
    {
        private readonly AuditsDbContext _dbContext;

        public UnitOfWork(AuditsDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        public async Task CommitAsync()
        {
            await _dbContext.SaveChangesAsync();
        }
    }
}
