import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { SimpleForm1Page } from './simple-form1';

@NgModule({
  declarations: [
    SimpleForm1Page,
  ],
  imports: [
    IonicPageModule.forChild(SimpleForm1Page),
  ],
  exports: [
    SimpleForm1Page
  ]
})
export class SimpleFormPageModule { }
