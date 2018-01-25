import { Component, ChangeDetectorRef } from '@angular/core';
import { IonicPage, NavController, Platform } from 'ionic-angular';
import { WelcomePage } from '../pages';
import { TextToSpeech } from '@ionic-native/text-to-speech';
import { SpeechRecognition, SpeechRecognitionListeningOptionsAndroid, SpeechRecognitionListeningOptionsIOS } from '@ionic-native/speech-recognition';
/**
 * The Welcome Page is a splash page that quickly describes the app,
 * and then directs the user to create an account or log in.
 * If you'd like to immediately put the user onto a login/signup page,
 * we recommend not using the Welcome page.
*/

declare var ApiAIPlugin: any;

@IonicPage()
@Component({
  selector: 'page-chat2',
  templateUrl: 'chat2.html'
})

export class Chat2Page {
  
  text: string;
  speechList : Array<string> = [];

  toUser = {
    _id: '534b8e5aaa5e7afc1b23e69b',
    pic: 'assets/img/bot.png',
    username: 'BoBot',
  };

  user = {
    _id: '534b8fb2aa5e7afc1b23e69c',
    pic: 'assets/img/logo2.png',
    username: 'Sandy',
  };

  messages : Array<object> = [
    {
      toId: this.user._id,
      _id: 1,
      date: new Date().toLocaleTimeString().replace(/:\d+ /, ' '),
      userId: this.toUser._id,
      username: this.toUser.username,
      pic: this.toUser.pic,
      text: {
        speech: "Salut ! Je suis BoBot, puis-je t'aider à déterminer ton besoin ?"
      }
    }
  ];

  androidOptions: SpeechRecognitionListeningOptionsAndroid;
  iosOptions: SpeechRecognitionListeningOptionsIOS;
  textBody: string;
  voiceBody: string;
  alternate: boolean;
  hideTime: boolean;
  verbalResponse: boolean;
  newMessage: {};
  responseMessage: {};

  constructor(private ref: ChangeDetectorRef, private speech: SpeechRecognition, private tts: TextToSpeech, public navCtrl: NavController, public platform: Platform) {
      ApiAIPlugin.init(
      {
          clientAccessToken: "099b97242c1745bd92c163cd27d2c767", 
          lang: "en" // set lang tag from list of supported languages 
      }, 
      function(result) { /* success processing */ },
      function(error) { /* error processing */ }
      );
      this.initializeApp()
      this.hideTime = true;
      this.verbalResponse = true;
  }


  initializeApp() {
    this.platform.ready().then(() => {
      if(!this.hasPermission()){
        this.getPermission()
      }
    });
  }

  async SpeakText(voice):Promise<any> {
    try{
      await this.tts.speak(voice);
      console.log("Successfully spoke")
    }
    catch(e){
      console.log(e)
    }
  }

  listenForSpeech():void {
    this.androidOptions = {
        prompt: 'Speak into your phone!',
        matches: 1
    };

    this.iosOptions = {
        matches: 1
    };

    if(this.platform.is('android')){
      this.speech.startListening(this.androidOptions).subscribe(
        (data) => {
          this.messages.push(
            {
              toId: this.toUser._id,
              _id: this.messages.length,
              date: new Date().toLocaleTimeString().replace(/:\d+ /, ' '),
              userId: this.user._id,
              username: this.user.username,
              pic: this.user.pic,
              text: data
            }
          );
          this.SendTextFromVoice(data)
      }, (error) => {
          console.log(error)
      });
    }
    else if(this.platform.is('ios')){
      this.speech.startListening(this.iosOptions).subscribe(data => this.speechList = data, error => console.log(error));
      console.log(this.speechList);
    }
  }

  async SendText(query):Promise<any> {
    try {
        await ApiAIPlugin.requestText(
          {
            query,
            originalRequest: {
              source: 'WWT chat bot',
              data: 'messages'
            }
          },
           (response) => {
             console.log(JSON.stringify(response))
             console.log(JSON.stringify(response.result))
             let speech = response.result.fulfillment;
               if(response.result.fulfillment.speech){
                 console.log(speech);
                 if(this.platform.is('ios')){
                    this.messages.push({
                      toId: this.user._id,
                      _id: this.messages.length,
                      date: new Date().toLocaleTimeString().replace(/:\d+ /, ' '),
                      userId: this.toUser._id,
                      username: this.toUser.username,
                      pic: this.toUser.pic,
                      text: speech
                    });
                  this.ref.detectChanges();
                } else {
                  this.messages.push({      
                    toId: this.user._id,
                    _id: 2,
                    date: new Date().toLocaleTimeString().replace(/:\d+ /, ' '),
                    userId: this.toUser._id,
                    username: this.toUser.username,
                    pic: this.toUser.pic,
                    text: speech
                  });
                  this.ref.detectChanges();
                }
               } else {
                 this.messages.push({
                  toId: this.user._id,
                  _id: 2,
                  date: new Date().toLocaleTimeString().replace(/:\d+ /, ' '),
                  userId: this.toUser._id,
                  username: this.toUser.username,
                  pic: this.toUser.pic,
                  text: "Je suis désolé, je n'ai pas compris votre réponse."
                });
                this.ref.detectChanges();
               }
            },
            (error) => {
                console.error(error);
            });
    } catch (e) {
        alert(e);
    }
  }

  async SendTextFromVoice(query):Promise<any> {
    try {
        await ApiAIPlugin.requestText(
          {
            query
          },
           (response) => {
             if(response.result.fulfillment.speech){
                let voice = response.result.fulfillment.speech
                console.log('3', voice)
                this.messages.push({
                  toId: this.user._id,
                  _id: 2,
                  date: new Date().toLocaleTimeString().replace(/:\d+ /, ' '),
                  userId: this.toUser._id,
                  username: this.toUser.username,
                  pic: this.toUser.pic,
                  text: voice
                });
                this.ref.detectChanges();
                this.SpeakText(voice)
             } else {
               let voice = "Je suis désolé, je n'ai pas compris votre réponse"
                console.log('3', voice)
                this.messages.push({
                  toId: this.user._id,
                  _id: 2,
                  date: new Date().toLocaleTimeString().replace(/:\d+ /, ' '),
                  userId: this.toUser._id,
                  username: this.toUser.username,
                  pic: this.toUser.pic,
                  text: voice
                });
                this.ref.detectChanges();
                this.SpeakText(voice)
             }
            },
            (error) => {
                console.error(error);
            });
    } catch (e) {
        alert(e);
    }
    }

  async getSupportedLanguages():Promise<Array<string>> {
    try{
      const languages = await this.speech.getSupportedLanguages();
      console.log(languages);
      return languages;
    }
    catch(e){
      console.error(e)
    }
  }

  async hasPermission():Promise<boolean> {
    try{
      const permission = await this.speech.hasPermission();
      console.log(permission)
      return permission;
    }
    catch(e){
      console.log(e)
    }
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
  }

  async isSpeechSupported():Promise<boolean> {
    const isAvailable = await this.speech.isRecognitionAvailable();
    console.log(isAvailable)
    return isAvailable;
  }

  async sendMessage():Promise<any> {

    this.messages.push({
      toId: this.toUser._id,
      _id: this.messages.length,
      date: new Date().toLocaleTimeString().replace(/:\d+ /, ' '),
      userId: this.user._id,
      username: this.user.username,
      pic: this.user.pic,
      text: this.newMessage
    });
    this.SendText(this.newMessage);
    console.log(this.newMessage);
    this.newMessage="";
  }

  buildCardLayout(data) {
      
  }

  
  login() {
    this.navCtrl.push(WelcomePage);
  }
}
