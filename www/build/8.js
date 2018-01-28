webpackJsonp([8],{

/***/ 436:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceDetailsPageModule", function() { return ServiceDetailsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__serviceDetails__ = __webpack_require__(740);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_youtube_video_player__ = __webpack_require__(721);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ServiceDetailsPageModule = (function () {
    function ServiceDetailsPageModule() {
    }
    return ServiceDetailsPageModule;
}());
ServiceDetailsPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__serviceDetails__["a" /* ServiceDetailsPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__serviceDetails__["a" /* ServiceDetailsPage */])
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_youtube_video_player__["a" /* YoutubeVideoPlayer */]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__serviceDetails__["a" /* ServiceDetailsPage */]
        ]
    })
], ServiceDetailsPageModule);

//# sourceMappingURL=serviceDetails.module.js.map

/***/ }),

/***/ 444:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__(9);
var map_1 = __webpack_require__(256);
Observable_1.Observable.prototype.map = map_1.map;
//# sourceMappingURL=map.js.map

/***/ }),

/***/ 721:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return YoutubeVideoPlayer; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_core__ = __webpack_require__(78);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * @name Youtube Video Player
 * @description
 * Plays YouTube videos in Native YouTube App
 *
 * @usage
 * For Android 5.0+ you will need to add the following to config.xml
 * ```xml
 * <preference name="YouTubeDataApiKey" value="[YOUR YOUTUBE API]" />
 * ```
 * For more information: https://developers.google.com/youtube/v3/getting-started
 *
 *
 * ```typescript
 * import { YoutubeVideoPlayer } from '@ionic-native/youtube-video-player';
 *
 * constructor(private youtube: YoutubeVideoPlayer) { }
 *
 * ...
 *
 *
 * this.youtube.openVideo('myvideoid');
 *
 * ```
 */
var YoutubeVideoPlayer = (function (_super) {
    __extends(YoutubeVideoPlayer, _super);
    function YoutubeVideoPlayer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Plays a YouTube video
     * @param videoId {string} Video ID
     */
    YoutubeVideoPlayer.prototype.openVideo = function (videoId) { };
    YoutubeVideoPlayer.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"] },
    ];
    /** @nocollapse */
    YoutubeVideoPlayer.ctorParameters = function () { return []; };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", void 0)
    ], YoutubeVideoPlayer.prototype, "openVideo", null);
    YoutubeVideoPlayer = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["d" /* Plugin */])({
            pluginName: 'YoutubeVideoPlayer',
            plugin: 'cordova-plugin-youtube-video-player',
            pluginRef: 'YoutubeVideoPlayer',
            repo: 'https://github.com/ihadeed/CordovaYoutubeVideoPlayer',
            platforms: ['Android', 'iOS']
        })
    ], YoutubeVideoPlayer);
    return YoutubeVideoPlayer;
}(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* IonicNativePlugin */]));

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 740:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServiceDetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(254);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(444);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_youtube_video_player__ = __webpack_require__(721);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// import { AskInfoPage } from '../pages';




var ServiceDetailsPage = (function () {
    function ServiceDetailsPage(navCtrl, navParams, toastCtrl, http, youtube) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toastCtrl = toastCtrl;
        this.youtube = youtube;
        this.tabBarElement = document.querySelector('.tabbar.show-tabbar');
        this.serviceId = navParams.get('param1');
        var brandData = http.get('assets/data/marques.json').map(function (res) { return res.json().marques; });
        brandData.subscribe(function (data) {
            _this.marques = data;
        });
        var productData = http.get('assets/data/products.json').map(function (res) { return res.json().products; });
        productData.subscribe(function (data) {
            _this.products = data;
        });
        var servData = http.get('assets/data/services.json').map(function (res) { return res.json().services; });
        servData.subscribe(function (data) {
            _this.services = data;
            if (_this.services[_this.serviceId].videoId != null) {
                var openVideo = true;
                var vlength = _this.navCtrl.getViews().length;
                var final = new Array();
                for (var _i = 0, _a = _this.navCtrl.getViews(); _i < _a.length; _i++) {
                    var views = _a[_i];
                    if (views != _this.navCtrl.getViews()[vlength - 1]) {
                        final.push(views);
                    }
                }
                for (var _b = 0, final_1 = final; _b < final_1.length; _b++) {
                    var view = final_1[_b];
                    if (view.id == "ServiceDetailsPage") {
                        openVideo = false;
                    }
                }
                if (openVideo) {
                    _this.youtube.openVideo(_this.services[_this.serviceId].videoId);
                }
            }
        });
    }
    ServiceDetailsPage.prototype.prev = function () {
        this.navCtrl.pop();
    };
    ServiceDetailsPage.prototype.replayVideo = function () {
        this.youtube.openVideo(this.services[this.serviceId].videoId);
    };
    ServiceDetailsPage.prototype.playVideo = function (videoId) {
        this.youtube.openVideo(videoId);
    };
    ServiceDetailsPage.prototype.showMarque = function () {
        console.log(this.services[this.serviceId].marqueId);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__pages__["b" /* MarqueDetailsPage */], {
            marqueId: this.services[this.serviceId].marqueId
        });
    };
    ServiceDetailsPage.prototype.ionViewWillEnter = function () {
        this.tabBarElement.style.display = 'none';
    };
    ServiceDetailsPage.prototype.ionViewWillLeave = function () {
        this.tabBarElement.style.display = 'flex';
    };
    ServiceDetailsPage.prototype.showProduct = function (event, index) {
        console.log(index);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__pages__["d" /* ProductDetailsPage */], {
            productId: index
        });
    };
    ServiceDetailsPage.prototype.infos = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__pages__["a" /* AskInfoPage */], {
            serviceId: this.serviceId,
            serviceName: this.services[this.serviceId].title
        });
    };
    ServiceDetailsPage.prototype.show = function (event) {
        if (event.srcElement.style.wordBreak == "normal") {
            event.srcElement.style.wordBreak = "break-word";
            event.srcElement.style.width = "100px";
        }
        else {
            event.srcElement.style.wordBreak = "normal";
            event.srcElement.style.width = "100%";
            event.srcElement.style.minWidth = "100px";
        }
    };
    return ServiceDetailsPage;
}());
ServiceDetailsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-service-details',template:/*ion-inline-start:"C:\Users\Cyprien\Desktop\newApp2\src\pages\serviceDetails\serviceDetails.html"*/'<ion-content *ngIf="services != null && marques != null && products != null" padding style="border-top: 20px solid #488aff">\n\n  <ion-header no-border style="background-color: rgba(0, 0, 0, 0.2)">\n\n    <ion-navbar color="primary" hideBackButton="true">\n\n      <ion-buttons start>\n\n          <button ion-button icon-left (click)="prev()"><ion-icon name="arrow-back"></ion-icon></button> \n\n      </ion-buttons>\n\n      <ion-title>\n\n\n\n      </ion-title>\n\n      <ion-buttons end>\n\n        \n\n      </ion-buttons>\n\n    </ion-navbar>\n\n  </ion-header>\n\n  <div id="profile-bg" [ngStyle]="{\'background-image\': \'url(\' + services[serviceId].imgMarque +\')\'}"></div>\n\n  <div id="content">\n\n    <ion-card>\n\n      <ion-card-content>\n\n        <div id="profile-info" padding>\n\n          <div style="position: absolute; left:35%; right:35%; z-index: 1000">\n\n              <img id="profile-image" [src]="services[serviceId].imgService">\n\n          </div>\n\n          <h3 id="profile-name">{{services[serviceId].content.title}}</h3>\n\n          <br>\n\n          <div *ngIf="services[serviceId].content.subtitle">\n\n            <h4 style="font-size: 1.4em">{{services[serviceId].content.subtitle}}</h4>\n\n            <br>\n\n          </div>\n\n          <div *ngIf="services[serviceId].content.introBold">\n\n            <p><b>{{services[serviceId].content.introBold}}</b></p>\n\n            <br>\n\n          </div>\n\n          <div *ngIf="services[serviceId].content.intro">\n\n            <p><b>{{services[serviceId].content.intro}}</b></p>\n\n            <br>\n\n          </div>\n\n          <div *ngIf="services[serviceId].content.pointsIntro != null">\n\n            <ul>\n\n              <li *ngFor="let point of services[serviceId].content.pointsIntro"> {{point}} </li>\n\n            </ul>\n\n          </div>\n\n          <ion-grid>\n\n            <ion-row>\n\n              <ion-col *ngIf="services[serviceId].videoId">\n\n                  <button ion-button color="primary" small (click)="replayVideo()">Rejouer la vidéo &nbsp;&nbsp;<ion-icon name="logo-youtube" style="color: white"></ion-icon></button>\n\n              </ion-col>\n\n              <ion-col>\n\n                  <button ion-button color="primary" small (click)="infos()">Demande d\'informations</button>\n\n              </ion-col>\n\n            </ion-row>\n\n          </ion-grid>\n\n          <hr>\n\n          <ion-grid>\n\n            <ion-row>\n\n              <ion-col>\n\n                <button *ngIf="services[serviceId].marqueId == 0" ion-button full style="background-color: #0eae15" (click)="showMarque()">{{marques[services[serviceId].marqueId].title}}</button>\n\n                <button *ngIf="services[serviceId].marqueId == 1" ion-button full style="background-color: #d01717" (click)="showMarque()">{{marques[services[serviceId].marqueId].title}}</button>\n\n                <button *ngIf="services[serviceId].marqueId == 2" ion-button full style="background-color: #386ecd" (click)="showMarque()">{{marques[services[serviceId].marqueId].title}}</button>\n\n                <button *ngIf="services[serviceId].marqueId == 3" ion-button full style="background-color: #cbc40e" (click)="showMarque()">{{marques[services[serviceId].marqueId].title}}</button>\n\n                <button *ngIf="services[serviceId].marqueId == 4" ion-button full style="background-color: #cc7136" (click)="showMarque()">{{marques[services[serviceId].marqueId].title}}</button>\n\n                <button *ngIf="services[serviceId].marqueId == 5" ion-button full style="background-color: #962ac8" (click)="showMarque()">{{marques[services[serviceId].marqueId].title}}</button>\n\n                <button *ngIf="services[serviceId].marqueId == 6" ion-button full style="background-color: #d42649" (click)="showMarque()">{{marques[services[serviceId].marqueId].title}}</button>\n\n              </ion-col>\n\n            </ion-row>\n\n          </ion-grid>\n\n          <hr>\n\n          <div *ngIf="services[serviceId].productIds">\n\n            <h3 style="font-size:1.2em" *ngIf="services[serviceId].productIds != null">Fiches &amp; Produits</h3>\n\n            <br>\n\n            <div *ngIf="services[serviceId].productIds != null" style="position: relative; height: 150px; margin-bottom: 20px;">\n\n              <ion-slides pager>\n\n                <ion-slide *ngFor="let index of services[serviceId].productIds">\n\n                  <div (click)="showProduct($event, index)">\n\n                    <img [src]="products[index].img">\n\n                    <div style="position: absolute; top: 20%; right:10%; left:10%; width: 80%; background-color: rgba(0, 0, 0, 0.5); color: white; padding-top:20px; padding-bottom: 20px;">\n\n                      {{products[index].title}}\n\n                    </div>\n\n                  </div>\n\n                </ion-slide>\n\n              </ion-slides>\n\n            </div>\n\n            <hr>\n\n          </div>\n\n          <div *ngIf="services[serviceId].content.parts != null">\n\n            <div *ngFor="let part of services[serviceId].content.parts">\n\n              <h3 *ngIf="part.title != null" style="font-size: 1.2em">{{part.title}}</h3>\n\n              <br>\n\n              <div *ngIf="part.paragraphes != null">\n\n                <div *ngFor="let p of part.paragraphes" class="justify-center">\n\n                  <p *ngIf="p.accrPoints">{{p.accrPoints}}</p>\n\n                  <p *ngIf="p.accrPointsBold"><b>{{p.accrPointsBold}}</b></p>\n\n                  <div *ngIf="p.points">\n\n                    <ul style="color:#666" text-justify>\n\n                      <li *ngFor="let point of p.points">\n\n                        {{point.title}}\n\n                        <div *ngIf="point.subpoints">\n\n                          <ul>\n\n                            <li *ngFor="let subpoint of point.subpoints">{{subpoint}}</li>\n\n                          </ul>\n\n                        </div>\n\n                      </li>\n\n                    </ul>\n\n                  </div>\n\n                  <p *ngIf="p.description" text-justify>{{p.description}}</p>\n\n                  <p *ngIf="p.descriptionBold"><b>{{p.descriptionBold}}</b></p>\n\n                  <div *ngIf="p.dressing != null" style="position: relative; height: 350px; margin-bottom: 20px;">\n\n                    <ion-slides *ngIf="p.dressing" pager>\n\n                        <ion-slide *ngFor="let img of p.dressing">\n\n                          <img [src]="img">\n\n                        </ion-slide>\n\n                      </ion-slides>\n\n                  </div>\n\n                  <br>\n\n                </div>\n\n              </div>\n\n              <div *ngIf="part.subparts != null">\n\n                <div *ngFor="let subpart of part.subparts">\n\n                  <h5 *ngIf="subpart.title != null">{{subpart.title}}</h5>\n\n                  <br>\n\n                  <div *ngIf="subpart.videoId">\n\n                    <button ion-button small (click)="playVideo(subpart.videoId)">Jouer la vidéo &nbsp;&nbsp;<ion-icon name="logo-youtube" style="color: white"></ion-icon></button>\n\n                    <br>\n\n                  </div>\n\n                  <div *ngIf="subpart.paragraphes != null">\n\n                    <div *ngFor="let p of subpart.paragraphes">\n\n                      <p *ngIf="p.accrPoints">{{p.accrPoints}}</p>\n\n                      <p *ngIf="p.accrPointsBold"><b>{{p.accrPointsBold}}</b></p>\n\n                      <div *ngIf="p.points">\n\n                        <ul>\n\n                          <li *ngFor="let point of p.points">\n\n                            {{point.title}}\n\n                            <div *ngIf="point.subpoints">\n\n                              <ul>\n\n                                <li *ngFor="let subpoint of point.subpoints">{{subpoint}}</li>\n\n                              </ul>\n\n                            </div>\n\n                          </li>\n\n                        </ul>\n\n                      </div>\n\n                      <p *ngIf="p.description">{{p.description}}</p>\n\n                      <p *ngIf="p.descriptionBold"><b>{{p.descriptionBold}}</b></p>\n\n                      <br>\n\n                    </div>\n\n                  </div>\n\n                </div>\n\n              </div>\n\n              <div *ngIf="part.points">\n\n                <ul>\n\n                  <li *ngFor="let p of part.points">{{p.title}}</li>\n\n                </ul>\n\n              </div>\n\n            </div>\n\n            <hr>\n\n          </div>\n\n          <div *ngIf="services[serviceId].content.areas != null">\n\n            <div *ngFor="let areasCats of services[serviceId].content.areas">\n\n              <h3 style="font-size: 1.2em" *ngIf="areasCats.title">{{areasCats.title}}</h3>\n\n              <br>\n\n              <div *ngIf="areasCats.parts">\n\n                <div *ngFor="let part of areasCats.parts">\n\n                  <h4 *ngIf="part.title">{{part.title}}</h4>\n\n                  <p *ngIf="part.subtitle">{{part.subtitle}}</p>\n\n                  <p *ngIf="part.description">{{part.description}}</p>\n\n                  <div *ngIf="part.points" style="margin-bottom:20px;" text-center>\n\n                    <ion-scroll zoom="false" scrollX="true" class="scroll">\n\n                      <ion-row text-center>\n\n                        <div class="mother">\n\n                          <div style="white-space: nowrap;" *ngFor="let area of part.points" class="area" style="margin-right:5px;">\n\n                            <ion-badge style="background-color: #0eae15" *ngIf="services[serviceId].marqueId == 0" (click)="show($event)">{{area}}</ion-badge>\n\n                            <ion-badge style="background-color: #d01717" *ngIf="services[serviceId].marqueId == 1" (click)="show($event)">{{area}}</ion-badge>\n\n                            <ion-badge style="background-color: #386ecd" *ngIf="services[serviceId].marqueId == 2" (click)="show($event)">{{area}}</ion-badge>\n\n                            <ion-badge style="background-color: #cbc40e" *ngIf="services[serviceId].marqueId == 3" (click)="show($event)">{{area}}</ion-badge>\n\n                            <ion-badge style="background-color: #cc7136" *ngIf="services[serviceId].marqueId == 4" (click)="show($event)">{{area}}</ion-badge>\n\n                            <ion-badge style="background-color: #962ac8" *ngIf="services[serviceId].marqueId == 5" (click)="show($event)">{{area}}</ion-badge>\n\n                            <ion-badge style="background-color: #d42649" *ngIf="services[serviceId].marqueId == 6" (click)="show($event)">{{area}}</ion-badge>\n\n                          </div>\n\n                        </div>\n\n                      </ion-row>\n\n                    </ion-scroll>\n\n                  </div>\n\n                  <br>\n\n                </div>\n\n              </div>\n\n              <p *ngIf="areasCats.conclusion"></p>\n\n            </div>\n\n            <hr>\n\n          </div>\n\n      <!-- <p> &bull; {{services.location}}</p>\n\n      <p class="profile-description">{{service.description}}</p>\n\n      <button ion-button (click)="seeMarque()">Voir la marque</button>\n\n      <button ion-button *ngIf="!like" small color="purple" (click)="follow()">Je n\'aime plus</button>\n\n      <button ion-button *ngIf="like" class="follow-button" small color="purple" (click)="follow()">J\'aime <ion-icon name="checkmark"></ion-icon></button> -->\n\n        </div>  \n\n      </ion-card-content>\n\n    </ion-card>\n\n  </div>\n\n</ion-content>'/*ion-inline-end:"C:\Users\Cyprien\Desktop\newApp2\src\pages\serviceDetails\serviceDetails.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* ToastController */], __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_youtube_video_player__["a" /* YoutubeVideoPlayer */]])
], ServiceDetailsPage);

//# sourceMappingURL=serviceDetails.js.map

/***/ })

});
//# sourceMappingURL=8.js.map