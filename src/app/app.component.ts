import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TabsPage } from '../pages/tabs/tabs';
import { SpeechRecognition } from '@ionic-native/speech-recognition';

declare var ApiAIPlugin: any;

@Component({
  templateUrl: 'app.html'
})


export class MyApp {
  rootPage:any = TabsPage;

  
  constructor(private speech: SpeechRecognition, platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  async getPermission():Promise<void> {
    try{
      const permission = await this.speech.requestPermission();
      console.log(permission)
      return permission;
    }
    catch(e){
      console.log(e)
    }
  };

  

}

