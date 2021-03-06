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
var indexService = (function () {
    function indexService(http, _router) {
        this.http = http;
        this._router = _router;
        this.token = localStorage.getItem("token");
    }
    indexService.prototype.getEmployeeData = function () {
        var headers = new http_1.Headers();
        headers.append('Authorization', 'Bearer ' + this.token);
        return this.http.post("http://localhost:8000/api/getEmployeeData", {}, {
            headers: headers
        })
            .map(function (res) { return res.json(); });
    };
    indexService.prototype.deleteEmployee = function (id) {
        var headers = new http_1.Headers();
        headers.append('Authorization', 'Bearer ' + this.token);
        return this.http.post("http://localhost:8000/api/deleteEmployeeData", { "id": id }, {
            headers: headers
        })
            .map(function (res) { return res.json(); });
    };
    indexService.prototype.editEmployee = function (id) {
        this._router.navigate(['/edit/' + id]);
    };
    return indexService;
}());
indexService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http, router_1.Router])
], indexService);
exports.indexService = indexService;
//# sourceMappingURL=index.service.js.map