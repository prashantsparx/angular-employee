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
var index_service_1 = require("../index/services/index.service");
var router_1 = require("@angular/router");
var dashboardIndexComponent = (function () {
    function dashboardIndexComponent(_indexService, _router) {
        var _this = this;
        this._indexService = _indexService;
        this._router = _router;
        this._indexService.getEmployeeData().subscribe(function (data) {
            _this.employeeData = data;
        });
    }
    dashboardIndexComponent.prototype.deleteEmployee = function (id) {
        var _this = this;
        this._indexService.deleteEmployee(id).subscribe(function (data) {
            _this.employeeData = _this.employeeData.filter(function (employee) {
                return employee.id != id;
            });
        });
    };
    return dashboardIndexComponent;
}());
dashboardIndexComponent = __decorate([
    core_1.Component({
        templateUrl: "app/dashboard/index/index.component.html",
        styleUrls: ["app/dashboard/index/index.component.css"],
        providers: [index_service_1.indexService],
    }),
    __metadata("design:paramtypes", [index_service_1.indexService, router_1.Router])
], dashboardIndexComponent);
exports.dashboardIndexComponent = dashboardIndexComponent;
//# sourceMappingURL=index.component.js.map