using AuditApp.Extranet.Modules.Images.Dtos;
using Microsoft.AspNetCore.Mvc.RazorPages;
using static AuditApp.Extranet.Modules.Images.Dtos.ResponseStatusEnum;

namespace AuditApp.Extranet.Modules.Images.Models
{
    public class GetImageResult
    {
        public ResponseStatus success { get; set; }
        public ImageFile File { get; set; }

        public static GetImageResult GetResponse(ResponseStatus codeStatus, string imageUrl)
        {
            ImageFile imageFile = new();
            imageFile.Url = imageUrl;
            return new GetImageResult
            {
                success = codeStatus,
                File = imageFile
            };
        }
    }
}
