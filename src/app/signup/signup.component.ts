import {Component} from '@angular/core';
import {signupService} from '../signup/services/signup.service';
import { User } from '../models/User';
import {Router} from '@angular/router';

@Component({
  templateUrl: "app/signup/signup.component.html",
  styleUrls: ["app/signup/signup.component.css"],
  providers: [signupService],
})

export class signupComponent {

  signUpData: User;
  signup_errors: User;
  status_message: string;

  constructor(private _signupService: signupService, private _router: Router){
    this.signUpData = {name:"",email: "", password: ""};
    this.signup_errors = {name:"",email: "", password: ""};
  }
  signup(): void {
    this._signupService.create(this.signUpData).subscribe(data => {
      if(data.status){
          this._router.navigate(['/login']);
      }
      else{
        if(data.errors != undefined){
            if(data.errors.email != undefined){
              this.signup_errors.email = data.errors.email[0];
            }
            else{
              this.signup_errors.email = "";
            }
            if(data.errors.name != undefined){
              this.signup_errors.name = data.errors.name[0];
            }
            else{
              this.signup_errors.name = "";
            }
            if(data.errors.password != undefined){
              this.signup_errors.password = data.errors.password[0];
            }
            else{
              this.signup_errors.password = "";
            }
        }
        this.status_message = data.message;
      }
    });
  }
}
