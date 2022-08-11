using FluentValidation;
using Microsoft.EntityFrameworkCore;

namespace SuperMarket.Infraestructure
{
    // Creating tables

    public class DbsetupContext : DbContext
    {
        public DbSet<Product>? Products { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer("data source=DESKTOP-I6NT15H;initial catalog=Supermarket;trusted_connection=true");
        }
    }

    // Models

    public class Product
    {
        public int ProductID { get; set; }

        public string? ProductName { get; set; }
        public int Quantity { get; set; }
        public double Price { get; set; }
        public string? Description { get; set; }

        public string? Type { get; set; }
    }

    // Validators

    public class ProductValidator : AbstractValidator<Product>
    {
        public ProductValidator()
        {
            RuleFor(product => product.ProductName).NotNull().NotEmpty();
            RuleFor(product => product.Quantity).NotNull().NotEmpty();
            RuleFor(product => product.Price).NotNull().NotEmpty();
        }
    }
}