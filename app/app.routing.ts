import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { ShippingComponent } from './shipping.component';
import { ShelvesComponent } from './shelves.component';
import { ContactComponent } from './contact.component';
import { ShelfDetailComponent } from './shelf-detail.component';
import { ImprintComponent } from './imprint.component';
import { PrivacyInformationComponent } from './privacy-info.component';


const appRoutes: Routes = [
  //initial redirect
  {
    path: '',
    redirectTo: '/regale',
    pathMatch: 'full',
  },

  //navigation links
  {
    path: 'versand',
    component: ShippingComponent,
  },
  {
    path: 'regale',
    component: ShelvesComponent,
  },
  {
    path: 'kontakt',
    component: ContactComponent,
  },
  {
    path: 'regal/:id',
    component: ShelfDetailComponent,
  },

  //footer navigation
  {
    path: 'impressum',
    component: ImprintComponent,
  },
  {
    path: 'datenschutz',
    component: PrivacyInformationComponent,
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
