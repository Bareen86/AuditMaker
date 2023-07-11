﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AuditApp.Application.Audits.AuditsUpdating
{
    public class UpdateAuditCommand
    {
        public Guid AuditId { get; set; }
        public string Title { get; set; }
        public string Location { get; set; }
        public string Data { get; set; }
        public DateTime LastUpdatingDate { get; set; }
    }
}
