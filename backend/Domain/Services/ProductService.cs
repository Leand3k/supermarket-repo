using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using SuperMarket.Domain;


namespace SuperMarket.Domain.Services
{
    public class ProductService
    {
        public static string CreateProduct(int productTypeID, string name, int quantity, double price, string description)
        {
            var db = new dbsetupContext();

            var product = new Product() { ProductName = name, Quantity = quantity, Price = price, Description = description, ProductTypeID = productTypeID};
            db.Add(product);
            
            db.SaveChanges();

            return "Producto creado";
        }

        public static IEnumerable<Product> SelectAllProduct()
        {
            var db = new dbsetupContext();
#pragma warning disable CS8604 // Possible null reference argument.
            return db.Products.ToList();
#pragma warning restore CS8604 // Possible null reference argument.


        }
    }
}