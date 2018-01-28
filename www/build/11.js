webpackJsonp([11],{

/***/ 429:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AskInfoPageModule", function() { return AskInfoPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__askInfo__ = __webpack_require__(733);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AskInfoPageModule = (function () {
    function AskInfoPageModule() {
    }
    return AskInfoPageModule;
}());
AskInfoPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__askInfo__["a" /* AskInfoPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__askInfo__["a" /* AskInfoPage */])
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__askInfo__["a" /* AskInfoPage */]
        ]
    })
], AskInfoPageModule);

//# sourceMappingURL=askInfo.module.js.map

/***/ }),

/***/ 444:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__(9);
var map_1 = __webpack_require__(260);
Observable_1.Observable.prototype.map = map_1.map;
//# sourceMappingURL=map.js.map

/***/ }),

/***/ 733:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AskInfoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(255);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(444);
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
var AskInfoPage = (function () {
    function AskInfoPage(navCtrl, navParams, toastCtrl, http, formBuilder) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toastCtrl = toastCtrl;
        this.formBuilder = formBuilder;
        this.mail = {
            about: "Service",
            object: "Objet",
            text: "Message",
            sendBy: {
                firstName: "Prénom",
                lastName: "Nom",
                email: "@ email",
            }
        };
        this.submitAttempt = false;
        this.tabBarElement = document.querySelector('.tabbar.show-tabbar');
        this.serviceId = navParams.get("serviceId");
        this.mail.about = navParams.get("serviceName");
        this.askInfoForm = formBuilder.group({
            firstName: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].maxLength(30), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].pattern('[a-zA-Z ]*'), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required])],
            lastName: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].maxLength(30), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].pattern('[a-zA-Z ]*'), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required])],
            email: [''],
            about: [''],
            object: [''],
            text: ['']
        });
    }
    AskInfoPage.prototype.ionViewWillEnter = function () {
        this.tabBarElement.style.display = 'none';
    };
    AskInfoPage.prototype.ionViewWillLeave = function () {
        this.tabBarElement.style.display = 'flex';
    };
    AskInfoPage.prototype.askInfo = function () {
        this.submitAttempt = true;
        console.log(this.mail);
        if (this.askInfoForm.valid) {
            this.navCtrl.pop();
            // this.emailComposer.isAvailable().then((available: boolean) =>{
            //   if(available) {
            //     //Now we know we can send
            //   }
            //  });
            //  let email = {
            //    from: this.mail.sendBy.email,
            //    to: 'cypconnet@wanadoo.fr',
            //    subject: this.mail.object,
            //    body: 'Related to: '+this.mail.about+'<br><br>'+this.mail.text,
            //    isHtml: true
            //  };
            // Send a text message using default options
            //this.emailComposer.open(email);
        }
    };
    AskInfoPage.prototype.prev = function () {
        this.tabBarElement.style.display = 'flex';
        this.navCtrl.pop();
    };
    return AskInfoPage;
}());
AskInfoPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-askInfo',template:/*ion-inline-start:"C:\Users\Cyprien\Desktop\newApp2\src\pages\askInfo\askInfo.html"*/'<ion-header no-border>\n\n  <ion-navbar color=\'primary\' hideBackButton="true">\n\n    <ion-buttons start>\n\n      <button ion-button icon-left (click)="prev()"><ion-icon name="arrow-back"></ion-icon>back</button>\n\n    </ion-buttons>\n\n    <ion-title>\n\n      \n\n    </ion-title>\n\n    <ion-buttons end>\n\n     \n\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n\n  <div class="splash-bg">\n\n    <div class="splash-relative">\n\n            <div class="splash-intro">\n\n                  Demande d\'informations\n\n            </div>\n\n            <br>\n\n            <div padding>\n\n            <div class="splash-form">\n\n              <p *ngIf="submitAttempt" style="color: #ea6153;">S\'il-vous-plait, remplissez les champs suivants.</p>\n\n              <form [formGroup]="askInfoForm" (submit)="askInfo()">\n\n                  <ion-list text-center>\n\n              \n\n                    <ion-item>\n\n                      <ion-input formControlName="firstName" type="text" [(ngModel)]="mail.sendBy.firstName" name="sendBy.firstName"></ion-input>\n\n                    </ion-item>\n\n                    \n\n                    <ion-item>\n\n                      <ion-input formControlName="lastName" type="text" [(ngModel)]="mail.sendBy.lastName" name="sendBy.lastName"></ion-input>\n\n                    </ion-item>\n\n\n\n                    <ion-item>\n\n                      <ion-input formControlName="email" type="text" [(ngModel)]="mail.sendBy.email" name="sendBy.email"></ion-input>\n\n                    </ion-item>\n\n              \n\n                    <br>\n\n\n\n                    <ion-item>\n\n                      <ion-input formControlName="about" type="text" [(ngModel)]="mail.about" name="about" disabled>{{ mail.about }}</ion-input>\n\n                    </ion-item>\n\n\n\n                    <br>\n\n\n\n                    <ion-item>\n\n                      <ion-input formControlName="object" type="text" [(ngModel)]="mail.object" name="object"></ion-input>\n\n                    </ion-item>\n\n\n\n                    <ion-item>\n\n                      <ion-textarea formControlName="text" type="text" [(ngModel)]="mail.text" name="text"></ion-textarea>\n\n                    </ion-item>\n\n              \n\n                    <button ion-button class="login">Envoyer !</button>\n\n              \n\n                  </ion-list>\n\n                </form>                \n\n              </div>\n\n          </div>\n\n    </div>\n\n  </div>\n\n</ion-content>'/*ion-inline-end:"C:\Users\Cyprien\Desktop\newApp2\src\pages\askInfo\askInfo.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* ToastController */], __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */]])
], AskInfoPage);

//# sourceMappingURL=askInfo.js.map

/***/ })

});
//# sourceMappingURL=11.js.map