using static AuditApp.Domain.Audits.AuditTypeEnum;

namespace AuditApp.Application.Audits.AuditsUpdating
{
    public class UpdateAuditCommand
    {
        public int AuditId { get; set; }
        public string Title { get; set; }
        public string Location { get; set; }
        public string Url { get; set; }
        public string Data { get; set; }
        public DateTime LastUpdatingDate { get; set; }
    }
}
