namespace AuditApp.Extranet.Modules.Images.Models
{
    public class ImageFile
    {
        public string Url { get; set; }

        public ImageFile(string uri)
        {
            Url = uri;
        }
    }
}
