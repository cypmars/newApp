import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { ServiceDetailsPage } from './serviceDetails';

@NgModule({
  declarations: [
    ServiceDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(ServiceDetailsPage)
  ],
  exports: [
    ServiceDetailsPage
  ]
})
export class ServiceDetailsPageModule { }
