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
        this.loginChange = new core_1.EventEmitter();
        this.cred = { email: "", password: "" };
        this.token = localStorage.getItem('token');
        if (this.token != undefined) {
            this._router.navigate(['/dashboard']);
        }
    }
    loginComponent.prototype.login = function () {
        var _this = this;
        this._authenticateService.authenticate(this.cred).subscribe(function (data) {
            if (data.token != undefined) {
                console.log(data.token);
                localStorage.setItem('token', data.token);
                _this.loginChange.emit(true);
                _this._router.navigate(['/dashboard']);
            }
        });
    };
    return loginComponent;
}());
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], loginComponent.prototype, "loginChange", void 0);
loginComponent = __decorate([
    core_1.Component({
        templateUrl: "app/login/login.component.html",
        styleUrls: ["app/login/login.component.css"],
        providers: [authentication_service_1.authenticateService],
    }),
    __metadata("design:paramtypes", [authentication_service_1.authenticateService, router_1.Router])
], loginComponent);
exports.loginComponent = loginComponent;
//# sourceMappingURL=login.component.js.map