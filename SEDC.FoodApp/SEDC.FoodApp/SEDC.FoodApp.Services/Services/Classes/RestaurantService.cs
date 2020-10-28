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
        public async Task<List<RestaurantRequestModel>> GetRestaurantsAsync()
        {
            return new List<RestaurantRequestModel>();
        }


    }
}
