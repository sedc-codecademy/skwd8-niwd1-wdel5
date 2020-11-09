using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using SEDC.FoodApp.RequestModels.Models;
using SEDC.FoodApp.Services.Services.Classes;
using SEDC.FoodApp.Services.Services.Interfaces;

namespace SEDC.FoodApp.Web.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class RestaurantsController : ControllerBase
    {
        private readonly IRestaurantService _restaurantService;
        public RestaurantsController(IRestaurantService restaurantService)
        {
            _restaurantService = restaurantService;
        }

        //api/Restaurants/AddRestaurant
        [HttpPost("AddRestaurant")]
        public async Task<IActionResult> AddRestaurantAsync([FromBody] RestaurantRequestModel model) 
        {
            await _restaurantService.CreateNewRestaurantAsync(model);
            return Ok();
        }

        //api/Restaurants/GetRestaurants
        [HttpGet("GetRestaurants")]
        public async Task<IActionResult> GetRestaurantsAsync() 
        {
            var response = await _restaurantService.GetRestaurantsAsync();
            return Ok(response);
        }

        //api/Restaurants/UpdateRestaurant
        [HttpPut("UpdateRestaurant")]
        public async Task<IActionResult> UpdateRestaurantAsync([FromBody] UpdateRestaunratRequestModel requestModel)
        {
            await _restaurantService.UpdateRestaurantAsync(requestModel);
            return Ok();
        }

        //api/Restaurants/DeleteRestaurant
        [HttpDelete("DeleteRestaurant")]
        public async Task<IActionResult> DeleteRestaurantAsync([FromQuery] string id) 
        {
            await _restaurantService.DeleteRestaurantByIdAsync(id);
            return Ok();
        }
    }
}
