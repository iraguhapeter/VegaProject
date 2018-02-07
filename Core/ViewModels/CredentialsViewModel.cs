using FluentValidation.Attributes;
using Vega.Core.ViewModels.Validations;

namespace Vega.Core.ViewModels
{
    [Validator(typeof(CredentialsViewModelValidator))]
    public class CredentialsViewModel  
    {
        public string UserName { get; set; }
        public string Password { get; set; }        
    }
}