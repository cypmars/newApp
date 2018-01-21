import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProductDetailsPage } from './productDetails';

import { YoutubeVideoPlayer } from '@ionic-native/youtube-video-player';

@NgModule({
  declarations: [
    ProductDetailsPage
  ],
  imports: [
    IonicPageModule.forChild(ProductDetailsPage)
  ],
  providers: [
    YoutubeVideoPlayer
  ],
  exports: [
    ProductDetailsPage,
  ]
})
export class ProductDetailsPageModule { }
