using AuditApp.Extranet.Modules.Images.Dtos;
using AuditApp.Extranet.Modules.Images.Models;
using Microsoft.AspNetCore.Mvc.Infrastructure;

namespace AuditApp.Extranet.Modules.Images.Extentions
{
    public static class Responce
    {
        public static GetImageResult GetResponce(this GetImageResult imageResult, ResponceStatus codeStatus, string imageUrl)
        {
            imageResult.success = (int)codeStatus;
            ImageFile imageFile = new();
            imageFile.Url = imageUrl;
            imageResult.File = imageFile;
            return imageResult;
        }
    }
}
