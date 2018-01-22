webpackJsonp([10],{

/***/ 289:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarqueDetailsPageModule", function() { return MarqueDetailsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__marqueDetails__ = __webpack_require__(622);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_youtube_video_player__ = __webpack_require__(609);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var MarqueDetailsPageModule = (function () {
    function MarqueDetailsPageModule() {
    }
    return MarqueDetailsPageModule;
}());
MarqueDetailsPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__marqueDetails__["a" /* MarqueDetailsPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__marqueDetails__["a" /* MarqueDetailsPage */])
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_youtube_video_player__["a" /* YoutubeVideoPlayer */]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__marqueDetails__["a" /* MarqueDetailsPage */],
        ]
    })
], MarqueDetailsPageModule);

//# sourceMappingURL=marqueDetails.module.js.map

/***/ }),

/***/ 313:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__(9);
var map_1 = __webpack_require__(207);
Observable_1.Observable.prototype.map = map_1.map;
//# sourceMappingURL=map.js.map

/***/ }),

/***/ 609:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return YoutubeVideoPlayer; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_core__ = __webpack_require__(41);
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

/***/ 622:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MarqueDetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(313);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_youtube_video_player__ = __webpack_require__(609);
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
 * The Welcome Page is a splash page that quickly describes the app,
 * and then directs the user to create an account or log in.
 * If you'd like to immediately put the user onto a login/signup page,
 * we recommend not using the Welcome page.
*/
var MarqueDetailsPage = (function () {
    function MarqueDetailsPage(navCtrl, navParams, toastCtrl, http, youtube) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toastCtrl = toastCtrl;
        this.http = http;
        this.youtube = youtube;
        this.shownGroup = null;
        // The account fields for the login form.
        // If you're using the username field with or without email, make
        // sure to add it to the type
        this.account = {
            email: '@ e-mail ou pseudo',
            password: 'mot de passe'
        };
        this.like = false;
        this.tabBarElement = document.querySelector('.tabbar.show-tabbar');
        this.marqueId = navParams.get('marqueId');
        var newsData = http.get('assets/data/news.json').map(function (res) { return res.json().news; });
        newsData.subscribe(function (data) {
            _this.news = data;
        });
        var brandData = http.get('assets/data/marques.json').map(function (res) { return res.json().marques; });
        brandData.subscribe(function (data) {
            _this.marques = data;
            if (_this.marques[_this.marqueId].videoId != null) {
                var openVideo = true;
                var views = _this.navCtrl.getViews();
                for (var _i = 0, views_1 = views; _i < views_1.length; _i++) {
                    var view = views_1[_i];
                    if (view.id == "MarqueDetailsPage") {
                        openVideo = false;
                    }
                }
                if (openVideo) {
                    _this.youtube.openVideo(_this.marques[_this.marqueId].videoId);
                }
            }
        });
    }
    MarqueDetailsPage.prototype.replayVideo = function () {
        this.youtube.openVideo(this.marques[this.marqueId].videoId);
    };
    MarqueDetailsPage.prototype.toggleGroup = function (group) {
        if (this.isGroupShown(group)) {
            this.shownGroup = null;
        }
        else {
            this.shownGroup = group;
        }
    };
    ;
    MarqueDetailsPage.prototype.isGroupShown = function (group) {
        return this.shownGroup === group;
    };
    ;
    MarqueDetailsPage.prototype.prev = function () {
        this.navCtrl.pop();
    };
    MarqueDetailsPage.prototype.follow = function () {
        this.like = !this.like;
    };
    MarqueDetailsPage.prototype.ionViewWillEnter = function () {
        this.tabBarElement.style.display = 'none';
        console.log("enter");
    };
    MarqueDetailsPage.prototype.ionViewWillLeave = function () {
        this.tabBarElement.style.display = 'flex';
    };
    MarqueDetailsPage.prototype.show = function (event) {
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
    return MarqueDetailsPage;
}());
MarqueDetailsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-marque-details',template:/*ion-inline-start:"C:\Users\Cyprien\Desktop\newApp2\src\pages\marqueDetails\marqueDetails.html"*/'<ion-content *ngIf="marques != null && news != null" padding style="border-top: 20px solid #488aff">\n\n  <ion-header no-border style="background-color: rgba(0, 0, 0, 0.2)">\n\n    <ion-navbar color="primary" hideBackButton="true">\n\n      <ion-buttons start>\n\n          <button ion-button icon-left (click)="prev()"><ion-icon name="arrow-back"></ion-icon></button> \n\n      </ion-buttons>\n\n      <ion-title>\n\n\n\n      </ion-title>\n\n      <ion-buttons end>\n\n        \n\n      </ion-buttons>\n\n    </ion-navbar>\n\n  </ion-header>\n\n  <div id="profile-bg" [ngStyle]="{\'background-image\': \'url(\' + marques[marqueId].imgCover +\')\'}"></div>\n\n  <div id="content">\n\n    <ion-card>\n\n      <ion-card-content>\n\n        <div id="profile-info" padding>\n\n          <div style="position: absolute; left:35%; right:35%; z-index: 1000">\n\n              <img id="profile-image" [src]="marques[marqueId].imgProfile">\n\n          </div>\n\n          <h3 id="profile-name">{{marques[marqueId].content.title}}</h3>\n\n          <br>\n\n          <div *ngIf="marques[marqueId].content.citation">\n\n            <h4 style="font-size: 1.4em">{{marques[marqueId].content.citation}}</h4>\n\n            <br>\n\n          </div>\n\n\n\n          <hr>\n\n          <div *ngIf="marques[marqueId].videoId" class="button-video">\n\n            <ion-grid>\n\n              <ion-row>\n\n                <ion-col>\n\n                    <button *ngIf="marqueId == 0" ion-button full style="background-color: #0eae15" (click)="replayVideo()">Rejouer la vidéo</button>\n\n                    <button *ngIf="marqueId == 1" ion-button full style="background-color: #d01717" (click)="replayVideo()">Rejouer la vidéo</button>\n\n                    <button *ngIf="marqueId == 2" ion-button full style="background-color: #386ecd" (click)="replayVideo()">Rejouer la vidéo</button>\n\n                    <button *ngIf="marqueId == 3" ion-button full style="background-color: #cbc40e" (click)="replayVideo()">Rejouer la vidéo</button>\n\n                    <button *ngIf="marqueId == 4" ion-button full style="background-color: #cc7136" (click)="replayVideo()">Rejouer la vidéo</button>\n\n                    <button *ngIf="marqueId == 5" ion-button full style="background-color: #962ac8" (click)="replayVideo()">Rejouer la vidéo</button>\n\n                    <button *ngIf="marqueId == 6" ion-button full style="background-color: #d42649" (click)="replayVideo()">Rejouer la vidéo</button>\n\n                </ion-col>\n\n              </ion-row>\n\n            </ion-grid>\n\n          </div>\n\n          <hr>\n\n\n\n          <div *ngIf="marques[marqueId].content.keys != null" class="keys">\n\n            <ion-scroll zoom="false" scrollX="true" class="scroll">\n\n              <ion-grid>\n\n                <ion-row text-center>\n\n                  <ion-col *ngFor="let key of marques[marqueId].content.keys">\n\n                    <ion-badge *ngIf="marqueId == 0" style="background-color: #0eae15"><div style="margin-top: 35px;">{{key.nb}}</div></ion-badge>\n\n                    <ion-badge *ngIf="marqueId == 1" style="background-color: #d01717"><div style="margin-top: 35px;">{{key.nb}}</div></ion-badge>\n\n                    <ion-badge *ngIf="marqueId == 2" style="background-color: #386ecd"><div style="margin-top: 35px;">{{key.nb}}</div></ion-badge>\n\n                    <ion-badge *ngIf="marqueId == 3" style="background-color: #cbc40e"><div style="margin-top: 35px;">{{key.nb}}</div></ion-badge>\n\n                    <ion-badge *ngIf="marqueId == 4" style="background-color: #cc7136"><div style="margin-top: 35px;">{{key.nb}}</div></ion-badge>\n\n                    <ion-badge *ngIf="marqueId == 5" style="background-color: #962ac8"><div style="margin-top: 35px;">{{key.nb}}</div></ion-badge>\n\n                    <ion-badge *ngIf="marqueId == 6" style="background-color: #d42649"><div style="margin-top: 35px;">{{key.nb}}</div></ion-badge>\n\n                    <div class="descr">\n\n                      <p class="max-width: 150px;">{{key.label}}</p>\n\n                    </div>\n\n                  </ion-col>\n\n                </ion-row>\n\n              </ion-grid>\n\n            </ion-scroll>\n\n            <hr>\n\n          </div>\n\n\n\n          <div *ngIf="marques[marqueId].content.areas != null">\n\n            <br>\n\n            <div *ngFor="let areasCats of marques[marqueId].content.areas">\n\n              <h3 style="font-size: 1.2em" *ngIf="areasCats.title">{{areasCats.title}}</h3>\n\n              <br>\n\n              <div *ngIf="areasCats.parts">\n\n                <div *ngFor="let part of areasCats.parts">\n\n                  <h4 *ngIf="part.title">{{part.title}}</h4>\n\n                  <p *ngIf="part.subtitle">{{part.subtitle}}</p>\n\n                  <p *ngIf="part.description">{{part.description}}</p>\n\n                  <div *ngIf="part.points" style="margin-bottom:20px;" text-center>\n\n                    <ion-scroll zoom="false" scrollX="true" class="scroll">\n\n                      <ion-row text-center>\n\n                        <div class="mother">\n\n                          <div style="white-space: nowrap;" *ngFor="let area of part.points" class="area" style="margin-right:5px;">\n\n                            <ion-badge style="background-color: #0eae15" *ngIf="marqueId == 0" (click)="show($event)">{{area}}</ion-badge>\n\n                            <ion-badge style="background-color: #d01717" *ngIf="marqueId == 1" (click)="show($event)">{{area}}</ion-badge>\n\n                            <ion-badge style="background-color: #386ecd" *ngIf="marqueId == 2" (click)="show($event)">{{area}}</ion-badge>\n\n                            <ion-badge style="background-color: #cbc40e" *ngIf="marqueId == 3" (click)="show($event)">{{area}}</ion-badge>\n\n                            <ion-badge style="background-color: #cc7136" *ngIf="marqueId == 4" (click)="show($event)">{{area}}</ion-badge>\n\n                            <ion-badge style="background-color: #962ac8" *ngIf="marqueId == 5" (click)="show($event)">{{area}}</ion-badge>\n\n                            <ion-badge style="background-color: #d42649" *ngIf="marqueId == 6" (click)="show($event)">{{area}}</ion-badge>\n\n                          </div>\n\n                        </div>\n\n                      </ion-row>\n\n                    </ion-scroll>\n\n                  </div>\n\n                </div>\n\n              </div>\n\n              <p *ngIf="areasCats.conclusion"></p>\n\n            </div>\n\n            <hr>\n\n          </div>\n\n          <h3 style="font-size:1.2em" *ngIf="marques[marqueId].newsIds != null">News &amp; Infos</h3>\n\n          <br>\n\n          <div *ngIf="marques[marqueId].newsIds != null" style="position: relative; height: 200px; margin-bottom: 20px;">\n\n            <ion-slides pager>\n\n              <ion-slide *ngFor="let index of marques[marqueId].newsIds">\n\n                <img [src]="news[index].img" style="height: 100%">\n\n                <div style="position: absolute; top: 20%; right:10%; left:10%; width: 80%; background-color: rgba(0, 0, 0, 0.5); color: white; padding-top:20px; padding-bottom: 20px;">\n\n                  {{news[index].title}}\n\n                </div>\n\n              </ion-slide>\n\n            </ion-slides>\n\n            <hr>\n\n          </div>\n\n          <div *ngIf="marques[marqueId].content.parts != null">\n\n            <div *ngFor="let part of marques[marqueId].content.parts">\n\n              <h3 *ngIf="part.title != null" style="font-size: 1.2em">{{part.title}}</h3>\n\n              <br>\n\n              <div *ngIf="part.paragraphes != null">\n\n                <div *ngFor="let p of part.paragraphes" class="justify-center">\n\n                  <p *ngIf="p.accrPoints">{{p.accrPoints}}</p>\n\n                  <p *ngIf="p.accrPointsBold"><b>{{p.accrPointsBold}}</b></p>\n\n                  <div *ngIf="p.points">\n\n                    <ul style="color:#666" text-justify>\n\n                      <li *ngFor="let point of p.points">\n\n                        {{point.title}}\n\n                        <div *ngIf="point.subpoints">\n\n                          <ul>\n\n                            <li *ngFor="let subpoint of point.subpoints">{{subpoint}}</li>\n\n                          </ul>\n\n                        </div>\n\n                      </li>\n\n                    </ul>\n\n                  </div>\n\n                  <p *ngIf="p.description" text-justify>{{p.description}}</p>\n\n                  <p *ngIf="p.descriptionBold"><b>{{p.descriptionBold}}</b></p>\n\n                  <br>\n\n                </div>\n\n              </div>\n\n              <div *ngIf="part.subparts != null" class="justify-center">\n\n                <div *ngFor="let subpart of part.subparts">\n\n                  <h5 *ngIf="subpart.title != null">{{subpart.title}}</h5>\n\n                  <br>\n\n                  <div *ngIf="subpart.paragraphes != null">\n\n                    <div *ngFor="let p of subpart.paragraphes">\n\n                      <p *ngIf="p.accrPoints">{{p.accrPoints}}</p>\n\n                      <p *ngIf="p.accrPointsBold"><b>{{p.accrPointsBold}}</b></p>\n\n                      <div *ngIf="p.points">\n\n                        <ul>\n\n                          <li *ngFor="let point of p.points">\n\n                            {{point.title}}\n\n                            <div *ngIf="point.subpoints">\n\n                              <ul>\n\n                                <li *ngFor="let subpoint of point.subpoints">{{subpoint}}</li>\n\n                              </ul>\n\n                            </div>\n\n                          </li>\n\n                        </ul>\n\n                      </div>\n\n                      <p *ngIf="p.description">{{p.description}}</p>\n\n                      <p *ngIf="p.descriptionBold"><b>{{p.descriptionBold}}</b></p>\n\n                      <br>\n\n                    </div>\n\n                  </div>\n\n                </div>\n\n              </div>\n\n              <div *ngIf="part.points" class="justify-center" style="color: #666">\n\n                <ul>\n\n                  <li *ngFor="let p of part.points">{{p.title}}</li>\n\n                </ul>\n\n              </div>\n\n            </div>\n\n            <hr>\n\n          </div>\n\n        </div>\n\n      </ion-card-content>\n\n    </ion-card>\n\n  </div>\n\n</ion-content>'/*ion-inline-end:"C:\Users\Cyprien\Desktop\newApp2\src\pages\marqueDetails\marqueDetails.html"*/
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ToastController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ToastController */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__ionic_native_youtube_video_player__["a" /* YoutubeVideoPlayer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__ionic_native_youtube_video_player__["a" /* YoutubeVideoPlayer */]) === "function" && _e || Object])
], MarqueDetailsPage);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=marqueDetails.js.map

/***/ })

});
//# sourceMappingURL=10.js.map