using AuditApp.Extranet.Modules.Images.Dtos;

namespace AuditApp.Extranet.Modules.Images.Models
{
    public class GetImageResult
    {
        public int success { get; set; }
        public ImageFile File { get; set; }
    }
}
