import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import { Shelf } from './shelf';
import { SHELVES } from './mock-shelves';

let shelvesPromise = Promise.resolve(SHELVES);

@Injectable()
export class ShelfService {


  getShelves(): Promise<Shelf[]> {
    return Promise.resolve(SHELVES);
  }

  getShelf(id: number | string) {
    return shelvesPromise
      .then(shelves => shelves.find(shelf => shelf.id === +id));
  }
  // getShelf(id: number): Promise<Shelf> {
  // const url = `${this.shelvesUrl}/${id}`;
  // return this.http.get(url)
  //   .toPromise()
  //   .then(response => response.json().data as Shelf)
  //   .catch(this.handleError);
  // }
}
