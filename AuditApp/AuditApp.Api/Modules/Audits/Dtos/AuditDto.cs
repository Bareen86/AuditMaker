using AuditApp.Domain.Audits;

namespace AuditApp.Extranet.Modules.Audits.Dtos
{
    public class AuditDto
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public string Location { get; set; }
        public AuditTextBlocks TextBlocks { get; set; }
    }
}
