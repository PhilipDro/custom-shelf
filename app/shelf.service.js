// import { Injectable } from '@angular/core';
// import { Headers, Http } from '@angular/http';
//
// import { Shelf } from './shelf';
// import { SHELVES } from './mock-shelves';
//
// let shelvesPromise = Promise.resolve(SHELVES);
//
// @Injectable()
// export class ShelfService {
//
//
//   getShelves(): Promise<Shelf[]> {
//     return Promise.resolve(SHELVES);
//   }
//
//   getShelf(id: number | string) {
//     return shelvesPromise
//       .then(shelves => shelves.find(shelf => shelf.id === +id));
//   }
//   // getShelf(id: number): Promise<Shelf> {
//   // const url = `${this.shelvesUrl}/${id}`;
//   // return this.http.get(url)
//   //   .toPromise()
//   //   .then(response => response.json().data as Shelf)
//   //   .catch(this.handleError);
//   // }
// }
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
require("rxjs/add/operator/toPromise");
var mock_shelves_1 = require("./mock-shelves");
var shelvesPromise = Promise.resolve(mock_shelves_1.SHELVES);
var ShelfService = (function () {
    function ShelfService(http) {
        this.http = http;
        this.shelvesUrl = 'api/shelves';
    }
    ShelfService.prototype.getShelves = function () {
        //return Promise.resolve(SHELVES);
        return this.http.get(this.shelvesUrl)
            .toPromise()
            .then(function (response) { return response.json().data; })
            .catch(this.handleError);
    };
    ShelfService.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    ShelfService.prototype.getShelf = function (id) {
        return shelvesPromise
            .then(function (shelves) { return shelves.find(function (shelf) { return shelf.id === +id; }); });
    };
    return ShelfService;
}());
ShelfService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], ShelfService);
exports.ShelfService = ShelfService;
//# sourceMappingURL=shelf.service.js.map