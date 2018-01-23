import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Rx';
import { Router, CanActivate } from '@angular/router';

@Injectable()

export class authGuard implements CanActivate {
  
  token: string;

  constructor(private http: Http, public router: Router) { 
  	this.token = localStorage.getItem("token");
  }

  checkAuth(){
    let headers = new Headers();
    headers.append('Authorization', 'Bearer ' + this.token);
    return this.http.get("http://localhost:8000/api/checkAuth",{
      headers: headers
    })
    .map((res: Response) => res.json());
  }

  canActivate(): Observable<boolean> {
    
    return this.checkAuth().map(res => {
      if( res.error != undefined || this.token == undefined) {
        this.router.navigate(['/login']);
        localStorage.removeItem("token");
        localStorage.setItem("loginError","Session Expired! Please login again");
       return false;
      } else {
        return true;
      }
    });
  }

}