webpackJsonp([4],{

/***/ 290:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarqueDetailsPageModule", function() { return MarqueDetailsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__marqueDetails__ = __webpack_require__(615);
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
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__marqueDetails__["a" /* MarqueDetailsPage */],
        ]
    })
], MarqueDetailsPageModule);

//# sourceMappingURL=marqueDetails.module.js.map

/***/ }),

/***/ 312:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__(9);
var map_1 = __webpack_require__(207);
Observable_1.Observable.prototype.map = map_1.map;
//# sourceMappingURL=map.js.map

/***/ }),

/***/ 615:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MarqueDetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(312);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
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
    function MarqueDetailsPage(navCtrl, navParams, toastCtrl, http) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toastCtrl = toastCtrl;
        this.http = http;
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
        var servData = http.get('assets/data/services.json').map(function (res) { return res.json().services; });
        servData.subscribe(function (data) {
            _this.services = data;
        });
        var brandData = http.get('assets/data/marques.json').map(function (res) { return res.json().marques; });
        brandData.subscribe(function (data) {
            _this.marques = data;
        });
    }
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
    };
    MarqueDetailsPage.prototype.ionViewWillLeave = function () {
        this.tabBarElement.style.display = 'flex';
    };
    return MarqueDetailsPage;
}());
MarqueDetailsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-marque-details',template:/*ion-inline-start:"C:\Users\Cyprien\Desktop\newApp2\src\pages\marqueDetails\marqueDetails.html"*/'<ion-content *ngIf="services != null && marques != null" padding class="transparent-header">\n\n  <ion-header no-border>\n\n  <ion-navbar color="primary" hideBackButton="true">\n\n    <ion-buttons start>\n\n        <button ion-button icon-left (click)="prev()"><ion-icon name="arrow-back"></ion-icon></button> \n\n    </ion-buttons>\n\n    <ion-title>\n\n\n\n    </ion-title>\n\n    <ion-buttons end>\n\n      \n\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n<div class="title-container">\n\n  <div id="profile-bg" [ngStyle]="{\'background-image\': \'url(\' + marques[marqueId].imgSrc +\')\'}"></div>\n\n  <h3 class="profile-title">{{marques[marqueId].title}}</h3>\n\n</div>\n\n<div id="content">\n\n  <div id="profile-info" padding>\n\n    <ion-grid>\n\n      <ion-row>\n\n        <ion-col *ngFor="let key of marques[marqueId].keys">\n\n          <h3><b class="white-text">{{key.nb}}</b><br></h3>\n\n          <p class="white-text">{{key.label}}</p>\n\n        </ion-col>\n\n      </ion-row>\n\n    </ion-grid>\n\n    <hr>\n\n    <h3 id="profile-name">{{marques[marqueId].subtitle}}<br><small><I>"{{marques[marqueId].citation}}"</I></small></h3>\n\n    <br>\n\n    <p class="profile-description">{{marques[marqueId].description}}</p>\n\n    <p class="profile-description">{{marques[marqueId].engagement}}</p>\n\n    <hr>\n\n    <br>\n\n    <ion-list>\n\n      <ion-item text-wrap (click)="toggleGroup(0)" [ngClass]="{active: isGroupShown(0)}">\n\n        <button ion-button color="primary" full class="accordion-button">\n\n          <ion-icon item-left name="arrow-forward" *ngIf="!isGroupShown(0)"></ion-icon>\n\n          <ion-icon item-left name="arrow-down" *ngIf="isGroupShown(0)"></ion-icon>\n\n          Nos Métiers de la Propreté\n\n        </button>\n\n        <div *ngIf="isGroupShown(0)" text-center>\n\n          <div *ngFor="let serviceId of marques[marqueId].metiersId">\n\n            <br>\n\n            <h2 class="white-text"><b>{{services[serviceId].title}}</b></h2>\n\n          </div>\n\n          <br>\n\n        </div>\n\n      </ion-item>\n\n    </ion-list>\n\n    <ion-list>\n\n      <ion-item text-wrap (click)="toggleGroup(1)" [ngClass]="{active: isGroupShown(1)}">\n\n        <button ion-button color="primary" class="accordion-button" full>\n\n          <ion-icon item-left name="arrow-forward" *ngIf="!isGroupShown(1)"></ion-icon>\n\n          <ion-icon item-left name="arrow-down" *ngIf="isGroupShown(1)"></ion-icon>\n\n          Nos Atouts de la Propreté\n\n        </button>\n\n        <div *ngIf="isGroupShown(1)" text-center>\n\n          <div *ngFor="let atout of marques[marqueId].atouts">\n\n            <br>\n\n            <h2 class="white-text"><b>{{atout.title}}</b></h2>\n\n            <ul>\n\n              <li class="white-text" *ngFor="let description of atout.description">{{description}}</li>\n\n            </ul>\n\n          </div>\n\n        </div>\n\n      </ion-item>\n\n    </ion-list>\n\n  </div>\n\n</div>\n\n</ion-content>'/*ion-inline-end:"C:\Users\Cyprien\Desktop\newApp2\src\pages\marqueDetails\marqueDetails.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ToastController */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */]])
], MarqueDetailsPage);

//# sourceMappingURL=marqueDetails.js.map

/***/ })

});
//# sourceMappingURL=4.js.map