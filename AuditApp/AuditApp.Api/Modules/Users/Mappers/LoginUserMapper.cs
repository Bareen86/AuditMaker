using AuditApp.Application.LoginService;
using AuditApp.Extranet.Modules.Users.Dtos;

namespace AuditApp.Extranet.Modules.Users.Mappers
{
    public static class LoginUserMapper
    {
        public static UserDto Map(this LoginResult loginResult )
        {
            return new UserDto
            {
                Id = loginResult.Id,
                IsAdmin = loginResult.IsAdmin,
                Name = loginResult.Name,
                SecondName = loginResult.SecondName,
            };
        }
    }
}
