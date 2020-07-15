import { RestaurantService } from './../restaurant-service.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-update-restaurant',
  templateUrl: './update-restaurant.component.html',
  styleUrls: ['./update-restaurant.component.css']
})
export class UpdateRestaurantComponent implements OnInit {

  isSuccess : boolean = false;
  updateRestaurantData : any;

  updateRestaurant = new FormGroup({
    name : new FormControl(''),
    Address : new FormControl(''),
    email : new FormControl('')
  })
  constructor(private _service : RestaurantService, private router : ActivatedRoute) { }

  ngOnInit(): void {
    this.updateRestaurantData = this._service.getRestaurant(this.router.snapshot.params.id).subscribe(result => {
      this.updateRestaurant = new FormGroup({
        name : new FormControl(result['name']),
        Address : new FormControl(result['Address']),
        email : new FormControl(result['email'])
      })
    });
  }

  updateResto() {
    this._service.updateRestaurant(this.router.snapshot.params.id, this.updateRestaurant.value).subscribe(result => {
      this.isSuccess = true;
    });
  }

}
