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
                string fileName = DateTime.Now.Ticks.ToString() + "." + formFile.FileName.Split(".").Last();

                return new ImageToSave
                {
                    Uri = "/api/images/" + fileName,
                    Bytes = fileBytes,
                    FileName = fileName
                };
            }
        }
    }
}
