import { Component } from '@angular/core';
import { IonicPage, NavController, ToastController } from 'ionic-angular';

/**
 * The Welcome Page is a splash page that quickly describes the app,
 * and then directs the user to create an account or log in.
 * If you'd like to immediately put the user onto a login/signup page,
 * we recommend not using the Welcome page.
*/
@IonicPage()
@Component({
  selector: 'page-service-details',
  templateUrl: 'serviceDetails.html'
})
export class ServiceDetailsPage {
  tabBarElement: any;


  // The account fields for the login form.
  // If you're using the username field with or without email, make
  // sure to add it to the type
  account: { email: string, password: string } = {
    email: '@ e-mail ou pseudo',
    password: 'mot de passe'
  };

  like = false;

  service = {
    name: 'Propreté en milieu sensible',
    profileImage: 'assets/img/up-3_medium.jpg',
    coverImage: 'assets/img/gravel-proprete-hopital.jpg',
    occupation: 'Propreté',
    location: 'Marseille, France',
    description: "L'industrie de la « maîtrise de la contamination » doit faire face à une demande de plus en plus diversifiée, complexe et spécialisée. Ceci s'explique notamment par l'apparition de nouveaux besoins comme l'accroissement des exigences en matière de propreté ou encore l'évolution des contraintes réglementaires, notamment dans l'industrie pharmaceutique et les secteurs connexes…",
    likes: 0,
  };

  // Our translated text strings
  private loginErrorString: string;

  constructor(public navCtrl: NavController,
    public toastCtrl: ToastController) {
    this.tabBarElement = document.querySelector('.tabbar.show-tabbar');
  }

  
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
