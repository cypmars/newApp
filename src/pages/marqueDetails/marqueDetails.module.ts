import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MarqueDetailsPage } from './marqueDetails';

import { StreamingMedia } from '@ionic-native/streaming-media';

@NgModule({
  declarations: [
    MarqueDetailsPage
  ],
  imports: [
    IonicPageModule.forChild(MarqueDetailsPage)
  ],
  providers: [
    StreamingMedia
  ],
  exports: [
    MarqueDetailsPage,
  ]
})
export class MarqueDetailsPageModule { }
