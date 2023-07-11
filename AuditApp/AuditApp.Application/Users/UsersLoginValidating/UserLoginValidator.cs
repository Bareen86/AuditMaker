using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using AuditApp.Application.LoginService.Dtos;
using AuditApp.Domain.Users;

namespace AuditApp.Application.Users.UsersLoginValidating
{

    public interface IUserLoginValidator
    {
        Task<UniqueLogin> LoginUniqueCheck(string login);
    }
    public class UserLoginValidator : IUserLoginValidator
    {
        private readonly IUserRepository _userRepository;

        public UserLoginValidator( IUserRepository userRepository )
        {
            _userRepository = userRepository;
        }
        public async Task<UniqueLogin> LoginUniqueCheck( string loginToCheck )
        {
            UniqueLogin login = new UniqueLogin() { IsUnique = true };
            User searchedUser = await _userRepository.GetUserByLoginAsync( loginToCheck );
            if ( searchedUser != null )
            {
                login.IsUnique = false;
            }
            return login;
        }
    }
}
