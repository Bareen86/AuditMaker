using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using AuditApp.Application.Helpers;
using AuditApp.Application.LoginService.Dtos;
using AuditApp.Application.LoginService.Mappers;
using AuditApp.Domain.Users;

namespace AuditApp.Application.LoginService
{
    public interface ILoginHandler
    {
        Task<LoginDto> Login(string usernameId, string password);
    }
    public class LoginHandler : ILoginHandler
    {
        private readonly IUserRepository _userRepository;

        public LoginHandler( IUserRepository userRepository )
        {
            _userRepository = userRepository;
        }

        public async Task<LoginDto> Login( string login, string password )
        {
            User user = await _userRepository.GetUserByLoginAsync( login );
            string hashPass = HashPasswordHelper.HashPassword( password );
            bool isValidPassword = false;
            if (user.HashPassword == hashPass )
            {
                isValidPassword = true;
            }
            if (isValidPassword)
            {
                return user.Map();
            }
            return null;
        }
    }
}
