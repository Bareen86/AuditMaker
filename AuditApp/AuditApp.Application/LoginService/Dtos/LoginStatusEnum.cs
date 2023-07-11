using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AuditApp.Application.LoginService.Dtos
{
    public class LoginStatusEnum
    {
        public enum GetUserAuthenticateStatus
        {
            UnAuthenticated = 0,
            Authenticated = 1,
        }
    }
}
