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
var GalleryComponent = (function () {
    function GalleryComponent() {
        this.range = new Array(51);
    }
    return GalleryComponent;
}());
GalleryComponent = __decorate([
    core_1.Component({
        selector: 'gallery',
        template: "\n    <h3>Gallerie</h3>\n    <ul>\n      <li *ngFor=\"let a of range; let index = index\" class=\"gallery-element\">\n        <img src=\"app/images/gallery/{{ index }}.jpg\" alt=\"Regal\" />\n      </li>\n    </ul>\n  ",
        styles: ["\n    ul {\n      padding-left: 0;\n    }\n    ul > li:first-child {\n      display: none;\n    }\n    .gallery-element {\n      list-style-type: none;\n      display: inline;\n    }\n    .gallery-element img {\n      margin: 10px;\n      height: 300px;\n    }\n    @media(max-width: 768px) {\n      .gallery-element img {\n        height: auto;\n        width: 100%;\n      }\n    }\n\n  "]
    }),
    __metadata("design:paramtypes", [])
], GalleryComponent);
exports.GalleryComponent = GalleryComponent;
//# sourceMappingURL=gallery.component.js.map