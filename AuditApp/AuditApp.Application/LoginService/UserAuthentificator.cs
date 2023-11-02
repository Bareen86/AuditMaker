using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using AuditApp.Application.Helpers;
using AuditApp.Application.LoginService.Mappers;
using AuditApp.Domain.Users;

namespace AuditApp.Application.LoginService
{
    public interface IUserAuthentificator
    {
        Task<LoginResult> Login( string usernameId, string password );
    }

    public class UserAuthentificator : IUserAuthentificator
    {
        private readonly IUserRepository _userRepository;

        public UserAuthentificator( IUserRepository userRepository )
        {
            _userRepository = userRepository;
        }

        public async Task<LoginResult> Login( string login, string password )
        {
            User user = await _userRepository.GetUserByLoginAsync( login );
            if ( user == null )
            {
                LoginResult loginResult = new LoginResult( "Неверное имя пользователя или пароль" );
                return loginResult;
            }
            string passwordHash = HashPasswordHelper.HashPassword( password );
            if ( user.IsCorrectPassword( passwordHash ) )
            {
                return user.Map();
            }
            else
            {
                LoginResult loginResult = new LoginResult( "Неверное имя пользователя или пароль" );
                return loginResult;
            }
        }
    }
}
