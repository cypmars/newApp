import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { SimpleFormPage } from './simple-form';

@NgModule({
  declarations: [
    SimpleFormPage,
  ],
  imports: [
    IonicPageModule.forChild(SimpleFormPage),
  ],
  exports: [
    SimpleFormPage
  ]
})
export class SimpleFormPageModule { }
