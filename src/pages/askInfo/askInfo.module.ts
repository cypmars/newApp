import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { EmailComposer } from '@ionic-native/email-composer';
import { AskInfoPage } from './askInfo';

@NgModule({
  declarations: [
    AskInfoPage,
  ],
  imports: [
    IonicPageModule.forChild(AskInfoPage)
  ],
  providers: [
    EmailComposer
  ],
  exports: [
    AskInfoPage
  ]
})
export class AskInfoPageModule { }
