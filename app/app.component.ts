import { Component } from '@angular/core';


@Component({
  selector: 'app',
  template: `
    <!--nav class="navbar navbar-default">
      <div class="container-fluid">
        <div class="navbar-header">
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#main-navbar" aria-expanded="false">
            <span class="sr-only">Navigation ausklappen</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a class="navbar-brand" href="#">{{title}}</a>
        </div>
        <div class="collapse navbar-collapse" id="main-navbar">
          <ul class="nav navbar-nav">
            <li><a routerLink="/regale">Regale</a></li>
            <li><a routerLink="/versand">Versand</a></li>
            <li><a routerLink="/kontakt">Kontakt</a></li>
          </ul>
        </div>
      </div>
    </nav*ngIf="!router.urlTree.contains(router.createUrlTree(['/login']))"-->
    <div class="container">
      <div class="row nav-container">
        <div class="col-xs-12">
          <nav>
            <div class="container-fluid no-padding">
              <ul class="nav navbar-nav highlighted">
                <!--li><img class="logo" src="app/images/logo.png" alt="logo" /></li-->
                <li><a routerLink="/regale">Home</a></li>
                <li><a routerLink="/versand">Versand</a></li>
                <li><a routerLink="/kontakt">Kontakt</a></li>
              </ul>
            </div>
          </nav>
        </div>
      </div>

      <heading [isActive] = false></heading>

      <router-outlet></router-outlet>

      <render-footer></render-footer>
    </div>


  `,
  styles: [`
      @media (min-width: 1200px) {
        .container{
            width: 1200px;
        }
      }
      .no-padding {
        padding: 0;
      }
      .nav-container {
        display: inline-block;
        width: 100%;
      }
      nav {
        text-align: left;
        margin: 20px 0;
      }
      @media(min-width: 768px) {
        .nav-container {
          width: 50%;
        }
        .navbar-nav li {
          margin: 8px 6px 0 6px;

        }
      }
      .navbar-nav {
        float:left;
      }
      .navbar-nav li a {
        margin: 8px 0 0 0;
        font-size: 18px;
        color: grey;
        display: inline-block;
      }
      .navbar-nav li a:first-child {
        padding-left: 0;
        margin-left: 0;
      }
      .navbar-nav li:first-child {
        padding-left: 0;
        margin-left: 0;
      }
      .navbar-nav li a:hover, .navbar-nav li a:active, .navbar-nav li a:focus {
        background: transparent;
        text-decoration: underline;
        color: #E0A100;
        cursor: pointer;
      }
      .navbar-nav li {
        display: inline-block;
      }
      .logo {
        max-height: 60px;
      }
    `
  ]
})

export class AppComponent {
  isActive: false;
}
