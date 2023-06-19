

using AuditApp.Application.Settings;
using AuditApp.Infrastructure.CommonServices.FileStorage;

namespace AuditApp.Application.ImageSaving
{
    public interface IImageSaver
    {
        void SaveImage(byte[] bytes, string extension);
        string GetFileName();
    }
    internal class ImageSaver : IImageSaver
    {
        private readonly IFileStorage _fileStorage;
        private readonly FileStorageConfiguration _storageConfiguration;
        private string _fileName;
        public ImageSaver(FileStorageConfiguration fileStorageConfiguration, IFileStorage fileStorage)
        {
            _storageConfiguration = fileStorageConfiguration;
            _fileStorage = fileStorage;
        }

        public FileStorageConfiguration FileStorageConfiguration { get; }

        public string GetFileName()
        {
            return _fileName;
        }

        public void SaveImage(byte[] bytes, string extension)
        {
            string fileName = DateTime.Now.Ticks.ToString() + extension;
            _fileName = fileName;
            string filePath = Path.Combine(_storageConfiguration.BasePath, "Images", fileName);
            _fileStorage.UploadFile(bytes, filePath);
        }
    }
}
