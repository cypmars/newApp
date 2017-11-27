webpackJsonp([6],{

/***/ 295:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SimpleFormPageModule", function() { return SimpleFormPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__simple_form1__ = __webpack_require__(620);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SimpleFormPageModule = (function () {
    function SimpleFormPageModule() {
    }
    return SimpleFormPageModule;
}());
SimpleFormPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__simple_form1__["a" /* SimpleForm1Page */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__simple_form1__["a" /* SimpleForm1Page */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__simple_form1__["a" /* SimpleForm1Page */]
        ]
    })
], SimpleFormPageModule);

//# sourceMappingURL=simple-form1.module.js.map

/***/ }),

/***/ 620:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SimpleForm1Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(54);
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
var SimpleForm1Page = (function () {
    function SimpleForm1Page(navCtrl, navParams, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toastCtrl = toastCtrl;
        this.account = {
            email: '@ e-mail ou pseudo',
            password: 'mot de passe'
        };
        this.search = {
            param1: 'iconeName',
            param2: 'param2',
            param3: 'param3',
            param4: 'param4'
        };
        this.itemsCat = [
            {
                id: 0,
                name: "Agriculture & agroalimentaire",
                iconName: "leaf"
            },
            {
                id: 1,
                name: "Industrie",
                iconName: "lock"
            },
            {
                id: 2,
                name: "Energie",
                iconName: "plane"
            },
            {
                id: 3,
                name: "Commerce & artisanat",
                iconName: "people"
            },
            {
                id: 4,
                name: "Tourisme",
                iconName: "train"
            },
            {
                id: 5,
                name: "Télécoms & Internet",
                iconName: "nuclear"
            },
            {
                id: 6,
                name: "Recherche",
                iconName: "school"
            },
            {
                id: 7,
                name: "Finance et assurance",
                iconName: "code-working"
            }
        ];
        this.myIcon = "Quel est le secteur d'activité de votre Entreprise ?";
        this.param1 = navParams.get('param1');
    }
    SimpleForm1Page.prototype.prev = function () {
        this.navCtrl.pop();
    };
    SimpleForm1Page.prototype.login = function () {
        this.navCtrl.push('WelcomePage');
    };
    SimpleForm1Page.prototype.ngAfterViewInit = function () {
        this.fab.setActiveLists(true);
    };
    SimpleForm1Page.prototype.chooseService = function (event, data, fab) {
        this.myIcon = this.itemsCat[data].name;
        this.navCtrl.push('SimpleForm2Page', {
            param1: this.param1,
            param2: this.myIcon,
        });
    };
    return SimpleForm1Page;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('fab'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* FabContainer */])
], SimpleForm1Page.prototype, "fab", void 0);
SimpleForm1Page = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-simple-form1',template:/*ion-inline-start:"C:\Users\Cyprien\Desktop\newApp2\src\pages\simple-form1\simple-form1.html"*/'<ion-header>\n\n  <ion-navbar color="primary" hideBackButton="true">\n\n    <ion-buttons start>\n\n      <button ion-button icon-left (click)="prev()"><ion-icon name="arrow-back"></ion-icon></button> \n\n    </ion-buttons>\n\n    <ion-title>\n\n      Recherche\n\n    </ion-title>\n\n    <ion-buttons end>\n\n      <button ion-button icon-left (click)="login()"><ion-icon name="contact"></ion-icon></button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n  <ion-searchbar (ionInput)="getItems($event)"></ion-searchbar>\n\n</ion-header>\n\n<ion-content>\n\n    <p class="white-text margin-plus" style="font-size: 1.2em;" text-center>Quel est le secteur d\'activité de votre Entreprise ?</p>\n\n    <div class="splash-info" center>\n\n        <div class="splash-form">\n\n          <div class="myFab">\n\n            <!--<ion-fab class="myFab" center top margin-top #fab>\n\n              <button id="show-services" ion-fab color="danger"><ion-icon [name]="myIcon"></ion-icon></button>\n\n              <ion-fab-list side="top">\n\n                <button (click)="chooseService($event, 0, fab)" ion-fab color="white"><ion-icon class="larger" name="leaf"></ion-icon></button>\n\n              </ion-fab-list>\n\n              <ion-fab-list side="top-left">\n\n                <button (click)="chooseService($event, 1, fab)" ion-fab color="white"><ion-icon class="larger" name="lock"></ion-icon></button>\n\n              </ion-fab-list>\n\n              <ion-fab-list side="left">\n\n                <button (click)="chooseService($event, 2, fab)" ion-fab color="white"><ion-icon class="larger" name="plane"></ion-icon></button>\n\n              </ion-fab-list>\n\n              <ion-fab-list side="bottom-left">\n\n                <button (click)="chooseService($event, 3, fab)" ion-fab color="white"><ion-icon class="larger" name="people"></ion-icon></button>\n\n              </ion-fab-list>\n\n              <ion-fab-list side="bottom">\n\n                <button (click)="chooseService($event, 4, fab)" ion-fab color="white"><ion-icon class="larger" name="train"></ion-icon></button>\n\n              </ion-fab-list>\n\n              <ion-fab-list side="bottom-right">\n\n                <button (click)="chooseService($event, 5, fab)" ion-fab color="white"><ion-icon class="larger" name="nuclear"></ion-icon></button>\n\n              </ion-fab-list>\n\n              <ion-fab-list side="right">\n\n                <button (click)="chooseService($event, 6, fab)" ion-fab color="white"><ion-icon class="larger" name="school"></ion-icon></button>\n\n              </ion-fab-list>\n\n              <ion-fab-list side="top-right">\n\n                <button (click)="chooseService($event, 7, fab)" ion-fab color="white"><ion-icon class="larger" name="code-working"></ion-icon></button>\n\n              </ion-fab-list>\n\n            </ion-fab>-->\n\n            <ion-fab class="myFab" center middle #fab >\n\n                <button id="show-services" ion-fab color="danger">{{myIcon}}</button>\n\n                <ion-fab-list side="top">\n\n                  <button (click)="chooseService($event, 0, fab)" ion-fab color="white">Agriculture &amp; agroalimentaire</button>\n\n                </ion-fab-list>\n\n                <ion-fab-list side="top-left">\n\n                  <button (click)="chooseService($event, 1, fab)" ion-fab color="white">Industrie</button>\n\n                </ion-fab-list>\n\n                <ion-fab-list side="left">\n\n                  <button (click)="chooseService($event, 2, fab)" ion-fab color="white">Energie</button>\n\n                </ion-fab-list>\n\n                <ion-fab-list side="bottom-left">\n\n                  <button (click)="chooseService($event, 3, fab)" ion-fab color="white">Commerce &amp; artisanat</button>\n\n                </ion-fab-list>\n\n                <ion-fab-list side="bottom">\n\n                  <button (click)="chooseService($event, 4, fab)" ion-fab color="white">Tourisme</button>\n\n                </ion-fab-list>\n\n                <ion-fab-list side="bottom-right">\n\n                  <button (click)="chooseService($event, 5, fab)" ion-fab color="white">Télécoms &amp; Internet</button>\n\n                </ion-fab-list>\n\n                <ion-fab-list side="right">\n\n                  <button (click)="chooseService($event, 6, fab)" ion-fab color="white">Recherche</button>\n\n                </ion-fab-list>\n\n                <ion-fab-list side="top-right">\n\n                  <button (click)="chooseService($event, 7, fab)" ion-fab color="white">Finance &amp; assurance</button>\n\n                </ion-fab-list>\n\n              </ion-fab>\n\n          </div>\n\n        </div>\n\n        </div>\n\n</ion-content>\n\n\n\n'/*ion-inline-end:"C:\Users\Cyprien\Desktop\newApp2\src\pages\simple-form1\simple-form1.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ToastController */]])
], SimpleForm1Page);

//# sourceMappingURL=simple-form1.js.map

/***/ })

});
//# sourceMappingURL=6.js.map