webpackJsonp([4],{

/***/ 292:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceDetailsPageModule", function() { return ServiceDetailsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__serviceDetails__ = __webpack_require__(618);
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
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__serviceDetails__["a" /* ServiceDetailsPage */])
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__serviceDetails__["a" /* ServiceDetailsPage */]
        ]
    })
], ServiceDetailsPageModule);

//# sourceMappingURL=serviceDetails.module.js.map

/***/ }),

/***/ 316:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__(9);
var map_1 = __webpack_require__(207);
Observable_1.Observable.prototype.map = map_1.map;
//# sourceMappingURL=map.js.map

/***/ }),

/***/ 618:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServiceDetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(316);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
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
var ServiceDetailsPage = (function () {
    function ServiceDetailsPage(navCtrl, navParams, toastCtrl, http) {
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
        this.serviceId = navParams.get('param1');
        var servData = http.get('assets/data/services.json').map(function (res) { return res.json().services; });
        servData.subscribe(function (data) {
            _this.services = data;
        });
        var brandData = http.get('assets/data/marques.json').map(function (res) { return res.json().marques; });
        brandData.subscribe(function (data) {
            _this.marques = data;
        });
        var productData = http.get('assets/data/products.json').map(function (res) { return res.json().products; });
        productData.subscribe(function (data) {
            _this.products = data;
        });
    }
    ServiceDetailsPage.prototype.prev = function () {
        this.navCtrl.pop();
    };
    ServiceDetailsPage.prototype.follow = function () {
        this.like = !this.like;
    };
    ServiceDetailsPage.prototype.showMarque = function () {
        console.log(this.services[this.serviceId].marqueId);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__pages__["a" /* MarqueDetailsPage */], {
            marqueId: this.services[this.serviceId].marqueId
        });
    };
    ServiceDetailsPage.prototype.toggleGroup = function (group) {
        if (this.isGroupShown(group)) {
            this.shownGroup = null;
        }
        else {
            this.shownGroup = group;
        }
    };
    ;
    ServiceDetailsPage.prototype.isGroupShown = function (group) {
        return this.shownGroup === group;
    };
    ;
    ServiceDetailsPage.prototype.ionViewWillEnter = function () {
        this.tabBarElement.style.display = 'none';
    };
    ServiceDetailsPage.prototype.ionViewWillLeave = function () {
        this.tabBarElement.style.display = 'flex';
    };
    return ServiceDetailsPage;
}());
ServiceDetailsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-service-details',template:/*ion-inline-start:"C:\Users\Cyprien\Desktop\newApp2\src\pages\serviceDetails\serviceDetails.html"*/'<ion-content *ngIf="services != null && marques != null && products != null" padding class="transparent-header">\n\n  <ion-header no-border>\n\n    <ion-navbar color="primary" hideBackButton="true">\n\n      <ion-buttons start>\n\n          <button ion-button icon-left (click)="prev()"><ion-icon name="arrow-back"></ion-icon></button> \n\n      </ion-buttons>\n\n      <ion-title>\n\n\n\n      </ion-title>\n\n      <ion-buttons end>\n\n        \n\n      </ion-buttons>\n\n    </ion-navbar>\n\n  </ion-header>\n\n<div id="profile-bg" [ngStyle]="{\'background-image\': \'url(\' + services[serviceId].coverImage +\')\'}"></div>\n\n<div id="content">\n\n  <ion-card>\n\n    <ion-card-content>\n\n  <div id="profile-info" padding>\n\n    <div style="position: absolute; left:35%; right:35%; z-index: 1000">\n\n        <img id="profile-image" [src]="services[serviceId].profileImage">\n\n    </div>\n\n    <h3 id="profile-name">{{services[serviceId].title}}</h3>\n\n    <h4 class="white-text" *ngIf="services[serviceId].subtitle">{{services[serviceId].subtitle}}</h4>\n\n    <hr>\n\n    <ion-grid>\n\n      <ion-row>\n\n        <ion-col>\n\n          <button ion-button full color="primary" (click)="showMarque()">{{marques[services[serviceId].marqueId].title}}</button>\n\n        </ion-col>\n\n        <ion-col>\n\n          <button ion-button full color="primary">Demande d\'informations</button>\n\n        </ion-col>\n\n      </ion-row>\n\n    </ion-grid>\n\n    <hr>\n\n    <br>\n\n    <div *ngIf="services[serviceId].subtitle2 != null">\n\n      <h5>{{services[serviceId].subtitle2}}</h5>\n\n      <br>\n\n      <div *ngFor="let p of services[serviceId].paragraphes">\n\n        <p>{{p}}</p>\n\n        <br>\n\n      </div>\n\n      <hr>\n\n    </div>\n\n    <div *ngIf="services[serviceId].description != null">\n\n      <div *ngFor="let description of services[serviceId].description">\n\n        <h5 *ngIf="description.title != null">{{description.title}}</h5>\n\n        <br>\n\n        <div *ngIf="description.paragraphes != null">\n\n          <div *ngFor="let p of description.paragraphes">\n\n            <p >{{p}}</p>\n\n          </div>\n\n        </div>\n\n        <div *ngIf="description.points != null">\n\n          <ul>\n\n            <li *ngFor="let p of description.points">{{p}}</li>\n\n          </ul>\n\n        </div>\n\n        <br>\n\n        <br>\n\n      </div>\n\n      <hr>\n\n    </div>\n\n    <div *ngIf="services[serviceId].engagement != null">\n\n      <h3>Engagements</h3>\n\n      <p>{{services[serviceId].engagement.title}}</p>\n\n      <ul>\n\n        <li *ngFor="let p of services[serviceId].engagement.points">{{p}}</li>\n\n      </ul>\n\n      <hr>\n\n    </div>\n\n    <h5 *ngIf="services[serviceId].productsId != null">Produits relatifs</h5>\n\n    <div *ngIf="services[serviceId].productsId != null" style="position: relative; height: 200px">\n\n      <ion-slides pager>\n\n        <ion-slide *ngFor="let index of services[serviceId].productsId">\n\n          <img [src]="products[index].imgSrc" style="height: 100%">\n\n          <h3 style="position: absolute; top: 35%; width: 100%; text-shadow: 2px 2px #000000;">{{products[index].title}}</h3>\n\n        </ion-slide>\n\n      </ion-slides>\n\n      <hr>\n\n    </div>\n\n    <br>\n\n    <div *ngIf="services[serviceId].areas != null">\n\n      <ion-list>\n\n        <ion-item text-wrap (click)="toggleGroup(0)" [ngClass]="{active: isGroupShown(0)}">\n\n          <button ion-button color="primary" full class="accordion-button">\n\n            <ion-icon item-left name="arrow-forward" *ngIf="!isGroupShown(0)"></ion-icon>\n\n            <ion-icon item-left name="arrow-down" *ngIf="isGroupShown(0)"></ion-icon>\n\n            Domaines d\'interventions\n\n          </button>\n\n          <div *ngIf="isGroupShown(0)" text-center>\n\n            <div *ngFor="let area of services[serviceId].areas">\n\n              <h5 *ngIf= "area.title != null">{{area.title}}</h5>\n\n              <ul>\n\n                  <li *ngFor="let p of area.points">\n\n                    {{p}}\n\n                  </li>\n\n                </ul>\n\n            </div>\n\n            <p *ngIf="services[serviceId].areasQual != null">{{services[serviceId].areasQual}}</p>\n\n            <br>\n\n          </div>\n\n        </ion-item>\n\n      </ion-list>\n\n    </div>\n\n    <div *ngIf="services[serviceId].sectors != null">\n\n      <ion-list>\n\n        <ion-item text-wrap (click)="toggleGroup(1)" [ngClass]="{active: isGroupShown(1)}">\n\n          <button ion-button color="primary" full class="accordion-button">\n\n            <ion-icon item-left name="arrow-forward" *ngIf="!isGroupShown(1)"></ion-icon>\n\n            <ion-icon item-left name="arrow-down" *ngIf="isGroupShown(1)"></ion-icon>\n\n            Domaines d\'activités\n\n          </button>\n\n          <div *ngIf="isGroupShown(1)" text-center>\n\n            <div *ngFor="let sector of services[serviceId].sectors">\n\n              <br>\n\n              <h5>{{sector.title}}</h5>\n\n              <p *ngIf="sector.subtitle != null">{{sector.subtitle}}</p>\n\n              <p *ngIf="sector.description != null">{{sector.description}}</p>\n\n              <ul>\n\n                <li *ngFor="let p of sector.points">{{p}}</li>\n\n              </ul>\n\n            </div>\n\n          </div>\n\n        </ion-item>\n\n      </ion-list>\n\n    </div>\n\n    <div *ngIf="services[serviceId].serviceDetails != null">\n\n      <ion-list>\n\n        <ion-item text-wrap (click)="toggleGroup(2)" [ngClass]="{active: isGroupShown(2)}">\n\n          <button ion-button color="primary" full class="accordion-button">\n\n            <ion-icon item-left name="arrow-forward" *ngIf="!isGroupShown(2)"></ion-icon>\n\n            <ion-icon item-left name="arrow-down" *ngIf="isGroupShown(2)"></ion-icon>\n\n            Notre gamme de services\n\n          </button>\n\n          <div *ngIf="isGroupShown(2)" text-center>\n\n            <p class="white-text">{{services[serviceId].serviceDetails.description}}</p>\n\n            <ul>\n\n              <li class="white-text" *ngFor="let p of services[serviceId].serviceDetails.points">{{p}}</li>\n\n            </ul>\n\n          </div>\n\n        </ion-item>\n\n      </ion-list>\n\n      <hr>\n\n    </div>\n\n\n\n\n\n\n\n    <!-- <p> &bull; {{services.location}}</p>\n\n    <p class="profile-description">{{service.description}}</p>\n\n    <button ion-button (click)="seeMarque()">Voir la marque</button>\n\n    <button ion-button *ngIf="!like" small color="purple" (click)="follow()">Je n\'aime plus</button>\n\n    <button ion-button *ngIf="like" class="follow-button" small color="purple" (click)="follow()">J\'aime <ion-icon name="checkmark"></ion-icon></button> -->\n\n  </div>\n\n</ion-card-content>\n\n</ion-card>\n\n</div>\n\n</ion-content>'/*ion-inline-end:"C:\Users\Cyprien\Desktop\newApp2\src\pages\serviceDetails\serviceDetails.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ToastController */], __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Http */]])
], ServiceDetailsPage);

//# sourceMappingURL=serviceDetails.js.map

/***/ })

});
//# sourceMappingURL=4.js.map