﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using AuditApp.Application.Helpers;
using AuditApp.Domain.Users;

namespace AuditApp.Application.Users.UsersCreating
{
    public interface IUserCreator
    {
        Task CreateUser( AddUserCommand command );
    }

    public class UserCreator : IUserCreator
    {
        private readonly IUserRepository _userRepository;

        public UserCreator( IUserRepository userRepository )
        {
            _userRepository = userRepository;
        }

        public async Task CreateUser( AddUserCommand command )
        {
            command.Password = HashPasswordHelper.HashPassword( command.Password );
            User user = new User( command.Name, command.SecondName, command.Login, command.Password, command.IsAdmin );
            await _userRepository.CreateUserAsync( user );
        }
    }   
}
