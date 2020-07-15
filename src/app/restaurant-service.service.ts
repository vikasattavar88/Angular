import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {

  private endPointURL ="http://localhost:3000/resto";
  private endPointURLUsers = "http://localhost:3000/users";
  private endPointLogin = "http://localhost:3000/users?email=";
  constructor(private _client : HttpClient) { }

  getRestaurantList() {
    return this._client.get(this.endPointURL);
  }

  addResto(data) {
    return this._client.post(this.endPointURL, data);
  }

  getRestaurant(id) {
    return this._client.get(`${this.endPointURL}/${id}`);
  }

  updateRestaurant(id, data) {
    return this._client.put(`${this.endPointURL}/${id}`, data);
  }

  deleteRestaurant(id) {
    return this._client.delete(`${this.endPointURL}/${id}`);
  }

  createUser(data) {
    return this._client.post(this.endPointURLUsers, data);
  }

  login(email) {
    return this._client.get(`${this.endPointLogin}/${email}`);
  }
}
