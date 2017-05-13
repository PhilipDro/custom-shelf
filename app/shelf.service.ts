import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Shelf } from './shelf';

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

  getShelf(id: number): Promise<Shelf> {
    const url = `${this.shelvesUrl}/${id}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json().data as Shelf)
      .catch(this.handleError);
  }
}
