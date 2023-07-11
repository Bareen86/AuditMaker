using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace AuditApp.Infrastructure.Migrations
{
    /// <inheritdoc />
    public partial class updatedb : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "CreationdDate",
                table: "Audits",
                newName: "CreationDate");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "CreationDate",
                table: "Audits",
                newName: "CreationdDate");
        }
    }
}
