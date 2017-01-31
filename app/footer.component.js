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
var FooterComponent = (function () {
    function FooterComponent() {
        this.currentDate = new Date();
    }
    return FooterComponent;
}());
FooterComponent = __decorate([
    core_1.Component({
        selector: 'render-footer',
        template: "\n    <footer>\n      <div class=\"row\">\n        <strong>Regale nach Mass</strong>\n        <div class=\"col-xs-12 col-sm-3 col-sm-offset-3\">\n          <ul>\n            <!--li><img class=\"logo\" src=\"app/images/logo.png\" alt=\"logo\" /></li-->\n            <li><a routerLink=\"/regale\">Home</a></li>\n            <li><a routerLink=\"/versand\">Versand</a></li>\n            <li><a routerLink=\"/kontakt\">Kontakt</a></li>\n          </ul>\n        </div>\n        <div class=\"col-xs-12 col-sm-3\">\n          <ul>\n            <li><a href=\"http://moebel-restaurierung.com/\" target=\"blank\">moebel-restaurierung.com</a></li>\n            <li><a href=\"http://xn--antik-mbellager-ftb.de/\" target=\"blank\">antik-m\u00F6bellager.de</a></li>\n          </ul>\n        </div>\n        <div class=\"col-xs-12 col-sm-3\">\n          <ul>\n            <li><a routerLink=\"/versand\">Versand</a></li>\n            <li><a routerLink=\"/impressum\">Impressum</a></li>\n            <li><a routerLink=\"/datenschutz\">Datenschutz</a></li>\n          </ul>\n        </div>\n      </div>\n      <div class=\"footer-background-image\">\n        <div class=\"color-overlay\"></div>\n      </div>\n    </footer>\n    <p>\u00A9 Copyright {{currentDate | date: 'yyyy'}}</p>\n  ",
        styles: ["\n    footer {\n      padding: 20px 20px 0 20px;\n      margin: 25px 0;\n      display: block;\n      clear: both;\n      position: relative;\n      top: 20px;\n      border: 1px solid #C7C7C7;\n    }\n    footer ul {\n      list-style-type: none;\n      padding-left: 0;\n    }\n    footer ul li a {\n      color: black;\n      font-size: 16px;\n      cursor: pointer;\n      line-height: 2;\n    }\n    .footer-background-image {\n      position: absolute;\n      top:0;right:0;bottom:0;left:0;\n      background-image: url(\"app/images/background/footer.jpg\");\n      background-size: cover;\n      background-position: center;\n      background-repeat: no-repeat;\n      z-index: -10;\n      filter: opacity(60%);\n    }\n    strong {\n      font-family: 'Playfair Display', serif;\n      font-size: 30px;\n      font-weight: 200;\n\n      float: left;\n      position: absolute;\n      bottom: 10px;\n      left: 15px;\n    }\n  "]
    }),
    __metadata("design:paramtypes", [])
], FooterComponent);
exports.FooterComponent = FooterComponent;
//# sourceMappingURL=footer.component.js.map