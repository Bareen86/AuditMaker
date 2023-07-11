using AuditApp.Application.Users.UsersCreating;
using AuditApp.Extranet.Modules.Users.Dtos;

namespace AuditApp.Extranet.Modules.Users.Mappers
{
    public static class AddUserCommandMapper
    {
        public static AddUserCommand Map(this AddUserCommandDto command)
        {
            return new AddUserCommand
            {
                SecondName = command.SecondName,
                Name = command.Name,
                Login = command.Login,
                Password = command.Password,
                IsAdmin = command.IsAdmin
            };
        }
    }
}
