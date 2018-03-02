import { Component } from '@angular/core';

@Component ({
  //moduleId: module.id,
  selector: 'contact',
  templateUrl: 'app/contact.component.html',
  styles: [`
    address {
      text-decoration: underline;
      font-size: 30px;
    }
    img {
      max-height: 600px;
    }
    @media(max-width: 768px) {
      img {
        max-width: 100%;
        margin-top: 15px;
      }
    }
    .placeholder {
      height: 400px;
      width: 400px;
      background: grey;
    }
    .contact-image {
      margin-top: 150px;
    }
    @media(max-width: 768px) {
      .contact-image {
        margin-top: 0;
      }
    }
  `]
})

export class ContactComponent {

}
