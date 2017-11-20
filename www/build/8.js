webpackJsonp([8],{

/***/ 285:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatPageModule", function() { return ChatPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__chat__ = __webpack_require__(608);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ChatPageModule = (function () {
    function ChatPageModule() {
    }
    return ChatPageModule;
}());
ChatPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__chat__["a" /* ChatPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__chat__["a" /* ChatPage */])
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__chat__["a" /* ChatPage */]
        ]
    })
], ChatPageModule);

//# sourceMappingURL=chat.module.js.map

/***/ }),

/***/ 608:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(53);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ChatPage = (function () {
    function ChatPage(platform, ngZone) {
        this.platform = platform;
        this.ngZone = ngZone;
        this.answers = [];
        platform.ready().then(function () {
            ApiAIPromises.new().init({
                clientAccessToken: "cd413db2c8ca47c2819f4f7482a86d46"
            })
                .then(function (result) { return console.log(result); });
        });
    }
    ChatPage.prototype.ask = function (question) {
        var _this = this;
        ApiAIPromises.requestText({
            query: question
        })
            .then(function (_a) {
            var speech = _a.result.fulfillment.speech;
            _this.ngZone.run(function () {
                _this.answers.push(speech);
            });
        });
    };
    return ChatPage;
}());
ChatPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-chat',template:/*ion-inline-start:"C:\Users\Cyprien\Desktop\newApp2\src\pages\chat\chat.html"*/'\n\n  <ion-header no-border>\n\n  <ion-navbar color="primary" hideBackButton="true">\n\n    <ion-buttons start>\n\n        <button ion-button icon-left (click)="prev()"><ion-icon name="arrow-back"></ion-icon></button> \n\n    </ion-buttons>\n\n    <ion-title>\n\n\n\n    </ion-title>\n\n    <ion-buttons end>\n\n      \n\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n\n    \n\n      <input ion-text type="text" [(ngModel)]="question">\n\n    \n\n      <button ion-button (click)="ask(question)">\n\n        Ask\n\n      </button>\n\n    \n\n      <div *ngFor="let answer of answers">\n\n          {{answer}}\n\n        </div>\n\n    \n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Cyprien\Desktop\newApp2\src\pages\chat\chat.html"*/
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"]) === "function" && _b || Object])
], ChatPage);

var _a, _b;
//# sourceMappingURL=chat.js.map

/***/ })

});
//# sourceMappingURL=8.js.map