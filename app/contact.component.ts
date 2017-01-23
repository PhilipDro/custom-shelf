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
      max-height: 600px;
    }
    .placeholder {
      height: 400px;
      width: 400px;
      background: grey;
    }
    .contact-image {
      margin-top: 150px;
    }
  `]
})

export class ContactComponent {

}
