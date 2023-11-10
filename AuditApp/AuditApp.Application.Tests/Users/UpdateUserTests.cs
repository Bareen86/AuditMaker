using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using AuditApp.Domain.Users;
using AuditApp.Infrastructure.Data.Users;
using AuditApp.Infrastructure.Foundation;
using Microsoft.EntityFrameworkCore;
using NUnit.Framework;

namespace AuditApp.Application.Tests.Users
{
    internal class UpdateUserTests
    {
        private AuditsDbContext _dbContext;
        private IUnitOfWork _unitOfWork;
        private IUserRepository _userRepository;

        [SetUp]
        public async Task Setup()
        {
            DbContextOptions<AuditsDbContext> dbContextOptions = new DbContextOptionsBuilder<AuditsDbContext>()
                .UseInMemoryDatabase( "AuditDb" )
                .Options;
            _dbContext = new AuditsDbContext( dbContextOptions );
            _unitOfWork = new UnitOfWork( _dbContext );
            _userRepository = new UserRepository( _dbContext );
        }

        [Test]
        public async Task UserRepository_UpdateUser_NoException()
        {

        }
    }
}
