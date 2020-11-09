import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment'
import { RestaurantRequestModel } from '../models/restaurant-model';

@Injectable({
  providedIn: 'root'
})
export class AdminPanelService {

  serverUrl = environment.apiServer

  constructor(private http: HttpClient) { }

  addRestaurant(request: RestaurantRequestModel) : Observable<any> {
    let url = `${this.serverUrl}/api/Restaurants/AddRestaurant`;
    return this.http.post<any>(url, request)
  }

  getAllRestaurants(filter: any) {
    filter.municipality = filter.municipality === "" ? "" : parseInt(filter.municipality)
    let url = `${this.serverUrl}/api/Restaurants/GetRestaurants?name=${filter.name}&address=${filter.address}&municipality=${filter.municipality}`;
    return this.http.get(url);
  }

  deleteRestaurant(id: string) {
    let url = `${this.serverUrl}/api/Restaurants/DeleteRestaurant?id=${id}`;
    return this.http.delete(url)
  }

  updateRestaurant(restaurant: any) {
    let url = `${this.serverUrl}/api/Restaurants/UpdateRestaurant`;
    return this.http.put(url, restaurant);
  }

}
