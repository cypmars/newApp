import { Component, ViewChild,  OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IonicPage, NavController, ToastController, Slides } from 'ionic-angular';
import {  FabContainer, FabButton, FabList } from 'ionic-angular';

import {TinderQPage } from '../pages';

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html'
})

export class SignupPage {

  public param1: string;
  
  @ViewChild('signupSlider') signupSlider: any;
  @ViewChild('fab') fab: FabContainer;

  slideOneForm: FormGroup;
  slideTwoForm: FormGroup;
  slideThreeForm: FormGroup;

  who: string ;

  jobs ; 

  jobsTransport ; 
  jobsAgriculture ; 
  jobsCommerce ; 
  jobsTelecom ; 
  jobsIndustrie ; 
  jobsEnergie ; 
  jobsFinance ; 
  jobsRecherche ; 
  
  tabBarElement: any;

  submitAttempt: boolean = false;
  lastSlide: boolean = true;

  itemsCat: [{id: number, name: string, iconName: string, jobsName: any}] = [
    {
      id: 0,
      name : "Agriculture & agroalimentaire",
      iconName : "leaf", 
      jobsName: this.jobsAgriculture = ["Agriculture", "Agroalimentaire", "Autre"]
    },
    {
      id: 1,
      name : "Industrie",
      iconName : "lock", 
      jobsName: this.jobsIndustrie = ["Pharmaceutique", "Textile", "Chimique", "Construction", "Batiment", "Automobile", "Aéronotique", "Lourde", "Autre"]
    },
    {
      id: 2,
      name : "Energie",
      iconName : "plane",
      jobsName: this.jobsEnergie = ["Nucléaire", "Eolien", "Solaire", "Hydrolique", "Pétrolier", "Autre"]
    },
    {
      id: 3,
      name : "Commerce & Tourisme",
      iconName : "people", 
      jobsName : this.jobsCommerce = ["Grand Commerce", "Petit commerce", "Artisanat", "Hôtellerie", "Restauration", "Autre"]
    },
    {
      id: 4,
      name : "Transport & Logistique",
      iconName : "train",
      jobsName : this.jobsTransport = ['Aéronotique', 'Ferroviaire', 'Urbain', 'Maritime', 'Astronautique', "Distribution", "Gestion & Pilotage", "Autre"] 
    },
    {
      id: 5,
      name : "Télécoms & Informatique",
      iconName : "nuclear",
      jobsName : this.jobsTelecom = ["Systèmes d'infromation", "Robotique", "Technologies", "Recherche", "Autre"]
    },
    {
      id: 6,
      name : "Santé & Services",
      iconName : "school",
      jobsName : this.jobsRecherche = ["Médecine", "Parmaceutique", "Aide à la personne", "Gardiennage", "Recherche", "Autre"]
    },
    {
      id: 7,
      name : "Economie",
      iconName : "code-working",
      jobsName : this.jobsFinance = ["Banque", "Finance", "Assurance", "Audit", "Conseil", "Autre"]
    }
  ];

  myIcon: string = "Secteur d'activité ?";

  // Our translated text strings
  private signupErrorString: string;

  constructor(public navCtrl: NavController,
    public formBuilder: FormBuilder,
    public toastCtrl: ToastController) {

    this.tabBarElement = document.querySelector('.tabbar.show-tabbar');

    this.slideOneForm = formBuilder.group({
      firstName: ['',  Validators.compose([Validators.maxLength(30), Validators.pattern('[a-zA-Z ]*'), Validators.required])],
      lastName: ['',  Validators.compose([Validators.maxLength(30), Validators.pattern('[a-zA-Z ]*'), Validators.required])],
      email: [''],
      mdp: ['']
    });

    this.slideTwoForm = formBuilder.group({
      activity: ['']
    });

    this.slideThreeForm = formBuilder.group({
      work: ['']
    });
  }

  ionViewWillLeave(){
    this.tabBarElement.style.display = 'flex';
  }

  next(){
    console.log(this.signupSlider._activeIndex);
    if (this.signupSlider._activeIndex == 1){
      this.lastSlide = false;
      this.signupSlider.slideNext();
    }
    else{
      this.lastSlide = true;
      this.signupSlider.slideNext();
    }
  }

  prev(){
    console.log(this.signupSlider._activeIndex);
    if (this.signupSlider._activeIndex == 0)
      this.navCtrl.pop();
    else{
      this.lastSlide = true;
      this.signupSlider.slidePrev();
    }
  }

  save(){
    this.submitAttempt = true;
    
    if(!this.slideOneForm.valid){
      this.signupSlider.slideTo(0);
      this.lastSlide = true;
    }
    else {
      this.navCtrl.push(TinderQPage);
    }
  }

  public chooseService(event, data, fab: FabContainer){
    this.myIcon = this.itemsCat[data].name;
    this.lastSlide = false;
    this.signupSlider.slideNext();
    this.jobs = this.itemsCat[data].jobsName ; 
  }
}

