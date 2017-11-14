import { Component, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IonicPage, NavController, ToastController, Slides } from 'ionic-angular';

import { WelcomePage } from '../pages';
import { MainPage } from '../pages';
@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html'
})
export class SignupPage {

  @ViewChild('signupSlider') signupSlider: any;
  slideOneForm: FormGroup;
  slideTwoForm: FormGroup;

  submitAttempt: boolean = false;
  lastSlide: boolean = true;

  // The account fields for the login form.
  // If you're using the username field with or without email, make
  // sure to add it to the type
  account: { name: string, email: string, password: string } = {
    name: 'Test Human',
    email: 'test@example.com',
    password: 'test'
  };

  // Our translated text strings
  private signupErrorString: string;

  constructor(public navCtrl: NavController,
    public formBuilder: FormBuilder,
    public toastCtrl: ToastController) {

    this.slideOneForm = formBuilder.group({
      firstName: ['',  Validators.compose([Validators.maxLength(30), Validators.pattern('[a-zA-Z ]*'), Validators.required])],
      lastName: ['',  Validators.compose([Validators.maxLength(30), Validators.pattern('[a-zA-Z ]*'), Validators.required])],
      phone: [''],
      email: ['']
    });

    this.slideTwoForm = formBuilder.group({
      company: [''],
      address: [''],
      postcode: [''],
      city: [''],
      job: ['']
    });

  }

  next(){
    console.log(this.signupSlider._activeIndex);
    if (this.signupSlider._activeIndex == 1)
      this.navCtrl.push(WelcomePage);
    else{
      this.lastSlide = false;
      this.signupSlider.slideNext();
    }
    
  }

  prev(){
    console.log(this.signupSlider._activeIndex);
    if (this.signupSlider._activeIndex == 0)
      this.navCtrl.pop();
    else
    {
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
       else if(!this.slideTwoForm.valid){
           this.signupSlider.slideTo(1);
       }
       else {
          this.navCtrl.push(MainPage);
       }
  }
}
