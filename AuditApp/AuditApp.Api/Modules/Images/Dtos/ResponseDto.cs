namespace AuditApp.Extranet.Modules.Images.Dtos
{
    public class ResponseDto
    {
        public ResponceStatus ResponceStatus { get; set; }
    }

    public enum ResponceStatus
    {
        Failure = 0,
        Success = 1,
    }
}
