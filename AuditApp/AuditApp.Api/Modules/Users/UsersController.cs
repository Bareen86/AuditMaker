using AuditApp.Application.Helpers;
using AuditApp.Application.LoginService;
using AuditApp.Application.LoginService.Dtos;
using AuditApp.Application.Users.UsersCreating;
using AuditApp.Application.Users.UsersLoginValidating;
using AuditApp.Domain.Audits;
using AuditApp.Domain.Users;
using AuditApp.Extranet.Modules.Users.Dtos;
using AuditApp.Extranet.Modules.Users.Mappers;
using AuditApp.Infrastructure.Foundation;
using Microsoft.AspNetCore.Mvc;
using System.Text.Json;

namespace AuditApp.Extranet.Modules.Users
{
    [Route( "api/users" )]
    [ApiController]
    public class UsersController : ControllerBase
    {
        private readonly IUserCreator _userCreator;
        private readonly ILoginHandler _loginHandler;
        private readonly IUnitOfWork _unitOfWork;
        private readonly IUserLoginValidator _userLoginValidator;

        public UsersController(
            IUserCreator userCreator,
            ILoginHandler loginHandler,
            IUnitOfWork unitOfWork,
            IUserLoginValidator userLoginValidator )
        {
            _userCreator = userCreator;
            _loginHandler = loginHandler;
            _unitOfWork = unitOfWork;
            _userLoginValidator = userLoginValidator;
        }
        [HttpPost( "login" )]
        public async Task<IActionResult> GetHashEquality( [FromBody] UserDto userDto )
        {
            LoginDto user = await _loginHandler.Login( userDto.Login, userDto.Password );
            if ( user == null )
            {
                return BadRequest();
            }
            return Ok( user );
        }

        [HttpPost( "createuser" )]
        public async Task<IActionResult> CreateUser( [FromBody] AddUserCommandDto command )
        {
            UniqueLogin login = await _userLoginValidator.LoginUniqueCheck( command.Login );
            if ( login.IsUnique )
            {
                await _userCreator.CreateUser( command.Map() );
                await _unitOfWork.CommitAsync();
                return Ok();
            }
            else
            {
                return BadRequest( "Такой пользователь уже существует" );
            }
            
        }

        [HttpGet]
        public IActionResult GetTestData( [FromBody] string password )
        {
            string hashPass = HashPasswordHelper.HashPassword( password );
            return Ok( hashPass );
        }
    }
}
