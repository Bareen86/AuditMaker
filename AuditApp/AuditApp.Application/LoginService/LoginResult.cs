using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AuditApp.Application.LoginService
{
    public class LoginResult
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string SecondName { get; set; }
        public bool IsAdmin { get; set; }
        public string ErrorMessage { get; set; } = string.Empty;

        public LoginResult()
        {

        }
        public LoginResult( string errorMessage )
        {
            ErrorMessage = errorMessage;
        }
    }
}
