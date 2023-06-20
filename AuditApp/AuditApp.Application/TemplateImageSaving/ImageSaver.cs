

using AuditApp.Application.Settings;
using AuditApp.Infrastructure.CommonServices.FileStorage;

namespace AuditApp.Application.ImageSaving
{
    public interface IImageSaver
    {
        void SaveImage(byte[] bytes, string fileName);
    }
    internal class ImageSaver : IImageSaver
    {
        private readonly IFileStorage _fileStorage;
        private string _fileName;
        public ImageSaver(IFileStorage fileStorage)
        {
            _fileStorage = fileStorage;
        }

        public void SaveImage(byte[] bytes, string fileName)
        {
            _fileStorage.UploadFile(bytes, fileName);
        }
    }
}
