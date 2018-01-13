import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()

export class indexService{
  
  token: string;

  constructor(private http: Http) { 
  	this.token = localStorage.getItem("token");
  }

  getEmployeeData(){
  	return this.http.post("http://localhost:8000/api/getEmployeeData", {"token":this.token})
  	.map((res: Response) => res.json());
  }
}