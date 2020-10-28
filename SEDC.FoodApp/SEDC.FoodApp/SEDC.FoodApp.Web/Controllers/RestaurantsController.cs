using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace SEDC.FoodApp.Web.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class RestaurantsController : ControllerBase
    {


        [HttpGet("GetRestaurants")]
        public async Task<IActionResult> GetRestaurantsAsync() 
        {
            //var restaurants = new List<Restaurant>()

            return Ok();
        }
    }
}
