using static AuditApp.Extranet.Modules.Images.Dtos.ResponseStatusEnum;

namespace AuditApp.Extranet.Modules.Images.Models
{
    public class GetImageResult
    {
        public GetImageStatus Success { get; set; }
        public ImageFile File { get; set; }
    }
}
