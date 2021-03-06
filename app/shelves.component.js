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
        this.isReady = false;
    }
    ShelvesComponent.prototype.ngOnInit = function () {
        this.getShelves();
    };
    ShelvesComponent.prototype.ngAfterViewChecked = function () {
        this.isReady = true;
    };
    ShelvesComponent.prototype.getShelves = function () {
        var _this = this;
        this.shelfService.getShelves().then(function (shelves) { return _this.shelves = shelves; });
    };
    ShelvesComponent.prototype.onSelect = function (shelf) {
        this.router.navigate(['/regal', shelf.id]);
        //this.selectedShelf = shelf;
    };
    return ShelvesComponent;
}());
ShelvesComponent = __decorate([
    core_1.Component({
        //moduleId: module.id,
        selector: 'shelves-list',
<<<<<<< HEAD
        template: "\n              <div *ngIf=\"!selectedShelf\" class=\"shelf-list\">\n                <div class=\"row\">\n                  <div class=\"col-xs-12 col-sm-6\">\n                    <div class=\"shelf shelf-big top-seller\" (click)=\"onSelect(shelves && shelves[3])\">\n                      <h3>{{shelves && shelves[3].name}}</h3>\n                      <p class=\"description hidden-xs hidden-sm\">{{shelves && shelves[3].description}}</p>\n                      <img class=\"img resized\" src=\"{{shelves && shelves[3].imagePath}}\" />\n                      <p class=\"jetzt-ansehen\">Ab {{shelves && shelves[3].price}} \u20AC</p>\n                    </div>\n                  </div>\n\n\n                  <div class=\"col-xs-12 col-sm-6 col-md-3 col-lg-3\">\n                    <div class=\"shelf sretch vegan\" (click)=\"onSelect(shelves && shelves[0])\">\n                      <h3>{{shelves && shelves[0].name}}</h3>\n                      <img class=\"img img-responsive\" src=\"{{shelves && shelves[0].imagePath}}\" />\n                      <p *ngIf=\"isReady == true\" class=\"jetzt-ansehen\">Ab {{shelves && shelves[0].price}} \u20AC</p>\n                    </div>\n                  </div>\n\n                  <div class=\"col-xs-12 col-sm-12 col-md-3 col-lg-3\">\n                    <div class=\"shelf\" (click)=\"onSelect(shelves && shelves[4])\">\n                      <h3>{{shelves && shelves[4].name}}</h3>\n                      <img class=\"img img-responsive\" src=\"{{shelves && shelves[4].imagePath}}\" />\n                      <p class=\"jetzt-ansehen\">Ab {{shelves && shelves[4].price}} \u20AC</p>\n                    </div>\n                  </div>\n\n                </div>\n\n                <div class=\"row row-division\">\n                  <div class=\"col-xs-12 col-sm-12 col-md-6\">\n                    <div class=\"row\">\n                      <div class=\"info-box\">\n                        <p class=\"lead\">Bei der Form der Objekte k\u00F6nnen wir auf alle spezifischen Merkmale der M\u00F6belgeschichte zur\u00FCckgreifen und sie nach Wunsch auch miteinader vermischen.</p>\n                        <div class=\"info-box-image\"><div class=\"color-overlay\"></div></div>\n                      </div>\n                      <div class=\"col-xs-12 col-sm-6 col-md-6 col-lg-6\">\n                        <div class=\"shelf\" (click)=\"onSelect(shelves && shelves[1])\">\n                          <h3>{{shelves && shelves[1].name}}</h3>\n                          <img class=\"img img-responsive\" src=\"{{shelves && shelves[1].imagePath}}\" />\n                          <p class=\"jetzt-ansehen\">Ab {{shelves && shelves[1].price}} \u20AC</p>\n                        </div>\n                      </div>\n\n                      <div class=\"col-xs-12 col-sm-6 col-md-6 col-lg-6\">\n                        <div class=\"shelf sretch lango\" (click)=\"onSelect(shelves && shelves[2])\">\n                          <h3>{{shelves && shelves[2].name}}</h3>\n                          <img class=\"img img-responsive\" src=\"{{shelves && shelves[2].imagePath}}\" />\n                          <p class=\"jetzt-ansehen\">Ab {{shelves && shelves[2].price}} \u20AC</p>\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n\n                  <div class=\"col-xs-12 col-sm-12 col-md-6\">\n                    <div class=\"shelf shelf-big\" (click)=\"onSelect(shelves && shelves[5])\">\n                      <h3>{{shelves && shelves[5].name}}</h3>\n                      <img class=\"img\" src=\"{{shelves && shelves[5].imagePath}}\" />\n                      <p class=\"jetzt-ansehen\">Ab {{shelves && shelves[5].price}} \u20AC</p>\n                    </div>\n                  </div>\n                </div>\n              </div>\n\n              <shelf-detail></shelf-detail>\n            ",
        styleUrls: ['app/css/shelves.component.css'],
=======
        template: "\n              <div *ngIf=\"!selectedShelf\" class=\"shelf-list\">\n                <div class=\"row\">\n                  <div class=\"col-xs-12 col-sm-6\">\n\n                    <div class=\"shelf shelf-big\">\n                      <h3>{{shelves && shelves[0].name}}</h3>\n                      <img class=\"img\" src=\"{{shelves && shelves[0].imagePath}}\" (click)=\"onSelect(shelves && shelves[0])\"/>\n                      <p class=\"jetzt-ansehen\">Jetzt ansehen!</p>\n                    </div>\n                  </div>\n\n\n                  <div class=\"col-xs-12 col-md-6 col-lg-3\">\n                    <div class=\"shelf\">\n                      <h3>{{shelves && shelves[1].name}}</h3>\n                      <img class=\"img img-responsive\" src=\"{{shelves && shelves[1].imagePath}}\" (click)=\"onSelect(shelves && shelves[1])\"/>\n                      <p class=\"jetzt-ansehen\">Jetzt ansehen!</p>\n                    </div>\n                  </div>\n\n                  <div class=\"col-xs-12 col-md-6 col-lg-3\">\n                    <div class=\"shelf\">\n                      <h3>{{shelves && shelves[2].name}}</h3>\n                      <img class=\"img img-responsive\" src=\"{{shelves && shelves[2].imagePath}}\" (click)=\"onSelect(shelves && shelves[2])\"/>\n                      <p class=\"jetzt-ansehen\">Jetzt ansehen!</p>\n                    </div>\n                  </div>\n\n                </div>\n\n                <div class=\"row row-division\">\n                  <div class=\"col-xs-12 col-sm-6\">\n                    <div class=\"row\">\n                      <div class=\"info-box\">\n                        <p class=\"lead\">Bei der Form der Objekte k\u00F6nnen wir auf alle spezifischen Merkmale der M\u00F6belgeschichte zur\u00FCckgreifen und sie nach Wunsch auch miteinader vermischen.</p>\n                        <div class=\"info-box-image\"><div class=\"color-overlay\"></div></div>\n                      </div>\n                      <div class=\"col-xs-12 col-md-6 col-lg-6\">\n                        <div class=\"shelf\">\n                          <h3>{{shelves && shelves[3].name}}</h3>\n                          <img class=\"img img-responsive\" src=\"{{shelves && shelves[3].imagePath}}\" (click)=\"onSelect(shelves && shelves[3])\"/>\n                          <p class=\"jetzt-ansehen\">Jetzt ansehen!</p>\n                        </div>\n                      </div>\n\n                      <div class=\"col-xs-12 col-md-6 col-lg-6\">\n                        <div class=\"shelf\">\n                          <h3>{{shelves && shelves[4].name}}</h3>\n                          <img class=\"img\" src=\"{{shelves && shelves[4].imagePath}}\" (click)=\"onSelect(shelves && shelves[4])\"/>\n                          <p class=\"jetzt-ansehen\">Jetzt ansehen!</p>\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n\n                  <div class=\"col-xs-12 col-sm-6\">\n                    <div class=\"shelf shelf-big\">\n                      <h3>{{shelves && shelves[5].name}}</h3>\n                      <img class=\"img\" src=\"{{shelves && shelves[5].imagePath}}\" (click)=\"onSelect(shelves && shelves[5])\"/>\n                      <p class=\"jetzt-ansehen\">Jetzt ansehen!</p>\n                    </div>\n                  </div>\n                </div>\n              </div>\n\n              <shelf-detail></shelf-detail>\n            ",
        styleUrls: ['css/shelves.component.css'],
>>>>>>> e791b97d7887d30e949a899d24978ee1d1e302bd
        providers: [shelf_service_1.ShelfService],
    }),
    __metadata("design:paramtypes", [router_1.Router,
        shelf_service_1.ShelfService])
], ShelvesComponent);
exports.ShelvesComponent = ShelvesComponent;
//# sourceMappingURL=shelves.component.js.map