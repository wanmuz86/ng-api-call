import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

	carId

  constructor( private route: ActivatedRoute) { }

  ngOnInit() {
  	this.route.params.subscribe(params => {
  		this.carId = params["id"];
  		
  });
  }

}
