import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { RestaurantService } from '../restaurant-service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  isSuccess : boolean = false;
  createUser = new FormGroup({
    name: new FormControl(''),
    passowrd: new FormControl(''),
    email: new FormControl('')
  });
  constructor(private _service  : RestaurantService) { }

  ngOnInit(): void {
  }

  registerUser() {
    return this._service.createUser(this.createUser.value).subscribe(result => {
      this.isSuccess = true;
    })
  }

}
