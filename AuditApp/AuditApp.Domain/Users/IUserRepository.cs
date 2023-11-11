namespace AuditApp.Domain.Users
{
    public interface IUserRepository
    {
        public Task<List<User>> GetAllUsersAsync();
        public Task CreateUserAsync(User user);
        public Task<User> GetUserByIdAsync(int id);
        public Task<User> GetUserByLoginAsync( string login );
    }
}
