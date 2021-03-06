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
var shelf_1 = require("./shelf");
var SizeFormComponent = (function () {
    function SizeFormComponent() {
        this.tooWidth = false;
        this.outOfRange = false;
        this.outputStatus = 'no-warning';
    }
    SizeFormComponent.prototype.validateSize = function (size) {
        this.perSegmentWidth = Math.round(this.shelf.width / this.shelf.parts);
        this.perSegmentWidthText = this.perSegmentWidth + " cm pro Segment";
        // if it is out of range
        if (this.perSegmentWidth > 110 || this.perSegmentWidth < 60) {
            this.warning = "60 bis 110 cm pro Segment!";
            this.outputStatus = 'warning';
            this.outOfRange = true;
        }
        else {
            this.warning = false;
            this.outputStatus = 'no-warning';
            this.outOfRange = false;
        }
    };
    return SizeFormComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", shelf_1.Shelf)
], SizeFormComponent.prototype, "shelf", void 0);
SizeFormComponent = __decorate([
    core_1.Component({
        // moduleId: module.id,
        selector: 'size-form',
        template: "\n      <form class=\"set-measurments\">\n        <h2>Meine Abmessungen</h2>\n\n        <table class=\"table\">\n          <tr>\n            <td class=\"first-td\">Breite:</td>\n            <td class=\"second-td\">\n              <input [(ngModel)]=\"shelf.width\" type=\"number\" min=\"0\" class=\"form-control\" name=\"inputWidth\" #inputWidth=\"ngModel\" (mouseup)=\"validateSize()\" (keyup)=\"validateSize()\" required > cm\n              <span [ngClass]=\"outputStatus\" class=\"per-segment\">{{warning || perSegmentWidthText || \"\"}} </span>\n              <span [hidden]=\"inputWidth.valid || inputWidth.pristine\" class=\"alert-simple\">X</span>\n              <span *ngIf=\"outOfRange\" class=\"alert-simple\">X</span>\n              <span [hidden]=\"inputWidth.invalid || inputWidth.pristine || outOfRange\" class=\"tick\"><i class=\"fa fa-check\" aria-hidden=\"true\"></i></span>\n            </td>\n          </tr>\n          <tr>\n            <td>Tiefe:</td>\n            <td>\n              <input [(ngModel)]=\"shelf.depth\" type=\"number\" min=\"0\" class=\"form-control\" name=\"input-depth\" #inputDepth=\"ngModel\" required> cm\n              <span [hidden]=\"inputDepth.valid || inputDepth.pristine\" class=\"alert-simple\">X</span>\n              <span [hidden]=\"inputDepth.invalid || inputDepth.pristine\" class=\"tick\"><i class=\"fa fa-check\" aria-hidden=\"true\"></i></span>\n            </td>\n          </tr>\n          <tr>\n            <td>H\u00F6he:</td>\n            <td>\n              <input [(ngModel)]=\"shelf.height\" type=\"number\" min=\"0\" class=\"form-control\" name=\"input-height\" #inputHeight=\"ngModel\" required> cm\n              <span [hidden]=\"inputHeight.valid || inputHeight.pristine\" class=\"alert-simple\">X</span>\n              <span [hidden]=\"inputHeight.invalid || inputHeight.pristine\" class=\"tick\"><i class=\"fa fa-check\" aria-hidden=\"true\"></i></span>\n            </td>\n          </tr>\n        </table>\n      </form>\n  ",
        styleUrls: ['app/css/size-form.component.css'],
    })
], SizeFormComponent);
exports.SizeFormComponent = SizeFormComponent;
//# sourceMappingURL=size-form.component.js.map