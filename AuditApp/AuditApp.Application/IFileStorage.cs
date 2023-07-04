

namespace AuditApp.Application
{
    public interface IFileStorage
    {
        void UploadFile(ImageToSave imageToSave);
        FileToGet GetFile(string fileName);
    }
}
