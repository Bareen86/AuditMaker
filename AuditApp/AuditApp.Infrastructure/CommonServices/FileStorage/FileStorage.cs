using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AuditApp.Infrastructure.CommonServices.FileStorage
{
    public interface IFileStorage
    {
        void UploadFile(byte[] bytes, string filePath);
        void GetFile(string filePath);
    }

    internal class FileStorage : IFileStorage
    {
        public void GetFile(string filePath)
        {

        }

        public void UploadFile(byte[] bytes, string filePath)
        {
            File.WriteAllBytes(filePath, bytes);
        }
    }
}
