import { Component, ViewChild } from '@angular/core';
import {  FabContainer } from 'ionic-angular';
import { IonicPage, NavController, ToastController } from 'ionic-angular';

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
  selector: 'page-ask-form',
  templateUrl: 'ask-form.html'
})
export class AskFormPage {


  constructor(public navCtrl: NavController,
    public toastCtrl: ToastController, http:Http) {

  }

}
