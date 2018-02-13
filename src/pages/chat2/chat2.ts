import { Component, ChangeDetectorRef } from '@angular/core';
import { IonicPage, NavController, Platform } from 'ionic-angular';
import { WelcomePage } from '../pages';
import { TextToSpeech } from '@ionic-native/text-to-speech';
import { SpeechRecognition, SpeechRecognitionListeningOptionsAndroid, SpeechRecognitionListeningOptionsIOS } from '@ionic-native/speech-recognition';
import { ComputeResultsService } from '../../providers/ComputeResultsService';

import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

declare var ApiAIPlugin: any;

@IonicPage()
@Component({
  selector: 'page-chat2',
  templateUrl: 'chat2.html'
})

export class Chat2Page {

  text: string;
  speechList : Array<string> = [];
  clickResponses=[];
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
      text: "Salut ! Je suis BoBot, puis-je t'aider à déterminer ton besoin ?",
      chips: []
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

  message0;
  message1;
  message2;

  marques;
  products;
  services;

  myArray;
  compute: ComputeResultsService;

  constructor(private ref: ChangeDetectorRef, private speech: SpeechRecognition, private tts: TextToSpeech, public navCtrl: NavController, public platform: Platform, http:Http) {
    let brandData = http.get('assets/data/marques.json').map(res => res.json().marques);
    brandData.subscribe(data => {
      this.marques = data;
    });

    let productData = http.get('assets/data/products.json').map(res => res.json().products);
    productData.subscribe(data => {
      this.products = data;
    });
    
    let servData = http.get('assets/data/services.json').map(res => res.json().services);
    servData.subscribe(data => {
      this.services = data;
      this.compute = new ComputeResultsService();
    });  

    ApiAIPlugin.init(
      {
          clientAccessToken: "099b97242c1745bd92c163cd27d2c767", 
          lang: "en" // set lang tag from list of supported languages 
      }, 
      function(result) { /* success processing */ },
      function(error) { /* error processing */ }
      );
      this.initializeApp();
      this.hideTime = true;
      this.verbalResponse = true;

      this.myArray = new Array();
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
          console.log("dataVoice: "+data);
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
      this.speech.startListening(this.iosOptions).subscribe(
        data => {
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
          this.SendTextFromVoice(data);
        }, (error) => {
          console.log(error)
      });
    }
  }

  async SendNoDefined(query, messages, ms):Promise<any> {
    try {
      await setTimeout(()=>
      {
        if (messages.length >= 1)
        {
          if(this.platform.is('ios')){
            this.messages.push({
              toId: this.user._id,
              _id: this.messages.length,
              date: new Date().toLocaleTimeString().replace(/:\d+ /, ' '),
              userId: this.toUser._id,
              username: this.toUser.username,
              pic: this.toUser.pic,
              text: messages[messages.length - 1],
              chips:[]
            }); 
          this.ref.detectChanges();
          messages.pop();
          this.SendNoDefined(query, messages, ms);
          } else {
            this.messages.push({      
              toId: this.user._id,
              _id: 2,
              date: new Date().toLocaleTimeString().replace(/:\d+ /, ' '),
              userId: this.toUser._id,
              username: this.toUser.username,
              pic: this.toUser.pic,
              text: messages[messages.length - 1],
              chips: []
            });
            this.ref.detectChanges();
            messages.pop();
            this.SendNoDefined(query, messages, ms);
          }
        }
      }, ms);
    } catch (e) {
      alert(e);
    }
  }

  async SendText(query, messages, ms):Promise<any> {
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
             let speech = response.result.fulfillment;
             let action = response.result.action;
             let parameters = response.result.parameters;
             let parts = response.result.fulfillment.messages;
               if(parts){
                this.myArray = [];

                let newM = {
                  toId: this.user._id,
                  _id: this.messages.length,
                  date: new Date().toLocaleTimeString().replace(/:\d+ /, ' '),
                  userId: this.toUser._id,
                  username: this.toUser.username,
                  pic: this.toUser.pic,
                  text: speech.speech,
                  chips: [],
                  suggests: []
                }


                if (action.includes("Aider-yes-type-agro-custom-custom"))
                  newM.suggests = this.compute.computeResults(parameters.type, parameters.sector, parameters.agroJobs);

                if (action.includes("Aider-yes-type-eco-custom-custom"))
                  newM.suggests = this.compute.computeResults(parameters.type, parameters.sector, parameters.ecoJobs);

                if (action.includes("Aider-yes-type-energie-custom-custom"))
                  newM.suggests = this.compute.computeResults(parameters.type, parameters.sector, parameters.energieJobs);

                if (action.includes("Aider-yes-type-info-custom-custom"))
                  newM.suggests = this.compute.computeResults(parameters.type, parameters.sector, parameters.infoJobs);

                if (action.includes("Aider-yes-type-log-custom-custom"))
                  newM.suggests = this.compute.computeResults(parameters.type, parameters.sector, parameters.logJobs);

                if (action.includes("Aider-yes-type-sante-custom-custom"))
                  newM.suggests = this.compute.computeResults(parameters.type, parameters.sector, parameters.santeJobs);

                if (action.includes("Aider-yes-type-tourisme-custom-custom"))
                  newM.suggests = this.compute.computeResults(parameters.type, parameters.sector, parameters.tourismeJobs);

                if (action.includes("Aider-yes-type-industrie-custom-custom"))
                  newM.suggests = this.compute.computeResults(parameters.type, parameters.sector, parameters.industrieJobs);

                if (action == "Aider.Aider-yes")
                  this.clickResponses =[];
        
                if(this.platform.is('ios')){
                  for (let message of parts){
                      switch (message.type){
                        case "simple_response":
                          newM.text=message.textToSpeech;
                          break;
                        case "suggestion_chips":
                          for (let suggestion of message.suggestions)
                            newM.chips.push(suggestion.title)
                          break;
                      }
                  }
                  this.messages.push(newM);
                  this.ref.detectChanges();
                } else {
                  for (let message of parts){
                     switch (message.type){
                       case "simple_response":
                         newM.text=message.textToSpeech;
                         break;
                       case "suggestion_chips":
                         for (let suggestion of message.suggestions)
                           newM.chips.push(suggestion.title)
                         break;
                     }
                  }
                  this.messages.push(newM);
                  this.ref.detectChanges();
                }
               } else {
                 this.SendNoDefined(query, messages, ms)
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
      text: this.newMessage,
      chips: []
    });

    var messages0 = [
      "Bon je dois t'avouer quelque chose ...",
      "Il y a quelque chose que je dois te dire ...",
      "Je dois te faire une confidence ... Oui ça va vite entre nous !"
    ];
    this.message0 = messages0[Math.floor(Math.random() * messages0.length)];

    let messages1 = [
      "Je suis installé mais j'ai pas encore bien bossé cette partie ... Pourrais-tu revenir un peu plus tard ?",
      "Je me dois d'être honnête envers toi, je ne suis pas au point pour le moment ..."
    ];
    this.message1=messages1[Math.floor(Math.random() * messages1.length)];

    let messages2 = [
      "Tu peux me retrouver dans la partie recherche, je te guiderai au mieux !",
      "Retrouve moi dans la partie recherche et ensemble nous parviendrons à déterminer ton besoin"
    ];
    this.message2=messages2[Math.floor(Math.random() * messages2.length)];

    let messages= [this.message2, this.message1, this.message0];
    this.SendText(this.newMessage, messages, 2000);
    console.log(this.newMessage);
    this.newMessage="";
  }


  async sendMessageByClick(event, message):Promise<any> {
    
        var messages0 = [
          "Bon je dois t'avouer quelque chose ...",
          "Il y a quelque chose que je dois te dire ...",
          "Je dois te faire une confidence ... Oui ça va vite entre nous !"
        ];
        this.message0 = messages0[Math.floor(Math.random() * messages0.length)];
    
        let messages1 = [
          "Je suis installé mais j'ai pas encore bien bossé cette partie ... Pourrais-tu revenir un peu plus tard ?",
          "Je me dois d'être honnête envers toi, je ne suis pas au point pour le moment ..."
        ];
        this.message1=messages1[Math.floor(Math.random() * messages1.length)];
    
        let messages2 = [
          "Tu peux me retrouver dans la partie recherche, je te guiderai au mieux !",
          "Retrouve moi dans la partie recherche et ensemble nous parviendrons à déterminer ton besoin"
        ];
        this.message2=messages2[Math.floor(Math.random() * messages2.length)];
    
        let messages= [this.message2, this.message1, this.message0];
        console.log(event);
        console.log(event.srcElement);
        console.log(event.srcElement.parentElement);
        console.log(event.srcElement.parentElement.parentElement);
        console.log(event.srcElement.parentElement.parentElement.getElementsByClassName("area"));
        console.log(event.srcElement.parentElement.parentElement.querySelector('.area'));
        for (let area of event.srcElement.parentElement.parentElement.getElementsByClassName("area"))
        {
          if (area != event.srcElement.parentElement){
            area.setAttribute("hidden", true);
          }
        }
        event.srcElement.style.backgroundColor="#0eae15";
        this.clickResponses.push(message);
        event.srcElement.remove();
        this.SendText(message, messages, 2000);

      }

  buildCardLayout(data) {
      
  }

  
  login() {
    this.navCtrl.push(WelcomePage);
  }
}
