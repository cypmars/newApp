import { Component } from '@angular/core';
import { IonicPage, NavController, ToastController } from 'ionic-angular';

import { TinderQ2Page } from '../pages';

import { WelcomePage } from '../pages';

import { Http } from '@angular/http';
import 'rxjs/add/operator/map';


@IonicPage()
@Component({
  selector: 'page-info',
  templateUrl: 'info.html'
})
export class InfoPage {

  tabBarElement: any;

  constructor(public navCtrl: NavController,
    public toastCtrl: ToastController, http:Http) {
      this.tabBarElement = document.querySelector('.tabbar.show-tabbar');
  }

  ionViewWillEnter(){
    this.tabBarElement.style.display = 'none';
  }

  ionViewWillLeave(){
    this.tabBarElement.style.display = 'flex';
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
