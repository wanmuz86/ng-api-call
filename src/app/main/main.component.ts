import { Component, OnInit } from '@angular/core';
import {HttpService} from '../http.service';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

cars
  constructor(private httpService:HttpService) { }

  ngOnInit() {
  	this.httpService.getAllCar().subscribe(resp=>{
  		console.log(resp)
  		this.cars = resp["sheet1"]
  	}, 
  	err=>{
  		console.log(err)
  	}
  	)
  }

}
