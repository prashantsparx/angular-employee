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
var http_1 = require("@angular/http");
require("rxjs/add/operator/map");
var router_1 = require("@angular/router");
var environment_1 = require("../environment/environment");
var authGuard = (function () {
    function authGuard(http, router) {
        this.http = http;
        this.router = router;
        this.token = localStorage.getItem("token");
    }
    authGuard.prototype.checkAuth = function () {
        var headers = new http_1.Headers();
        headers.append('Authorization', 'Bearer ' + this.token);
        return this.http.get(environment_1.environment.serverPath + "/api/checkAuth", {
            headers: headers
        })
            .map(function (res) { return res.json(); });
    };
    authGuard.prototype.canActivate = function () {
        var _this = this;
        return this.checkAuth().map(function (res) {
            if (res.error != undefined || _this.token == undefined) {
                _this.router.navigate(['/login']);
                localStorage.removeItem("token");
                localStorage.setItem("loginError", "Session Expired! Please login again");
                return false;
            }
            else {
                return true;
            }
        });
    };
    return authGuard;
}());
authGuard = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http, router_1.Router])
], authGuard);
exports.authGuard = authGuard;
//# sourceMappingURL=authGuard.service.js.map