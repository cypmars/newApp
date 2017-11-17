import { Component, ViewChild,  OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IonicPage, NavController, ToastController, Slides } from 'ionic-angular';

import {
  VisNode,
  VisNodes,
  VisEdges,
  VisNetworkService,
  VisNetworkData,
  VisNetworkOptions } from 'ng2-vis/components/network';

import { WelcomePage } from '../pages';
import { MainPage } from '../pages';

class ExampleNetworkData implements VisNetworkData {
  public nodes: VisNodes;
  public edges: VisEdges;
}

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html'
})

export class SignupPage implements OnInit, OnDestroy{

  public visNetwork: string = 'networkId1';
  public visNetworkData: ExampleNetworkData;
  public visNetworkOptions: VisNetworkOptions;
  public visNetworkService: VisNetworkService;
  
  @ViewChild('signupSlider') signupSlider: any;

  slideOneForm: FormGroup;
  slideTwoForm: FormGroup;
  slideThreeForm: FormGroup;
  slideFourForm: FormGroup;
  slideFiveForm: FormGroup;

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

    this.slideThreeForm = formBuilder.group({
      activity: ['']
    });

    this.slideFourForm = formBuilder.group({
      client: ['']
    });

    this.slideFiveForm = formBuilder.group({
      need: ['']
    });

  }

  next(){
    console.log(this.signupSlider._activeIndex);
    if (this.signupSlider._activeIndex == 1)
    {
      
    }
    if (this.signupSlider._activeIndex == 4)
      this.navCtrl.push(WelcomePage);
    else if (this.signupSlider._activeIndex == 3){
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

  public addNode(): void {
    const newId = this.visNetworkData.nodes.getLength() + 1;
    this.visNetworkData.nodes.add({ id: newId.toString(), label: 'Node ' + newId });
  }

  public networkInitialized(): void {
  }

  public ngOnInit(): void {
      const nodes = new VisNodes([
          { id: '1', label: 'Node 1' },
          { id: '2', label: 'Node 2' },
          { id: '3', label: 'Node 3' },
          { id: '4', label: 'Node 4' },
          { id: '5', label: 'Node 5', title: 'Title of Node 5' }]);

      const edges = new VisEdges();

      this.visNetworkData = {
          nodes,
          edges,
      };

      this.visNetworkOptions = {
        nodes: {borderWidth:0,shape:"circle",color:{background:'#F92C55', highlight:{background:'#F92C55', border: '#F92C55'}},font:{color:'#fff'}},
        physics: {
          stabilization: false,
          minVelocity:  0.01,
          solver: "repulsion",
          repulsion: {
            nodeDistance: 40
          }
        }
      };
  }

  public ngOnDestroy(): void {
      this.visNetworkService.off(this.visNetwork, 'click');
  }
}

