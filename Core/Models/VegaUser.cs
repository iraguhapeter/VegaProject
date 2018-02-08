namespace Vega.Core.Models
{
    public class VegaUser
    {
        public int Id { get; set; }     
        public string IdentityId { get; set; }   
        public ApplicationUser Identity { get; set; }  // navigation property
        public string Location {get; set;}
    }
}