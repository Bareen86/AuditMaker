using AuditApp.Application.FileStorage;
using AuditApp.Application.Settings;
using AuditApp.Extranet.Modules.Images.Extentions;
using AuditApp.Extranet.Modules.Images.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Http.Extensions;
using Microsoft.AspNetCore.Mvc;
using System;

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
        private readonly IFileStorage _fileStorage;

        public ImagesController(
            FileStorageConfiguration staticFilesPath,
            IFileStorage fileStorage)
        {
            _staticFilesPath = staticFilesPath;
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

        [HttpPost("upload-image")]
        public async Task<IActionResult> UploadImage(IFormFile file)
        {
            var extension = "." + file.FileName.Split('.').Last();
            string fileName = DateTime.Now.Ticks.ToString() + extension;
            string filePath = Path.Combine(_staticFilesPath.StoragePath, "Images", fileName);
            var bytes = await file.GetBytes();
            var domainName = Request.Scheme + "://" + Request.Host.Value; 
            _fileStorage.UploadFile(bytes, filePath, fileName);
            string ImageUrl = domainName + "/api/images/" + fileName;
            GetImageResult responce = new GetImageResult();
            var result = responce.GetResponce((int)ResponceStatus.success, ImageUrl);
            return Ok(result);
        }
    }
}
