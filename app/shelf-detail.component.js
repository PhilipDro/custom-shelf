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
// to process observable route parameters
require("rxjs/add/operator/switchMap");
var shelf_1 = require("./shelf");
var shelf_service_1 = require("./shelf.service");
var ShelfDetailComponent = (function () {
    function ShelfDetailComponent(route, router, service) {
        this.route = route;
        this.router = router;
        this.service = service;
        this.isVisible = false;
        this.toggleInputParts = 'hide-class';
        this.toggleInputWood = 'hide-class';
        this.toggleInputColor = 'hide-class';
        this.toggleInputDeco = 'hide-class';
        this.toggleInputLedge = 'hide-class';
        this.toggleInputStain = 'hide-class';
        this.visible = false;
        this.activeImage = '1';
    }
    ShelfDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params
            .switchMap(function (params) { return _this.service.getShelf(+params['id']); })
            .subscribe(function (shelf) { return _this.shelf = shelf; });
    };
    //pick customization
    ShelfDetailComponent.prototype.pickParts = function (part) {
        this.shelf.parts = part;
    };
    ShelfDetailComponent.prototype.pickWood = function (wood) {
        this.shelf.wood = wood;
    };
    ShelfDetailComponent.prototype.pickStain = function (stain) {
        this.shelf.stain = stain;
    };
    ShelfDetailComponent.prototype.pickColor = function (color) {
        this.shelf.color = color;
    };
    ShelfDetailComponent.prototype.pickDeco = function (deco) {
        this.shelf.deco = deco;
    };
    ShelfDetailComponent.prototype.pickLedge = function (ledge) {
        this.shelf.ledge = ledge;
    };
    //subnavigate
    ShelfDetailComponent.prototype.changeImage = function (image) {
        this.srcBackup = this.activeImage;
        this.activeImage = image;
        if (this.isNumeric(image)) {
            this.currentImagePath = 'app/images/' + this.shelf.id + '/' + this.activeImage + '.jpg';
        }
        else {
            this.currentImagePath = 'app/images/hovers/' + this.activeImage + '.jpg';
        }
    };
    ShelfDetailComponent.prototype.changeState = function (state) {
        this.shelf.state = state;
    };
    //show input for adding choices
    ShelfDetailComponent.prototype.showAddParts = function () {
        this.visible = !this.visible;
        this.toggleInputParts = this.visible ? 'show-class' : 'hide-class';
    };
    ShelfDetailComponent.prototype.showAddWood = function () {
        this.visible = !this.visible;
        this.toggleInputWood = this.visible ? 'show-class' : 'hide-class';
    };
    ShelfDetailComponent.prototype.showAddStain = function () {
        this.visible = !this.visible;
        this.toggleInputStain = this.visible ? 'show-class' : 'hide-class';
    };
    ShelfDetailComponent.prototype.showAddColor = function () {
        this.visible = !this.visible;
        this.toggleInputColor = this.visible ? 'show-class' : 'hide-class';
    };
    ShelfDetailComponent.prototype.showAddDeco = function () {
        this.visible = !this.visible;
        this.toggleInputDeco = this.visible ? 'show-class' : 'hide-class';
    };
    ShelfDetailComponent.prototype.showAddLedge = function () {
        this.visible = !this.visible;
        this.toggleInputLedge = this.visible ? 'show-class' : 'hide-class';
    };
    //add a choice
    ShelfDetailComponent.prototype.addParts = function (choice) {
        this.shelf.parts = choice;
        this.calcPrice();
    };
    ShelfDetailComponent.prototype.addWood = function (choice) {
        this.shelf.wood = choice;
        this.calcPrice();
    };
    ShelfDetailComponent.prototype.addStain = function (choice) {
        this.shelf.stain = choice;
        this.calcPrice();
    };
    ShelfDetailComponent.prototype.addColor = function (choice) {
        this.shelf.color = choice;
        this.calcPrice();
    };
    ShelfDetailComponent.prototype.addDeco = function (choice) {
        this.shelf.deco = choice;
        this.calcPrice();
    };
    ShelfDetailComponent.prototype.addLedge = function (choice) {
        this.shelf.ledge = choice;
        this.calcPrice();
    };
    //calculate price
    ShelfDetailComponent.prototype.calcPrice = function () {
        this.shelf.price = this.shelf.priceBefore * (this.shelf.parts / 2);
    };
    //custom functions
    ShelfDetailComponent.prototype.isNumeric = function (n) {
        return !isNaN(parseFloat(n)) && isFinite(n);
    };
    return ShelfDetailComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", shelf_1.Shelf)
], ShelfDetailComponent.prototype, "shelf", void 0);
ShelfDetailComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'shelf-detail',
        templateUrl: 'shelf-detail.component.html',
        styleUrls: ['css/shelf-detail.component.css'],
        providers: [shelf_service_1.ShelfService],
        animations: [
            core_1.trigger('visibilityChanged', [
                core_1.state('true', core_1.style({
                    opacity: 1,
                    transform: 'scale(1.0)'
                })),
                core_1.state('false', core_1.style({
                    opacity: 0,
                    transform: 'scale(0.0)'
                })),
                core_1.transition('1 => 0', core_1.animate('200ms')),
                core_1.transition('0 => 1', core_1.animate('200ms'))
            ])
        ]
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute,
        router_1.Router,
        shelf_service_1.ShelfService])
], ShelfDetailComponent);
exports.ShelfDetailComponent = ShelfDetailComponent;
//# sourceMappingURL=shelf-detail.component.js.map