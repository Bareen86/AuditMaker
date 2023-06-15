using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AuditApp.Application.FileStorage
{
    public interface IFileStorage
    {
        void UploadFile(string filePath, string fileName);
        void FileResponce(string filePath, string fileName);
    }
    public class FileStorage : IFileStorage
    {
        public void FileResponce(string filePath, string fileName)
        {
            
        }

        public void UploadFile(string filePath, string fileName)
        {
            
        }
    }
}
