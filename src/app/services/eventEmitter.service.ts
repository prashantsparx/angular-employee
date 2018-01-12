import {Injectable, EventEmitter, Output} from '@angular/core';

@Injectable()
export class EventEmiterService {

  @Output()
  loginChange = new EventEmitter();

  loggedIn: boolean = false;

  constructor() { }

  checkLogin(data: boolean) {
    this.loginChange.emit(data);
  }

  getLoginData() {
    return this.loginChange;
  }

}
