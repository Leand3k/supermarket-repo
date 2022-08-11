using Microsoft.AspNetCore.Mvc;
using SuperMarket.Domain.Services;
using SuperMarket.Infraestructure;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace supermarket_backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductController : ControllerBase
    {
        // GET: api/<ProductController>
        [Route("all")]
        [HttpGet]
        public IEnumerable<Product> Get()
        {
            return ProductService.SelectAllProduct();
        }

        // GET api/<ProductController>/5
        [HttpGet("{id}")]
        public JsonResult Get(int id)
        {
            var productExist = ProductService.SelectProduct(id);
            if (ModelState.IsValid && productExist != null)
            {
                return new JsonResult(ProductService.SelectProduct(id));
            }
            else
            {
                return new JsonResult("Product does not exists.");
            }
        }

        // POST api/<ProductController>
        [Route("Create")]
        [HttpPost]
        public JsonResult Post([FromBody] Product product)
        {
            ProductValidator validator = new ProductValidator();

            FluentValidation.Results.ValidationResult? result = validator.Validate(product);

            if (!result.IsValid)
            {
                foreach (var failure in result.Errors)
                {
                    return new JsonResult("Property " + failure.PropertyName + " failed validation. Error was: " + failure.ErrorMessage);
                }
            }
            ProductService.CreateProduct(product.Type, product.ProductName, product.Quantity, product.Price, product.Description);
            return new JsonResult("Product created");
        }

        // PUT api/<ProductController>/5
        //[Route("Update")]
        [HttpPut("{id}")]
        public JsonResult Update([FromRoute] int id, [FromBody] Product product)
        {
            if (ModelState.IsValid)
            {
                var productExist = ProductService.SelectProduct(id);
                if (productExist != null)
                {
                    ProductService.UpdateProduct(product);
                }
                else
                {
                    return new JsonResult("Product does not exists.");
                }
            }
            return new JsonResult("Product updated");
        }

        // DELETE api/<ProductController>/5
        [HttpDelete("{id}")]
        public JsonResult Delete(int id)
        {
            if (ModelState.IsValid)
            {
                var productExist = ProductService.SelectProduct(id);
                if (productExist != null)
                {
                    ProductService.DeleteProduct(id);
                }
                else
                {
                    return new JsonResult("Product does not exist");
                }
            }
            return new JsonResult($"Product deleted on ID {id}");
        }
    }
}