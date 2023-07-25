using AuditApp.Domain.Users;

namespace AuditApp.Application.LoginService.Mappers
{
    public static class UserMapper
    {
        public static LoginResult Map(this User user )
        {
            return new LoginResult
            {
                Id = user.Id,
                IsAdmin = user.IsAdmin,
                Name = user.Name,
                SecondName = user.SecondName,
            };
        }
    }
}
