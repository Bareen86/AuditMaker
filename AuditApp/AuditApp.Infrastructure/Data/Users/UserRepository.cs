using AuditApp.Domain.Users;
using AuditApp.Infrastructure.Foundation;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AuditApp.Infrastructure.Data.Users
{
    internal class UserRepository : IUserRepository
    {
        private readonly AuditsDbContext _auditsDbContext;
        private DbSet<User> _users => _auditsDbContext.Set<User>();

        public UserRepository( AuditsDbContext auditsDbContext )
        {
            _auditsDbContext = auditsDbContext;
        }

        public async Task CreateUserAsync( User user )
        {
            await _users.AddAsync( user );
        }

        public async Task UpdateUserAsync( User user )
        {
            var searchedUser = await GetUserByIdAsync( user.Id );
        }

        public async Task<User> GetUserByIdAsync( Guid id )
        {
            return await _users.FirstOrDefaultAsync( u => u.Id == id );
        }

        public async Task<User> GetUserByLoginAsync( string login )
        {
           return await _users.FirstOrDefaultAsync(u => u.Login == login); 
        }
    }
}   
