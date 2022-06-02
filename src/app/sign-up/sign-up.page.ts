import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from '../../app/app.service'
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.page.html',
  styleUrls: ['./sign-up.page.scss'],
})
export class SignUpPage implements OnInit {

  Name: any;
  UserName: any;
  Password: any;
  SaveDat: [];
  constructor(public app: AppService,private router:Router) { }

  ngOnInit() {
  }

  signUp() {

    if (this.Name == "" || this.UserName == null || this.Password == undefined) {
      alert("Enter Credentials")
    } else if (this.Name == "" || this.Name == null || this.Name == undefined) {
      alert("Enter Name")
    } else if (this.UserName == "" || this.UserName == null || this.UserName == undefined) {
      alert("Enter Email")
    } else if (this.Password == "" || this.Password == null || this.Password == undefined) {
      alert("Enter Password")
    } else {

      window.localStorage.setItem("RegisterUserData", JSON.stringify({
        name: this.Name,
        email: this.UserName,
        password: this.Password
      }));

      alert("Data Registered Successfully");
      this.router.navigate(['/login']);
    }
  }
}
