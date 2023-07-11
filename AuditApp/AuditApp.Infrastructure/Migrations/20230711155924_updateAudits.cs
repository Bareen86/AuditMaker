using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace AuditApp.Infrastructure.Migrations
{
    /// <inheritdoc />
    public partial class updateAudits : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "CreatedBy",
                table: "Audits");

            migrationBuilder.DropColumn(
                name: "CreatedDate",
                table: "Audits");

            migrationBuilder.DropColumn(
                name: "LastUpdateDate",
                table: "Audits");

            migrationBuilder.AddColumn<DateTime>(
                name: "CreationdDate",
                table: "Audits",
                type: "datetime2",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));

            migrationBuilder.AddColumn<DateTime>(
                name: "LastUpdatingDate",
                table: "Audits",
                type: "datetime2",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "CreationdDate",
                table: "Audits");

            migrationBuilder.DropColumn(
                name: "LastUpdatingDate",
                table: "Audits");

            migrationBuilder.AddColumn<string>(
                name: "CreatedBy",
                table: "Audits",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "CreatedDate",
                table: "Audits",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "LastUpdateDate",
                table: "Audits",
                type: "nvarchar(max)",
                nullable: true);
        }
    }
}
