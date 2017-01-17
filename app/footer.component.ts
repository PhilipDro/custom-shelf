import { Component } from '@angular/core';

@Component({
  selector: 'render-footer',
  template: `
    <footer>
      <div class="row">
        <div class="col-xs-12 col-sm-4">
          <ul>
            <!--li><img class="logo" src="app/images/logo.png" alt="logo" /></li-->
            <li><a routerLink="/regale">Home</a></li>
            <li><a routerLink="/versand">Versand</a></li>
            <li><a routerLink="/kontakt">Kontakt</a></li>
          </ul>
        </div>
        <div class="col-xs-12 col-sm-4">
          <ul>
            <li><a href="http://moebel-restaurierung.com/" target="blank">moebel-restaurierung.com</a></li>
            <li><a href="http://xn--antik-mbellager-ftb.de/" target="blank">antik-möbellager.de</a></li>
          </ul>
        </div>
        <div class="col-xs-12 col-sm-4">
          <ul>
            <li><a routerLink="/impressum">Impressum</a></li>
            <li><a routerLink="/datenschutz">Datenschutz</a></li>
          </ul>
        </div>
      </div>
      <p>© Copyright {{currentDate | date: 'yyyy'}}</p>
    </footer>
  `,
  styles: [`
    footer {
      padding: 20px;
      margin: 25px 0;
      display: block;
      clear: both;
      position: relative;
      top: 20px;
      background: #D8D8D8;
    }
    footer ul {
      list-style-type: none;
      padding-left: 0;
    }
    footer ul li a {
      color: black;
    }
  `]
})

export class FooterComponent {
  currentDate : Date = new Date();
}
