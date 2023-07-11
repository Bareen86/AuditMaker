using AuditApp.Domain.Users;

namespace AuditApp.Domain.Audits
{
    public class Audit
    {
        public Audit( string title, string location, string data, Guid userId )
        {
            Title = title;
            Location = location;
            Data = data;
            UserId = userId;
        }
        public Guid Id { get; set; }
        public string Title { get; set; }
        public string Location { get; set; }
        public string Data { get; set; }
        public DateTime CreationDate { get; set; } = DateTime.Now;
        public DateTime LastUpdatingDate { get; set; } = DateTime.Now;
        public Guid UserId { get; set; }
        public User User { get; set; }

        public void UpdateLocation( string location )
        {
            Location = location;
        }
        public void UpdateTitle( string title )
        {
            Title = title;
        }
        public void UpdateData( string data )
        {
            Data = data;
        }

        public void UpdateLastDate()
        {
            LastUpdatingDate = DateTime.Now;
        }
    }
}
