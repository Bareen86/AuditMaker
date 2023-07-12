using AuditApp.Application.LoginService.Dtos;
using AuditApp.Domain.Users;

namespace AuditApp.Application.LoginService.Mappers
{
    public static class UserMapper
    {
        public static LoginDto Map(this User user )
        {
            return new LoginDto
            {
                Id = user.Id,
                IsAdmin = user.IsAdmin,
                Name = user.Name,
                SecondName = user.SecondName,
            };
        }
    }
}
