using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AuditApp.Domain.Audits
{
    public class AuditTextBlocks
    {
        public List<Block> Blocks { get; set; }
    }

    public class Block
    {
        public string Id { get; set; }
        public string Type { get; set; }
        public dynamic Data { get; set; }
    }
}
