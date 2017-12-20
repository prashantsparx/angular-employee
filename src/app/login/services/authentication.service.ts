import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

import { Cred } from '../../models/Cred';

@Injectable()

export class authenticateService{
  constructor(private http: Http) { }

    authenticate(cred: Cred) {
        return this.http.post("http://localhost:8000/api/authenticate", cred)
        .map((res: Response) => res.json());
    }
}
