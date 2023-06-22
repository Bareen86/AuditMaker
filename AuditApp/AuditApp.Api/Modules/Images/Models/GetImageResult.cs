using AuditApp.Extranet.Modules.Images.Dtos;
using Microsoft.AspNetCore.Mvc.RazorPages;
using static AuditApp.Extranet.Modules.Images.Dtos.ResponseStatusEnum;

namespace AuditApp.Extranet.Modules.Images.Models
{
    public class GetImageResult
    {
        public ResponseStatus Success { get; set; }
        public ImageFile File { get; set; }
    }
}
