import { Component } from '@angular/core';

@Component({
  selector: 'render-footer',
  template: `
    <footer>
      <div class="row">
        <div class="col-xs-12 col-sm-3">
          <strong>Regale nach Mass</strong>
        </div>
        <div class="col-xs-12 col-sm-3">
          <ul>
            <!--li><img class="logo" src="app/images/logo.png" alt="logo" /></li-->
            <li><a routerLink="/regale">Home</a></li>
            <li><a routerLink="/gallerie">Gallerie</a></li>
            <li><a routerLink="/kontakt">Kontakt</a></li>
          </ul>
        </div>
        <div class="col-xs-12 col-sm-3">
          <ul>
            <li><a href="http://moebel-restaurierung.com/" target="blank">moebel-restaurierung.com</a></li>
            <li><a href="http://xn--antik-mbellager-ftb.de/" target="blank">antik-möbellager.de</a></li>
          </ul>
        </div>
        <div class="col-xs-12 col-sm-3">
          <ul>
            <li><a routerLink="/impressum">Impressum</a></li>
            <li><a routerLink="/datenschutz">Datenschutz</a></li>
          </ul>
        </div>
      </div>
      <div class="footer-background-image">
        <div class="color-overlay"></div>
      </div>
    </footer>
    <p>© Copyright {{currentDate | date: 'yyyy'}}</p>
  `,
  styles: [`
    footer {
      padding: 20px 20px 0 20px;
      margin: 25px 0;
      display: block;
      clear: both;
      position: relative;
      top: 20px;
      border: 1px solid #C7C7C7;
    }
    @media(max-width: 768px) {
      footer {
        margin: 0;
      }
    }
    footer ul {
      list-style-type: none;
      padding-left: 0;
    }
    footer ul li a {
      color: black;
      font-size: 16px;
      cursor: pointer;
      line-height: 2;
    }
    .footer-background-image {
      position: absolute;
      top:0;right:0;bottom:0;left:0;
      background-image: url("app/images/background/footer.jpg");
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
      z-index: -10;
      filter: opacity(60%);
    }
    strong {
      font-family: 'Playfair Display', serif;
      font-size: 30px;
      font-weight: 200;
    }
  `]
})

export class FooterComponent {
  currentDate : Date = new Date();
}
