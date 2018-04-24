import { Injectable } from '@angular/core';
import{ Http, Headers } from '@angular/http';

import 'rxjs/add/operator/map';

import { SaveVehicle } from '../models/vehicle';
import { ConfigService } from '../shared/utils/config.service';

@Injectable()
export class VehicleService {
  private readonly vehiclesEndpoint = '/api/vehicles';
  baseUrl: string = ''; 

  constructor(private http: Http, private configService: ConfigService) {
    this.baseUrl = configService.getApiURI();
   }

  getFeatures(){
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let authToken = localStorage.getItem('auth_token');
    headers.append('Authorization', `Bearer ${authToken}`);

    return this.http.get('api/features', {headers})
      .map(res => res.json());
  }

  getMakes(){
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let authToken = localStorage.getItem('auth_token');
    headers.append('Authorization', `Bearer ${authToken}`);

    return this.http.get('api/makes', {headers})
      .map(res => res.json());
  }
  create(vehicle){
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let authToken = localStorage.getItem('auth_token');
    headers.append('Authorization', `Bearer ${authToken}`);

    return this.http.post(this.vehiclesEndpoint, vehicle, {headers})
      .map(res => res.json());
  }

  getVehicle(id){
    return this.http.get(this.vehiclesEndpoint +'/' + id)
      .map(res => res.json());
  }
  getVehicleList(filter){
    return this.http.get(this.vehiclesEndpoint + '?' + this.toQueryString(filter))
      .map(res => res.json());
  }

  toQueryString(obj) {
    var parts = [];
    for (var property in obj) {
      var value = obj[property];
      if (value != null && value != undefined) 
        parts.push(encodeURIComponent(property) + '=' + encodeURIComponent(value));
    }

    return parts.join('&');
  }

  update(vehicle: SaveVehicle){
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let authToken = localStorage.getItem('auth_token');
    headers.append('Authorization', `Bearer ${authToken}`);

    return this.http.put(this.vehiclesEndpoint + '/' + vehicle.id , vehicle, {headers})
      .map(res => res.json());
  }

  delete(id){
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let authToken = localStorage.getItem('auth_token');
    headers.append('Authorization', `Bearer ${authToken}`);

    return this.http.delete(this.vehiclesEndpoint + '/' + id, {headers})
      .map(res => res.json());
  }
}
