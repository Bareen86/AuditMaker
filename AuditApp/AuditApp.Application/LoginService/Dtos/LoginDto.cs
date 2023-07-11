using static AuditApp.Application.LoginService.Dtos.LoginStatusEnum;

namespace AuditApp.Application.LoginService.Dtos
{
    public class LoginDto
    {
        public Guid Id { get; set; }
        public string Name { get; set; }
        public string SecondName { get; set; }
        public bool IsAdmin { get; set; }
        public string ErrorMessage { get; set; } = string.Empty;
    }
}
