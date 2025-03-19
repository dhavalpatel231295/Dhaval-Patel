using Microsoft.EntityFrameworkCore;
using ProductAPI.Models;

namespace ProductAPI
{
    public class ProductDbContext : DbContext
    {
        public ProductDbContext(DbContextOptions<ProductDbContext> options)
            : base(options)
        {
        }

        public DbSet<Product> Products { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            // Configure Rating as an owned type
            modelBuilder.Entity<Product>()
                .OwnsOne(p => p.Rating);

            // Specify precision and scale for decimal properties
            modelBuilder.Entity<Product>()
                .Property(p => p.Price)
                .HasColumnType("decimal(18,2)");

            modelBuilder.Entity<Product>()
                .OwnsOne(p => p.Rating)
                .Property(r => r.Rate)
                .HasColumnType("decimal(18,2)");
        }
    }

}
