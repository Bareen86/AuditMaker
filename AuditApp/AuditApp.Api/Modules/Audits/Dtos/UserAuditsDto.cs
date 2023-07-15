using static AuditApp.Domain.Audits.AuditTypeEnum;

namespace AuditApp.Extranet.Modules.Audits.Dtos
{
    public class UserAuditsDto
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public string Location { get; set; }
        public string Url { get; set; }
        public DateTime ModifiedOn { get; set; }
    }
}
