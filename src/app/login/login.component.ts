import {Component, Input, Output, EventEmitter} from '@angular/core';
import {authenticateService} from '../login/services/authentication.service';
import { Cred } from '../models/Cred';
import {Router} from '@angular/router';

@Component({
  selector: "login",
  templateUrl: "app/login/login.component.html",
  styleUrls: ["app/login/login.component.css"],
  providers: [authenticateService],
})

export class loginComponent {
  cred: Cred;
  token: string;
  loginError: string = "";
  signupSuccess: string = "";

  constructor(private _authenticateService: authenticateService, private _router: Router){
    this.cred = {email: "", password: ""};
    this.token = localStorage.getItem('token');
    if(localStorage.getItem('loginError') != undefined){
      this.loginError = localStorage.getItem('loginError');
      localStorage.removeItem('loginError');
    }
    if(localStorage.getItem('signupSuccess') != undefined){
      this.signupSuccess = localStorage.getItem('signupSuccess');
      localStorage.removeItem('signupSuccess');
    }
    if(this.token != undefined){
      window.location.href="/dashboard";
    }
  }

  login(): void {
    this._authenticateService.authenticate(this.cred).subscribe(data => {
      if(data.token != undefined){
        localStorage.setItem('token',data.token);
        window.location.href="/dashboard";
      }
      else{
        this.loginError = "Invalid Email or Password";
      }
    })
  }
}
