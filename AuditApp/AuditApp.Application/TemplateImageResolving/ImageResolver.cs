using AuditApp.Application.Settings;
using AuditApp.Infrastructure.CommonServices.FileStorage;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AuditApp.Application.ImageResolving
{
    public interface IImageResolver
    {
        ImageToGet GetImage(string fileName);
    }
    internal class ImageResolver : IImageResolver
    {
        public IFileStorage _fileStorage { get; set; }
        public ImageResolver(IFileStorage fileStorage)
        {
            _fileStorage = fileStorage;
        }       

        public ImageToGet GetImage(string fileName)
        {
            ImageToGet image = new ImageToGet();
            return image = _fileStorage.GetFile(fileName);
        }
    }
}
