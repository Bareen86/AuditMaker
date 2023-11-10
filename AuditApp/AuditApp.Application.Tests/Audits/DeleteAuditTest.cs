using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using AuditApp.Domain.Audits;
using AuditApp.Infrastructure.Data.Audits;
using AuditApp.Infrastructure.Foundation;
using Microsoft.EntityFrameworkCore;
using NUnit.Framework;

namespace AuditApp.Application.Tests.Audits
{
    internal class DeleteAuditTest
    {
        private AuditsDbContext _auditsDbContext;
        private IUnitOfWork _unitOfWork;
        private IAuditRepository _auditRepository;

        [SetUp]
        public async Task Setup()
        {
            DbContextOptions<AuditsDbContext> dbContext = new DbContextOptionsBuilder<AuditsDbContext>()
                .UseInMemoryDatabase( "AuditsDb" )
                .Options;
            _auditsDbContext = new AuditsDbContext( dbContext );
            _unitOfWork = new UnitOfWork( _auditsDbContext );
            _auditRepository = new AuditRepository( _auditsDbContext );
            Audit audit = new Audit( "Отель Элеон", "Россия", "initdata", 1, AuditTypeEnum.AuditType.Hotel, "some_url" );
            await _auditRepository.AddAsync( audit );
            await _unitOfWork.CommitAsync();
        }

        [Test]
        public async  Task AuditRepository_deleteAudit_Success()
        {

            // arrange & act
            Audit auditToDelete = await _auditRepository.GetAuditByIdAsync( 1 );
            await _auditRepository.DeleteAuditByIdAsync( auditToDelete );
            await _unitOfWork.CommitAsync();
            Audit? NotExistingAudit = await _auditRepository.GetAuditByIdAsync( 1 );

            // assert
            Assert.IsNull( NotExistingAudit );
        }
    }
}
