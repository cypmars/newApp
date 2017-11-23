import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { Chat2Page } from './chat2';
import { TextToSpeech } from '@ionic-native/text-to-speech';
import { SpeechRecognition } from '@ionic-native/speech-recognition';

@NgModule({
  declarations: [
    Chat2Page,
  ],
  imports: [
    IonicPageModule.forChild(Chat2Page)
  ],
  exports: [
    Chat2Page
  ]
})
export class Chat2PageModule { }
