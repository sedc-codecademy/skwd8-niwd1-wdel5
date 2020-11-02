using SEDC.FoodApp.DomainModels.Models;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace SEDC.FoodApp.DataAccess.Mongo.Repositories.Interfaces
{
    public interface IRestaurantRepository
    {
        Task InsertRestaurantAsync(Restaurant restaurant);
        Task<Restaurant> GetRestaurantByIdAsync(string id);
        Task<List<Restaurant>> GetRestaurantsAsync();
        Task UpdateRestaurantAsync(Restaurant restaurant);
        Task DeleteRestaurantByIdAsync(string id);
    }
}
