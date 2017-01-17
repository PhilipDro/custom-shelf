import { Component, Input, OnChanges, SimpleChange } from '@angular/core';

import { ShelvesComponent } from './shelves.component';

@Component({
  selector: 'heading',
  template: `
    <div [ngClass]="{'test-class': isActive}" class="title">
      <div class="text highlighted-box">
        <h1>Regale nach Mass</h1>
        <p class="lead">
          Stellen Sie sich mit wenigen Klicks Ihr persönliches Regal zusammen.
          Unter Verwendung feinster Materialien fertigen wir für Sie Stücke aus allen Stilen,
          angepasst an Ihren Wohnraum.
        </p>
      </div>
    </div>

  `,
  styles: [`
    .title {
      padding: 0 0 25px 15px;
      width: 50%;
      background-size: cover;
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
