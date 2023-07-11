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
        public async Task<IActionResult> Login( [FromBody] CheckUserLoginDto userDto )
        {
            LoginDto user = await _loginHandler.Login( userDto.Login, userDto.Password );
            if ( user.ErrorMessage.Length != 0 )
            {
                return BadRequest(user.ErrorMessage);
            }
            return Ok( user.Map() );
        }

        [HttpPost( "createuser" )]
        public async Task<IActionResult> CreateUser( [FromBody] AddUserCommandDto command )
        {
            UniqueUser login = await _userLoginValidator.LoginUniqueCheck( command.Login );
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
