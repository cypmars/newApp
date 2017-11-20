import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { ChatBubble } from './chatBubble';

@NgModule({
  declarations: [
    ChatBubble,
  ],
  imports: [
    IonicPageModule.forChild(ChatBubble)
  ],
  exports: [
    ChatBubble
  ]
})
export class ChatBubbleModule { }
