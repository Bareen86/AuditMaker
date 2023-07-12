using AuditApp.Domain.Audits;

namespace AuditApp.Domain.Users
{
    public class User
    {
        public int Id { get; private set; }
        public string Login { get; private set; }
        public string Name { get; private set; }
        public string SecondName { get; private set; }
        public string HashPassword { get; private set; }
        public bool IsAdmin { get; private set; }
        public  List<Audit> Audits { get; } = new List<Audit>();

        public User( string name, string secondName, string login, string hashPassword, bool isAdmin )
        {
            Name = name;
            SecondName = secondName;
            Login = login;
            HashPassword = hashPassword;
            IsAdmin = isAdmin;
        }

        public bool IsCorrectPassword( string password )
        {
            if (password == HashPassword )
            {
                return true;
            }
            return false;
        }
    }
}
