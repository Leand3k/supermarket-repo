using Microsoft.AspNetCore.Mvc;
using SuperMarket.Domain;
using SuperMarket.Domain.Services;

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
        public Product Get(int id)
        {
            return ProductService.SelectProduct(id);
        }

        // POST api/<ProductController>
        [Route("Create")]
        [HttpPost]
        public JsonResult Post([FromBody]Product product)
        {
            ProductService.CreateProduct(product.ProductTypeID, product.ProductName, product.Quantity, product.Price, product.Description);

            return new JsonResult("Product created");
        }

        // PUT api/<ProductController>/5
        [HttpPut("{id}")]
        public JsonResult Update(int id, [FromBody]Product product)
        {
            if (ModelState.IsValid)
            {
                var productExist = ProductService.SelectProduct(id);
                if(productExist != null)
                {
                    ProductService.UpdateProduct(product.ProductTypeID, product.ProductName, product.Quantity, product.Price, product.Description);

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
        public void Delete(int id)
        {
        }
    }
}
