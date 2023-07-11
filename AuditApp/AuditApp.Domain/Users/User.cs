using AuditApp.Domain.Audits;

namespace AuditApp.Domain.Users
{
    public class User
    {
        public Guid Id { get; set; } = Guid.NewGuid();
        public string Login { get; set; }
        public string Name { get; set; }
        public string SecondName { get; set; }
        public string HashPassword { get; set; }
        public bool IsAdmin { get; set; }
        public List<Audit> Audits { get; } = new List<Audit>();

        public User( string name, string secondName,string login, string hashPassword, bool isAdmin )
        {
            Name = name;
            SecondName = secondName;
            Login = login;
            HashPassword = hashPassword;
            IsAdmin = isAdmin;
        }
    }
}
