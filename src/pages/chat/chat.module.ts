import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { ChatPage } from './chat';
import { TextToSpeech } from '@ionic-native/text-to-speech';
import { SpeechRecognition } from '@ionic-native/speech-recognition';

@NgModule({
  declarations: [
    ChatPage,
  ],
  imports: [
    IonicPageModule.forChild(ChatPage)
  ],
  exports: [
    ChatPage
  ]
})
export class ChatPageModule { }
