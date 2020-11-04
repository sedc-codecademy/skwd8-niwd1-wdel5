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

  getAllRestaurants() {
    let url = `${this.serverUrl}/api/Restaurants/GetRestaurants`;
    return this.http.get(url);
  }



}
