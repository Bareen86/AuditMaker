namespace AuditApp.Extranet.Modules.Users.Dtos
{
    public class AddUserCommandDto
    {
        public string Name { get; set; }
        public string SecondName { get; set; }
        public string Login { get; set; }
        public string Password { get; set; }
        public bool IsAdmin { get; set; }
    }
}
