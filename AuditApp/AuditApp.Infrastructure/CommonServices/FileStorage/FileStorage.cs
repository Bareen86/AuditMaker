﻿using AuditApp.Application.Settings;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AuditApp.Infrastructure.CommonServices.FileStorage
{
    public interface IFileStorage
    {
        string GetFileName();
        void UploadFile(byte[] bytes, string extension);
        ImageToGet GetFile(string fileName);
    }

    internal class FileStorage : IFileStorage
    {
        public FileStorageConfiguration _fileStorageConfiguration { get; set; }
        private string _fileName;
        public FileStorage(FileStorageConfiguration fileStorageConfiguration)
        {
            _fileStorageConfiguration = fileStorageConfiguration;
        }

        public void UploadFile(byte[] bytes, string extension)
        {
            string fileName = DateTime.Now.Ticks.ToString() + extension;
            _fileName = fileName;
            string filePath = Path.Combine(_fileStorageConfiguration.BasePath, "Images", fileName);
            File.WriteAllBytes(filePath, bytes);
        }

        public string GetFileName()
        {
            return _fileName;
        }

        public ImageToGet GetFile(string fileName)
        {
            string filePath = Path.Combine(_fileStorageConfiguration.BasePath, "Images", fileName);
            if (System.IO.File.Exists(filePath))
            {
                byte[] bytes = System.IO.File.ReadAllBytes(filePath);
                var extension = fileName.Split('.').Last();
                return new ImageToGet
                {
                    Bytes = bytes,
                    ContentType = $"image/{extension}"
                };
            }
            else
            {
                return null;
            }
        }
    }
}