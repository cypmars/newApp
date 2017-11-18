import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { SimpleForm2Page } from './simple-form2';

@NgModule({
  declarations: [
    SimpleForm2Page,
  ],
  imports: [
    IonicPageModule.forChild(SimpleForm2Page),
  ],
  exports: [
    SimpleForm2Page
  ]
})
export class SimpleFormPageModule { }
