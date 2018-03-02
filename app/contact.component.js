"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var ContactComponent = (function () {
    function ContactComponent() {
    }
    return ContactComponent;
}());
ContactComponent = __decorate([
    core_1.Component({
        //moduleId: module.id,
        selector: 'contact',
        templateUrl: 'app/contact.component.html',
        styles: ["\n    address {\n      text-decoration: underline;\n      font-size: 30px;\n    }\n    img {\n      max-height: 600px;\n    }\n    @media(max-width: 768px) {\n      img {\n        max-width: 100%;\n        margin-top: 15px;\n      }\n    }\n    .placeholder {\n      height: 400px;\n      width: 400px;\n      background: grey;\n    }\n    .contact-image {\n      margin-top: 150px;\n    }\n    @media(max-width: 768px) {\n      .contact-image {\n        margin-top: 0;\n      }\n    }\n  "]
    })
], ContactComponent);
exports.ContactComponent = ContactComponent;
//# sourceMappingURL=contact.component.js.map