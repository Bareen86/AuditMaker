namespace AuditApp.Application.ImageSaving
{
    public interface IImageSaver
    {
        ImageToSave SaveImage(ImageToSave imageToSave);
    }
    internal class ImageSaver : IImageSaver
    {
        private readonly IFileStorage _fileStorage;

        public ImageSaver(IFileStorage fileStorage)
        {
            _fileStorage = fileStorage;
        }

        public ImageToSave SaveImage(ImageToSave imageToSave)
        {
            imageToSave.Uri = "/api/images/" + imageToSave.FileName;
            _fileStorage.UploadFile(imageToSave);
            return imageToSave;
        }
    }
}
