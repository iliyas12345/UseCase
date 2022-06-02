import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  UserName: any;
  Password: any;
  Data: any;
  constructor(private router: Router) { }

  ngOnInit() {
  }
  signUp() {
    this.router.navigate(['/sign-up'])
  }
  login() {
    this.Data = JSON.parse(window.localStorage.getItem("RegisterUserData"));
    console.log(this.Data)
    if (this.UserName == null || this.Password == undefined || this.UserName == undefined || this.Password == null ) {
      alert("Enter Credentials")
    } else if (this.UserName == this.Data.email && this.Password == this.Data.password) {
      alert("Login Success");
      this.router.navigate(['/home']);
    }else{
      alert("Please Enter Valid Email and Password");
    }
  }
}

