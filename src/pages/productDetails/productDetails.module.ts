import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProductDetailsPage } from './productDetails';

import { YoutubeVideoPlayer } from '@ionic-native/youtube-video-player';
import { DocumentViewer } from '@ionic-native/document-viewer';

@NgModule({
  declarations: [
    ProductDetailsPage
  ],
  imports: [
    IonicPageModule.forChild(ProductDetailsPage)
  ],
  providers: [
    YoutubeVideoPlayer,
    DocumentViewer
  ],
  exports: [
    ProductDetailsPage,
  ]
})
export class ProductDetailsPageModule { }
