using AuditApp.Extranet.Modules.Images.Models;
using static AuditApp.Extranet.Modules.Images.Dtos.ResponseStatusEnum;

namespace AuditApp.Extranet.Modules.Images.Extentions
{
    public static class Response
    {
        public static GetImageResult GetResponce(this GetImageResult imageResult, ResponseStatus codeStatus, string imageUrl)
        {
            imageResult.success = codeStatus;
            ImageFile imageFile = new();
            imageFile.Url = imageUrl;
            imageResult.File = imageFile;
            return imageResult;
        }
    }
}
