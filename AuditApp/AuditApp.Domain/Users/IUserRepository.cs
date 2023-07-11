namespace AuditApp.Domain.Users
{
    public interface IUserRepository
    {
        public Task CreateUserAsync(User user);
        public Task UpdateUserAsync(User user); 
        public Task<User> GetUserByIdAsync(Guid id);
        public Task<User> GetUserByLoginAsync( string login );
    }
}
