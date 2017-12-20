import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'my-admin',
  templateUrl: "app/app.component.html",
  styleUrls: ["app/app.component.css"],
})
export class AppComponent implements OnInit  {

  loggedIn: boolean = false;

  constructor(private _router: Router){

  }
  logout(): void {
    localStorage.removeItem('token');
    this._router.navigate(['/login']);
  }

  loginChangedHandler($event): void {
    alert();
  }

  ngOnInit(){
    if(localStorage.getItem('token')){
      this.loggedIn = true;
    }
  }
}
