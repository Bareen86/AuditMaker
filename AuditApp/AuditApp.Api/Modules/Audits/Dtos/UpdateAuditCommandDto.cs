using AuditApp.Domain.Audits;

namespace AuditApp.Extranet.Modules.Audits.Dtos
{
    public class UpdateAuditCommandDto
    {
        public string AuditId { get; set; }
        public string Title { get; set; }
        public string Location { get; set; }
        public AuditTextBlocks Data { get; set; }
        public Guid UserId { get; set; }
    }
}
