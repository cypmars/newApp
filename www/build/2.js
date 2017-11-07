webpackJsonp([2],{

/***/ 287:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupPageModule", function() { return SignupPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__signup__ = __webpack_require__(595);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SignupPageModule = (function () {
    function SignupPageModule() {
    }
    return SignupPageModule;
}());
SignupPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__signup__["a" /* SignupPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__signup__["a" /* SignupPage */])
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__signup__["a" /* SignupPage */]
        ]
    })
], SignupPageModule);

//# sourceMappingURL=signup.module.js.map

/***/ }),

/***/ 304:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return WelcomePage; });
/* unused harmony export HomePage */
/* unused harmony export SimpleFormPage */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResultPage; });
// The page the user lands on after opening the app and without a session
// The page the user lands on after opening the app and without a session
var WelcomePage = 'WelcomePage';
var HomePage = 'HomePage';
var SimpleFormPage = 'SimpleFormPage';
var ResultPage = 'ResultPage';
//# sourceMappingURL=pages.js.map

/***/ }),

/***/ 595:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages__ = __webpack_require__(304);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SignupPage = (function () {
    function SignupPage(navCtrl, formBuilder, toastCtrl) {
        this.navCtrl = navCtrl;
        this.formBuilder = formBuilder;
        this.toastCtrl = toastCtrl;
        this.submitAttempt = false;
        this.lastSlide = true;
        // The account fields for the login form.
        // If you're using the username field with or without email, make
        // sure to add it to the type
        this.account = {
            name: 'Test Human',
            email: 'test@example.com',
            password: 'test'
        };
        this.slideOneForm = formBuilder.group({
            firstName: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].maxLength(30), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].pattern('[a-zA-Z ]*'), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required])],
            lastName: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].maxLength(30), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].pattern('[a-zA-Z ]*'), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required])],
            phone: [''],
            email: ['']
        });
        this.slideTwoForm = formBuilder.group({
            company: [''],
            address: [''],
            postcode: [''],
            city: [''],
            job: ['']
        });
    }
    SignupPage.prototype.next = function () {
        console.log(this.signupSlider._activeIndex);
        if (this.signupSlider._activeIndex == 1)
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__pages__["b" /* WelcomePage */]);
        else {
            this.lastSlide = false;
            this.signupSlider.slideNext();
        }
    };
    SignupPage.prototype.prev = function () {
        console.log(this.signupSlider._activeIndex);
        if (this.signupSlider._activeIndex == 0)
            this.navCtrl.pop();
        else {
            this.lastSlide = true;
            this.signupSlider.slidePrev();
        }
    };
    SignupPage.prototype.save = function () {
        this.submitAttempt = true;
        if (!this.slideOneForm.valid) {
            this.signupSlider.slideTo(0);
            this.lastSlide = true;
        }
        else if (!this.slideTwoForm.valid) {
            this.signupSlider.slideTo(1);
        }
        else {
            this.navCtrl.pop();
        }
    };
    return SignupPage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('signupSlider'),
    __metadata("design:type", Object)
], SignupPage.prototype, "signupSlider", void 0);
SignupPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-signup',template:/*ion-inline-start:"C:\Users\Cyprien\Desktop\newApp2\src\pages\signup\signup.html"*/'<ion-header>\n\n\n\n  <ion-header>\n\n    <ion-navbar color="primary" hideBackButton="true">\n\n      <ion-buttons start>\n\n          <button ion-button icon-left (click)="prev()"><ion-icon name="arrow-back"></ion-icon> Prev</button>\n\n      </ion-buttons>\n\n      <ion-title>\n\n        S\'inscrire\n\n      </ion-title>\n\n      <ion-buttons end>\n\n        <button *ngIf="lastSlide" ion-button icon-right (click)="next()">Next <ion-icon name="arrow-forward"></ion-icon></button>\n\n      </ion-buttons>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <div class="splash-bg">\n\n     <ion-slides #signupSlider>\n\n  \n\n       <ion-slide>\n\n        <p *ngIf="submitAttempt" style="color: #ea6153;">S\'il-vous-plait, remplissez les champs suivants.</p>\n\n          <form [formGroup]="slideOneForm">\n\n      \n\n              <ion-item>\n\n                  <ion-label floating class="white-text">Nom *</ion-label>\n\n                  <ion-input formControlName="firstName" type="text"></ion-input>\n\n              </ion-item>\n\n      \n\n              <ion-item>\n\n                  <ion-label floating class="white-text">Prénom *</ion-label>\n\n                  <ion-input formControlName="lastName" type="text"></ion-input>\n\n              </ion-item>\n\n      \n\n              <ion-item>\n\n                  <ion-label floating class="white-text">Téléphone *</ion-label>\n\n                  <ion-input formControlName="phone" type="number"></ion-input>\n\n              </ion-item>\n\n\n\n              <ion-item>\n\n                  <ion-label floating class="white-text">E-Mail *</ion-label>\n\n                  <ion-input formControlName="email" type="email"></ion-input>\n\n              </ion-item>\n\n          </form>\n\n       </ion-slide>\n\n       <ion-slide>\n\n          <ion-list>\n\n            <form [formGroup]="slideTwoForm">\n\n\n\n              <ion-item>\n\n                  <ion-label floating class="white-text">Société</ion-label>\n\n                  <ion-input formControlName="company" type="text"></ion-input>\n\n              </ion-item>\n\n\n\n              <ion-item>\n\n                  <ion-label floating class="white-text">Adresse</ion-label>\n\n                  <ion-textarea formControlName="address"></ion-textarea>\n\n              </ion-item>\n\n\n\n              <ion-item>\n\n                  <ion-label floating class="white-text">Code Postal</ion-label>\n\n                  <ion-input formControlName="postcode" type="text"></ion-input>\n\n              </ion-item>\n\n\n\n              <ion-item>\n\n                  <ion-label floating class="white-text">Ville</ion-label>\n\n                  <ion-input formControlName="postcode" type="text"></ion-input>\n\n              </ion-item>\n\n\n\n              <ion-item>\n\n                  <ion-label floating class="white-text">Fonction</ion-label>\n\n                  <ion-input formControlName="job" type="text"></ion-input>\n\n              </ion-item>\n\n            </form>\n\n        </ion-list>\n\n        <button ion-button full color="primary" (click)="save()">Create Account!</button>\n\n       </ion-slide>\n\n  \n\n     </ion-slides>\n\n    </div>\n\n  \n\n </ion-content>\n\n\n\n<!-- <ion-content>\n\n  <div class="splash-bg">\n\n      <div class="splash-relative">\n\n        <form (submit)="doSignup()">\n\n          <ion-grid>\n\n            <ion-row>\n\n              <ion-col>\n\n                <ion-item>\n\n                  <ion-label fixed>Nom *</ion-label>\n\n                  <ion-input type="text" [(ngModel)]="account.name" name="name"></ion-input>\n\n                </ion-item>\n\n              </ion-col>\n\n            </ion-row>\n\n            <ion-row>\n\n              <ion-col>\n\n                <ion-item>\n\n                  <ion-label fixed>Prénom *</ion-label>\n\n                  <ion-input type="text" [(ngModel)]="account.firstName" name="firstName"></ion-input>\n\n                </ion-item>\n\n              </ion-col>\n\n            </ion-row>\n\n            <ion-row>\n\n              <ion-col>\n\n                <ion-item>\n\n                  <ion-label fixed>Phone *</ion-label>\n\n                  <ion-input type="number" [(ngModel)]="account.phone" name="phone"></ion-input>\n\n                </ion-item>\n\n              </ion-col>\n\n            </ion-row>\n\n            <ion-row>\n\n              <ion-col>\n\n                <ion-item>\n\n                  <ion-label fixed>Fax</ion-label>\n\n                  <ion-input type="number" [(ngModel)]="account.fax" name="fax"></ion-input>\n\n                </ion-item>\n\n              </ion-col>\n\n            </ion-row>\n\n            <ion-row>\n\n              <ion-col>\n\n                <ion-item>\n\n                  <ion-label fixed>E-Mail *</ion-label>\n\n                  <ion-input type="email" [(ngModel)]="account.email" name="email"></ion-input>\n\n                </ion-item>\n\n              </ion-col>\n\n            </ion-row>\n\n            <ion-row>\n\n              <ion-col>\n\n                <ion-item>\n\n                  <ion-label fixed>Adresse</ion-label>\n\n                  <ion-input type="text" [(ngModel)]="account.address" name="address"></ion-input>\n\n                </ion-item>\n\n              </ion-col>\n\n            </ion-row>\n\n            <ion-row>\n\n              <ion-col>\n\n                <ion-item>\n\n                  <ion-label fixed>Code Postal</ion-label>\n\n                  <ion-input type="number" [(ngModel)]="account.postcode" name="postcode"></ion-input>\n\n                </ion-item>\n\n              </ion-col>\n\n            </ion-row>\n\n            <ion-row>\n\n              <ion-col>\n\n                <ion-item>\n\n                  <ion-label fixed>Ville</ion-label>\n\n                  <ion-input type="text" [(ngModel)]="account.city" name="city"></ion-input>\n\n                </ion-item>\n\n              </ion-col>\n\n            </ion-row>\n\n            <ion-row>\n\n              <ion-col>\n\n                <ion-item>\n\n                  <ion-label fixed>Société</ion-label>\n\n                  <ion-input type="text" [(ngModel)]="account.company" name="company"></ion-input>\n\n                </ion-item>\n\n              </ion-col>\n\n            </ion-row>\n\n            <ion-row>\n\n              <ion-col>\n\n                <ion-item>\n\n                  <ion-label fixed>Fonction</ion-label>\n\n                  <ion-input type="text" [(ngModel)]="account.job" name="job"></ion-input>\n\n                </ion-item>\n\n              </ion-col>\n\n            </ion-row>\n\n                \n\n          </ion-grid>\n\n          <div padding>\n\n            <button ion-button color="primary" block>{{ \'SIGNUP_BUTTON\' }}</button>\n\n          </div>\n\n        </form>\n\n      </div>\n\n  </div>\n\n</ion-content> -->'/*ion-inline-end:"C:\Users\Cyprien\Desktop\newApp2\src\pages\signup\signup.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* ToastController */]])
], SignupPage);

//# sourceMappingURL=signup.js.map

/***/ })

});
//# sourceMappingURL=2.js.map