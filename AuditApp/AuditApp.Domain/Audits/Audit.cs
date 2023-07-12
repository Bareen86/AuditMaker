using AuditApp.Domain.Users;

namespace AuditApp.Domain.Audits
{
    public class Audit
    {
        public int Id { get; private set; }
        public int UserId { get; private set; }
        public string Title { get; private set; }
        public string Location { get; private set; }
        public string Data { get; private set; }
        public DateTime CreatedOn { get; private set; } = DateTime.Now;
        public DateTime ModifiedOn { get; private set; } = DateTime.Now;

        public Audit( string title, string location, string data, int userId )
        {
            Title = title;
            Location = location;
            Data = data;
            UserId = userId;
        }

        public void UpdateFields( string title, string location)
        {
            Title = title;
            Location = location;
            ModifiedOn = DateTime.Now;
        }
    }
}
