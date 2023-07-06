namespace AuditApp.Infrastructure.CommonServices.FileStorage.Mappers
{
    public static class FileToImageMapper
    {
        public static ResolvedImage Map(this FileToGet imageToGet)
        {
            return new ResolvedImage
            {
                Extension = imageToGet.Extension,
                Bytes = imageToGet.Bytes
            };
        }
    }
}
