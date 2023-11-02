using System.Net.Mime;
using AuditApp.Application.ImageResolving;
using AuditApp.Extranet.Modules.Images.Models;
using Azure.Core;

namespace AuditApp.Extranet.Modules.Images.Builder
{
    public interface IImageBuilder
    {
        FileToSave Build(IFormFile formFile);
        IFormFile GetMyImage( ResolvedImage resolvedImage, string ImageName );
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

        public IFormFile GetMyImage( ResolvedImage resolvedImage, string ImageName )
        {
            var stream = new MemoryStream( resolvedImage.Bytes );
            var file = new FormFile( stream, 0, resolvedImage.Bytes.Length, ImageName.Split( "." ).First(), $"image/{resolvedImage.Extension}" )
            {
                Headers = new HeaderDictionary(),
                ContentType = $"image/{resolvedImage.Extension}",
            };
            ContentDisposition cd = new ContentDisposition
            {
                FileName = file.FileName
            };
            file.ContentDisposition = cd.ToString();
            return file;
        }
    }
}
