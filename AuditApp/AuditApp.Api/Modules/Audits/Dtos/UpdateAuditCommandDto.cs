using AuditApp.Domain.Audits;
using static AuditApp.Domain.Audits.AuditTypeEnum;

namespace AuditApp.Extranet.Modules.Audits.Dtos
{
    public class UpdateAuditCommandDto
    {
        public int AuditId { get; set; }
        public string Title { get; set; }
        public string Location { get; set; }
        public string Url { get; set; }
        public AuditTextBlocks Data { get; set; }
        public int UserId { get; set; }
    }
}
