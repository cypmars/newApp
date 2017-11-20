import { Component, ViewChild } from '@angular/core';
import {  FabContainer, FabButton, FabList } from 'ionic-angular';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';

import { SimpleForm2Page } from '../pages';
/**
 * The Welcome Page is a splash page that quickly describes the app,
 * and then directs the user to create an account or log in.
 * If you'd like to immediately put the user onto a login/signup page,
 * we recommend not using the Welcome page.
*/
@IonicPage()
@Component({
  selector: 'page-simple-form1',
  templateUrl: 'simple-form1.html'
})
export class SimpleForm1Page {
  // The account fields for the login form.
  // If you're using the username field with or without email, make
  // sure to add it to the type
  @ViewChild('fab') fab: FabContainer;
  
  public param1: string;

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
    name : "Agriculture & agroalimentaire",
    iconName : "leaf"
  },
  {
    id: 1,
    name : "Industrie",
    iconName : "lock"
  },
  {
    id: 2,
    name : "Energie",
    iconName : "plane"
  },
  {
    id: 3,
    name : "Commerce & artisanat",
    iconName : "people"
  },
  {
    id: 4,
    name : "Tourisme",
    iconName : "train"
  },
  {
    id: 5,
    name : "Télécoms & Internet",
    iconName : "nuclear"
  },
  {
    id: 6,
    name : "Recherche",
    iconName : "school"
  },
  {
    id: 7,
    name : "Finance et assurance",
    iconName : "code-working"
  }
];

  myIcon: string = "Quel est le secteur d'activité de votre Entreprise ?";

  constructor(public navCtrl: NavController,
    private navParams: NavParams,
    public toastCtrl: ToastController) {
      this.param1 = navParams.get('param1');
  }

  prev() {
    this.navCtrl.pop();
  }

  login() {
    
    this.navCtrl.push('WelcomePage');
  }

  public ngAfterViewInit(){
    this.fab.setActiveLists(true);
  }

  public chooseService(event, data, fab: FabContainer){
    this.myIcon = this.itemsCat[data].name;
    this.navCtrl.push('SimpleForm2Page', {
      param1: this.param1,
      param2: this.myIcon,
    });
  }
}