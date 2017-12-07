import { Component, ViewChild, ViewChildren, QueryList } from '@angular/core';
import {  FabContainer, FabButton } from 'ionic-angular';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';

import { Http } from '@angular/http';
import 'rxjs/Rx';

import { SimpleFormPage } from '../pages';
import { ResultPage } from '../pages';
import { WelcomePage } from '../pages';

import {
  StackConfig,
  Stack,
  Card,
  ThrowEvent,
  DragEvent,
  SwingStackComponent,
  SwingCardComponent
} from 'angular2-swing';

/**
 * The Welcome Page is a splash page that quickly describes the app,
 * and then directs the user to create an account or log in.
 * If you'd like to immediately put the user onto a login/signup page,
 * we recommend not using the Welcome page.
*/
@IonicPage()
@Component({
  selector: 'page-tinderQ',
  templateUrl: 'tinderQ.html'
})

export class TinderQPage {
  @ViewChild('myswing1') swingStack: SwingStackComponent;
  @ViewChildren('mycards1') swingCards: QueryList<SwingCardComponent>;
  
  public param1: string;
  public param2: number;
  public param3: string;
  public param4: string;
  public param5: Array<string>;
  public resultsTemp: Array<number>;

  cards: Array<any>;
  stackConfig: StackConfig;
  recentCard: string = '';

  currentNode;
  currentQId;
  questionsId: Array<number>;

  // Our translated text strings
  private loginErrorString: string;

  showButton: boolean = true ; 

  agroQuestions = [
    {
      id: 0,
      name: "Surface recevant du public",
      question: "Possedez-vous une surface commerciale ou magasin ?",
      img: "assets/img/boutique-fruits.jpg",
      // + hygiene et prop classique + Gestion des déchets - secteur industriel
      servicesIdIfYes: [0, 1, 2]
    },
    {
      id: 1,
      name: "Clients en situation d'handicap",
      question: "Désirez-vous accompagner vos clients en situation d'handicap ?",
      img: "assets/img/handicap.jpg",
      servicesIdIfYes: []
    },
    {
      id: 2,
      name:"Usine ou zone de fabrication",
      question: "Possedez-vous une usine ou zone de fabrication ?",
      img: "assets/img/usine-boissons.jpg",
      servicesIdIfYes: []
    },
    {
      id: 3, 
      name:"Sécurité",
      question: "Désirez-vous voir nos services relatifs à la sécurité ?",
      img: "assets/img/securite-q.jpg",
      servicesIdIfYes: []
    },
    {
      id: 4,
      name: "Service logistique",
      question: "Seriez-vous interessés par une optimisation de votre système logistique et manutention ?",
      img: "assets/img/logistique.jpg",
      servicesIdIfYes: []
    },
    {
      id: 5,
      name: "Recrutement",
      question: "Pensez-vous à recruter ?",
      img: "assets/img/recrutement.jpg",
      servicesIdIfYes: []
    }
  ]



  getNextNode(like){
    if (like){
      for (let serviceId of this.currentNode[this.currentQId].servicesIdIfYes)
      {
        this.resultsTemp.push(serviceId);
      }
    }
    if (this.currentNode.length == this.currentQId + 3)
    {
      var lastCard = document.getElementsByClassName('card')[0];
      lastCard.setAttribute("style", "background: #b2284e; background: -webkit-linear-gradient(-90deg, #b2284e, #2a73d3); background: -o-linear-gradient(-90deg, #b2284e, #2a73d3); background: -moz-linear-gradient(-90deg, #b2284e, #2a73d3); background: linear-gradient(-90deg, #b2284e, #2a73d3);");
    }
    if (this.currentNode.length == this.currentQId + 2){
      var lastCard = document.getElementsByClassName('card')[0];
      lastCard.setAttribute("style", "display:none");
    }
    this.currentQId ++;
  }
  // Called whenever we drag an element
  onItemMove(element, x, y, r) {
    var elmt = element.children[0].children[0].children[0].children[0].children[0];
    var color = '';
    var abs = Math.abs(x);
    let min = Math.trunc(Math.min(16*16 - abs, 16*16));
    let hexCode = this.decimalToHex(min, 2);

    if (x < 0) {
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
    let removedCard = this.cards.pop();
    if (document.getElementsByClassName('card')[1] != null)
    {
      var behindCard = document.getElementsByClassName('card')[1];
      if (document.getElementsByClassName('card')[1].children[0] != null){
        var behindElmt = document.getElementsByClassName('card')[1].children[0].children[0].children[0].children[0].children[2];
        var behindImg = document.getElementsByClassName('card')[1].children[0].children[0].children[0].children[0].children[1];
      }
      if (document.getElementsByClassName('card')[1].children[1] != null){
        var behindButtonYes = document.getElementsByClassName('card')[1].children[1].children[0].children[0];
        var behindButtonNo = document.getElementsByClassName('card')[1].children[1].children[1].children[0];
      }
    }
    if (this.currentNode[this.currentQId + 1] != null)
    {
        if (this.currentNode[this.currentQId + 1].question != null)
        {
          if (behindElmt != null)
          {
            behindElmt.innerHTML = this.currentNode[this.currentQId + 1].question;
            behindImg.setAttribute("src", this.currentNode[this.currentQId + 1].img);
          }
        }
        else
        {
          if (behindElmt != null)
          {
            behindElmt.innerHTML = 'Déterminons votre besoin';
          }
        }
    }
    else{
      if (behindCard != null)
      {
        behindCard.setAttribute("style", "background: #b2284e; background: -webkit-linear-gradient(-90deg, #b2284e, #2a73d3); background: -o-linear-gradient(-90deg, #b2284e, #2a73d3); background: -moz-linear-gradient(-90deg, #b2284e, #2a73d3); background: linear-gradient(-90deg, #b2284e, #2a73d3);");
      }
      if (behindElmt != null)
      {
        behindElmt.innerHTML = 'Nous allons déterminer votre besoin';
      }
      if (behindButtonYes != null){
        behindButtonYes.setAttribute("style", "display: none");
      }
      if (behindButtonNo != null){
        behindButtonNo.setAttribute("style", "display: none");
      }
      if (behindImg != null)
      {
        behindImg.setAttribute("style", "display:none");
      }
    }
    if (this.currentNode[this.currentQId] != null)
    {
      this.cards.push(this.currentNode[this.currentQId]);
    }
    else{
      this.navCtrl.push('ResultPage', {
        param1: this.param1,
        param2: this.param2,
        param3: this.param3,
        param4: this.param4,
        param5: this.resultsTemp
      });
      this.resultsTemp = [];
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

  constructor(private http: Http, public navCtrl: NavController, public navParams: NavParams) {

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

      console.log("param1: " + this.param1);
      console.log("param2: " + this.param2);
      console.log("param3: " + this.param3);
      console.log("param4: " + this.param4);

      this.resultsTemp = new Array();
  }

  prev(){
    this.navCtrl.pop();
  }
  ngAfterViewInit() {
    switch(this.param2){
      
      // id = 0, secteur: Agroalimentaire
      case 0:
        this.currentNode = this.agroQuestions;
        this.currentQId = 0;
        break;

      // id = 0, secteur: Industrie  
      case 1:


        break;
      case 2:
        break;
      case 3:
        break;
      case 4:
        break;
      case 5:
        break;
      case 6:
        break;
    }
    console.log(this.currentNode);
    // Either subscribe in controller or set in HTML

    this.swingStack.throwin.subscribe((event: DragEvent) => {
    });
    this.cards = [{email: ''}];
    this.addNewCards(this.currentNode[this.currentQId + 1], this.currentQId + 1);
    this.addNewCards(this.currentNode[this.currentQId], this.currentQId);

    console.log(this.navCtrl.getPrevious().id) ;
    if(this.navCtrl.getPrevious().id == "WelcomePage" || this.navCtrl.getPrevious().id == "SignupPage"){
      this.showButton = false ; 
    } 
  }

  ionViewDidLeave(){
    if (! (this.navCtrl.getActive().component.name == "WelcomePage"))
    {
      this.currentNode = this.agroQuestions;
      this.currentQId = 0;
      this.swingStack.throwin.subscribe((event: DragEvent) => {
      });
      this.cards = [{email: ''}];
      this.addNewCards(this.currentNode[this.currentQId + 1], this.currentQId + 1);
      this.addNewCards(this.currentNode[this.currentQId], this.currentQId);
    }
  }

  login(){
    this.navCtrl.push('WelcomePage');
  }
}
