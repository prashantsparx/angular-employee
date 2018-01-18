import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { Router, ActivatedRoute } from '@angular/router';

@Injectable()

export class authService{
  
  token: string;

  constructor(private http: Http, private _router: Router) { 
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
}