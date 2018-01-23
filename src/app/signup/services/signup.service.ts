import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { environment } from '../../environment/environment';

import { User } from '../../models/User';

@Injectable()

export class signupService{
  constructor(private http: Http) { }

    create(user: User) {
        return this.http.post(environment.serverPath+"/api/createUser", user)
        .map((res: Response) => res.json());
    }
}
