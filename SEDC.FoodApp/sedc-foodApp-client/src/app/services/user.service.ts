import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment'
import { Token } from '../models/restaurant-model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  serverUrl = environment.apiServer

  constructor(private http: HttpClient) { }

  register(body: any) : Observable<any> {
    let url = `${this.serverUrl}/api/applicationuser/register`;
    return this.http.post(url, body)
  }

  login(body: any) : Observable<any> {
    let url = `${this.serverUrl}/api/applicationuser/login`
    return this.http.post<Token>(url, body);
  }
}
