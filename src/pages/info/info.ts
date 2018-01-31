import { Component } from '@angular/core';
import { IonicPage, NavController, ToastController } from 'ionic-angular';

import { TinderQ2Page } from '../pages';

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
      firstName: "Prénom",
      lastName: "Nom",
      email: "@ email",
    }
  }
  askForm: FormGroup;

  tabBarElement: any;

  constructor(public navCtrl: NavController, public navParams:NavParams,
    public toastCtrl: ToastController, http:Http, public formBuilder: FormBuilder) {
      this.tabBarElement = document.querySelector('.tabbar.show-tabbar');

      this.serviceId = navParams.get("serviceId");
      this.mail.about = navParams.get("serviceName");

      this.askForm = formBuilder.group({
        firstname: ['',  Validators.compose([Validators.maxLength(30), Validators.pattern('[a-zA-Z ]*'), Validators.required])],
        lastName: ['',  Validators.compose([Validators.maxLength(30), Validators.pattern('[a-zA-Z ]*'), Validators.required])],
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

  forgot() {
    this.navCtrl.push('ForgotPage');
  }

  signup() {
    this.navCtrl.push('SignupPage');
  }

  // Attempt to login in through our User service
  doLogin() {
      this.navCtrl.push(TinderQ2Page);
  }

  prev(){
    this.tabBarElement.style.display = 'flex';
    this.navCtrl.pop();
  }
}
