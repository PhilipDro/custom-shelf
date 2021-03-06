import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

import { ShelfService } from './shelf.service';
import { AppComponent }   from './app.component';
import { ShelfDetailComponent } from './shelf-detail.component';
import { ShelvesComponent } from './shelves.component';
import { ShippingComponent } from './shipping.component';
import { ContactComponent } from './contact.component';
import { SizeFormComponent } from './size-form.component';
import { TitleComponent } from './title.component';
import { FooterComponent } from './footer.component';
import { ImprintComponent } from './imprint.component';
import { PrivacyInformationComponent } from './privacy-info.component';
import { MailComponent } from './mail.component';
import { GalleryComponent } from './gallery.component';


import { routing } from './app.routing';

@NgModule({
  imports:      [
    BrowserModule,
    FormsModule,
    routing,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService, {passThruUnknownUrl: true}),
    BrowserAnimationsModule
  ],
  declarations: [
    AppComponent,
    ShelfDetailComponent,
    ShelvesComponent,
    ShippingComponent,
    ContactComponent,
    SizeFormComponent,
    TitleComponent,
    FooterComponent,
    ImprintComponent,
    PrivacyInformationComponent,
    MailComponent,
    GalleryComponent,
  ],
  providers: [ ShelfService, {provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
