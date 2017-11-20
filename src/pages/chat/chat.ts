import { Component, NgZone } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, Platform } from 'ionic-angular';


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
  
  answers = [];

  constructor(public platform: Platform, public ngZone: NgZone) {
    platform.ready().then(() => {
      ApiAIPromises.new().init({
        clientAccessToken: "cd413db2c8ca47c2819f4f7482a86d46"
      })
      .then((result) =>  console.log(result))

    });
  }

  ask(question) {
    ApiAIPromises.requestText({
      query: question
    })
    .then(({result: {fulfillment: {speech}}}) => {
       this.ngZone.run(()=> {
        this.answers.push(speech);
       });
    })
  }

}
