using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.CompilerServices;
using System.Text;
using System.Threading.Tasks;

namespace AuditApp.Infrastructure.CommonServices.FileStorage.Mappers
{
    public static class FileToImageMapper
    {
        public static ResolvedImage Map(this ImageToGet imageToGet)
        {
            return new ResolvedImage
            {
                Extansion = imageToGet.Extansion,
                Bytes = imageToGet.Bytes
            };
        }
    }
}
