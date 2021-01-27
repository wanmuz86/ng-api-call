import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { HttpService } from '../http.service';
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

	carId
	car

  constructor( private route: ActivatedRoute, public httpService:HttpService) { }

  ngOnInit() {
  	this.route.params.subscribe(params => {
  		this.carId = params["id"];
  		this.httpService.getCarById(this.carId).subscribe(resp=>{
  		
  			this.car = resp["sheet1"];
  		},
  			err=>{
  				console.log(err)
  			})
  	
  })
  }
  submitPressed(){
  	let body = {
  		sheet1:this.car
  	}
  	this.httpService.editCar(this.carId,body).subscribe(resp=>{
  		console.log(resp)
  	},err=>{
  		console.log(err)
  	})
  }

}
