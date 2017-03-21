import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Shelf } from './shelf';
import { SHELVES } from './mock-shelves';

let shelvesPromise = Promise.resolve(SHELVES);

@Injectable()
export class ShelfService {

  private shelvesUrl = 'api/shelves';

  constructor(private http: Http) { }

  getShelves(): Promise<Shelf[]> {
    return this.http.get(this.shelvesUrl)
               .toPromise()
               .then(response => response.json().data as Shelf[])
               .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

  getShelf(id: number | string) {
    return shelvesPromise
      .then(shelves => shelves.find(shelf => shelf.id === +id));
  }
}
