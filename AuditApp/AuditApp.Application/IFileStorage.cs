using AuditApp.Extranet.Modules.Images.Models;

namespace AuditApp.Application
{
    public interface IFileStorage
    {
        void UploadFile(ImageToSave imageToSave);
        ImageToGet GetFile(string fileName);
    }
}
