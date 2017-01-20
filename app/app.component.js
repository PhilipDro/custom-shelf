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
require("rxjs/Rx");
require("rxjs/add/operator/map");
var AppComponent = (function () {
    function AppComponent() {
    }
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'app',
        template: "\n    <!--nav class=\"navbar navbar-default\">\n      <div class=\"container-fluid\">\n        <div class=\"navbar-header\">\n          <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#main-navbar\" aria-expanded=\"false\">\n            <span class=\"sr-only\">Navigation ausklappen</span>\n            <span class=\"icon-bar\"></span>\n            <span class=\"icon-bar\"></span>\n            <span class=\"icon-bar\"></span>\n          </button>\n          <a class=\"navbar-brand\" href=\"#\">{{title}}</a>\n        </div>\n        <div class=\"collapse navbar-collapse\" id=\"main-navbar\">\n          <ul class=\"nav navbar-nav\">\n            <li><a routerLink=\"/regale\">Regale</a></li>\n            <li><a routerLink=\"/versand\">Versand</a></li>\n            <li><a routerLink=\"/kontakt\">Kontakt</a></li>\n          </ul>\n        </div>\n      </div>\n    </nav*ngIf=\"!router.urlTree.contains(router.createUrlTree(['/login']))\"-->\n    <div class=\"container\">\n      <div class=\"row nav-container\">\n        <div class=\"col-xs-12\">\n          <nav>\n            <div class=\"container-fluid no-padding\">\n              <ul class=\"nav navbar-nav highlighted\">\n                <!--li><img class=\"logo\" src=\"app/images/logo.png\" alt=\"logo\" /></li-->\n                <li><a routerLink=\"/regale\">Home</a></li>\n                <li><a routerLink=\"/versand\">Versand</a></li>\n                <li><a routerLink=\"/kontakt\">Kontakt</a></li>\n              </ul>\n            </div>\n          </nav>\n        </div>\n      </div>\n\n      <heading></heading>\n\n      <router-outlet></router-outlet>\n\n      <render-footer></render-footer>\n    </div>\n\n\n  ",
        styles: ["\n      @media (min-width: 1200px) {\n        .container{\n            width: 1200px;\n        }\n      }\n      .no-padding {\n        padding: 0;\n      }\n      .nav-container {\n        display: inline-block;\n        width: 100%;\n      }\n      nav {\n        text-align: left;\n        margin: 20px 0;\n      }\n      @media(min-width: 768px) {\n        .nav-container {\n          width: 50%;\n        }\n        .navbar-nav li {\n          margin: 8px 6px 0 6px;\n\n        }\n      }\n      .navbar-nav {\n        float:left;\n      }\n      .navbar-nav li a {\n        margin: 8px 0 0 0;\n        font-size: 18px;\n        color: grey;\n        display: inline-block;\n      }\n      .navbar-nav li a:first-child {\n        padding-left: 0;\n        margin-left: 0;\n      }\n      .navbar-nav li:first-child {\n        padding-left: 0;\n        margin-left: 0;\n      }\n      .navbar-nav li a:hover, .navbar-nav li a:active, .navbar-nav li a:focus {\n        background: transparent;\n        text-decoration: underline;\n        color: #E0A100;\n        cursor: pointer;\n      }\n      .navbar-nav li {\n        display: inline-block;\n      }\n      .logo {\n        max-height: 60px;\n      }\n    "
        ]
    }),
    __metadata("design:paramtypes", [])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map