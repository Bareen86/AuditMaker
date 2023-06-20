using AuditApp.Application.ImageSaving;
using AuditApp.Extranet.Modules.Images.Models;

namespace AuditApp.Extranet.Modules.Images.Builder
{
    public class ImageBuilder
    {
        public IImageSaver _imageSaver { get; set; }
        public ImageBuilder(IImageSaver imageSaver)
        {
            _imageSaver = imageSaver;
        }


        public static ImageToSave Build(IFormFile formFile)
        {
            using (var ms = new MemoryStream())
            {
                formFile.CopyToAsync(ms);
                var fileBytes = ms.ToArray();
                var fileName = formFile.FileName;

                return new ImageToSave
                {
                    FileName = fileName,
                    Bytes = fileBytes,
                    Extension = "." + fileName.Split('.').Last(),
            };
            }
        }
    }
}
