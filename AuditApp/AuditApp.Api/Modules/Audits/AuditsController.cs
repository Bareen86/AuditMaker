
using AuditApp.Application.Audits.AuditsCreating;
using AuditApp.Domain.Audits;
using AuditApp.Extranet.Modules.Audits.Dtos;
using AuditApp.Extranet.Modules.Audits.Mappers;
using AuditApp.Infrastructure.Foundation;
using Microsoft.AspNetCore.Mvc;

namespace AuditApp.Extranet.Modules.Audits
{
    [Route( "api/[controller]" )]
    [ApiController]
    public class AuditsController : ControllerBase
    {
        private readonly IAuditorCreator _auditorCreator;
        private readonly IUnitOfWork _unitOfWork;
        private readonly IAuditRepository _auditRepository;

        public AuditsController(
            IAuditorCreator auditorCreator,
            IUnitOfWork unitOfWork,
            IAuditRepository auditRepository )
        {
            _auditorCreator = auditorCreator;
            _unitOfWork = unitOfWork;
            _auditRepository = auditRepository;
        }
        [HttpGet("{id}")]
        public async Task<IActionResult> GetAudit( [FromRoute] string id )
        {            
            Guid auditId = new( id );
            Audit audit = await _auditRepository.GetAuditByIdAsynk( auditId );
            return Ok( audit.Map() );
        }
        [HttpPost]
        public async Task<IActionResult> GetAudit( [FromBody] AddAuditCommandDto command )
        {
            await _auditorCreator.CreateAudit( command.Map() );
            await _unitOfWork.CommitAsync();
            return Ok();
        }
    }
}
