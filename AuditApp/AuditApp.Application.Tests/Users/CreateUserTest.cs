using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using AuditApp.Domain.Audits;
using AuditApp.Domain.Users;
using AuditApp.Infrastructure.Data.Audits;
using AuditApp.Infrastructure.Data.Users;
using AuditApp.Infrastructure.Foundation;
using Microsoft.EntityFrameworkCore;
using NUnit.Framework;

namespace AuditApp.Application.Tests.Users
{
    public class CreateUserTest
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

            _userRepository = new UserRepository( _dbContext );
            _unitOfWork = new UnitOfWork( _dbContext );
        }

        [Test]
        public async Task UserAudit_Add_NoException()
        {
            // arrange
            User user = new User("Egor", "Komarov", "dobeuser", "hashpassword", true);

            // act & assert
            Assert.DoesNotThrow( () => _userRepository.CreateUserAsync( user ) );
        }
    }
}
