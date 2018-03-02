import { Component, OnInit, AfterViewChecked } from '@angular/core';
import { Router } from '@angular/router';

import { Shelf } from './shelf';
import { ShelfService } from './shelf.service';

@Component({
  //moduleId: module.id,
  selector: 'shelves-list',
  template: `
              <div *ngIf="!selectedShelf" class="shelf-list">
                <div class="row">
                  <div class="col-xs-12 col-sm-6">
                    <div class="shelf shelf-big top-seller" (click)="onSelect(shelves && shelves[3])">
                      <h3>{{shelves && shelves[3].name}}</h3>
                      <p class="description hidden-xs hidden-sm">{{shelves && shelves[3].description}}</p>
                      <img class="img resized" src="{{shelves && shelves[3].imagePath}}" />
                      <p class="jetzt-ansehen">Ab {{shelves && shelves[3].price}} €</p>
                    </div>
                  </div>


                  <div class="col-xs-12 col-sm-6 col-md-3 col-lg-3">
                    <div class="shelf sretch vegan" (click)="onSelect(shelves && shelves[0])">
                      <h3>{{shelves && shelves[0].name}}</h3>
                      <img class="img img-responsive" src="{{shelves && shelves[0].imagePath}}" />
                      <p *ngIf="isReady == true" class="jetzt-ansehen">Ab {{shelves && shelves[0].price}} €</p>
                    </div>
                  </div>

                  <div class="col-xs-12 col-sm-12 col-md-3 col-lg-3">
                    <div class="shelf" (click)="onSelect(shelves && shelves[4])">
                      <h3>{{shelves && shelves[4].name}}</h3>
                      <img class="img img-responsive" src="{{shelves && shelves[4].imagePath}}" />
                      <p class="jetzt-ansehen">Ab {{shelves && shelves[4].price}} €</p>
                    </div>
                  </div>

                </div>

                <div class="row row-division">
                  <div class="col-xs-12 col-sm-12 col-md-6">
                    <div class="row">
                      <div class="info-box">
                        <p class="lead">Bei der Form der Objekte können wir auf alle spezifischen Merkmale der Möbelgeschichte zurückgreifen und sie nach Wunsch auch miteinader vermischen.</p>
                        <div class="info-box-image"><div class="color-overlay"></div></div>
                      </div>
                      <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                        <div class="shelf" (click)="onSelect(shelves && shelves[1])">
                          <h3>{{shelves && shelves[1].name}}</h3>
                          <img class="img img-responsive" src="{{shelves && shelves[1].imagePath}}" />
                          <p class="jetzt-ansehen">Ab {{shelves && shelves[1].price}} €</p>
                        </div>
                      </div>

                      <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                        <div class="shelf sretch lango" (click)="onSelect(shelves && shelves[2])">
                          <h3>{{shelves && shelves[2].name}}</h3>
                          <img class="img img-responsive" src="{{shelves && shelves[2].imagePath}}" />
                          <p class="jetzt-ansehen">Ab {{shelves && shelves[2].price}} €</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="col-xs-12 col-sm-12 col-md-6">
                    <div class="shelf shelf-big" (click)="onSelect(shelves && shelves[5])">
                      <h3>{{shelves && shelves[5].name}}</h3>
                      <img class="img" src="{{shelves && shelves[5].imagePath}}" />
                      <p class="jetzt-ansehen">Ab {{shelves && shelves[5].price}} €</p>
                    </div>
                  </div>
                </div>
              </div>

              <shelf-detail></shelf-detail>
            `,
  styleUrls: ['app/css/shelves.component.css'],
  providers: [ShelfService],
})

export class ShelvesComponent implements OnInit, AfterViewChecked {
  selectedShelf: Shelf;
  shelves: Shelf[];
  isReady: boolean = false;


  constructor(
    private router: Router,
    private shelfService: ShelfService
) {
}

  ngOnInit(): void {
    this.getShelves();
  }
  ngAfterViewChecked() {
    this.isReady = true;
  }



  getShelves(): void {
    this.shelfService.getShelves().then(shelves => this.shelves = shelves);
  }


  onSelect(shelf: Shelf) {
    this.router.navigate(['/regal', shelf.id]);
    //this.selectedShelf = shelf;
  }

}
