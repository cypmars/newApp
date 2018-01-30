import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { AskFormPage } from './ask-form';

@NgModule({
  declarations: [
    AskFormPage,
  ],
  imports: [
    IonicPageModule.forChild(AskFormPage),
  ],
  exports: [
    AskFormPage
  ]
})
export class AskFormPageModule { }
