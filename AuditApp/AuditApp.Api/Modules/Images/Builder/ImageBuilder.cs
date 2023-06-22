using AuditApp.Application.ImageSaving;
using AuditApp.Extranet.Modules.Images.Models;

namespace AuditApp.Extranet.Modules.Images.Builder
{
    public interface IImageBuilder
    {
        ImageToSave Build(IFormFile formFile);
    }

    internal class ImageBuilder : IImageBuilder
    {
        public ImageToSave Build(IFormFile formFile)
        {
            using (var ms = new MemoryStream())
            {
                formFile.CopyToAsync(ms);
                var fileBytes = ms.ToArray();
                string fileName = Guid.NewGuid().ToString() + "." + formFile.FileName.Split(".").Last();
                return new ImageToSave
                {
                    Uri = "",
                    Bytes = fileBytes,
                    FileName = fileName
                };
            }
        }
    }
}
