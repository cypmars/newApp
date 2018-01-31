import { Component } from '@angular/core';
import { IonicPage, NavController, ToastController } from 'ionic-angular';
import { EmailComposer } from '@ionic-native/email-composer';

import { WelcomePage } from '../pages';

import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { NavParams } from 'ionic-angular/navigation/nav-params';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@IonicPage()
@Component({
  selector: 'page-info',
  templateUrl: 'info.html'
})
export class InfoPage {

  serviceId;
  mail = {
    about: "Service",
    object: "Objet",
    message: "Message",
    sendBy: {
      firstname: "Prénom",
      lastname: "Nom",
      email: "@ email",
    }
  }
  askForm: FormGroup;

  tabBarElement: any;

  constructor(public navCtrl: NavController, public navParams:NavParams,
    public toastCtrl: ToastController, http:Http, public formBuilder: FormBuilder, private emailComposer: EmailComposer) {
      this.tabBarElement = document.querySelector('.tabbar.show-tabbar');

      this.serviceId = navParams.get("serviceId");
      this.mail.about = navParams.get("serviceName");

      this.askForm = formBuilder.group({
        firstname: ['',  Validators.compose([Validators.maxLength(30), Validators.pattern('[a-zA-Z ]*'), Validators.required])],
        lastname: ['',  Validators.compose([Validators.maxLength(30), Validators.pattern('[a-zA-Z ]*'), Validators.required])],
        email: [''],
        about: [''],
        object: [''],
        message: ['']
      });
  }

  ionViewWillEnter(){
    this.tabBarElement.style.display = 'none';
  }

  ionViewWillLeave(){
    this.tabBarElement.style.display = 'flex';
  }

  sendMail(){
    this.emailComposer.isAvailable().then((available: boolean) =>{
      if(available) {
        //Now we know we can send

        let email = {
          from: this.mail.sendBy.email,
          to: 'cypconnet@wanadoo.fr',
          subject: "[INFO/DEVIS] "+this.mail.sendBy.firstName+" "+this.mail.sendBy.lastName+" about "+this.mail.about,
          body: this.mail.object+"<br><br>"+this.mail.message,
          isHtml: true
        };
        
        // Send a text message using default options
        this.emailComposer.open(email);
      }
     });
  }

  // Attempt to login in through our User service
  login() {
      this.navCtrl.push(WelcomePage);
  }

  prev(){
    this.tabBarElement.style.display = 'flex';
    this.navCtrl.pop();
  }
}
