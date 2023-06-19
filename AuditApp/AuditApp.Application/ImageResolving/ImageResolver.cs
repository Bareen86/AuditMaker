using AuditApp.Application.Settings;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AuditApp.Application.ImageResolving
{
    public interface IImageResolver
    {
        string GetImagePath(string fileName);
    }
    internal class ImageResolver : IImageResolver
    {
        private readonly FileStorageConfiguration _storageConfiguration;
        public ImageResolver(FileStorageConfiguration fileStorageConfiguration)
        {
            _storageConfiguration = fileStorageConfiguration;
        }

        public FileStorageConfiguration FileStorageConfiguration { get; }

        public string GetImagePath(string fileName)
        {
            string filePath = Path.Combine(_storageConfiguration.BasePath, "Images", fileName);
            return filePath;
        }
    }
}
