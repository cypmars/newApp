import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { AskInfoPage } from './askInfo';

@NgModule({
  declarations: [
    AskInfoPage,
  ],
  imports: [
    IonicPageModule.forChild(AskInfoPage)
  ],
  providers: [
  ],
  exports: [
    AskInfoPage
  ]
})
export class AskInfoPageModule { }