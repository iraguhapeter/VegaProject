using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using Vega.Core.Models;

namespace vega.Persistence
{
    public class VegaDbContext : IdentityDbContext
    {
         public DbSet<Vehicle> Vehicles { get; set; }
         public DbSet<Make> Makes { get; set; } 
         public DbSet<Feature> Features { get; set; }
         public DbSet<Photo> Photos { get; set; }
         public DbSet<VegaUser> VegaUser { get; set; }
        public VegaDbContext(DbContextOptions<VegaDbContext> options)
            :base(options)
        {
        }
         protected override void OnModelCreating(ModelBuilder modelBuilder) 
        {
            base.OnModelCreating(modelBuilder);

            modelBuilder.Entity<VehicleFeature>().HasKey(vf => 
              new { vf.VehicleId, vf.FeatureId });
        }
    }
}