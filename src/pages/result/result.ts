import { Component, ViewChild, ViewChildren, QueryList, OnInit, OnDestroy } from '@angular/core';
import {  FabContainer, FabButton } from 'ionic-angular';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';

import { Http } from '@angular/http';
import 'rxjs/Rx';

import { TinderQPage } from '../pages';
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

  public visNetwork: string = 'networkId1';
  public visNetworkData: ExampleNetworkData;
  public visNetworkOptions: VisNetworkOptions;
  public visNetworkService: VisNetworkService;

  constructor(private http: Http, public navCtrl: NavController, private visNetworkServ: VisNetworkService) {
    this.visNetworkService = visNetworkServ;
  }

  public addNode(): void {
    const newId = this.visNetworkData.nodes.getLength() + 1;
    this.visNetworkData.nodes.add({ id: newId.toString(), label: 'Node ' + newId });
  }

  public networkInitialized(): void {
     // now we can use the service to register on events
     this.visNetworkService.on(this.visNetwork, 'click');
     
      // open your console/dev tools to see the click params
      this.visNetworkService.click
          .subscribe((eventData: any[]) => {
              if (eventData[0] === this.visNetwork) {
                console.log(eventData[1]);
                console.log(this.visNetworkService.getSelectedNodes(this.visNetwork));
              }
          });
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
        interaction:{
          multiselect: true
        },
        nodes: {borderWidth:1 ,shape:"circle", color:{background:'#F92C55', border: '#F92C55', highlight:{ background:'#F92C55', border: '#F92C55'}},font:{color:'#fff'}},
        physics: {
          stabilization: false,
          minVelocity:  0.01,
          solver: "repulsion",
          repulsion: {
            nodeDistance: 50
          }
        },
      };
  }

  
  public ngOnDestroy(): void {
      this.visNetworkService.off(this.visNetwork, 'click');
  }
}
