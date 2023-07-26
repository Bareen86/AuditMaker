using AuditApp.Application.LoginService.Mappers;
using AuditApp.Domain.Audits;
using AuditApp.Domain.Users;
using AuditApp.Extranet.Modules.Audits.Dtos;
using AuditApp.Extranet.Modules.Audits.Mappers;

namespace AuditApp.Extranet.Modules.Audits.Builder
{
    public interface IAuditBuilder
    {
        Task<UserAuditsDto> Build( Audit audit ) =>  throw new NotImplementedException() ;
    }
    public class AuditBuilder : IAuditBuilder
    {
        private readonly IUserRepository _userRepository;

        public AuditBuilder( IUserRepository userRepository )
        {
            _userRepository = userRepository;
        }

        public async Task<UserAuditsDto> Build( Audit audit )
        {
            List<User> users = await _userRepository.GetAllUsersAsync();
            foreach ( User user in users )
            {
                if (user.Id == audit.UserId )
                {
                    return audit.AuditMap();
                }
            }
            return null;
        }
    }
}
