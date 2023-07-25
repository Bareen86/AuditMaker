using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using AuditApp.Domain.Users;
using AuditApp.Extranet.Modules.Users.Dtos;

namespace AuditApp.Application.Users.UsersLoginValidating
{
    public interface IAddUserValidator
    {
        Task<UniqueUser> Validate( AddUserCommandDto command );
    }

    public class AddUserValidator : IAddUserValidator
    {
        private readonly IUserRepository _userRepository;

        public AddUserValidator( IUserRepository userRepository )
        {
            _userRepository = userRepository;
        }

        public async Task<UniqueUser> Validate( AddUserCommandDto command )
        {
            UniqueUser login = new UniqueUser() { IsUnique = true };
            User searchedUser = await _userRepository.GetUserByLoginAsync( command.Login );
            if ( searchedUser != null )
            {
                login.IsUnique = false;
            }
            return login;
        }
    }
}
