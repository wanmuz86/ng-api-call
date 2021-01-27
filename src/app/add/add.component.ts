import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service'
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
	car = {
		name:'',
		model:'',
		location:'',
		price:'',
		platno:'',
	}
	isLoading = false
	berjaya = false;
	error = false

  constructor(public httpService:HttpService) { }

  ngOnInit() {
  }
  addPressed(){
this.error = false
this.berjaya = false
  	let data = {
  		sheet1:this.car
  	}
  	this.isLoading = true;
  	this.httpService.addCar(data).subscribe(resp=>{
  		console.log(resp)
  		console.log("success");
  		this.isLoading = false;
  		this.berjaya = true
  		this.car = {
		name:'',
		model:'',
		location:'',
		price:'',
		platno:'',
	}
  	},err=>{
  		console.log(err)
  		this.isLoading = false;
  		this.error = true
  	})
  }
}
