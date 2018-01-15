import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { Router, ActivatedRoute } from '@angular/router';

@Injectable()

export class indexService{
  
  token: string;

  constructor(private http: Http, private _router: Router) { 
  	this.token = localStorage.getItem("token");
  }

  getEmployeeData(){
  	let headers = new Headers();
  	headers.append('Authorization', 'Bearer ' + this.token);
  	return this.http.post("http://localhost:8000/api/getEmployeeData", {},{
  		headers: headers
  	})
  	.map((res: Response) => res.json());
  }

  deleteEmployee(id){
  	let headers = new Headers();
  	headers.append('Authorization', 'Bearer ' + this.token);
  	return this.http.post("http://localhost:8000/api/deleteEmployeeData", {"id":id},{
  		headers: headers
  	})
  	.map((res: Response) => res.json());
  }

  editEmployee(id){
  	this._router.navigate(['/edit/'+id]);
  }
}