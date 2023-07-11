using AuditApp.Domain.Audits;

namespace AuditApp.Extranet.Modules.Audits.Dtos
{
    public class AuditCommandDto
    {
        public string Title { get; set; }
        public string Location { get; set; }
        public AuditTextBlocks Data { get; set; }
        public DateTime CreationdDate { get; set; }
        public DateTime LastUpdatingDate { get; set; }
        public Guid UserId { get; set; }
    }
}
