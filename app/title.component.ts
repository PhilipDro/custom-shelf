import { Component, Input, OnChanges, SimpleChange } from '@angular/core';

import { ShelvesComponent } from './shelves.component';

@Component({
  selector: 'heading',
  template: `
    <div class="title">
      <article class="text">
        <h1 [ngClass]="title == 'Home' ? 'title-on-home' : 'title-no-home'">  <span class="strikeoutd">Regale</span> nach Mass</h1>
        <p *ngIf="title == 'Home'" class="lead">
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

    }
    @media(max-width: 800px) {
      .title {
        min-width: 100%;
        padding: 0;
      }
    }
    .text {
      padding: 20px;
      position: relative;
      border: 1px solid #C7C7C7;
    }
    @media(max-width: 768px) {
      .text {
        margin-bottom: 20px;
      }
    }
    .title-image {
      position: absolute;
      top:0;right:0;bottom:0;left:0;
      background-image: url("app/images/background/header.jpg");
      background-size: cover;
      background-repeat: no-repeat;
      z-index: -10;
      filter: opacity(100%);
      -webkit-filter: opacity(60%);

    }

    .title-on-home {
      margin-top: 71px;
      transition: margin-top 0.2s;
    }
    .title-no-home {
      margin-top: 0;
      transition: margin-top 0.2s;
    }
  `],
})

export class TitleComponent implements OnChanges {
  @Input() title: string;

  constructor() {
    //alert(this.title);

  }



  ngOnChanges(changes: {[propertyName: string]: SimpleChange}) {
    // changes.prop contains the old and the new value...
    //if (changes['isActive']) {alert("penner");}
  }
}
