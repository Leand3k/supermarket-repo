using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;

namespace SuperMarket.Domain
{
    public class dbsetupContext : DbContext
    {
        public DbSet<Product>? Products { get; set; }
        public DbSet<ProductType>? ProductsType { get; set; }
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer("data source=DESKTOP-I6NT15H;initial catalog=Supermarket;trusted_connection=true");
        }
    }

    public class Product
    {
        public int ProductID { get; set; }
        
        public string? ProductName { get; set; }
        public int Quantity { get; set; }
        public double Price { get; set; }
        public string? Description { get; set; }
        

        public int ProductTypeID { get; set; }


    }

    public class ProductType
    {
        public int ProductTypeID { get; set; }
        public string? Type { get; set; }

    }
}


