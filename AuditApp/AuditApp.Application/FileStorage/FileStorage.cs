using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AuditApp.Application.FileStorage
{
    public interface IFileStorage
    {
        void UploadFile(byte[] bytes, string filePath, string fileName);
    }
    public class FileStorage : IFileStorage
    {

        public  void UploadFile(byte[] bytes, string filePath, string fileName)
        {
            System.IO.File.WriteAllBytes(filePath, bytes);
        }
    }
}
