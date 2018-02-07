using System.Threading.Tasks;
using AutoMapper;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using vega.Persistence;
using Vega.Core.Helpers;
using Vega.Core.Models;
using Vega.Core.ViewModels;

namespace Vega.Controllers
{
    [Route("api/[controller]")]
    public class AccountsController : Controller
    {
        public VegaDbContext context { get; }
        public IMapper mapper { get; }
        public UserManager<ApplicationUser> userManager { get; }
        public AccountsController(VegaDbContext context, IMapper mapper, UserManager<ApplicationUser> userManager)
        {
            this.userManager = userManager;
            this.mapper = mapper;
            this.context = context;
        }

        [HttpPost]
        public async Task<IActionResult> Post ([FromBody] RegistrationViewModel model)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var userIdentity=mapper.Map<ApplicationUser>(model);
            var result = await userManager.CreateAsync(userIdentity, model.Password);

            if (!result.Succeeded) 
                return new BadRequestObjectResult(Errors.AddErrorsToModelState(result, ModelState));

            await context.VegaUser.AddAsync(new VegaUser{IdentityId=userIdentity.Id, Location=model.Location});
            await context.SaveChangesAsync();

            return new OkObjectResult("Account created");
        }
    }
}