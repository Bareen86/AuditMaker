using System.Security;
using AuditApp.Domain.Users;
using static AuditApp.Domain.Audits.AuditTypeEnum;

namespace AuditApp.Domain.Audits
{
    public class Audit
    {
        public int Id { get; private set; }
        public int UserId { get; private set; }
        public string Title { get; private set; }
        public string Location { get; private set; }
        public AuditType AuditType { get; private set; }
        public string Url { get; private set; } 
        public string Data { get; private set; }             
        public DateTime CreatedOn { get; private set; } = DateTime.Now;
        public DateTime ModifiedOn { get; private set; } = DateTime.Now;

        public Audit( string title, string location, string data, int userId, AuditType auditType, string url )
        {
            Title = title;
            Location = location;
            AuditType = auditType;
            Data = data;
            Url = url;
            UserId = userId;
        }

        public void UpdateFields( string title, string location, string url, string data)
        {
            Title = title;
            Location = location;
            Url = url;
            Data = data;
            ModifiedOn = DateTime.Now;
        }
    }
}
