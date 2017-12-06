import { Component, ViewChild, ViewChildren, QueryList, OnInit, OnDestroy } from '@angular/core';
import {  FabContainer, FabButton } from 'ionic-angular';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';

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
  public param4: string;
  public param5: [number];

  public visNetwork: string = 'networkId1';
  public visNetworkData: ExampleNetworkData;
  public visNetworkOptions: VisNetworkOptions;
  public visNetworkService: VisNetworkService;

  firstT: boolean = true;

  services;
  visServices;
  constructor(private http: Http, public navCtrl: NavController, private visNetworkServ: VisNetworkService, public navParams: NavParams) {
   
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
  }

  public addNode(node): void {
    const newId = this.visNetworkData.nodes.getLength() + 1;
    this.visNetworkData.nodes.add(node);
  }

  public networkInitialized(): void {
        if (this.firstT)
        {
          for (let resultId of this.param5)
          {
            const visService = {
              id: resultId,
              label: this.services[resultId].title
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
              this.navCtrl.push('ServiceDetailsPage', {
                param1: (this.visNetworkService.getSelectedNodes(this.visNetwork))[0]
              });
              console.log(eventData[1]);
              console.log(this.visNetworkService.getSelectedNodes(this.visNetwork));
            }
          }
        });
        
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
        nodes: {borderWidth:0 ,shape:"circle", color:{background:'#F92C55', border: 'transparent', highlight:{ background:'#F92C55', border: '#F92C55'}},font:{color:'#fff'}},
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
