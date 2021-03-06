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
var http_1 = require("@angular/http");
var http_2 = require("@angular/http");
var Observable_1 = require("rxjs/Observable");
require("rxjs/Rx");
var MailService = (function () {
    function MailService(_http) {
        this._http = _http;
        this._mailUrl = 'app/mail.php';
    }
    MailService.prototype.postEmail = function (newMail) {
        var body = "mail=" + newMail.mail + "&phone=" + newMail.phone + "&message=" + newMail.message + "&parts=" + newMail.parts + "&width=" + newMail.width + "&depth=" + newMail.depth + "&height=" + newMail.height + "&wood=" + newMail.wood + "&stain=" + newMail.stain + "&color=" + newMail.color + "&deco=" + newMail.deco + "&ledge=" + newMail.ledge + "&drawer=" + newMail.drawer + "&leoDrawers=" + newMail.leoDrawers + "&slidingDoor=" + newMail.slidingDoor + "&surface=" + newMail.surface;
        var headers = new http_2.Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
        var options = new http_2.RequestOptions({ headers: headers });
        return this._http.post(this._mailUrl, body, options)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    MailService.prototype.handleError = function (error) {
        alert("still whack");
        console.error('Error in retrieving news: ' + error);
        return Observable_1.Observable.throw(error.json().error || 'Server error du hast verkackt');
    };
    return MailService;
}());
MailService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], MailService);
exports.MailService = MailService;
//# sourceMappingURL=mail.service.js.map