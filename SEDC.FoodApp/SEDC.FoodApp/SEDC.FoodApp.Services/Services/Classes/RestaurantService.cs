using SEDC.FoodApp.DataAccess.Mongo.Repositories.Interfaces;
using SEDC.FoodApp.DomainModels.Models;
using SEDC.FoodApp.RequestModels.Models;
using SEDC.FoodApp.Services.Services.Interfaces;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace SEDC.FoodApp.Services.Services.Classes
{
    public class RestaurantService : IRestaurantService
    {
        private readonly IRestaurantRepository _restaurantRepository;

        public RestaurantService(IRestaurantRepository restaurantRepository)
        {
            _restaurantRepository = restaurantRepository;
        }

        public async Task CreateNewRestaurantAsync(RestaurantRequestModel model)
        {
            var dtoRestaurant = new Restaurant()
            {
                Name = model.Name,
                Address = model.Address,
                Municipality = model.Municipality,
                Menu = new List<MenuItem>()
            };

            await _restaurantRepository.InsertRestaurantAsync(dtoRestaurant);
        }

        public async Task<List<RestaurantRequestModel>> GetRestaurantsAsync()
        {
            return new List<RestaurantRequestModel>();
        }
    }
}
