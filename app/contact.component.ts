import { Component } from '@angular/core';

@Component ({
  moduleId: module.id,
  selector: 'contact',
  templateUrl: 'contact.component.html',
  styles: [`
    address {
      text-decoration: underline;
      font-size: 30px;
    }
    img {
      max-height: 400px;
    }
    .placeholder {
      height: 400px;
      width: 400px;
      background: grey;
    }
  `]
})

export class ContactComponent {

}
