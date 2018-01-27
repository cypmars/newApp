import { Component, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IonicPage, NavController, ToastController } from 'ionic-angular';
import {  FabContainer } from 'ionic-angular';

import {TinderQ2Page } from '../pages';

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
  who: string ;

  jobs;
  jobsTab;
  
  tabBarElement: any;

  submitAttempt: boolean = false;
  lastSlide: boolean = false;

  showjobs= false;

  itemsCat: [{id: number, name: string, iconName: string, jobsName: any}] = [
    {
      id: 0,
      name : "Agriculture & agroalimentaire",
      iconName : "leaf", 
      jobsName: ["Agriculture", "Agroalimentaire", "Autre"]
    },
    {
      id: 1,
      name : "Industrie",
      iconName : "lock", 
      jobsName: ["Pharmaceutique", "Textile", "Chimique", "Construction", "Batiment", "Automobile", "Aéronotique", "Lourde", "Autre"]
    },
    {
      id: 2,
      name : "Energie",
      iconName : "plane",
      jobsName: ["Nucléaire", "Eolien", "Solaire", "Hydrolique", "Pétrolier", "Autre"]
    },
    {
      id: 3,
      name : "Commerce & Tourisme",
      iconName : "people", 
      jobsName : ["Grand Commerce", "Petit commerce", "Artisanat", "Hôtellerie", "Restauration", "Autre"]
    },
    {
      id: 4,
      name : "Transport & Logistique",
      iconName : "train",
      jobsName : ['Aéronotique', 'Ferroviaire', 'Urbain', 'Maritime', 'Astronautique', "Distribution", "Gestion & Pilotage", "Autre"] 
    },
    {
      id: 5,
      name : "Télécoms & Informatique",
      iconName : "nuclear",
      jobsName : ["Systèmes d'infromation", "Robotique", "Technologies", "Recherche", "Autre"]
    },
    {
      id: 6,
      name : "Santé & Services",
      iconName : "school",
      jobsName : ["Médecine", "Parmaceutique", "Aide à la personne", "Gardiennage", "Recherche", "Autre"]
    },
    {
      id: 7,
      name : "Economie",
      iconName : "code-working",
      jobsName : ["Banque", "Finance", "Assurance", "Audit", "Conseil", "Autre"]
    }
  ];

  myIcon: string = "Secteur d'activité ?";

  type="";
  activity=-1;
  job="";

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
      type: [''],
      activity: [''],
      job: ['']
    });
  }

  ionViewWillEnter(){
    this.tabBarElement.style.display = 'none';
  }
  
  ionViewWillLeave(){
    this.tabBarElement.style.display = 'flex';
  }

  onChange(event){
    console.log(event);
  }

  next(){
    console.log(this.signupSlider._activeIndex);
    if (this.signupSlider._activeIndex == 0){
      this.lastSlide = true;
      this.signupSlider.slideNext();
    }
  }

  prev(){
    if (this.signupSlider._activeIndex == 0)
      this.navCtrl.pop();
    else if (this.signupSlider._activeIndex == 1){
      this.lastSlide = false;
      this.signupSlider.slidePrev();
    }
  }

  save(){
    this.submitAttempt = true;
    
    if(!this.slideOneForm.valid || !this.slideTwoForm.valid){
      this.signupSlider.slideTo(0);
      this.lastSlide = false;
    }
    else {
      console.log(this.activity);
      console.log(this.itemsCat[this.activity].jobsName);
      console.log(this.job);
      console.log(this.type);
      console.log(this.itemsCat[this.activity].jobsName.indexOf(this.job));
      this.navCtrl.push(TinderQ2Page, {
        param1: this.type,
        param2: this.activity,
        param3: this.itemsCat[this.activity].name,
        param4: this.itemsCat[this.activity].jobsName.indexOf(this.job),
        param5: this.job
      });
    }
  }
}

