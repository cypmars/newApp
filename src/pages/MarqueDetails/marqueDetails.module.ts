import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MarqueDetailsPage } from './marqueDetails';

@NgModule({
  declarations: [
    MarqueDetailsPage
  ],
  imports: [
    IonicPageModule.forChild(MarqueDetailsPage)
  ],
  exports: [
    MarqueDetailsPage,
  ]
})
export class MarqueDetailsPageModule { }
