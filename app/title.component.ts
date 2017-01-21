import { Component, Input, OnChanges, SimpleChange } from '@angular/core';

import { ShelvesComponent } from './shelves.component';

@Component({
  selector: 'heading',
  template: `
    <div [ngClass]="{'test-class': isActive}" class="title">
      <article class="text">
        <h1> <span class="strikeout">Regale</span> nach Mass</h1>
        <p class="lead">
          Stellen Sie sich mit wenigen Klicks Ihr persönliches Regal zusammen.
          Unter Verwendung feinster Materialien fertigen wir für Sie Stücke aus allen Stilen,
          angepasst an Ihren Wohnraum.
        </p>
        <div class="title-image">
          <div class="color-overlay"></div>
        </div>
      </article>

    </div>

  `,
  styles: [`
    .title {
      padding: 0 0 25px 15px;
      width: 50%;
      float: right;
      @media(max-width: 800px) {
        width: 100%;
      }
    }
    @media(max-width: 800px) {
      .title {
        min-width: 100%;
      }
    }
    .text {
      padding: 20px;
      position: relative;
      border: 1px solid #C7C7C7;
    }
    .title-image {
      position: absolute;
      top:0;right:0;bottom:0;left:0;
      background-image: url("app/images/background/header.jpg");
      background-size: cover;
      background-repeat: no-repeat;
      z-index: -10;
      filter: opacity(20%);
      -webkit-filter: opacity(20%);

    }

    .test-class {
      border: 10px solid red;
    }
  `],
})

export class TitleComponent implements OnChanges {
  activated = false
  @Input() isActive: false;


  ngOnChanges(changes: {[propertyName: string]: SimpleChange}) {
    // changes.prop contains the old and the new value...
    //if (changes['isActive']) {alert("penner");}
  }
}
