import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {loginComponent} from './login/login.component';

@Component({
  selector: 'my-admin',
  templateUrl: "app/app.component.html",
  styleUrls: ["app/app.component.css"],
})
export class AppComponent implements OnInit  {

  loggedIn: boolean = false;

  constructor(private _router: Router){
    if(localStorage.getItem('token')){
      this.loggedIn = true;
    }
  }
  logout(): void {
    localStorage.removeItem('token');
    localStorage.setItem("signupSuccess","Successfully Logged Out!")
    this.loggedIn = false;
    this._router.navigate(['/login']);
  }

  handleLoginChange(event){
    if(event){
      this.loggedIn = true;
    }
  }

  ngOnInit(){
    console.log("started");
  }

}
