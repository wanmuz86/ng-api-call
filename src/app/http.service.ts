import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(public httpClient:HttpClient) { }


  getAllCar(){
  	return this.httpClient.get('https://api.sheety.co/4db58997dd33ab7eaa3d621c48bdea06/sewakereta/sheet1')
  }
}
