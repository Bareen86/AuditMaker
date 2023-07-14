using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using static AuditApp.Domain.Audits.AuditTypeEnum;

namespace AuditApp.Application.Audits.AuditsCreating
{
    public class AddAuditCommand
    {
        public string Title { get; set; }
        public string Location { get; set; }
        public string Url { get; set; }
        public AuditType AuditType { get; set; }
        public int UserId { get; set; }
        public string Data { get; set; }
        
    }
}
