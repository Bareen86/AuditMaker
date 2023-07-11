using AuditApp.Domain.Audits;

namespace AuditApp.Extranet.Modules.Audits.Dtos
{
    public class AuditDto
    {
        public Guid Id { get; set; }
        public string Title { get; set; }
        public string Location { get; set; }
        public AuditTextBlocks TextBlocks { get; set; }
        public DateTime CreatedDate { get; set; }
    }
}
