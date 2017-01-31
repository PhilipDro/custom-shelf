import { Component, OnInit } from '@angular/core';
import { RouterModule, Routes, Router, ActivatedRouteSnapshot, NavigationEnd, ActivatedRoute, Params, UrlSegment } from '@angular/router';


import 'rxjs/add/operator/switchMap';

import {Observable} from 'rxjs/Observable';

import { ShelfService } from './shelf.service';


@Component({
  selector: 'app',
  template: `
    <div class="container">
      <div class="row nav-container">
        <div class="col-xs-12">
          <nav>
            <div class="container-fluid no-padding">
              <ul class="nav navbar-nav highlighted">
                <!--li><img class="logo" src="app/images/logo.png" alt="logo" /></li-->
                <li><a routerLink="/regale" [routerLinkActive]="'nav-active'">Home</a></li>
                <li><a routerLink="/kontakt" [routerLinkActive]="'nav-active'">Kontakt</a></li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
      <heading [title]="title"></heading>

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
      .navbar-nav li a.nav-active {
        color: #E0A100;
        text-decoration: underline;
      }
      .logo {
        max-height: 60px;
      }
    `
  ]
})

export class AppComponent implements OnInit {

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




}
