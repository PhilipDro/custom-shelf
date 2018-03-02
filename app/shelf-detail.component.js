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
        // animation state
        this.state = 'true';
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
        // get basicWidth of one segment
        var basicWidth = this.shelf.width / this.shelf.parts;
        // set width to 0 to prevent endless multiplication
        this.shelf.width = 0;
        // set new parts
        this.shelf.parts = part;
        // set new width by width * parts
        this.shelf.width = this.shelf.parts * basicWidth;
    };
    ShelfDetailComponent.prototype.pickWood = function (wood) {
        this.shelf.wood = wood;
        if (wood == 'erle') {
            this.pickColor(null);
        }
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
    ShelfDetailComponent.prototype.pickSurface = function (surface) {
        this.shelf.surface = surface;
    };
    //subnavigate
    ShelfDetailComponent.prototype.changeImage = function (image) {
        // this.toggleState();
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
    ShelfDetailComponent.prototype.calcPrice = function () {
        var aParts1 = 0; // workaround für lango m bei 2 segmenten
        var wood = this.shelf.wood;
        switch (wood) {
            case "erle": {
                var mWood = 1;
                break;
            }
            case "kiefer": {
                var mWood = 1;
                break;
            }
            case "buche": {
                var mWood = 1.2;
                break;
            }
            case "eiche": {
                var mWood = 1.4;
                break;
            }
            case "kirsche": {
                var mWood = 1.9;
                break;
            }
            case "nussbaum": {
                var mWood = 1.9;
                break;
            }
            default: {
                var mWood = 1;
                break;
            }
        }
        var deco = this.shelf.deco;
        switch (deco) {
            case null: {
                var mDeco = 1;
                break;
            }
            case "deco a": {
                var mDeco = 1.04;
                break;
            }
            case "deco b": {
                var mDeco = 1.04;
                break;
            }
            default: {
                var mDeco = 1;
                break;
            }
        }
        var ledge = this.shelf.ledge;
        switch (ledge) {
            case null: {
                var mLedge = 1;
                break;
            }
            case "ledge a": {
                var mLedge = 1.04;
                break;
            }
            case "ledge b": {
                var mLedge = 1.04;
                break;
            }
            default: {
                var mLedge = 1;
                break;
            }
        }
        if (this.shelf.color != null) {
            var mColor = 1.1;
        }
        else {
            var mColor = 1;
        }
        if (this.shelf.surface == 'geölt') {
            var mSurface = 1;
        }
        else {
            var mSurface = 1.1;
        }
        if (this.shelf.drawer != null) {
            var aDrawer = (150 * this.shelf.drawer) * this.shelf.parts;
        }
        else {
            var aDrawer = 0;
        }
        if (this.shelf.leoDrawers != null) {
            var aLeoDrawers = 400 * this.shelf.leoDrawers;
        }
        else {
            var aLeoDrawers = 0;
        }
        if (this.shelf.slidingDoor != null) {
            var aSlidingDoor = 300 * this.shelf.slidingDoor;
        }
        else {
            var aSlidingDoor = 0;
        }
        var object = this.shelf.id;
        switch (object) {
            case 1: {
                var mObject = 1.84;
                break;
            }
            case 2: {
                var mObject = 1.53;
                break;
            }
            case 3: {
                var mObject = 1.16;
                var aParts1 = this.shelf.parts * 400;
                break;
            }
            case 4: {
                var mObject = 1.41;
                var shelfPriceBefore = this.shelf.price;
                var aParts = this.shelf.parts * shelfPriceBefore - shelfPriceBefore;
                break;
            }
            case 5: {
                var mObject = 1.34;
                break;
            }
            case 6: {
                var mObject = 1;
                break;
            }
            default: {
                var mObject = 1;
                break;
            }
        }
        var priceForPart = 600;
        if (this.shelf.parts > 1) {
            var aParts = this.shelf.parts * priceForPart - priceForPart;
        }
        else {
            aParts = 0;
        }
        var widthPrice = ((this.shelf.width - 80) * 5) / this.shelf.parts;
        var heightPrice = ((this.shelf.height - 220) * 2.5) / this.shelf.parts;
        var base = 600;
        this.shelf.price =
            Math.round(mWood * mDeco * mLedge * mColor * mSurface * mObject * base +
                aParts + aParts1 + heightPrice + widthPrice +
                aDrawer + aLeoDrawers + aSlidingDoor);
    };
    // custom functions
    ShelfDetailComponent.prototype.isNumeric = function (n) {
        return !isNaN(parseFloat(n)) && isFinite(n);
    };
    ShelfDetailComponent.prototype.waitSeconds = function (iMilliSeconds) {
        var counter = 0, start = new Date().getTime(), end = 0;
        while (counter < iMilliSeconds) {
            end = new Date().getTime();
            counter = end - start;
        }
    };
    return ShelfDetailComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", shelf_1.Shelf)
], ShelfDetailComponent.prototype, "shelf", void 0);
ShelfDetailComponent = __decorate([
    core_1.Component({
        //moduleId: module.id,
        selector: 'shelf-detail',
        templateUrl: 'app/shelf-detail.component.html',
        styleUrls: ['app/css/shelf-detail.component.css'],
        providers: [shelf_service_1.ShelfService],
        animations: [
            // animation for title
            trigger('visiChange', [
                state('true', style({
                    display: 'block',
                })),
                state('false', style({
                    display: 'none',
                })),
                transition('true => false', animate('200ms')),
                transition('false => true', animate('200ms'))
            ]),
            // animation for component fades
            trigger('fadeInOut', [
                transition(':enter', [
                    style({ opacity: 0 }),
                    animate(200, style({ opacity: 1 }))
                ]),
                transition(':leave', [
                    animate(200, style({ opacity: 0 }))
                ])
            ])
        ]
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute,
        router_1.Router,
        shelf_service_1.ShelfService])
], ShelfDetailComponent);
exports.ShelfDetailComponent = ShelfDetailComponent;
//# sourceMappingURL=shelf-detail.component.js.map