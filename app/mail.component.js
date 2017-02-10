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
var mail_service_1 = require("./mail.service");
var shelf_1 = require("./shelf");
var MailComponent = (function () {
    function MailComponent(_mailService) {
        this._mailService = _mailService;
        this.messageSent = false;
        this.message = {
            mail: '',
            phone: '',
            message: '',
            parts: 2,
            width: 0,
            depth: 0,
            height: 0,
            wood: '',
            stain: '',
            color: '',
            deco: '',
            ledge: '',
        };
    }
    MailComponent.prototype.ngOnInit = function () { };
    MailComponent.prototype.onSubmit = function () {
        var _this = this;
        this.message.parts = this.shelf.parts;
        this.message.width = this.shelf.width;
        this.message.depth = this.shelf.depth;
        this.message.height = this.shelf.height;
        this.message.wood = this.shelf.wood;
        this.message.stain = this.shelf.stain;
        this.message.color = this.shelf.color;
        this.message.deco = this.shelf.deco;
        this.message.ledge = this.shelf.ledge;
        this._mailService.postEmail(this.message).subscribe(function (response) { return _this.handleResponse(response); }, function (error) { return _this.handleResponse(error); });
    };
    MailComponent.prototype.handleResponse = function (response) {
        if (response.status == 'success') {
            this.message = {
                mail: '',
                phone: '',
                message: '',
                parts: 0,
                width: 0,
                depth: 0,
                height: 0,
                wood: '',
                stain: '',
                color: '',
                deco: '',
                ledge: '',
            };
            this.messageSent = true;
        }
        if (response.status == 'error') {
            alert('Nicht geklappt');
        }
    };
    return MailComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", shelf_1.Shelf)
], MailComponent.prototype, "shelf", void 0);
MailComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'mail',
        templateUrl: 'mail.component.html',
        styles: ["\n    textarea {\n      width:100%;\n      font-size: 14px;\n      border-color: rgb(204, 204, 204);\n      margin-bottom: 15px;\n    }\n    table tr > td::first-letter {\n      text-transform: uppercase;\n    }\n\n    .confirmation-message {\n      visibility: hidden;\n      color: green;\n    }\n    .tick-sent {\n      margin-right: 14px;\n      position: static;\n      visibility: hidden;\n    }\n    .sent {\n      visibility: visible !important;\n    }\n\n  "],
        providers: [http_1.HttpModule, mail_service_1.MailService]
    }),
    __metadata("design:paramtypes", [mail_service_1.MailService])
], MailComponent);
exports.MailComponent = MailComponent;
//# sourceMappingURL=mail.component.js.map