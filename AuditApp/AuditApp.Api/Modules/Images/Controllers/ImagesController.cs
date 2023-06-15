using AuditApp.Application.Settings;
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

        public ImagesController(FileStorageConfiguration staticFilesPath, AppConfiguration appConfiguration)
        {
            _staticFilesPath = staticFilesPath;
            _appConfiguration = appConfiguration;
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
            using (var stream = new FileStream(filePath, FileMode.Create))
            {
                await file.CopyToAsync(stream);
            }

            string ImageUrl = _appConfiguration.ApplicationUrl + "images/" + fileName;

            GetImageResult result = new GetImageResult();
            result.Success = (int)ResponceStatus.success;
            ImageFile imageFile = new();
            imageFile.Url = ImageUrl;
            result.File = imageFile;
            return Ok(result);
        }
    }
}
