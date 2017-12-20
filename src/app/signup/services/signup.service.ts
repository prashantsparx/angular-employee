import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

import { User } from '../../models/User';

@Injectable()

export class signupService{
  constructor(private http: Http) { }

    create(user: User) {
        return this.http.post("http://localhost:8000/api/createUser", user)
        .map((res: Response) => res.json());
    }
}
