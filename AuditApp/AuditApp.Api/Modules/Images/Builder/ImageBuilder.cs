using AuditApp.Extranet.Modules.Images.Models;

namespace AuditApp.Extranet.Modules.Images.Builder
{
    public interface IImageBuilder
    {
        FileToSave Build(IFormFile formFile);
    }

    internal class ImageBuilder : IImageBuilder
    {
        public FileToSave Build(IFormFile formFile)
        {
            using (var ms = new MemoryStream())
            {
                formFile.CopyToAsync(ms);
                var fileBytes = ms.ToArray();
                string fileName = Guid.NewGuid().ToString() + "." + formFile.FileName.Split(".").Last();
                return new FileToSave
                {
                    Uri = "",
                    Bytes = fileBytes,
                    FileName = fileName
                };
            }
        }
    }
}
