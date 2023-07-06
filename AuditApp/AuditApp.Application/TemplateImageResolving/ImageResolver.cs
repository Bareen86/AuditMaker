using AuditApp.Infrastructure.CommonServices.FileStorage.Mappers;

namespace AuditApp.Application.ImageResolving
{
    public interface IImageResolver
    {
        ResolvedImage GetImage(string fileName);
    }
    internal class ImageResolver : IImageResolver
    {
        private readonly IFileStorage _fileStorage;

        public ImageResolver(IFileStorage fileStorage)
        {
            _fileStorage = fileStorage;
        }       

        public ResolvedImage GetImage(string fileName)
        {
            string imagePath = Path.Combine("Images", fileName);
            return _fileStorage.GetFile(imagePath).Map();
        }
    }
}
