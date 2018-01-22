import { Component, ViewChild, ViewChildren, QueryList, OnInit, OnDestroy } from '@angular/core';
import {  FabContainer, FabButton } from 'ionic-angular';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { CompleteTestService } from '../../providers/CompleteTestService';

import { Http } from '@angular/http';
import 'rxjs/Rx';

import { ServiceDetailsPage } from '../pages';
import {
  VisNode,
  VisNodes,
  VisEdges,
  VisNetworkService,
  VisNetworkData,
  VisNetworkOptions } from 'ng2-vis/components/network';

class ExampleNetworkData implements VisNetworkData {
  public nodes: VisNodes;
  public edges: VisEdges;
}

/**
 * The Welcome Page is a splash page that quickly describes the app,
 * and then directs the user to create an account or log in.
 * If you'd like to immediately put the user onto a login/signup page,
 * we recommend not using the Welcome page.
*/
@IonicPage()
@Component({
  selector: 'page-result',
  templateUrl: 'result.html'
})

export class ResultPage implements OnInit, OnDestroy{

  public param1: string;
  public param2: number;
  public param3: string;
  public param4: number;
  public param5: string;
  public param6: [number];

  public visNetwork: string = 'networkId1';
  public visNetworkData: ExampleNetworkData;
  public visNetworkOptions: VisNetworkOptions;
  public visNetworkService: VisNetworkService;

  firstT: boolean = true;

  services;
  visServices;

  myServiceId;

  placeholder="";
  constructor(private http: Http, public navCtrl: NavController, private visNetworkServ: VisNetworkService, public navParams: NavParams, public completeTestService: CompleteTestService) {
   
    let servData = http.get('assets/data/services.json').map(res => res.json().services);
    servData.subscribe(data => {
      this.services = data;
    });
    
    this.visNetworkService = visNetworkServ;

    this.param1 = navParams.get('param1');
    this.param2 = navParams.get('param2');
    this.param3 = navParams.get('param3');
    this.param4 = navParams.get('param4');
    this.param5 = navParams.get('param5');
    this.param6 = navParams.get('param6');

    console.log(this.param6);
  }

  public addNode(node): void {
    const newId = this.visNetworkData.nodes.getLength() + 1;
    this.visNetworkData.nodes.add(node);
  }

  public networkInitialized(): void {
        if (this.firstT)
        {

          for (let resultId of this.param6)
          {
            // pertinence aléatoire
            
            let possib = ["bas", "moyen", "haut"];
            this.services[resultId].pertinence = possib[Math.floor(Math.random() * 3)];
            let myGroup = this.services[resultId].marqueId * 3;
            if (this.services[resultId].pertinence === "haut")
              myGroup = myGroup + 2;
            if (this.services[resultId].pertinence === "moyen")
              myGroup = myGroup + 1;
            const visService = {
              id: resultId,
              group: myGroup,
              label: " "+this.services[resultId].icon+" "
            }
            if (this.visNetworkData.nodes.getById(resultId) == null)
            {
              this.addNode(visService);
            }
          }
          // now we can use the service to register on events
          this.visNetworkService.on(this.visNetwork, 'click');
        }

        // open your console/dev tools to see the click params
        this.visNetworkService.click
        .subscribe((eventData: any[]) => {
          if (this.firstT)
          {
            if (eventData[0] === this.visNetwork && (this.visNetworkService.getSelectedNodes(this.visNetwork))[0] != null) {
              this.myServiceId = (this.visNetworkService.getSelectedNodes(this.visNetwork))[0];
              var footer = document.getElementsByClassName('footer');
              console.log(footer);
              footer[1].removeAttribute("hidden");
              
            }
          }
        });
        
  }

  getVal(event){
    console.log(event.id);
    this.navCtrl.push('ServiceDetailsPage', {
      param1: event.id,
    });
    this.placeholder="";
  }

  public more(){
    if (this.firstT)
    {
      this.navCtrl.push('ServiceDetailsPage', {
        param1: this.myServiceId
      });
    }
  }

  login() {
    this.navCtrl.push('WelcomePage');
  }

  public ngOnInit(): void {
       
      const nodes = new VisNodes();

      const edges = new VisEdges();

      this.visNetworkData = {
          nodes,
          edges,
      };

      this.visNetworkOptions = {
        interaction:{
          multiselect: true
        },
        nodes: {
          borderWidth:0 ,

          shape:"circle", 
          color:{
            background:'#F92C55', 
            border: 'transparent', 
            highlight:{ background:'#F92C55', border: '#F92C55'}
          },
          font:{
            color:'#fff',
            size: 45,
            align: 'center',
            face: 'FontAwesome'
          },
        },
        groups: {

          //Groupés par marque
          // Marque id=0
          0:{font:{size:45}, color:{background:'#10e51a', highlight:{ background:'#0eae15' }}},
          1:{font:{size:65}, color:{background:'#10e51a', highlight:{ background:'#0eae15' }}},
          2:{font:{size:85}, color:{background:'#10e51a', highlight:{ background:'#0eae15' }}},

          // Marque id=1
          3:{font:{size:45}, color:{background:'#f71b1b', highlight:{ background:'#d01717' }}},
          4:{font:{size:65}, color:{background:'#f71b1b', highlight:{ background:'#d01717' }}},
          5:{font:{size:85}, color:{background:'#f71b1b', highlight:{ background:'#d01717' }}},

          // Marque id=2
          6:{font:{size:45}, color:{background:'#488aff', highlight:{ background:'#386ecd' }}},
          7:{font:{size:65}, color:{background:'#488aff', highlight:{ background:'#386ecd' }}},
          8:{font:{size:85}, color:{background:'#488aff', highlight:{ background:'#386ecd' }}},

          // Marque id=3
          9:{font:{size:45}, color:{background:'#e5dd10', highlight:{ background:'#cbc40e' }}},
          10:{font:{size:65}, color:{background:'#e5dd10', highlight:{ background:'#cbc40e' }}},
          11:{font:{size:85}, color:{background:'#e5dd10', highlight:{ background:'#cbc40e' }}},

          // Marque id=4
          12:{font:{size:45}, color:{background:'#f08640', highlight:{ background:'#cc7136' }}},
          13:{font:{size:65}, color:{background:'#f08640', highlight:{ background:'#cc7136' }}},
          14:{font:{size:85}, color:{background:'#f08640', highlight:{ background:'#cc7136' }}},

          // Marque id=5
          15:{font:{size:45}, color:{background:'#b734f4', highlight:{ background:'#962ac8' }}},
          16:{font:{size:65}, color:{background:'#b734f4', highlight:{ background:'#962ac8' }}},
          17:{font:{size:85}, color:{background:'#b734f4', highlight:{ background:'#962ac8' }}},

          // Marque id=6
          18:{font:{size:45}, color:{background:'#f92c55', highlight:{ background:'#d42649' }}},
          19:{font:{size:65}, color:{background:'#f92c55', highlight:{ background:'#d42649' }}},
          20:{font:{size:85}, color:{background:'#f92c55', highlight:{ background:'#d42649' }}},
        },
        physics: {
          stabilization: false,
          minVelocity:  0.01,
          solver: "repulsion",
          repulsion: {
            nodeDistance: 75
          }
        },
      };
  }

  
  public ngOnDestroy(): void {
    this.visNetworkService.off(this.visNetwork, 'click');
    console.log(this.visNetworkData.nodes);
    this.firstT = false;
  }

  prev(){
    this.visNetworkService.off(this.visNetwork, 'click');
    this.visNetworkData.nodes.clear();
    this.navCtrl.pop();
  }
}
