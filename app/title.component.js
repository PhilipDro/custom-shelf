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
var TitleComponent = (function () {
    function TitleComponent() {
        this.activated = false;
    }
    TitleComponent.prototype.ngOnChanges = function (changes) {
        // changes.prop contains the old and the new value...
        //if (changes['isActive']) {alert("penner");}
    };
    return TitleComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], TitleComponent.prototype, "isActive", void 0);
TitleComponent = __decorate([
    core_1.Component({
        selector: 'heading',
        template: "\n    <div [ngClass]=\"{'test-class': isActive}\" class=\"title\">\n      <article class=\"text\">\n        <h1> <span class=\"strikeout\">Regale</span> nach Mass</h1>\n        <p class=\"lead\">\n          Stellen Sie sich mit wenigen Klicks Ihr pers\u00F6nliches Regal zusammen.\n          Unter Verwendung feinster Materialien fertigen wir f\u00FCr Sie St\u00FCcke aus allen Stilen,\n          angepasst an Ihren Wohnraum.\n        </p>\n        <div class=\"title-image\">\n          <div class=\"color-overlay\"></div>\n        </div>\n      </article>\n\n    </div>\n\n  ",
        styles: ["\n    .title {\n      padding: 0 0 25px 15px;\n      width: 50%;\n      float: right;\n      @media(max-width: 800px) {\n        width: 100%;\n      }\n    }\n    @media(max-width: 800px) {\n      .title {\n        min-width: 100%;\n      }\n    }\n    .text {\n      padding: 20px;\n      position: relative;\n      border: 1px solid #C7C7C7;\n    }\n    .title-image {\n      position: absolute;\n      top:0;right:0;bottom:0;left:0;\n      background-image: url(\"app/images/background/header.jpg\");\n      background-size: cover;\n      background-repeat: no-repeat;\n      z-index: -10;\n      filter: opacity(20%);\n      -webkit-filter: opacity(20%);\n\n    }\n\n    .test-class {\n      border: 10px solid red;\n    }\n  "],
    }),
    __metadata("design:paramtypes", [])
], TitleComponent);
exports.TitleComponent = TitleComponent;
//# sourceMappingURL=title.component.js.map