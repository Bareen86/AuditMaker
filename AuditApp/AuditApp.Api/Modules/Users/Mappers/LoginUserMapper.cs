using AuditApp.Application.LoginService.Dtos;
using AuditApp.Extranet.Modules.Users.Dtos;

namespace AuditApp.Extranet.Modules.Users.Mappers
{
    public static class LoginUserMapper
    {
        public static UserDto Map(this LoginDto entity )
        {
            return new UserDto
            {
                Id = entity.Id,
                IsAdmin = entity.IsAdmin,
                Name = entity.Name,
                SecondName = entity.SecondName,
            };
        }
    }
}
