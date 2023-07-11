namespace AuditApp.Application.ImageSaving
{
    public interface IImageSaver
    {
        FileToSave SaveImage(FileToSave imageToSave);
    }
    internal class ImageSaver : IImageSaver
    {
        private readonly IFileStorage _fileStorage;

        public ImageSaver(IFileStorage fileStorage)
        {
            _fileStorage = fileStorage;
        }

        public FileToSave SaveImage(FileToSave fileToSave)
        {
            fileToSave.Uri = "/api/images/" + fileToSave.FileName;
            _fileStorage.UploadFile(fileToSave, "Images");
            return fileToSave;
        }
    }
}
