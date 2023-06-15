using AuditApp.Application.FileStorage;
using AuditApp.Application.Settings;
using AuditApp.Extranet.Modules.Images.Extentions;
using AuditApp.Extranet.Modules.Images.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace AuditApp.Extranet.Modules.Images.Controllers
{
    [Route("api/images")]
    [ApiController]
    public class ImagesController : ControllerBase
    {
        enum ResponceStatus
        {
            failure,
            success,
        }

        private readonly FileStorageConfiguration _staticFilesPath;
        private readonly AppConfiguration _appConfiguration;
        private readonly IFileStorage _fileStorage;

        public ImagesController(
            FileStorageConfiguration staticFilesPath,
            AppConfiguration appConfiguration,
            IFileStorage fileStorage)
        {
            _staticFilesPath = staticFilesPath;
            _appConfiguration = appConfiguration;
            _fileStorage = fileStorage;
        }

        [HttpGet("{filename}")]
        public async Task<IActionResult> Get([FromRoute] string fileName)
        {
            string filePath = Path.Combine(_staticFilesPath.StoragePath, "Images", fileName);
            
            if (System.IO.File.Exists(filePath))
            {
                byte[] bytes = System.IO.File.ReadAllBytes(filePath);
                var extension = fileName.Split('.').Last();
                return File(bytes, $"image/{extension}");
            }
            else
            {
                return NotFound();
            }
        }

        [HttpPost("UploadImage")]
        public async Task<IActionResult> UploadImage(IFormFile file)
        {
            var extension = "." + file.FileName.Split('.').Last();
            string fileName = DateTime.Now.Ticks.ToString() + extension;
            string filePath = Path.Combine(_staticFilesPath.StoragePath, "Images", fileName);
            var bytes = await file.GetBytes();

            _fileStorage.UploadFile(bytes, filePath, fileName);

            string ImageUrl = _appConfiguration.ApplicationUrl + "images/" + fileName;
            GetImageResult responce = new GetImageResult();
            var result = responce.GetResponce((int)ResponceStatus.success, ImageUrl);
            return Ok(result);
        }
    }
}
