import { RestaurantService } from './../restaurant-service.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email : string;
  password :string;

  

  constructor(private _service : RestaurantService, private router : Router) { }

  ngOnInit(): void {
  }

  login() {
    
    if (this.email == "vikas@123.com" && this.password == "vikas@123") {
      console.log("navigate to list");
      this.router.navigate[("../list")];
    } else {
      alert("Please enter valid details!!");
    }
  }

}
