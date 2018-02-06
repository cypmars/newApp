webpackJsonp([11],{

/***/ 444:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WelcomePageModule", function() { return WelcomePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__welcome__ = __webpack_require__(748);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var WelcomePageModule = (function () {
    function WelcomePageModule() {
    }
    return WelcomePageModule;
}());
WelcomePageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__welcome__["a" /* WelcomePage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__welcome__["a" /* WelcomePage */])
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__welcome__["a" /* WelcomePage */]
        ]
    })
], WelcomePageModule);

//# sourceMappingURL=welcome.module.js.map

/***/ }),

/***/ 445:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__(9);
var map_1 = __webpack_require__(256);
Observable_1.Observable.prototype.map = map_1.map;
//# sourceMappingURL=map.js.map

/***/ }),

/***/ 748:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WelcomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(254);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(445);
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
var WelcomePage = (function () {
    function WelcomePage(navCtrl, toastCtrl, http) {
        this.navCtrl = navCtrl;
        this.toastCtrl = toastCtrl;
        // The account fields for the login form.
        // If you're using the username field with or without email, make
        // sure to add it to the type
        this.account = {
            email: '@ e-mail ou pseudo',
            password: 'mot de passe'
        };
        this.tabBarElement = document.querySelector('.tabbar.show-tabbar');
    }
    WelcomePage.prototype.ionViewWillEnter = function () {
        this.tabBarElement.style.display = 'none';
    };
    WelcomePage.prototype.ionViewWillLeave = function () {
        this.tabBarElement.style.display = 'flex';
    };
    WelcomePage.prototype.forgot = function () {
        this.navCtrl.push('ForgotPage');
    };
    WelcomePage.prototype.signup = function () {
        this.navCtrl.push('SignupPage');
    };
    // Attempt to login in through our User service
    WelcomePage.prototype.doLogin = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__pages__["l" /* TinderQ2Page */]);
    };
    WelcomePage.prototype.prev = function () {
        this.tabBarElement.style.display = 'flex';
        this.navCtrl.pop();
    };
    return WelcomePage;
}());
WelcomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-welcome',template:/*ion-inline-start:"/Users/cyp/Documents/newApp/src/pages/welcome/welcome.html"*/'<ion-header no-border>\n  <ion-navbar color=\'primary\' hideBackButton="true">\n    <ion-buttons start>\n      <button ion-button icon-left (click)="prev()"><ion-icon name="arrow-back"></ion-icon>back</button>\n    </ion-buttons>\n    <ion-title>\n      \n    </ion-title>\n    <ion-buttons end>\n     \n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n<ion-content>\n  <div class="splash-bg">\n    <div class="splash-relative">\n            <div class="splash-logo"></div>\n            <div class="splash-intro">\n                  Service Advisor\n            </div>\n            <br>\n            <div padding>\n            <div class="splash-form">\n              <button ion-button block (click)="signup()"><ion-icon name="logo-linkedin" class="white-text"></ion-icon> &nbsp;&nbsp;Se connecter avec LinkedIn</button>\n              <br>\n              <form (submit)="doLogin()">\n                  <ion-list text-center>\n              \n                    \n                    <ion-item>\n                      <ion-label><ion-icon name="contact" class="white-text"></ion-icon></ion-label>\n                      <ion-input type="text" [(ngModel)]="account.email" name="login"></ion-input>\n                    </ion-item>\n              \n                    <!--\n                    Want to use a Username instead of an Email? Here you go:\n              \n                    <ion-item>\n                      <ion-label floating>{{ \'USERNAME\' | translate }}</ion-label>\n                      <ion-input type="text" [(ngModel)]="account.username" name="username"></ion-input>\n                    </ion-item>\n                    -->\n                    <div class="">\n                      \n                    </div>\n                    <ion-item>\n                      <ion-label><ion-icon name="lock" class="white-text"></ion-icon></ion-label>\n                      <ion-input type="password" [(ngModel)]="account.password" name="password"></ion-input>\n                    </ion-item>\n              \n                    <button ion-button class="login">Se connecter</button>\n              \n                  </ion-list>\n                </form>                \n              </div>\n          </div>\n          <div class="splash-end">\n              <div class="splash-new">\n                  <a (click)="signup()">Nouveau ? S\'inscrire !</a>\n              </div>\n              <div class="splash-forgot">\n                <a (click)="forgot()">Mot de passe oublié</a>\n              </div>\n          </div>\n    </div>\n  </div>\n</ion-content>'/*ion-inline-end:"/Users/cyp/Documents/newApp/src/pages/welcome/welcome.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* ToastController */], __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Http */]])
], WelcomePage);

//# sourceMappingURL=welcome.js.map

/***/ })

});
//# sourceMappingURL=11.js.map