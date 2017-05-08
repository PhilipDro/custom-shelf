import { Component } from '@angular/core';

@Component({
  selector: 'gallery',
  template: `
    <h3>Gallerie</h3>
    <ul>
      <li *ngFor="let a of range; let index = index" class="gallery-element">
        <img src="app/images/gallery/{{ index }}.jpg" alt="Regal" />
      </li>
    </ul>
  `,
  styles: [`
    ul {
      padding-left: 0;
    }
    ul > li:first-child {
      display: none;
    }
    .gallery-element {
      list-style-type: none;
      display: inline;
    }
    .gallery-element img {
      margin: 10px;
      height: 300px;
    }
    @media(max-width: 768px) {
      .gallery-element img {
        height: auto;
        width: 100%;
      }
    }

  `]
})

export class GalleryComponent {
  range = new Array(51)
  //rangeReverse = this.rangeRemoved.reverse();
}
