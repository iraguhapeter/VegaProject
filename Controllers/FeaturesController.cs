using System.Collections.Generic;
using System.Threading.Tasks;
using AutoMapper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using vega.Persistence;
using Vega.Controllers.Resources;
using Vega.Core.Models;

namespace Vega.Controllers
{
    public class FeaturesController : Controller
    {
        public VegaDbContext context { get; }
        public IMapper mapper { get; }
        public FeaturesController(VegaDbContext context, IMapper mapper)
        {
            this.mapper = mapper;
            this.context = context;
        }

        [HttpGet("api/features")]
        [Authorize]
        public async Task<IEnumerable<KeyValuePairResource>> GetFeatures(){
            var features = await context.Features.ToListAsync();

            return mapper.Map<List<Feature>, List<KeyValuePairResource>>(features);
        }
    }
}