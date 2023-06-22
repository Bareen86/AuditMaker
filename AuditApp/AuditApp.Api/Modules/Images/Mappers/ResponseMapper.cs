using AuditApp.Extranet.Modules.Images.Dtos;
using AuditApp.Extranet.Modules.Images.Models;

namespace AuditApp.Extranet.Modules.Images.Mappers
{
    public static class ResponseMapper
    {
        public static GetImageResult Map(this ImageToSave imageToSave)
        {
            ImageFile imageFile = new(imageToSave.Uri);
            return new GetImageResult
            {
                Success = ResponseStatusEnum.ResponseStatus.Success,
                File = imageFile,
            };
        }
    }
}
