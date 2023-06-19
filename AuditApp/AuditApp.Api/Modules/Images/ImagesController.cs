using AuditApp.Application.ImageResolving;
using AuditApp.Application.ImageSaving;
using AuditApp.Extranet.Modules.Images.Dtos;
using AuditApp.Extranet.Modules.Images.Extentions;
using AuditApp.Extranet.Modules.Images.Models;
using Microsoft.AspNetCore.Mvc;

namespace AuditApp.Extranet.Modules.Images.Controllers
{
    [Route("api/images")]
    [ApiController]
    public class ImagesController : ControllerBase
    {
        private readonly IImageResolver _imageResolver;
        private readonly IImageSaver _imageSaver;

        public ImagesController(
            IImageResolver imageResolver,
            IImageSaver imageSaver)
        {
            _imageResolver = imageResolver;
            _imageSaver = imageSaver;
        }

        [HttpGet("{filename}")]
        public async Task<IActionResult> Get([FromRoute] string fileName)
        {
            string filePath = _imageResolver.GetImagePath(fileName);
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
            var bytes = await file.GetBytes();
            var domainName = Request.Scheme + "://" + Request.Host.Value;
            _imageSaver.SaveImage(bytes, extension);
            string ImageUrl = domainName + "/api/images/" + _imageSaver.GetFileName();
            GetImageResult responce = new GetImageResult();
            var result = responce.GetResponce(ResponceStatus.Success, ImageUrl);
            return Ok(result);
        }
    }
}
