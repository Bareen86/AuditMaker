using AuditApp.Extranet.Modules.Images.Models;
using Microsoft.AspNetCore.Mvc.Infrastructure;

namespace AuditApp.Extranet.Modules.Images.Extentions
{
    public static class ResponceResultExtention
    {
        public static GetImageResult GetResponce(this GetImageResult imageResult, int codeStatus, string imageUrl)
        {
            imageResult.Success = codeStatus;
            ImageFile imageFile = new();
            imageFile.Url = imageUrl;
            imageResult.File = imageFile;
            return imageResult;
        }
    }
}
