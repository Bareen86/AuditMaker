namespace AuditApp.Application.LoginService.Dtos
{
    public class LoginDto
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string SecondName { get; set; }
        public bool IsAdmin { get; set; }
        public string ErrorMessage { get; set; } = string.Empty;

        public LoginDto()
        {
             
        }
        public LoginDto(string errorMessage)
        {
            ErrorMessage = errorMessage;
        }
    }
}
