import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';

import { MarqueDetailsPage } from '../pages';
import { ProductDetailsPage } from '../pages';

import { Http } from '@angular/http';
import 'rxjs/add/operator/map'

import { YoutubeVideoPlayer } from '@ionic-native/youtube-video-player';


@IonicPage()
@Component({
  selector: 'page-service-details',
  templateUrl: 'serviceDetails.html'
})
export class ServiceDetailsPage {

  tabBarElement: any;
  serviceId;
  services: any[];
  marques:any[];
  products:any[];

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public toastCtrl: ToastController, private http:Http, private youtube: YoutubeVideoPlayer) {

    this.tabBarElement = document.querySelector('.tabbar.show-tabbar');
    this.serviceId = navParams.get('param1');
    console.log(this.serviceId);

    let brandData = http.get('assets/data/marques.json').map(res => res.json().marques);
    brandData.subscribe(data => {
      this.marques = data;
    });

    let productData = http.get('assets/data/products.json').map(res => res.json().products);
    productData.subscribe(data => {
      this.products = data;
    });
    
    let servData = http.get('assets/data/services.json').map(res => res.json().services);
    servData.subscribe(data => {
      this.services = data;
      if (this.services[this.serviceId].videoId != null)
      {
        let openVideo = true;
        let views =this.navCtrl.getViews();
        views.pop();
        for (let view of views){
          if (view.id == "ServiceDetailsPage"){
            openVideo = false;
          }
        }
        if (openVideo){
          this.youtube.openVideo(this.services[this.serviceId].videoId);
        }
      }
    });

  }

  
  prev() {
    this.navCtrl.pop();
  }

  replayVideo(){
    this.youtube.openVideo(this.services[this.serviceId].videoId);
  }

  showMarque(){
    console.log(this.services[this.serviceId].marqueId);
    this.navCtrl.push(MarqueDetailsPage, {
      marqueId: this.services[this.serviceId].marqueId
    });
  }

  ionViewWillEnter(){
    this.tabBarElement.style.display = 'none';
  }

  ionViewWillLeave(){
    this.tabBarElement.style.display = 'flex';
  }

  showProduct(event, index){
    console.log(index);
    this.navCtrl.push(ProductDetailsPage, {
      productId: index
    });

  }

  show(event){
    if (event.srcElement.style.wordBreak == "normal"){
      event.srcElement.style.wordBreak = "break-word";
      event.srcElement.style.width = "100px";
    }
    else{
      event.srcElement.style.wordBreak = "normal";
      event.srcElement.style.width = "100%";
      event.srcElement.style.minWidth = "100px";
    }
  }
}
