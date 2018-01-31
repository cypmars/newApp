webpackJsonp([13],{

/***/ 431:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfoPageModule", function() { return InfoPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__info__ = __webpack_require__(736);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var InfoPageModule = (function () {
    function InfoPageModule() {
    }
    return InfoPageModule;
}());
InfoPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__info__["a" /* InfoPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__info__["a" /* InfoPage */])
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__info__["a" /* InfoPage */]
        ]
    })
], InfoPageModule);

//# sourceMappingURL=info.module.js.map

/***/ }),

/***/ 445:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__(9);
var map_1 = __webpack_require__(256);
Observable_1.Observable.prototype.map = map_1.map;
//# sourceMappingURL=map.js.map

/***/ }),

/***/ 736:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InfoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(254);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(445);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_angular_navigation_nav_params__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_forms__ = __webpack_require__(25);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var InfoPage = (function () {
    function InfoPage(navCtrl, navParams, toastCtrl, http, formBuilder) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toastCtrl = toastCtrl;
        this.formBuilder = formBuilder;
        this.mail = {
            about: "Service",
            object: "Objet",
            message: "Message",
            sendBy: {
                firstName: "Prénom",
                lastName: "Nom",
                email: "@ email",
            }
        };
        this.tabBarElement = document.querySelector('.tabbar.show-tabbar');
        this.serviceId = navParams.get("serviceId");
        this.mail.about = navParams.get("serviceName");
        this.askForm = formBuilder.group({
            firstname: ['', __WEBPACK_IMPORTED_MODULE_6__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_6__angular_forms__["f" /* Validators */].maxLength(30), __WEBPACK_IMPORTED_MODULE_6__angular_forms__["f" /* Validators */].pattern('[a-zA-Z ]*'), __WEBPACK_IMPORTED_MODULE_6__angular_forms__["f" /* Validators */].required])],
            lastName: ['', __WEBPACK_IMPORTED_MODULE_6__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_6__angular_forms__["f" /* Validators */].maxLength(30), __WEBPACK_IMPORTED_MODULE_6__angular_forms__["f" /* Validators */].pattern('[a-zA-Z ]*'), __WEBPACK_IMPORTED_MODULE_6__angular_forms__["f" /* Validators */].required])],
            email: [''],
            about: [''],
            object: [''],
            message: ['']
        });
    }
    InfoPage.prototype.ionViewWillEnter = function () {
        this.tabBarElement.style.display = 'none';
    };
    InfoPage.prototype.ionViewWillLeave = function () {
        this.tabBarElement.style.display = 'flex';
    };
    InfoPage.prototype.forgot = function () {
        this.navCtrl.push('ForgotPage');
    };
    InfoPage.prototype.signup = function () {
        this.navCtrl.push('SignupPage');
    };
    // Attempt to login in through our User service
    InfoPage.prototype.doLogin = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__pages__["l" /* TinderQ2Page */]);
    };
    InfoPage.prototype.prev = function () {
        this.tabBarElement.style.display = 'flex';
        this.navCtrl.pop();
    };
    return InfoPage;
}());
InfoPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-info',template:/*ion-inline-start:"/Users/cyp/Documents/newApp/src/pages/info/info.html"*/'<ion-header no-border>\n  <ion-navbar color=\'primary\' hideBackButton="true">\n    <ion-buttons start>\n      <button ion-button icon-left (click)="prev()"><ion-icon name="arrow-back"></ion-icon>back</button>\n    </ion-buttons>\n    <ion-title>\n      \n    </ion-title>\n    <ion-buttons end>\n     \n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n<ion-content>\n  <div class="splash-bg">\n    <div class="splash-relative">\n            <div class="splash-logo"></div>\n            <div class="splash-intro">\n                  Demande d\'informations\n            </div>\n            <br>\n            <div padding>\n            <div class="splash-form">\n              <button ion-button block (click)="signup()"><ion-icon name="logo-linkedin" class="white-text"></ion-icon> &nbsp;&nbsp;Se connecter avec LinkedIn</button>\n              <br>\n              <form [formGroup]="askForm">\n                  <ion-list text-center>\n              \n                    \n                    <ion-item>\n                      <ion-input type="text" [(ngModel)]="mail.sendBy.firstname" formControlName="firstname" name="firstname"></ion-input>\n                    </ion-item>\n              \n                    <ion-item>\n                      <ion-input type="text" [(ngModel)]="mail.sendBy.lastname" formControlName="lastname"  name="lastname"></ion-input>\n                    </ion-item>\n\n                    <ion-item>\n                      <ion-input type="email" [(ngModel)]="mail.sendBy.email" formControlName="email" name="email"></ion-input>\n                    </ion-item>\n\n                    <ion-item>\n                      <ion-input type="text" [(ngModel)]="mail.about" formControlName="about" name="about" disabled></ion-input>\n                    </ion-item>\n\n                    <ion-item>\n                      <ion-input type="text" [(ngModel)]="mail.object" formControlName="object"  name="object"></ion-input>\n                    </ion-item>\n\n                    <ion-item>\n                      <ion-textarea type="text" [(ngModel)]="mail.message" formControlName="message" name="message"></ion-textarea>\n                    </ion-item>\n              \n                    <button ion-button (click)="sendMail()">Envoyer !</button>\n              \n                  </ion-list>\n                </form>                \n              </div>\n          </div>\n    </div>\n  </div>\n</ion-content>'/*ion-inline-end:"/Users/cyp/Documents/newApp/src/pages/info/info.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */], __WEBPACK_IMPORTED_MODULE_5_ionic_angular_navigation_nav_params__["a" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* ToastController */], __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_6__angular_forms__["a" /* FormBuilder */]])
], InfoPage);

//# sourceMappingURL=info.js.map

/***/ })

});
//# sourceMappingURL=13.js.map