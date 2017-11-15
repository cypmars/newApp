import { Component } from '@angular/core';
import {  FabContainer, FabButton } from 'ionic-angular';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';

import { ResultPage } from '../pages';
/**
 * The Welcome Page is a splash page that quickly describes the app,
 * and then directs the user to create an account or log in.
 * If you'd like to immediately put the user onto a login/signup page,
 * we recommend not using the Welcome page.
*/
@IonicPage()
@Component({
  selector: 'page-simple-form',
  templateUrl: 'simple-form.html'
})
export class SimpleFormPage {
  // The account fields for the login form.
  // If you're using the username field with or without email, make
  // sure to add it to the type

  searchType: string = "Simple";

  account: { email: string, password: string } = {
    email: '@ e-mail ou pseudo',
    password: 'mot de passe'
  };

  search : { param1: string, param2: string, param3: string, param4: string } = {
    param1: 'iconeName',
    param2: 'param2',
    param3: 'param3',
    param4: 'param4'
  };

  itemsCat: [{id: number, name: string, iconName: string}] = [
  {
    id: 0,
    name : "Propreté et Services",
    iconName : "leaf"
  },
  {
    id: 1,
    name : "Sécurité",
    iconName : "lock"
  },
  {
    id: 2,
    name : "Services Aéroportuaires",
    iconName : "plane"
  },
  {
    id: 3,
    name : "Accueil",
    iconName : "people"
  },
  {
    id: 4,
    name : "Logistique",
    iconName : "train"
  },
  {
    id: 5,
    name : "Technologies",
    iconName : "nuclear"
  },
  {
    id: 6,
    name : "Intérim, Recrutement et Formation",
    iconName : "school"
  },
  {
    id: 7,
    name : "Autres",
    iconName : "code-working"
  }
];

itemsServ: [{catId: number, id: number, name: string, imgUrl: string}] = [
  {
    catId : 0,
    id: 0,
    name: "Hygiène et propreté classique",
    imgUrl: "/assets/imgs/prop.jpg"
  },
  {
    catId : 0,
    id : 1,
    name: "Hygiène et propreté en milieu sensible",
    imgUrl: "/assets/imgs/prop.jpg"
  },
  {
    catId : 0,
    id : 2,
    name: "Cryogénie",
    imgUrl: "/assets/imgs/prop.jpg"
  },
  {
    catId : 0,
    id : 3,
    name: "Propreté et maintenances des process industriels",
    imgUrl: "/assets/imgs/prop.jpg"
  },
  {
    catId : 0,
    id : 4,
    name: "Propreté dans les transports",
    imgUrl: "/assets/imgs/prop.jpg"
  },
  {
    catId : 0,
    id : 5,
    name: "Gestion des déchets - Secteur Tertiaire",
    imgUrl: "/assets/imgs/prop.jpg"
  },
  {
    catId : 0,
    id : 6,
    name: "Gestion des déchets - Secteur Industriel",
    imgUrl: "/assets/imgs/prop.jpg"
  },
  {
    catId : 0,
    id : 7,
    name: "Services associés",
    imgUrl: "/assets/imgs/prop.jpg"
  },
  {
    catId : 0,
    id : 1,
    name: "Hygiène et propreté classique",
    imgUrl: "/assets/imgs/prop.jpg"
  },
  {
    catId : 0,
    id : 1,
    name: "Hygiène et propreté classique",
    imgUrl: "/assets/imgs/prop.jpg"
  },

];

  myIcon: string = "Choisissez une catégorie de service";
  // Our translated text strings
  private loginErrorString: string;

  constructor(public navCtrl: NavController,
    private navParams: NavParams,
    public toastCtrl: ToastController) {

      console.log(navParams.get("year"));
  }

  forgot() {
    this.navCtrl.push('ForgotPage');
  }

  login() {
    this.navCtrl.push('LoginPage');
  }

  // Attempt to login in through our User service
  doLogin() {
    this.navCtrl.push(ResultPage);
  }

  public chooseService(event, data, fab: FabContainer){
    this.myIcon = this.itemsCat[data].name;
    this.search.param1 = this.itemsCat[data].iconName;
    fab.close();
  }

  submit(){
    console.log(this.search);
    this.navCtrl.push('ResultPage');
  }
}
