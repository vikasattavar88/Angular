import { RestaurantService } from './../restaurant-service.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-add-restaurant',
  templateUrl: './add-restaurant.component.html',
  styleUrls: ['./add-restaurant.component.css']
})
export class AddRestaurantComponent implements OnInit {
  isSuccess : boolean = false;
  addRestaurant = new FormGroup({
    name: new FormControl(''),
    Address: new FormControl(''),
    email: new FormControl('')
  });
  constructor(private _service  : RestaurantService) { }

  ngOnInit(): void {
  }

  addResto() {
    this._service.addResto(this.addRestaurant.value).subscribe(result => {
      this.addRestaurant.reset({});
      this.isSuccess = true;
    });
  }

  closeSuccessAlert() {
    this.isSuccess = false;
  }

}
