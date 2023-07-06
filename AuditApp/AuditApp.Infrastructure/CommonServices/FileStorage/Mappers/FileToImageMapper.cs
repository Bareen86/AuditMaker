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
        public static ResolvedImage Map(this ImageToGet fileToGet)
        {
            return new ResolvedImage
            {
                Extansion = fileToGet.Extansion,
                Bytes = fileToGet.Bytes
            };
        }
    }
}
