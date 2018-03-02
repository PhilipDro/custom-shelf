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
var router_1 = require("@angular/router");
require("rxjs/add/operator/switchMap");
var AppComponent = (function () {
    function AppComponent(router) {
        this.router = router;
        this.isPopOut = 'true';
        this.isPopOutImg = true;
    }
    AppComponent.prototype.getDeepestTitle = function (routeSnapshot) {
        var title = routeSnapshot.data ? routeSnapshot.data['title'] : '';
        if (routeSnapshot.firstChild) {
            title = this.getDeepestTitle(routeSnapshot.firstChild) || title;
        }
        return title;
    };
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.router.events.subscribe(function (event) {
            if (event instanceof router_1.NavigationEnd) {
                _this.title = _this.getDeepestTitle(_this.router.routerState.snapshot.root);
            }
        });
    };
    AppComponent.prototype.onScroll = function () {
        this.isPopOut = 'true';
        this.isPopOutImg = false;
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'app',
        template: "\n    <!--div *ngIf=\"isPopOutImg\" [@fadeInOut] class=\"background-layer\"><div class=\"home-overlay\"></div></div-->\n    <div class=\"container\">\n      <div class=\"row nav-container\">\n        <div class=\"col-xs-12 col-sm-12\">\n          <nav>\n            <div class=\"container-fluid no-padding\">\n              <ul class=\"nav navbar-nav highlighted\">\n                <li class=\"hidden-xs\"><a class=\"logo-link\" routerLink=\"/regale\" [routerLinkActive]=\"'nav-active'\">\n                  <img class=\"logo\" src=\"app/images/artd.png\" alt=\"logo\" /></a>\n                </li>\n                <li><a routerLink=\"/regale\" [routerLinkActive]=\"'nav-active'\" [@navColor]=\"isPopOut\">Home</a></li>\n                <li><a routerLink=\"/gallerie\" [routerLinkActive]=\"'nav-active'\" [@navColor]=\"isPopOut\">Gallerie</a></li>\n                <li><a routerLink=\"/kontakt\" [routerLinkActive]=\"'nav-active'\" [@navColor]=\"isPopOut\">Kontakt</a></li>\n              </ul>\n            </div>\n          </nav>\n        </div>\n      </div>\n      <heading [title]=\"title\"></heading>\n\n      <div [@popOut]=\"isPopOut\">\n        <router-outlet></router-outlet>\n      </div>\n\n      <render-footer></render-footer>\n    </div>\n\n\n  ",
        styles: ["\n      .logo {\n        max-height: 43px;\n        margin-right: 15px;\n      }\n      .navbar-nav li a.logo-link {\n        margin-top: 0;\n        padding-top: 0;\n      }\n      @media (min-width: 1200px) {\n        .container{\n            width: 1200px;\n        }\n      }\n      .no-padding {\n        padding: 0;\n      }\n      .nav-container {\n        display: inline-block;\n        width: 100%;\n      }\n      @media(max-width: 769px) {\n        .nav-container {\n          margin: 0 auto;\n          text-align: center;\n          width: 100%\n        }\n      }\n      nav {\n        text-align: left;\n        margin: 20px 0 40px 0;\n      }\n      @media(min-width: 769px) {\n        .nav-container {\n          width: 50%;\n        }\n        .navbar-nav li {\n          margin: 8px 6px 0 6px;\n\n        }\n      }\n      .navbar-nav {\n        float:left;\n      }\n      .navbar-nav li a {\n        margin: 8px 0 0 0;\n        font-size: 18px;\n        color: grey;\n        display: inline-block;\n        padding-bottom: 0;\n      }\n      .navbar-nav li a::-moz-focus-inner {\n        border: 0;\n      }\n      .navbar-nav li a:focus {\n        outline: none;\n      }\n      .navbar-nav li a:first-child {\n        padding-left: 0;\n        margin-left: 0;\n      }\n      .navbar-nav li:first-child {\n        padding-left: 0;\n        margin-left: 0;\n      }\n      .navbar-nav li a:hover, .navbar-nav li a:active, .navbar-nav li a:focus {\n        background: transparent;\n        text-decoration: underline;\n        color: #E0A100;\n        cursor: pointer;\n      }\n      .navbar-nav li {\n        display: inline-block;\n      }\n      .navbar-nav li a.nav-active {\n        color: #E0A100;\n        text-decoration: underline;\n      }\n    "
        ],
        host: {
            '(document:scroll)': 'onScroll()'
        },
        animations: [
            // animation for title
            core_1.trigger('popOut', [
                core_1.state('true', core_1.style({
                    marginTop: '0px',
                })),
                core_1.state('false', core_1.style({
                    marginTop: '70vh',
                })),
                core_1.transition('false => true', core_1.animate('300ms')),
                core_1.transition('true => false', core_1.animate('300ms'))
            ]),
            // animation for component fades
            core_1.trigger('fadeInOut', [
                core_1.transition(':enter', [
                    core_1.style({ opacity: 0 }),
                    core_1.animate(600, core_1.style({ opacity: 1 }))
                ]),
                core_1.transition(':leave', [
                    core_1.animate(600, core_1.style({ opacity: 0 }))
                ])
            ]),
            // animate navigation text color
            core_1.trigger('navColor', [
                core_1.state('true', core_1.style({})),
                core_1.state('false', core_1.style({
                    color: 'white',
                })),
                core_1.transition('true => false', core_1.animate('200ms')),
                core_1.transition('false => true', core_1.animate('200ms'))
            ])
        ],
    }),
    __metadata("design:paramtypes", [router_1.Router])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map