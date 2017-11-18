import { Component, ViewChild, ViewChildren, QueryList } from '@angular/core';
import {  FabContainer, FabButton } from 'ionic-angular';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';

import { Http } from '@angular/http';
import 'rxjs/Rx';

import { SimpleFormPage } from '../pages';
import { ResultPage } from '../pages';

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
  
  cards: Array<any>;
  stackConfig: StackConfig;
  recentCard: string = '';

  // Our translated text strings
  private loginErrorString: string;


//Our Tree question
nodes = 
{
  id: 1,
  name: 'Propreté et Service',
  question: 'Milieu sensible ?',
  img_src: '',
  children: [
    { id: 2, 
      name: 'Hygiène et propreté en milieu sensible', 
      question: 'Domaine Agroalimentaire ?',
      img_src: '',
      children: 
      [{
        id: 4,
        name: 'Domaine Agroalimentaire',
        question:'Industrie de la viande ?',
        img_src: '',
        children: [{
          id: 6,
          name: "industrie de la viande"
        },
        {
          id: 7, 
          name: "Autre industrie",
          question: 'Industrie de la charcuterie ?',
          img_src: '',
          children: [{
            id: 8, 
            name: "Industrie de la charcuterie"
          },
          {
            id: 9,
            name: "Autre industrie",
            question: 'Industrie des plats cuisinés, conserves ?',
            img_src: '',
            children: [{
              id: 10,
              name: "Industrie plats cuisinés, conserves"
            },
            {
              id: 11,
              name: "Autre industrie",
              question: 'Industrie des légumes ?',
              img_src: '',
              children: [{
                id: 12,
                name: "Industrie des légumes"
              },
              {
                id: 13,
                name: "Industrie poissons"
              }]
            }]
          }]
        }]
      },
      {
        id:5,
        name: 'Autre domaine',
        question: 'Domaine pharma ?',
        img_src: '',
        children: [{
          id:14, 
          name: "Domaine Pharma",
          question: 'Prestations régulières ?',
          img_src: '',
          children: [{
            id: 16,
            name: 'Prestations régulières',
          },
          {
            id: 17,
            name: 'Autre Presta',
            question: 'Mise à blanc ?',
            img_src: '',
            children: [{
              id: 19,
              name: 'Mise à blanc'
            },
            {
              id: 18,
              name: 'Autre Presta',
              question: 'Mise en place zoning matériel ?',
              img_src: '',
              children: [{
                id: 20,
                name: 'Mise en place zoning matériel'
              },
              {
                id: 21,
                name: 'Application de bonnes pratique de nettoyage pharma',
              }]
            }]
          }]
        },
        {
          id: 15,
          name:"Autre domaine",
          question: 'Domaine Santé ?',
          img_src: '',
          children: [{
            id: 22,
            name: 'Domaine Santé',
            children: [{
              id: 24,
              name: "Bio nettoyage"
            },
            {
              id: 25,
              name: "Autre Presta",
              question: 'Entretien locaux ?',
              img_src: '',
              children: [{
                id: 26,
                name: 'Entretien locaux',
              },
              {
                id: 27,
                name: "Autre Presta",
                question: 'Lutte infections nosocomiales ?',
                img_src: '',
                children: [{
                  id: 28,
                  name: 'Lutte quotidienne infections nosocomiales'
                },
                {
                  id: 29,
                  name: 'Autres Presta Complémentaires'
                }]
              }]
            }]
          },
          {
            id: 23,
            name: 'Prestation en salle propre',
            question: 'Presta quotidienne de nettoyage et décontamination particulaire ?',
            img_src:'',
            children: [{
              id: 30,
              name: "Presta quotidienne de nettoyage et décontamination particulaire"
            },
            {
              id: 31,
              name: "Presta ponctuelles de mise à blanc"
            }]
          }]
        }]
      }]
    },
    {
      id: 3,
      name:'Milieux non sensibles',
      question: 'Transports ?',
      img_src: '',
      children : [{
        id: 32,
        name: 'Propreté dans les transports',
        question: 'Transport maritime ?',
        img_src: '',
        children: [{
          id: 34,
          name: 'Transport maritime'
        },
        {
            id: 35,
            name: 'Autre transport',
            question: 'Transport ferroviaire ?',
            img_src: '',
            children: [{
              id: 36,
              name: 'Transport ferroviaire'
            },
            {
              id: 37,
              name: 'Autre transport',
              question: 'Transport aérien ?',
              img_src: '',
              children: [{
                id: 38,
                name: 'Transport aérien'
              },
              {
                id: 39,
                name: 'Transport urbain'
              }]
            }]
        }]
      },
      {
        id: 33,
        name: 'Autre Domaine',
        question: 'Process Industriels ?',
        img_src: '',
        children: [{
          id: 40,
          name: 'Propreté process industriels',
          question: 'Maintenance et Nettoyage ?',
          img_src: '',
          children: [{
            id: 42,
            name: 'Maintenance et nettoyage indus'
          },
          {
            id:43,
            name: 'Autre presta',
            question: 'Assainissement collectif et industriel ?',
            img_src: '',
            children: [{
              id: 44,
              name: 'Assainissement collectif et industriel'
            },
            {
              id: 45,
              name: 'Autre presta',
              question: 'Hygiène ?',
              img_src: '',
              children: [{
                id: 46,
                name: 'Hygiène'
              },
              {
                id: 47,
                name: 'Autre presta',
                question: 'Propreté urbaine ?',
                img_src: '',
                children: [{
                  id: 48,
                  name: 'Propreté urbaine'
                },
                {
                  id: 49,
                  name: 'Transport et collecte de déchets industriels'
                }]
              }]
            }]
          }]
        },
        {
          id: 41,
          name: 'Autre domaine',
          question: 'Gestion des déchets ?',
          img_src: '',
          children: [{
            id: 50,
            name: 'Gestion des déchets',
            question: 'Secteur Tertiaire ?',
            img_src: '',
            children: [{
              id:52,
              name: 'Secteur Tertiaire',
              question: 'Gestion déchets in situ ?',
              img_src: '',
              children: [{
                id: 54,
                name: 'Gestion déchets in situ'
              },
              { 
                id: 55,
                name: 'Autre presta',
                question: 'Traçabilité, reporting ?',
                img_src: '',
                children: [{
                  id: 56,
                  name: 'Traçabilité, reporting'
                },
                {
                  id: 57,
                  name: 'Autre Presta',
                  question: 'Gestion administrative ?',
                  img_src: '', 
                  children: [{
                    id: 58,
                    name: 'Gestion administrative'
                  },
                  {
                    id: 59,
                    name: 'Optimisation interne',
                  }] 
                }]
              }] 
            },
            {
              id: 53,
              name: 'Secteur Industriel',
              question: 'Gestion déchets in situ ?',
              img_src: '',
              children: [{
                id: 60,
                name: 'Gestion déchets in situ'
              },
              { 
                id: 61,
                name: 'Autre presta',
                question: 'Pilotage des évacs vers filière de val ?',
                img_src: '',
                children: [{
                  id: 62,
                  name: 'Pilotage des évacs vers filière de val'
                },
                {
                  id: 63,
                  name: 'Autre Presta',
                  question: 'Gestion administrative ?',
                  img_src: '', 
                  children: [{
                    id: 64,
                    name: 'Gestion administrative'
                  },
                  {
                    id: 65,
                    name: 'Optimisation interne',
                  }] 
                }]
              }] 
            }]
          },
          {
            id: 51,
            name: 'Autre domaine',
            question: 'Hygiène et Prop classique ?',
            img_src: '',
            children: [{
              id: 66,
              name: 'Hygiène et Prop classique',
              question: 'Etablissement recevant du public ?',
              img_src: '',
              children: [{
                id: 68,
                name: 'Etablissement recevant du public',
              },
              {
                id: 69,
                name: 'Autre Presta',
                question: 'Bureaux, sièges sociaux ?',
                img_src: '',
                children: [{
                  id: 70,
                  name: 'Bureaux, sièges sociaux'
                },
                {
                  id: 71,
                  name: 'Autre presta',
                  question: 'Réseau de boutiques ou agences ?',
                  img_src: '',
                  children: [{
                    id: 72,
                    name: 'Réseau de boutiques ou agences',
                  },
                  {
                    id: 73,
                    name: 'Autre',
                    question: 'Surfaces commerciales ?',
                    img_src: '',
                    children: [{
                      id: 74,
                      name: 'Surfaces commerciales'
                    },
                    {
                      id: 75,
                      name: 'Hôtels'
                    }]
                  }]
                }]
              }]
            },
            {
              id: 67,
              name: 'Services associés',
              question: 'Services aux bâtiments ?',
              img_src: '',
              children: [{

              }]
            }]
          }]
        }]
      }]
    }
  ]
}
;

  currentNode;
  getNextNode(isYesAnswer){
    if (isYesAnswer)
    {
      if (this.currentNode.children[0] != null)
      {
        this.currentNode = this.currentNode.children[0];
      }
    }
    else
    {
      if (this.currentNode.children[1] != null)
      {
        this.currentNode = this.currentNode.children[1];
      }
    }
  }
  // Called whenever we drag an element
  onItemMove(element, x, y, r) {
    var elmt = element.children[0].children[0].children[0].children[0].children[0];
    if (document.getElementsByClassName('card')[1] != null)
    {
      var behindElmt = document.getElementsByClassName('card')[1].children[0].children[0].children[0].children[0].children[1];
    }
    var color = '';
    var abs = Math.abs(x);
    let min = Math.trunc(Math.min(16*16 - abs, 16*16));
    let hexCode = this.decimalToHex(min, 2);

    if (x < 0) {
      color = '#' + hexCode + 'FF' + hexCode;
      if (this.currentNode.children != null)
      {
        if (this.currentNode.children[0].question != null)
        {
          behindElmt.innerHTML = this.currentNode.children[0].question;
        }
        else
        {
          behindElmt.innerHTML = 'Déterminons votre besoin';
        }
      }
      else{
      }
    } else if (x === 0){
      color = 'transparent';
    }
    else{
      color = '#FF' + hexCode + hexCode;
      if (this.currentNode.children[1] != null)
      {
        behindElmt.innerHTML = this.currentNode.children[1].question;
      }
    }

    element.style['transform'] = `translate3d(0, 0, 0) translate(${x}px, ${y}px) rotate(${r}deg)`;
    elmt.style['background-color'] = color;
    elmt.style['opacity'] = 0.4;
  }
   
  // Connected through HTML
  voteUp(like: boolean) {
    this.getNextNode(like);
    let removedCard = this.cards.pop();
    if (this.currentNode.children != null)
    {
      this.cards.push(this.currentNode);
    }
    else{
      this.cards.pop();
      this.navCtrl.push('ResultPage');
      this.cards.pop();
    }
  }
   
  // Add new cards to our array
  addNewCards(node) {
      if (node.children[0] != null)
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

  constructor(private http: Http, public navCtrl: NavController) {

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
  }

  prev(){
    this.navCtrl.pop();
  }
  ngAfterViewInit() {
    // Either subscribe in controller or set in HTML
    this.currentNode = this.nodes;
    this.swingStack.throwin.subscribe((event: DragEvent) => {
    });
    this.cards = [{email: ''}];
    this.addNewCards(this.currentNode.children[0]);
    this.addNewCards(this.currentNode);
  }
}
