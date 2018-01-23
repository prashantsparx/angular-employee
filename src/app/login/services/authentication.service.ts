import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

import { Cred } from '../../models/Cred';
import { environment } from '../../environment/environment';

@Injectable()

export class authenticateService{
  constructor(private http: Http) { }

    authenticate(cred: Cred) {
        return this.http.post(environment.serverPath+"/api/authenticate", cred)
        .map((res: Response) => res.json());
    }
}
