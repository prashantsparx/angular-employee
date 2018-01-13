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
var EventEmiterService = (function () {
    function EventEmiterService() {
        this.loginChange = new core_1.EventEmitter();
        this.loggedIn = false;
    }
    EventEmiterService.prototype.checkLogin = function (data) {
        this.loginChange.emit(data);
    };
    EventEmiterService.prototype.getLoginData = function () {
        return this.loginChange;
    };
    return EventEmiterService;
}());
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], EventEmiterService.prototype, "loginChange", void 0);
EventEmiterService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [])
], EventEmiterService);
exports.EventEmiterService = EventEmiterService;
//# sourceMappingURL=eventEmitter.service.js.map