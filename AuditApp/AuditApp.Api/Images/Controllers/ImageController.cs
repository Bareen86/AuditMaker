using AuditApp.Api.Images.Models;
using AuditApp.Application.Settings;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace AuditApp.Api.Images.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ImageController : ControllerBase
    {
        private readonly FileStorageConfiguration _staticFilesPath;

        public ImageController(FileStorageConfiguration staticFilesPath)
        {
            _staticFilesPath = staticFilesPath;
        }

        [HttpGet("{filename}")]
        public async Task<IActionResult> Get([FromRoute] string fileName)
        {
            string filePath = Path.Combine(_staticFilesPath.ImagesFullPath, fileName);

            if (System.IO.File.Exists(filePath))
            {
                byte[] bytes = System.IO.File.ReadAllBytes(filePath);
                var extension = fileName.Split('.').Last();
                return File(bytes, $"image/{extension}");
            }
            return Ok();
        }

        [HttpPost("UploadImage")]
        public async Task<IActionResult> UploadImg(IFormFile file)
        {
            var extension = "." + file.FileName.Split('.').Last();
            string fileName = DateTime.Now.Ticks.ToString() + extension;
            string filePath = Path.Combine(_staticFilesPath.ImagesFullPath, fileName);
            using (var stream = new FileStream(filePath, FileMode.Create))
            {
                await file.CopyToAsync(stream);
            }

            string ImageUrl = "http://localhost:5175/api/Image/" + fileName;

            ImageApiResponce responce = new ImageApiResponce();
            responce.Success = 1;
            AdditionalApiResponceFields additionalApiResponceFields = new AdditionalApiResponceFields();
            additionalApiResponceFields.Url = ImageUrl;
            responce.File = additionalApiResponceFields;
            return Ok(responce);
        }
    }
}
