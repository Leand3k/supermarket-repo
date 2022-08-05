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
        // Create a single product
        public static string CreateProduct(int productTypeID, string name, int quantity, double price, string description)
        {
            var db = new dbsetupContext();

            {
                // Saving products in DB.
                var product = new Product() { ProductName = name, Quantity = quantity, Price = price, Description = description, ProductTypeID = productTypeID };
                db.Add(product);
                db.SaveChanges();
            }
            

            return "Producto creado";
        }

        // Select all product
        public static IEnumerable<Product> SelectAllProduct()
        {
            var db = new dbsetupContext();

            return db.Products.ToList();

        }
        // Select one product by ID
        public static Product SelectProduct(int id)
        {
            var db = new dbsetupContext();

            return db.Products.FirstOrDefault(x => x.ProductID == id);
        }

        public static string UpdateProduct(int productTypeID, string name, int quantity, double price, string description)
        {
            var db = new dbsetupContext();
            
            {

                // Saving products in DB.
                var product = new Product() { ProductName = name, Quantity = quantity, Price = price, Description = description, ProductTypeID = productTypeID };
                db.Entry(product).State = EntityState.Modified;
                db.SaveChanges();
            }


            return "Producto updated";
        }
    }
}