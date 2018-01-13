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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var signup_service_1 = require("../signup/services/signup.service");
var router_1 = require("@angular/router");
var signupComponent = (function () {
    function signupComponent(_signupService, _router) {
        this._signupService = _signupService;
        this._router = _router;
        this.signUpData = { name: "", email: "", password: "" };
        this.signup_errors = { name: "", email: "", password: "" };
    }
    signupComponent.prototype.signup = function () {
        var _this = this;
        this._signupService.create(this.signUpData).subscribe(function (data) {
            if (data.status) {
                _this._router.navigate(['/login']);
            }
            else {
                if (data.errors != undefined) {
                    if (data.errors.email != undefined) {
                        _this.signup_errors.email = data.errors.email[0];
                    }
                    else {
                        _this.signup_errors.email = "";
                    }
                    if (data.errors.name != undefined) {
                        _this.signup_errors.name = data.errors.name[0];
                    }
                    else {
                        _this.signup_errors.name = "";
                    }
                    if (data.errors.password != undefined) {
                        _this.signup_errors.password = data.errors.password[0];
                    }
                    else {
                        _this.signup_errors.password = "";
                    }
                }
                _this.status_message = data.message;
            }
        });
    };
    return signupComponent;
}());
signupComponent = __decorate([
    core_1.Component({
        templateUrl: "app/signup/signup.component.html",
        styleUrls: ["app/signup/signup.component.css"],
        providers: [signup_service_1.signupService],
    }),
    __metadata("design:paramtypes", [signup_service_1.signupService, router_1.Router])
], signupComponent);
exports.signupComponent = signupComponent;
//# sourceMappingURL=signup.component.js.map