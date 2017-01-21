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
    data: {
      title: 'Home'
    }
  },

  //navigation links
  {
    path: 'versand',
    component: ShippingComponent,
    data: {
      title: 'Shipping'
    }
  },
  {
    path: 'regale',
    component: ShelvesComponent,
    data: {
      title: 'Home'
    }
  },
  {
    path: 'kontakt',
    component: ContactComponent,
    data: {
      title: 'Contact'
    }
  },
  {
    path: 'regal/:id',
    component: ShelfDetailComponent,
    data: {
      title: 'Shelf'
    }
  },

  //footer navigation
  {
    path: 'impressum',
    component: ImprintComponent,
    data: {
      title: 'Imprint'
    }
  },
  {
    path: 'datenschutz',
    component: PrivacyInformationComponent,
    data: {
      title: 'Privacy'
    }
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
