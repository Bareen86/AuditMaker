using AuditApp.Application;
using AuditApp.Application.Settings;
using AuditApp.Extranet.Modules.Audits;
using AuditApp.Extranet.Modules.Images;
using AuditApp.Infrastructure;
using AuditApp.Infrastructure.Foundation;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var connectionString = builder.Configuration.GetConnectionString( "Audits" );
builder.Services.AddDbContext<AuditsDbContext>( options => options.UseSqlServer( connectionString ) );
builder.Services.AddInfrastructure();
builder.Services.AddApplication();
builder.Services.AddImageModule();
builder.Services.AddAuditModule();
builder.Services.AddSpaStaticFiles( configuration => { configuration.RootPath = "Frontend/build"; } );

var provider  = builder.Services.BuildServiceProvider();
var configuration = provider.GetRequiredService<IConfiguration>();
builder.Services.AddSingleton(configuration.GetSection("StorageConfiguration").Get<FileStorageConfiguration>());

var app = builder.Build();

if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseStaticFiles();
app.UseSpaStaticFiles();

app.UseSpa(spa =>
{
    spa.Options.SourcePath = "Frontend";
});

app.UseAuthorization();

app.MapControllers();

app.Run();
