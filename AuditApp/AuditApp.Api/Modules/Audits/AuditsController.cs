﻿
using AuditApp.Application.Audits.AuditsCreating;
using AuditApp.Application.Audits.AuditsDeleting;
using AuditApp.Application.Audits.AuditsUpdating;
using AuditApp.Domain.Audits;
using AuditApp.Extranet.Modules.Audits.Dtos;
using AuditApp.Extranet.Modules.Audits.Mappers;
using AuditApp.Infrastructure.Foundation;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;

namespace AuditApp.Extranet.Modules.Audits
{
    [Route( "api/audits" )]
    [ApiController]
    public class AuditsController : ControllerBase
    {
        private readonly IAuditorCreator _auditorCreator;
        private readonly IAuditRemover _auditRemover;
        private readonly IAuditEditor _auditEditor;
        private readonly IUnitOfWork _unitOfWork;
        private readonly IAuditRepository _auditRepository;

        public AuditsController(
            IAuditorCreator auditorCreator,
            IAuditRemover auditRemover,
            IAuditEditor auditEditor,
            IUnitOfWork unitOfWork,
            IAuditRepository auditRepository )
        {
            _auditorCreator = auditorCreator;
            _auditRemover = auditRemover;
            _auditEditor = auditEditor;
            _unitOfWork = unitOfWork;
            _auditRepository = auditRepository;
        }

        [HttpGet( "{id}" )]
        public async Task<IActionResult> GetAudit( [FromRoute] int id )
        {
            Audit audit = await _auditRepository.GetAuditByIdAsync( id );
            if ( audit == null )
            {
                return BadRequest("Аудит не был найден!");
            }
            return Ok( audit.Map() );
        }

        [HttpGet ("users/{id}")]
        public async Task<IActionResult> GetUserAudits( [FromRoute] int id )
        {
            var audits = await _auditRepository.GetUsersAuditsAsync( id );
            var result = audits.Select(a => a.Map()).ToList();
            return Ok( result );
        }

        [HttpPost]
        public async Task<IActionResult> CreateAudit( [FromBody] AddAuditCommandDto command )
        {
            await _auditorCreator.CreateAudit( command.Map() );
            await _unitOfWork.CommitAsync();
            return Ok();
        }

        [HttpPut]
        public async Task<IActionResult> EditAudit( UpdateAuditCommandDto command )
        {
            await _auditEditor.Update( command.Map() );
            await _unitOfWork.CommitAsync();
            return Ok();
        }

        [HttpDelete( "auditid" )]
        public async Task<IActionResult> RemoveAudit( int auditid )
        {
            await _auditRemover.Remove( auditid );
            await _unitOfWork.CommitAsync();
            return Ok();
        }
    }
}
