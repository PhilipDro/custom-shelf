import { Component, OnInit, Input, trigger, state, style, transition, animate } from '@angular/core';
import { RouterModule, Routes, Router, ActivatedRouteSnapshot, NavigationEnd, ActivatedRoute, Params, UrlSegment } from '@angular/router';


import 'rxjs/add/operator/switchMap';

import { Observable } from 'rxjs/Observable';

import { ShelfService } from './shelf.service';


@Component({
  selector: 'app',
  template: `
    <div *ngIf="isPopOutImg" [@fadeInOut] class="background-layer"><div class="home-overlay"></div></div>
    <div class="container">
      <div class="row nav-container">
        <div class="col-xs-12">
          <nav>
            <div class="container-fluid no-padding">
              <ul class="nav navbar-nav highlighted">
                <li class="hidden-xs"><a class="logo-link" routerLink="/regale" [routerLinkActive]="'nav-active'">
                  <img class="logo" src="app/images/artd.png" alt="logo" /></a>
                </li>
                <li><a routerLink="/regale" [routerLinkActive]="'nav-active'" [@navColor]="isPopOut">Home</a></li>
                <li><a routerLink="/gallerie" [routerLinkActive]="'nav-active'" [@navColor]="isPopOut">Gallerie</a></li>
                <li><a routerLink="/kontakt" [routerLinkActive]="'nav-active'" [@navColor]="isPopOut">Kontakt</a></li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
      <heading [title]="title"></heading>

      <div [@popOut]="isPopOut">
        <router-outlet></router-outlet>
      </div>

      <render-footer></render-footer>
    </div>


  `,
  styles: [`
      .logo {
        max-height: 43px;
        margin-right: 15px;
      }
      .navbar-nav li a.logo-link {
        margin-top: 0;
        padding-top: 0;
      }
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
      @media(max-width: 768px) {
        .nav-container {
          margin: 0 auto;
          text-align: center;
        }
      }
      nav {
        text-align: left;
        margin: 20px 0 40px 0;
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
        padding-bottom: 0;
      }
      .navbar-nav li a::-moz-focus-inner {
        border: 0;
      }
      .navbar-nav li a:focus {
        outline: none;
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
      .navbar-nav li a.nav-active {
        color: #E0A100;
        text-decoration: underline;
      }
    `
  ],
  host: {
    '(document:scroll)': 'onScroll()'
  },
  animations: [
    // animation for title
    trigger('popOut', [
      state('true', style({
        marginTop: '0px',
      })),
      state('false', style({
        marginTop: '70vh',
      })),
      transition('false => true', animate('300ms')),
      transition('true => false', animate('300ms'))
    ]),
    // animation for component fades
    trigger('fadeInOut', [
      transition(':enter', [   // :enter is alias to 'void => *'
        style({opacity:0}),
        animate(600, style({opacity:1}))
      ]),
      transition(':leave', [   // :leave is alias to '* => void'
        animate(600, style({opacity:0}))
      ])
    ]),
    // animate navigation text color
    trigger('navColor', [
      state('true', style({
      })),
      state('false', style({
        color: 'white',
      })),
      transition('true => false', animate('200ms')),
      transition('false => true', animate('200ms'))
    ])
  ],
})

export class AppComponent implements OnInit {
  isPopOut: string = 'false';
  isPopOutImg: boolean =  true;

  constructor (private router: Router) {
  }
  title: string;

  private getDeepestTitle(routeSnapshot: ActivatedRouteSnapshot) {
    var title = routeSnapshot.data ? routeSnapshot.data['title'] : '';
    if (routeSnapshot.firstChild) {
      title = this.getDeepestTitle(routeSnapshot.firstChild) || title;
    }
    return title;
  }
  ngOnInit() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.title = this.getDeepestTitle(this.router.routerState.snapshot.root);
      }
    });
  }
  onScroll() {
    this.isPopOut = 'true';
    this.isPopOutImg = false;
  }
}
