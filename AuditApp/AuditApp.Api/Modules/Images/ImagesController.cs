using AuditApp.Application.ImageResolving;
using AuditApp.Application.ImageSaving;
using AuditApp.Extranet.Modules.Images.Builder;
using AuditApp.Extranet.Modules.Images.Extentions;
using AuditApp.Extranet.Modules.Images.Models;
using Microsoft.AspNetCore.Mvc;
using static AuditApp.Extranet.Modules.Images.Dtos.ResponseStatusEnum;

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
        public async Task<IActionResult> GetImage([FromRoute] string filename)
        {
            var imageToGet = _imageResolver.GetImage(filename);
            if (imageToGet != null)
            {
                return File(imageToGet.Bytes, imageToGet.ContentType);
            }
            else
            {
                return NotFound("Такой фотографии нет");
            }
        }

        [HttpPost("upload-image")]
        public async Task<IActionResult> UploadImage(IFormFile file)
        {
            var imageToSave = ImageBuilder.Build(file);
            var domainName = Request.Scheme + "://" + Request.Host.Value;
            _imageSaver.SaveImage(imageToSave.Bytes, imageToSave.Extension);
            string ImageUrl = domainName + "/api/images/" + _imageSaver.GetImageName();
            var result = GetImageResult.GetResponse(ResponseStatus.Success, ImageUrl);
            return Ok(result);
        }
    }
}
