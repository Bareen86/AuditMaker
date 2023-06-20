

using AuditApp.Application.Settings;
using AuditApp.Infrastructure.CommonServices.FileStorage;

namespace AuditApp.Application.ImageSaving
{
    public interface IImageSaver
    {
        void SaveImage(byte[] bytes, string extension);
        string GetImageName();
    }
    internal class ImageSaver : IImageSaver
    {
        private readonly IFileStorage _fileStorage;
        private string _fileName;
        public ImageSaver(IFileStorage fileStorage)
        {
            _fileStorage = fileStorage;
        }

        public string GetImageName()
        {
            return _fileStorage.GetFileName();
        }

        public void SaveImage(byte[] bytes, string extension)
        {
            _fileStorage.UploadFile(bytes, extension);
        }
    }
}
