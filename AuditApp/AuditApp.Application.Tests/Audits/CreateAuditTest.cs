﻿using AuditApp.Domain.Audits;
using AuditApp.Infrastructure.Data.Audits;
using AuditApp.Infrastructure.Foundation;
using Microsoft.EntityFrameworkCore;
using NUnit.Framework;

namespace AuditApp.Application.Tests.Audits
{
    public class CreateAuditTest
    {
        private AuditsDbContext _dbContext;
        private IUnitOfWork _unitOfWork;
        private IAuditRepository _auditRepository;

        [SetUp]
        public async Task Setup()
        {
            DbContextOptions<AuditsDbContext> dbContextOptions = new DbContextOptionsBuilder<AuditsDbContext>()
                .UseInMemoryDatabase( "AuditDb" )
                .Options;
            _dbContext = new AuditsDbContext(dbContextOptions);

            _auditRepository = new AuditRepository( _dbContext );
            _unitOfWork = new UnitOfWork( _dbContext );
        }

        [Test]
        public async Task AuditRepository_Add_NoException()
        {
            // arrange
            Audit audit = new Audit( "Отель Элеон", "Россия", "initdata", 1, AuditTypeEnum.AuditType.Hotel, "some_url" );

            // act
            await _auditRepository.AddAsync( audit );
            await _unitOfWork.CommitAsync();
            Audit auditToGet = (await _auditRepository.GetAuditsByType( AuditTypeEnum.AuditType.Hotel )).FirstOrDefault();

            // act & assert
            Assert.AreEqual( audit.AuditType, auditToGet.AuditType );
            Assert.AreEqual( audit.Location, auditToGet.Location);
            Assert.AreEqual( audit.Url, auditToGet.Url);
        }
    }
}
