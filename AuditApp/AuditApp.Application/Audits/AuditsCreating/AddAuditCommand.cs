using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AuditApp.Application.Audits.AuditsCreating
{
    public class AddAuditCommand
    {
        public string Title { get; set; }
        public string Location { get; set; }
        public string Data { get; set; }
        public Guid UserId { get; set; }
    }
}
