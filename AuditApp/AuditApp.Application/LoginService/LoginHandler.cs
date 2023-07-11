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
            if (user == null )
            {
                LoginDto loginDto = new LoginDto();
                loginDto.ErrorMessage = "Такого пользователя нет!";
                return loginDto;
            }
            string hashPass = HashPasswordHelper.HashPassword( password );
            if (user.HashPassword == hashPass )
            {
                return user.Map();
            }
            else
            {
                LoginDto loginDto = new LoginDto();
                loginDto.ErrorMessage = "Пароли не совпадают!";
                return loginDto;
            }
        }
    }
}
