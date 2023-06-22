using AuditApp.Application.Settings;
using AuditApp.Extranet.Modules.Images.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AuditApp.Infrastructure.CommonServices.FileStorage
{
    public interface IFileStorage
    {
        void UploadFile(ImageToSave imageToSave);
        FileToGet GetFile(string fileName);
    }

    internal class FileStorage : IFileStorage
    {
        private readonly FileStorageConfiguration _fileStorageConfiguration;

        public FileStorage(FileStorageConfiguration fileStorageConfiguration)
        {
            _fileStorageConfiguration = fileStorageConfiguration;
        }

        public void UploadFile(ImageToSave imageToSave)
        {
            string filePath = Path.Combine(_fileStorageConfiguration.BasePath, "Images", imageToSave.FileName);
            File.WriteAllBytes(filePath, imageToSave.Bytes);
        }

        public FileToGet GetFile(string fileName)
        {
            string filePath = Path.Combine(_fileStorageConfiguration.BasePath, fileName);
            if (System.IO.File.Exists(filePath))
            {
                byte[] bytes = System.IO.File.ReadAllBytes(filePath);
                var extension = fileName.Split('.').Last();
                return new FileToGet
                {
                    Bytes = bytes,
                    Extansion = extension
                };
            }
            else
            {
                return null;
            }
        }
    }
}
