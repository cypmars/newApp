import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CompleteTestService } from '../../providers/CompleteTestService';

import { ComputeResultsService } from '../../providers/ComputeResultsService';

import { Http } from '@angular/http';
import 'rxjs/Rx';

import { ServiceDetailsPage } from '../pages';
import { ResultPage } from '../pages';
import { WelcomePage } from '../pages';

import {
  StackConfig,
  DragEvent,
  SwingStackComponent
} from 'angular2-swing';

/**
 * The Welcome Page is a splash page that quickly describes the app,
 * and then directs the user to create an account or log in.
 * If you'd like to immediately put the user onto a login/signup page,
 * we recommend not using the Welcome page.
*/
@IonicPage()
@Component({
  selector: 'page-tinderQ2',
  templateUrl: 'tinderQ2.html'
})

export class TinderQ2Page {
  @ViewChild('myswing1') swingStack: SwingStackComponent;
  
  public param1: string;
  public param2: number;
  public param3: string;
  public param4: number;
  public param5: string;

  placeholder="";
  cards: Array<any>;
  stackConfig: StackConfig;
  recentCard: string = '';

  currentNode;
  currentQId;

  compute: ComputeResultsService;

  showButton: boolean = true ; 

  myArray;

  getNextNode(like){
    if (like){
      for (let serviceId of this.currentNode[this.currentQId].servicesIdIfYes)
      {
        let bool = false;
        for (let resultId of this.myArray[1])
        {
          if (serviceId == resultId){
            bool = true
          }
        }
        if (!bool)
          this.myArray[1].push(serviceId);
      }
    }
    this.currentQId ++;
  }

  // Called whenever we drag an element
  onItemMove(element, x, y, r) {
    var elmt = element.children[0].children[0].children[0].children[0].children[0].children[0];
    var color = '';
    var abs = Math.abs(x);
    let min = Math.trunc(Math.min(16*16 - abs, 16*16));
    let hexCode = this.decimalToHex(min, 2);

    if (x > 0) {
      color = '#' + hexCode + 'FF' + hexCode;
    } else if (x === 0){
      color = 'transparent';
    }
    else{
      color = '#FF' + hexCode + hexCode;
    }

    element.style['transform'] = `translate3d(0, 0, 0) translate(${x}px, ${y}px) rotate(${r}deg)`;
    elmt.style['background-color'] = color;
    elmt.style['opacity'] = 0.4;
  }
   
  // Connected through HTML
  voteUp(like: boolean) {

    this.getNextNode(like);
    this.cards.pop();
    if (this.currentNode[this.currentQId] != null)
    {
      this.cards.push(this.currentNode[this.currentQId]);
    }
    else{
      console.log(this.myArray[1]);
      this.navCtrl.push(ResultPage, {
        param1: this.param1,
        param2: this.param2,
        param3: this.param3,
        param4: this.param4,
        param5: this.param5,
        param6: this.myArray[1]
      });
      this.myArray = [];
      this.cards.pop();
      this.cards.pop();
    }
  }
   
  // Add new cards to our array
  addNewCards(node, id) {
      if (this.currentNode.length > id)
      {
        this.cards.push(node);
      }
  }
   
  // http://stackoverflow.com/questions/57803/how-to-convert-decimal-to-hex-in-javascript
  decimalToHex(d, padding) {
    var hex = Number(d).toString(16);
    padding = typeof (padding) === "undefined" || padding === null ? padding = 2 : padding;
    
    while (hex.length < padding) {
      hex = "0" + hex;
    }
    
    return hex;
  }

  constructor(http: Http, public navCtrl: NavController, public navParams: NavParams, public completeTestService: CompleteTestService) {

      this.stackConfig = {
        throwOutConfidence: (offsetX, offsetY, element) => {
          return Math.min(Math.abs(offsetX) / (element.offsetWidth/2), 1);
        },
        transform: (element, x, y, r) => {
          this.onItemMove(element, x, y, r);
        },
        throwOutDistance: (d) => {
          return 800;
        }
      }; 

      this.param1 = navParams.get('param1');
      this.param2 = navParams.get('param2');
      this.param3 = navParams.get('param3');
      this.param4 = navParams.get('param4');
      this.param5 = navParams.get('param5');

      console.log("param1: " + this.param1);
      console.log("param2: " + this.param2);
      console.log("param3: " + this.param3);
      console.log("param4: " + this.param4);
      console.log("param5: " + this.param5);

      this.myArray = new Array();

      this.compute = new ComputeResultsService();
  }

  getVal(event){
    console.log(event.id);
    this.navCtrl.push(ServiceDetailsPage, {
      param1: event.id,
    });
    this.placeholder="";
  }
  
  prev(){
    var footer = document.getElementsByClassName('footer');
    console.log("before removing first: "+footer[0]);
    footer[0].remove();
    console.log("after removing first: "+footer[0]);
    this.navCtrl.pop();
  }
  
  ngAfterViewInit() {
    console.log("INIT");
    this.myArray = new Array();
    this.myArray = this.compute.computeQuestionsAndResults(this.param1, this.param2, this.param4);
    
    this.currentNode = this.myArray[0];
    this.currentQId = 0;

    // Either subscribe in controller or set in HTML
    this.swingStack.throwin.subscribe((event: DragEvent) => {
    });
    this.cards = [{}];
    this.addNewCards(this.currentNode[this.currentQId], this.currentQId);

    console.log(this.navCtrl.getPrevious().id) ;
    if(this.navCtrl.getPrevious().id == "WelcomePage" || this.navCtrl.getPrevious().id == "SignupPage"){
      this.showButton = false ; 
    } 
  }

  ionViewDidLeave(){
    console.log(this.navCtrl.getActive());
    if (!(this.navCtrl.getActive().component.name == "WelcomePage") && !(this.navCtrl.getActive().component.name == "TinderQ2Page") && !(this.navCtrl.getActive().component.name == "ServiceDetailsPage"))
    {
      this.myArray = this.compute.getMyArray();
      this.currentNode = this.myArray[0];
      this.currentQId = 0;
      this.swingStack.throwin.subscribe((event: DragEvent) => {
      });
      this.cards = [{}];
      console.log(this.myArray[0]);
      console.log(this.currentNode[this.currentQId]);
      this.addNewCards(this.currentNode[this.currentQId], this.currentQId);
    }
    console.log("Did Leave ???");
  }

  login(){
    this.navCtrl.push(WelcomePage);
  }
}
