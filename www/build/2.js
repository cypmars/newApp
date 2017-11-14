webpackJsonp([2],{

/***/ 286:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SimpleFormPageModule", function() { return SimpleFormPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__simple_form__ = __webpack_require__(595);
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
            __WEBPACK_IMPORTED_MODULE_2__simple_form__["a" /* SimpleFormPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__simple_form__["a" /* SimpleFormPage */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__simple_form__["a" /* SimpleFormPage */]
        ]
    })
], SimpleFormPageModule);

//# sourceMappingURL=simple-form.module.js.map

/***/ }),

/***/ 291:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return WelcomePage; });
/* unused harmony export HomePage */
/* unused harmony export SimpleFormPage */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ResultPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return Tab1Root; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return Tab2Root; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return Tab3Root; });
// The page the user lands on after opening the app and without a session
// The page the user lands on after opening the app and without a session
var WelcomePage = 'WelcomePage';
var HomePage = 'HomePage';
var SimpleFormPage = 'SimpleFormPage';
var ResultPage = 'ResultPage';
var MainPage = 'TabsPage';
// The initial root pages for our tabs (remove if not using tabs)
var Tab1Root = 'SimpleFormPage';
var Tab2Root = 'ResultPage';
var Tab3Root = 'WelcomePage';
//# sourceMappingURL=pages.js.map

/***/ }),

/***/ 595:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SimpleFormPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages__ = __webpack_require__(291);
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
var SimpleFormPage = (function () {
    function SimpleFormPage(navCtrl, navParams, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toastCtrl = toastCtrl;
        // The account fields for the login form.
        // If you're using the username field with or without email, make
        // sure to add it to the type
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
                name: "Propreté et Services",
                iconName: "leaf"
            },
            {
                id: 1,
                name: "Sécurité",
                iconName: "lock"
            },
            {
                id: 2,
                name: "Services Aéroportuaires",
                iconName: "plane"
            },
            {
                id: 3,
                name: "Accueil",
                iconName: "people"
            },
            {
                id: 4,
                name: "Logistique",
                iconName: "train"
            },
            {
                id: 5,
                name: "Technologies",
                iconName: "nuclear"
            },
            {
                id: 6,
                name: "Intérim, Recrutement et Formation",
                iconName: "school"
            },
            {
                id: 7,
                name: "Autres",
                iconName: "code-working"
            }
        ];
        this.itemsServ = [
            {
                catId: 0,
                id: 0,
                name: "Hygiène et propreté classique",
                imgUrl: "/assets/imgs/prop.jpg"
            },
            {
                catId: 0,
                id: 1,
                name: "Hygiène et propreté en milieu sensible",
                imgUrl: "/assets/imgs/prop.jpg"
            },
            {
                catId: 0,
                id: 2,
                name: "Cryogénie",
                imgUrl: "/assets/imgs/prop.jpg"
            },
            {
                catId: 0,
                id: 3,
                name: "Propreté et maintenances des process industriels",
                imgUrl: "/assets/imgs/prop.jpg"
            },
            {
                catId: 0,
                id: 4,
                name: "Propreté dans les transports",
                imgUrl: "/assets/imgs/prop.jpg"
            },
            {
                catId: 0,
                id: 5,
                name: "Gestion des déchets - Secteur Tertiaire",
                imgUrl: "/assets/imgs/prop.jpg"
            },
            {
                catId: 0,
                id: 6,
                name: "Gestion des déchets - Secteur Industriel",
                imgUrl: "/assets/imgs/prop.jpg"
            },
            {
                catId: 0,
                id: 7,
                name: "Services associés",
                imgUrl: "/assets/imgs/prop.jpg"
            },
            {
                catId: 0,
                id: 1,
                name: "Hygiène et propreté classique",
                imgUrl: "/assets/imgs/prop.jpg"
            },
            {
                catId: 0,
                id: 1,
                name: "Hygiène et propreté classique",
                imgUrl: "/assets/imgs/prop.jpg"
            },
        ];
        this.myIcon = "Choisissez une catégorie de service";
        console.log(navParams.get("year"));
    }
    SimpleFormPage.prototype.forgot = function () {
        this.navCtrl.push('ForgotPage');
    };
    SimpleFormPage.prototype.login = function () {
        this.navCtrl.push('LoginPage');
    };
    // Attempt to login in through our User service
    SimpleFormPage.prototype.doLogin = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__pages__["b" /* ResultPage */]);
    };
    SimpleFormPage.prototype.chooseService = function (event, data, fab) {
        this.myIcon = this.itemsCat[data].name;
        this.search.param1 = this.itemsCat[data].iconName;
        fab.close();
    };
    SimpleFormPage.prototype.submit = function () {
        console.log(this.search);
        this.navCtrl.push('ResultPage');
    };
    return SimpleFormPage;
}());
SimpleFormPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-simple-form',template:/*ion-inline-start:"C:\Users\Cyprien\Desktop\newApp2\src\pages\simple-form\simple-form.html"*/'<ion-content>\n\n      <div class="splash-relative">\n\n          <h4 class="white-text margin-plus" text-center>Choisissez une catégorie de service</h4>\n\n          <div class="splash-info" center>\n\n              <div class="splash-form">\n\n                <div class="myFab">\n\n                  <!--<ion-fab class="myFab" center top margin-top #fab>\n\n                    <button id="show-services" ion-fab color="danger"><ion-icon [name]="myIcon"></ion-icon></button>\n\n                    <ion-fab-list side="top">\n\n                      <button (click)="chooseService($event, 0, fab)" ion-fab color="white"><ion-icon class="larger" name="leaf"></ion-icon></button>\n\n                    </ion-fab-list>\n\n                    <ion-fab-list side="top-left">\n\n                      <button (click)="chooseService($event, 1, fab)" ion-fab color="white"><ion-icon class="larger" name="lock"></ion-icon></button>\n\n                    </ion-fab-list>\n\n                    <ion-fab-list side="left">\n\n                      <button (click)="chooseService($event, 2, fab)" ion-fab color="white"><ion-icon class="larger" name="plane"></ion-icon></button>\n\n                    </ion-fab-list>\n\n                    <ion-fab-list side="bottom-left">\n\n                      <button (click)="chooseService($event, 3, fab)" ion-fab color="white"><ion-icon class="larger" name="people"></ion-icon></button>\n\n                    </ion-fab-list>\n\n                    <ion-fab-list side="bottom">\n\n                      <button (click)="chooseService($event, 4, fab)" ion-fab color="white"><ion-icon class="larger" name="train"></ion-icon></button>\n\n                    </ion-fab-list>\n\n                    <ion-fab-list side="bottom-right">\n\n                      <button (click)="chooseService($event, 5, fab)" ion-fab color="white"><ion-icon class="larger" name="nuclear"></ion-icon></button>\n\n                    </ion-fab-list>\n\n                    <ion-fab-list side="right">\n\n                      <button (click)="chooseService($event, 6, fab)" ion-fab color="white"><ion-icon class="larger" name="school"></ion-icon></button>\n\n                    </ion-fab-list>\n\n                    <ion-fab-list side="top-right">\n\n                      <button (click)="chooseService($event, 7, fab)" ion-fab color="white"><ion-icon class="larger" name="code-working"></ion-icon></button>\n\n                    </ion-fab-list>\n\n                  </ion-fab>-->\n\n                  <ion-fab class="myFab" center top margin-top #fab>\n\n                      <button id="show-services" ion-fab color="danger">{{myIcon}}</button>\n\n                      <ion-fab-list side="top">\n\n                        <button (click)="chooseService($event, 0, fab)" ion-fab color="white">Propreté et Services</button>\n\n                      </ion-fab-list>\n\n                      <ion-fab-list side="top-left">\n\n                        <button (click)="chooseService($event, 1, fab)" ion-fab color="white">Sécurité</button>\n\n                      </ion-fab-list>\n\n                      <ion-fab-list side="left">\n\n                        <button (click)="chooseService($event, 2, fab)" ion-fab color="white">Services Aéroportuaires</button>\n\n                      </ion-fab-list>\n\n                      <ion-fab-list side="bottom-left">\n\n                        <button (click)="chooseService($event, 3, fab)" ion-fab color="white">Accueil</button>\n\n                      </ion-fab-list>\n\n                      <ion-fab-list side="bottom">\n\n                        <button (click)="chooseService($event, 4, fab)" ion-fab color="white">Logistique</button>\n\n                      </ion-fab-list>\n\n                      <ion-fab-list side="bottom-right">\n\n                        <button (click)="chooseService($event, 5, fab)" ion-fab color="white">Technologies</button>\n\n                      </ion-fab-list>\n\n                      <ion-fab-list side="right">\n\n                        <button (click)="chooseService($event, 6, fab)" ion-fab color="white">Intérim, Récrutement et Formation</button>\n\n                      </ion-fab-list>\n\n                      <ion-fab-list side="top-right">\n\n                        <button (click)="chooseService($event, 7, fab)" ion-fab color="white">...</button>\n\n                      </ion-fab-list>\n\n                    </ion-fab>\n\n                </div>\n\n                <form (submit)="submit()">\n\n                  <ion-list text-center>\n\n                    <ion-item hidden>\n\n                      <ion-label fixed></ion-label>\n\n                      <ion-input type="text" [(ngModel)]="search.param1" name="param1"></ion-input>\n\n                    </ion-item>\n\n                    <br>\n\n                    <ion-item>\n\n                      <ion-label color="white">Type de recherche</ion-label>\n\n                      <ion-select [(ngModel)]="search.param2" name="param2">\n\n                        <ion-option value="part">Particulier</ion-option>\n\n                        <ion-option value="pro">Professionnel</ion-option>\n\n                      </ion-select>\n\n                    </ion-item>\n\n                    <br><br>\n\n                    <ion-item class="no-border">\n\n                      <ion-label class>Budget</ion-label> \n\n                      <ion-range min="0" max="2000" pin="true" [(ngModel)]="search.param3" name="param3" color="primary">\n\n                        <ion-icon range-left small name="logo-euro" class="white-text"></ion-icon>\n\n                        <ion-icon range-right name="logo-euro" class="white-text"></ion-icon>\n\n                      </ion-range>\n\n                    </ion-item>\n\n                    <br>\n\n                    <button ion-button type="submit" class="login">Chercher &nbsp;&nbsp;&nbsp;<ion-icon name="arrow-dropright"></ion-icon></button>\n\n                  </ion-list>\n\n                </form>\n\n              </div>\n\n          </div>\n\n      </div>\n\n</ion-content>\n\n\n\n'/*ion-inline-end:"C:\Users\Cyprien\Desktop\newApp2\src\pages\simple-form\simple-form.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ToastController */]])
], SimpleFormPage);

//# sourceMappingURL=simple-form.js.map

/***/ })

});
//# sourceMappingURL=2.js.map