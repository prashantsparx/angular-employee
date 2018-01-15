"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var authentication_service_1 = require("../login/services/authentication.service");
var router_1 = require("@angular/router");
var loginComponent = (function () {
    function loginComponent(_authenticateService, _router) {
        this._authenticateService = _authenticateService;
        this._router = _router;
        this.loginError = "";
        this.signupSuccess = "";
        this.cred = { email: "", password: "" };
        this.token = localStorage.getItem('token');
        if (localStorage.getItem('loginError') != undefined) {
            this.loginError = localStorage.getItem('loginError');
            localStorage.removeItem('loginError');
        }
        if (localStorage.getItem('signupSuccess') != undefined) {
            this.signupSuccess = localStorage.getItem('signupSuccess');
            localStorage.removeItem('signupSuccess');
        }
        if (this.token != undefined) {
            window.location.href = "/dashboard";
        }
    }
    loginComponent.prototype.login = function () {
        var _this = this;
        this._authenticateService.authenticate(this.cred).subscribe(function (data) {
            if (data.token != undefined) {
                localStorage.setItem('token', data.token);
                window.location.href = "/dashboard";
            }
            else {
                _this.loginError = "Invalid Email or Password";
            }
        });
    };
    return loginComponent;
}());
loginComponent = __decorate([
    core_1.Component({
        selector: "login",
        templateUrl: "app/login/login.component.html",
        styleUrls: ["app/login/login.component.css"],
        providers: [authentication_service_1.authenticateService],
    }),
    __metadata("design:paramtypes", [authentication_service_1.authenticateService, router_1.Router])
], loginComponent);
exports.loginComponent = loginComponent;
//# sourceMappingURL=login.component.js.map