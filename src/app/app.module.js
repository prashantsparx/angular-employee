"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var router_1 = require("@angular/router");
var http_1 = require("@angular/http");
var forms_1 = require("@angular/forms");
var authGuard_service_1 = require("./services/authGuard.service");
var app_component_1 = require("./app.component");
var login_component_1 = require("./login/login.component");
var signup_component_1 = require("./signup/signup.component");
var forgot_component_1 = require("./login/forgot/forgot.component");
var notFound_component_1 = require("./others/notFound.component");
var sidebar_component_1 = require("./dashboard/includes/sidebar/sidebar.component");
var index_component_1 = require("./dashboard/index/index.component");
var routes = [
    { path: "login", component: login_component_1.loginComponent },
    { path: "signup", component: signup_component_1.signupComponent },
    { path: "forgot", component: forgot_component_1.forgotComponent },
    { path: "dashboard", component: index_component_1.dashboardIndexComponent, canActivate: [authGuard_service_1.authGuard] },
    { path: "edit/:id", component: index_component_1.dashboardIndexComponent },
    { path: "", pathMatch: "full", redirectTo: "login" },
    { path: "**", component: notFound_component_1.notFoundComponent }
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, router_1.RouterModule.forRoot(routes), http_1.HttpModule, forms_1.FormsModule],
        declarations: [app_component_1.AppComponent, login_component_1.loginComponent, notFound_component_1.notFoundComponent, forgot_component_1.forgotComponent, index_component_1.dashboardIndexComponent, sidebar_component_1.sidebarComponent, signup_component_1.signupComponent],
        providers: [authGuard_service_1.authGuard],
        bootstrap: [app_component_1.AppComponent],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map