import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map'

/**
 * The Welcome Page is a splash page that quickly describes the app,
 * and then directs the user to create an account or log in.
 * If you'd like to immediately put the user onto a login/signup page,
 * we recommend not using the Welcome page.
*/
@IonicPage()
@Component({
  selector: 'page-marque-details',
  templateUrl: 'marqueDetails.html'
})
export class MarqueDetailsPage {

  shownGroup = null;
  marqueId;
  tabBarElement: any;
  services: any[];
  marques: any[];
  // The account fields for the login form.
  // If you're using the username field with or without email, make
  // sure to add it to the type
  account: { email: string, password: string } = {
    email: '@ e-mail ou pseudo',
    password: 'mot de passe'
  };

  like = false;

  // Our translated text strings
  private loginErrorString: string;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public toastCtrl: ToastController, private http:Http) {
    
    this.tabBarElement = document.querySelector('.tabbar.show-tabbar');
    this.marqueId = navParams.get('marqueId');  

    let servData = http.get('assets/data/services.json').map(res => res.json().services);
    servData.subscribe(data => {
      this.services = data;
    });

    let brandData = http.get('assets/data/marques.json').map(res => res.json().marques);
    brandData.subscribe(data => {
      this.marques = data;
    });

  }

  toggleGroup(group) {
    if (this.isGroupShown(group)) {
        this.shownGroup = null;
    } else {
        this.shownGroup = group;
    }
  };
  
  isGroupShown(group) {
      return this.shownGroup === group;
  };

  prev() {
    this.navCtrl.pop();
  }
  
  follow() {
    this.like = !this.like;
  }

  ionViewWillEnter(){
    this.tabBarElement.style.display = 'none';
  }

  ionViewWillLeave(){
    this.tabBarElement.style.display = 'flex';
  }

  // forgot() {
  //   this.navCtrl.push('ForgotPage');
  // }

  // signup() {
  //   this.navCtrl.push('SignupPage');
  // }

  // login() {
  //   this.navCtrl.push('LoginPage');
  // }

  // // Attempt to login in through our User service
  // doLogin() {
  //     this.navCtrl.push('SimpleFormPage');
  // }
}
