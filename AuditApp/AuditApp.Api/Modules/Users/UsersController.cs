using AuditApp.Application.LoginService;
using AuditApp.Application.LoginService.Dtos;
using AuditApp.Application.Users.UsersCreating;
using AuditApp.Application.Users.UsersLoginValidating;
using AuditApp.Extranet.Modules.Users.Dtos;
using AuditApp.Extranet.Modules.Users.Mappers;
using AuditApp.Infrastructure.Foundation;
using Microsoft.AspNetCore.Mvc;

namespace AuditApp.Extranet.Modules.Users
{
    [Route( "api/users" )]
    [ApiController]
    public class UsersController : ControllerBase
    {
        private readonly IUserCreator _userCreator;
        private readonly IUnitOfWork _unitOfWork;
        private readonly IAddUserValidator _addUserValidator;
        private readonly IUserAuthentificator _userAuthentificator;

        public UsersController(
            IUserCreator userCreator,
            IUnitOfWork unitOfWork,
            IAddUserValidator addUserValidator,
            IUserAuthentificator userAuthentificator )
        {
            _userCreator = userCreator;
            _unitOfWork = unitOfWork;
            _addUserValidator = addUserValidator;
            _userAuthentificator = userAuthentificator;
        }

        [HttpPost( "login" )]
        public async Task<IActionResult> Login( [FromBody] CheckUserAuthentificationDto userDto )
        {
            LoginDto LoginResultDto = await _userAuthentificator.Login( userDto.Login, userDto.Password );
            if ( LoginResultDto.ErrorMessage.Length != 0 )
            {
                return BadRequest( LoginResultDto.ErrorMessage);
            }
            return Ok( LoginResultDto.Map() );
        }

        [HttpPost( "createuser" )]
        public async Task<IActionResult> CreateUser( [FromBody] AddUserCommandDto command )
        {
            UniqueUser login = await _addUserValidator.Validate( command );
            if ( login.IsUnique )
            {
                await _userCreator.CreateUser( command.Map() );
                await _unitOfWork.CommitAsync();
                return Ok();
            }
            else
            {
                return NotFound( "Такой пользователь уже существует!" );
            }
        }
    }
}
