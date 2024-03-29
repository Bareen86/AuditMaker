﻿using AuditApp.Application;
using AuditApp.Application.Settings;

namespace AuditApp.Infrastructure.CommonServices.FileStorage
{

    internal class FileStorage : IFileStorage
    {
        private readonly FileStorageConfiguration _fileStorageConfiguration;

        public FileStorage(FileStorageConfiguration fileStorageConfiguration)
        {
            _fileStorageConfiguration = fileStorageConfiguration;
        }

        public void UploadFile(FileToSave imageToSave, string TypeOfFileToSave)
        {
            string filePath = Path.Combine(_fileStorageConfiguration.BasePath, TypeOfFileToSave, imageToSave.FileName);
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
                    Extension = extension
                };
            }
            else
            {
                return null;
            }
        }
    }
}
