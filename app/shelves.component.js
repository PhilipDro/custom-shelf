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
var shelf_service_1 = require("./shelf.service");
var ShelvesComponent = (function () {
    function ShelvesComponent(router, shelfService) {
        this.router = router;
        this.shelfService = shelfService;
    }
    ShelvesComponent.prototype.getShelves = function () {
        var _this = this;
        this.shelfService.getShelves().then(function (shelves) { return _this.shelves = shelves; });
    };
    ShelvesComponent.prototype.ngOnInit = function () {
        this.getShelves();
    };
    ShelvesComponent.prototype.onSelect = function (shelf) {
        this.router.navigate(['/regal', shelf.id]);
        //this.selectedShelf = shelf;
    };
    return ShelvesComponent;
}());
ShelvesComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'shelves-list',
        template: "\n              <div *ngIf=\"!selectedShelf\" class=\"shelf-list\">\n                <div class=\"row\">\n                  <div class=\"col-xs-12 col-sm-6\">\n\n                    <div class=\"shelf shelf-big\">\n                      <h3>{{shelves && shelves[0].name}}</h3>\n                      <img class=\"img\" src=\"{{shelves && shelves[0].imagePath}}\" (click)=\"onSelect(shelves && shelves[0])\"/>\n                      <p class=\"jetzt-ansehen\">Jetzt ansehen!</p>\n                    </div>\n                  </div>\n\n\n                  <div class=\"col-xs-12 col-md-6 col-lg-3\">\n                    <div class=\"shelf\">\n                      <h3>{{shelves && shelves[1].name}}</h3>\n                      <img class=\"img img-responsive\" src=\"{{shelves && shelves[1].imagePath}}\" (click)=\"onSelect(shelves && shelves[1])\"/>\n                      <p class=\"jetzt-ansehen\">Jetzt ansehen!</p>\n                    </div>\n                  </div>\n\n                  <div class=\"col-xs-12 col-md-6 col-lg-3\">\n                    <div class=\"shelf\">\n                      <h3>{{shelves && shelves[2].name}}</h3>\n                      <img class=\"img img-responsive\" src=\"{{shelves && shelves[2].imagePath}}\" (click)=\"onSelect(shelves && shelves[2])\"/>\n                      <p class=\"jetzt-ansehen\">Jetzt ansehen!</p>\n                    </div>\n                  </div>\n\n                </div>\n\n                <div class=\"row row-division\">\n                  <div class=\"col-xs-12 col-sm-6\">\n                    <div class=\"row\">\n                      <div class=\"info-box highlighted-box\"><p class=\"lead\">Bei der Form der Objekte k\u00F6nnen wir auf alle spezifischen Merkmale der M\u00F6belgeschichte zur\u00FCckgreifen und sie nach Wunsch auch miteinader vermischen.</p></div>\n                      <div class=\"col-xs-12 col-md-6 col-lg-6\">\n                        <div class=\"shelf\">\n                          <img class=\"img img-responsive\" src=\"app/images/1.jpg\"/>\n                        </div>\n                      </div>\n\n                      <div class=\"col-xs-12 col-md-6 col-lg-6\">\n                        <div class=\"shelf\">\n                          <img class=\"img img-responsive\" src=\"app/images/2.jpg\"/>\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n\n                  <div class=\"col-xs-12 col-sm-6\">\n                    <div class=\"shelf shelf-big\">\n                      <h3>{{shelves && shelves[0].name}}</h3>\n                      <img class=\"img\" src=\"{{shelves && shelves[0].imagePath}}\" (click)=\"onSelect(shelves && shelves[0])\"/>\n                      <p class=\"jetzt-ansehen\">Jetzt ansehen!</p>\n                    </div>\n                  </div>\n                </div>\n              </div>\n\n              <shelf-detail></shelf-detail>\n            ",
        styleUrls: ['css/shelves.component.css'],
        providers: [shelf_service_1.ShelfService],
    }),
    __metadata("design:paramtypes", [router_1.Router,
        shelf_service_1.ShelfService])
], ShelvesComponent);
exports.ShelvesComponent = ShelvesComponent;
//# sourceMappingURL=shelves.component.js.map