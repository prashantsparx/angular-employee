import {Component, Input, Output, EventEmitter} from '@angular/core';
import {authenticateService} from '../login/services/authentication.service';
import { Cred } from '../models/Cred';
import {Router} from '@angular/router';

@Component({
  templateUrl: "app/login/login.component.html",
  styleUrls: ["app/login/login.component.css"],
  providers: [authenticateService],
})

export class loginComponent {
  cred: Cred;
  token: string;

  @Output()
  loginChange: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(private _authenticateService: authenticateService, private _router: Router){
    this.cred = {email: "", password: ""};
    this.token = localStorage.getItem('token');
    if(this.token != undefined){
      this._router.navigate(['/dashboard']);
    }
  }

  login(): void {
    this._authenticateService.authenticate(this.cred).subscribe(data => {
      if(data.token != undefined){
        console.log(data.token);
        localStorage.setItem('token',data.token);
        this.loginChange.emit(true);
        this._router.navigate(['/dashboard']);
      }
    })
  }
}
