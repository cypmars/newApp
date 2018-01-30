import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/**
 * The Welcome Page is a splash page that quickly describes the app,
 * and then directs the user to create an account or log in.
 * If you'd like to immediately put the user onto a login/signup page,
 * we recommend not using the Welcome page.
*/
@IonicPage()
@Component({
  selector: 'page-askInfo',
  templateUrl: 'askInfo.html'
})
export class AskInfoPage {


  mail = {
    about: "Service",
    object: "Objet",
    text: "Message",
    sendBy: {
      firstName: "Prénom",
      lastName: "Nom",
      email: "@ email",
    }
  }

  submitAttempt: boolean = false;
  askInfoForm: FormGroup;
  serviceId;
  constructor(public navCtrl: NavController,  public navParams: NavParams,
    public toastCtrl: ToastController, http: Http, public formBuilder: FormBuilder) {

      this.serviceId = navParams.get("serviceId");
      this.mail.about = navParams.get("serviceName");

  }

  prev(){
    this.navCtrl.pop();
  }
}
