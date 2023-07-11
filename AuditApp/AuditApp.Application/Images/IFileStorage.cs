

namespace AuditApp.Application
{
    public interface IFileStorage
    {
        void UploadFile(FileToSave fileToSave, string TypeOfFileToSave);
        FileToGet GetFile(string fileName);
    }
}
