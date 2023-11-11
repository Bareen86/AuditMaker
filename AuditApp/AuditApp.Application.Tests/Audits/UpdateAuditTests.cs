using AuditApp.Domain.Audits;
using AuditApp.Infrastructure.Data.Audits;
using AuditApp.Infrastructure.Foundation;
using Microsoft.EntityFrameworkCore;
using NUnit.Framework;

namespace AuditApp.Application.Tests.Audits
{
    internal class UpdateAuditTests
    {
        private AuditsDbContext _dbContext;
        private IAuditRepository _auditRepository;
        private IUnitOfWork _unitOfWork;

        [SetUp]
        public async Task Setup()
        {
            DbContextOptions dbContextOptions = new DbContextOptionsBuilder<AuditsDbContext>()
                .UseInMemoryDatabase( "AuditsDb" )
                .Options;
            _dbContext = new AuditsDbContext( dbContextOptions );
            _auditRepository = new AuditRepository( _dbContext );
            _unitOfWork = new UnitOfWork( _dbContext );
        }

        [Test]
        public async Task AuditRepository_UpdateAudit_Success()
        {
            // arrange
            Audit audit = new Audit( "Отель Элеон", "Россия", "initdata", 1, AuditTypeEnum.AuditType.Hotel, "some_url" );

            // act
            
            audit.Update( "Винтерфелл", "США", "someUrl", "someData" );

            // assert
            Assert.AreEqual( "Винтерфелл", audit.Title);
        }
    }
}
