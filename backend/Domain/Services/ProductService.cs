using Microsoft.EntityFrameworkCore;
using SuperMarket.Infraestructure;

namespace supermarketdomain.Services
{
    public class ProductService
    {
        // Create a single product
        public static string CreateProduct(string type, string name, int quantity, double price, string description)
        {
            var db = new DbsetupContext();

            ProductValidator validator = new ProductValidator();

            {
                // Saving products in DB

                var product = new Product() { ProductName = name, Quantity = quantity, Price = price, Description = description, Type = type };

                db.Add(product);
                db.SaveChanges();
                return "Product created.";
            }
        }

        // Select all product
        public static IEnumerable<Product> SelectAllProduct()
        {
            var db = new DbsetupContext();

            return db.Products.ToList();
        }

        // Select one product by ID
        public static Product SelectProduct(int id)
        {
            var db = new DbsetupContext();

            return db.Products.FirstOrDefault(x => x.ProductID == id);
        }

        // Update product
        public static async void UpdateProduct(Product product)
        {
            var db = new DbsetupContext();

            {
                // Saving products in DB.

                var Updatedproduct = await db.Products.FirstOrDefaultAsync(productsearch => productsearch.ProductID == product.ProductID);

                Updatedproduct.ProductName = product.ProductName;

                Updatedproduct.Quantity = product.Quantity;
                Updatedproduct.Price = product.Price;
                Updatedproduct.Description = product.Description;
                await db.SaveChangesAsync();
            }
        }

        // Delete single product
        public static async void DeleteProduct(int id)
        {
            var db = new DbsetupContext();

            var ProductToBeDeleted = new Product()
            {
                ProductID = id
            };

            db.Products.Attach(ProductToBeDeleted);

            db.Products.Remove(ProductToBeDeleted);
            await db.SaveChangesAsync();
        }
    }
}