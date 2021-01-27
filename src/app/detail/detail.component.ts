import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { HttpService} from '../http.service';
@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
	carId
	car
  constructor(private route: ActivatedRoute, public httpService:HttpService) { }

  ngOnInit() {
  	this.route.params.subscribe(params => {
  		this.carId = params['id'];
  		this.httpService.getCarById(this.carId).subscribe(resp=>{
  			this.car = resp["sheet1"];
  		},err=>{
  			console.log(err);
  		})
  });
  }

}
