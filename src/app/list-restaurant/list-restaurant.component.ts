import { ActivatedRoute } from '@angular/router';
import { RestaurantService } from './../restaurant-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-restaurant',
  templateUrl: './list-restaurant.component.html',
  styleUrls: ['./list-restaurant.component.css']
})
export class ListRestaurantComponent implements OnInit {

  _restaurantList : any;
  constructor(private _service  : RestaurantService, private route : ActivatedRoute) { }

  ngOnInit(): void {
    this._service.getRestaurantList().subscribe(result => {
      this._restaurantList = result;
    });
  }

  deleteResto(id) {
    console.log(id);
    this._service.deleteRestaurant(id).subscribe(result => {
      this.ngOnInit();
    });
  }

}
