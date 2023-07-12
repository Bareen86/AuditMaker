namespace AuditApp.Extranet.Modules.Audits.Dtos
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
