using AuditApp.Application.ImageResolving;
using AuditApp.Application.ImageSaving;
using AuditApp.Extranet.Modules.Images.Builder;
using AuditApp.Extranet.Modules.Images.Mappers;
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
        private readonly IImageBuilder _imageBuilder;

        public ImagesController(
            IImageBuilder imageBuilder,
            IImageResolver imageResolver,
            IImageSaver imageSaver)
        {
            _imageBuilder = imageBuilder;
            _imageResolver = imageResolver;
            _imageSaver = imageSaver;
        }

        [HttpGet("{filename}")]
        public IActionResult GetImage([FromRoute] string filename)
        {
            ResolvedImage resolvedImage = _imageResolver.GetImage(filename);
            if (resolvedImage != null)
            {
                return File(resolvedImage.Bytes, $"image/{resolvedImage.Extension}");
            }
            else
            {
                return NotFound("Такой фотографии нет");
            }
        }

        [HttpPost("upload-image")]
        public IActionResult UploadImage(IFormFile file)
        {
            FileToSave imageToSave = _imageBuilder.Build(file);
            var saveResult = _imageSaver.SaveImage(imageToSave);
            GetImageResult result = saveResult.Map();
            return Ok(result);
        }
    }
}
