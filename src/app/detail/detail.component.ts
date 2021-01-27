import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
carId
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
  	this.route.params.subscribe(params => {
  		this.carId = params['id'];
  });
  }

}
