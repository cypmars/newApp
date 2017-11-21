import { Component, ViewChild, NgZone } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, Platform, Content } from 'ionic-angular';
import { FormControl, FormBuilder } from '@angular/forms';
import { WelcomePage } from '../pages';
/**
 * The Welcome Page is a splash page that quickly describes the app,
 * and then directs the user to create an account or log in.
 * If you'd like to immediately put the user onto a login/signup page,
 * we recommend not using the Welcome page.
*/
declare var ApiAIPromises: any;

@IonicPage()
@Component({
  selector: 'page-chat',
  templateUrl: 'chat.html'
})

export class ChatPage {
  
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

  doneLoading = false;

  messages = [
    {
      _id: 1,
      date: new Date(),
      userId: this.toUser._id,
      username: this.toUser.username,
      pic: this.toUser.pic,
      text: "Salut ! Je suis R2D2, je vais t'aider à déterminer ton besoin."
    },
    {
      _id: 2,
      date: new Date(),
      userId: this.toUser._id,
      username: this.toUser.username,
      pic: this.toUser.pic,
      text: "Es-tu un client, un prospect ou un collaborateur ?"
    }
  ];

  @ViewChild(Content) content: Content;

  public messageForm: any;
  chatBox: any;

  answers = [];

  constructor(public navCtrl: NavController, public formBuilder: FormBuilder, public platform: Platform, public ngZone: NgZone) {
    this.messageForm = formBuilder.group({
      message: new FormControl('')
    });
    this.chatBox = '';

    platform.ready().then(() => {
      ApiAIPromises.new().init({
        clientAccessToken: "cd413db2c8ca47c2819f4f7482a86d46"
      })
      .then((result) =>  console.log(result))
      .fail(function (error) {
        // some error processing 
        console.log(error);
    });

    });
  }

  ask(message) {
    if (message && message !== '')
    {
      const messageData =
      {
        toId: this.toUser._id,
        _id: 6,
        date: new Date(),
        userId: this.user._id,
        username: this.user.username,
        pic: this.user.pic,
        text: message
      };

      this.messages.push(messageData);
      this.scrollToBottom();

      ApiAIPromises.requestText({
        query: message
      })
      .then(({result: {fulfillment: {speech}}}) => {
         this.ngZone.run(()=> {
           const answer = {
            toId: this.user._id,
            _id: 6,
            date: new Date(),
            userId: this.toUser._id,
            username: this.toUser.username,
            pic: this.toUser.pic,
            text: speech
           }
          this.messages.push(answer);
         });
      })
      .fail(function (error) {
        // some error processing 
        console.log(error);
    });

    }
    this.chatBox = '';
  }

  scrollToBottom() {
    setTimeout(() => {
      this.content.scrollToBottom();
    }, 100);
  }


  login() {
    
    this.navCtrl.push('WelcomePage');
  }

}
