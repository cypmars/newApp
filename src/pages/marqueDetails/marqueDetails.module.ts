import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MarqueDetailsPage } from './marqueDetails';
import { GoogleMaps } from '@ionic-native/google-maps';
import { YoutubeVideoPlayer } from '@ionic-native/youtube-video-player';

@NgModule({
  declarations: [
    MarqueDetailsPage
  ],
  imports: [
    IonicPageModule.forChild(MarqueDetailsPage)
  ],
  providers: [
    GoogleMaps,
    YoutubeVideoPlayer
  ],
  exports: [
    MarqueDetailsPage,
  ]
})
export class MarqueDetailsPageModule { }
