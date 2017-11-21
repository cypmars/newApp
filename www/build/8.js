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
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__chat__["a" /* ChatPage */])
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(15);
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
    function ChatPage(navCtrl, formBuilder, platform, ngZone) {
        this.navCtrl = navCtrl;
        this.formBuilder = formBuilder;
        this.platform = platform;
        this.ngZone = ngZone;
        this.toUser = {
            _id: '534b8e5aaa5e7afc1b23e69b',
            pic: 'assets/img/bot.png',
            username: 'BoBot',
        };
        this.user = {
            _id: '534b8fb2aa5e7afc1b23e69c',
            pic: 'assets/img/logo2.png',
            username: 'Sandy',
        };
        this.doneLoading = false;
        this.messages = [
            {
                _id: 1,
                date: new Date(),
                userId: this.toUser._id,
                username: this.toUser.username,
                pic: this.toUser.pic,
                text: "Salut ! Je suis R2D2, je vais t'aider à déterminer ton besoin."
            },
            {
                _id: 2,
                date: new Date(),
                userId: this.toUser._id,
                username: this.toUser.username,
                pic: this.toUser.pic,
                text: "Es-tu un client, un prospect ou un collaborateur ?"
            }
        ];
        this.answers = [];
        this.messageForm = formBuilder.group({
            message: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */]('')
        });
        this.chatBox = '';
        platform.ready().then(function () {
            ApiAIPromises.new().init({
                clientAccessToken: "cd413db2c8ca47c2819f4f7482a86d46"
            })
                .then(function (result) { return console.log(result); })
                .fail(function (error) {
                // some error processing 
                console.log(error);
            });
        });
    }
    ChatPage.prototype.ask = function (message) {
        var _this = this;
        if (message && message !== '') {
            var messageData = {
                toId: this.toUser._id,
                _id: 6,
                date: new Date(),
                userId: this.user._id,
                username: this.user.username,
                pic: this.user.pic,
                text: message
            };
            this.messages.push(messageData);
            this.scrollToBottom();
            ApiAIPromises.requestText({
                query: message
            })
                .then(function (_a) {
                var speech = _a.result.fulfillment.speech;
                _this.ngZone.run(function () {
                    var answer = {
                        toId: _this.user._id,
                        _id: 6,
                        date: new Date(),
                        userId: _this.toUser._id,
                        username: _this.toUser.username,
                        pic: _this.toUser.pic,
                        text: speech
                    };
                    _this.messages.push(answer);
                });
            })
                .fail(function (error) {
                // some error processing 
                console.log(error);
            });
        }
        this.chatBox = '';
    };
    ChatPage.prototype.scrollToBottom = function () {
        var _this = this;
        setTimeout(function () {
            _this.content.scrollToBottom();
        }, 100);
    };
    ChatPage.prototype.login = function () {
        this.navCtrl.push('WelcomePage');
    };
    return ChatPage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* Content */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* Content */])
], ChatPage.prototype, "content", void 0);
ChatPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-chat',template:/*ion-inline-start:"C:\Users\Cyprien\Desktop\newApp2\src\pages\chat\chat.html"*/'\n\n  <ion-header no-border>\n\n  <ion-navbar color="primary" hideBackButton="true">\n\n    <ion-buttons start>\n\n\n\n    </ion-buttons>\n\n    <ion-title>\n\n\n\n    </ion-title>\n\n    <ion-buttons end>\n\n      <button ion-button icon-left (click)="login()"><ion-icon name="contact"></ion-icon></button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n\n	<div> hello network</div>\n\n  <div *ngFor="let message of messages" class="message-wrapper" on-hold="onMessageHold($event, $index, message)">\n\n		<div *ngIf="user._id !== message.userId">\n\n			<img (click)="viewProfile(message)" class="profile-pic left" [src]="toUser.pic" />\n\n			<!--  wave-->\n\n			<div class="chat-bubble left slide-left">\n\n\n\n				<div class="message" [innerHTML]="message.text" autolinker>\n\n				</div>\n\n\n\n				<div class="message-detail">\n\n					<span (click)="viewProfile(message)" class="bold">{{toUser.username}}</span>,\n\n					<span></span>\n\n				</div>\n\n\n\n			</div>\n\n		</div>\n\n\n\n		<div *ngIf="user._id === message.userId">\n\n\n\n			<img (click)="viewProfile(message)" class="profile-pic right" [src]="user.pic" />\n\n\n\n			<div class="chat-bubble right slide-right">\n\n\n\n				<div class="message" [innerHTML]="message.text" autolinker>\n\n				</div>\n\n\n\n				<div class="message-detail">\n\n					<span (click)="viewProfile(message)" class="bold">{{user.username}}</span>,\n\n					<span></span>\n\n				</div>\n\n\n\n			</div>\n\n\n\n		</div>\n\n\n\n		<div class="cf"></div>\n\n\n\n  </div>  \n\n  \n\n</ion-content>\n\n<ion-footer>\n\n	<form [formGroup]="messageForm" (submit)="ask(chatBox)" novalidate>\n\n		<ion-item>\n\n			<ion-input formControlName="message" [(ngModel)]="chatBox" placeholder="Send a message..."></ion-input>\n\n			<button ion-button clear (click)="ask(chatBox)" item-end><ion-icon class="footer-btn" name="send"></ion-icon></button>\n\n		</ion-item>\n\n	</form>\n\n</ion-footer>\n\n'/*ion-inline-end:"C:\Users\Cyprien\Desktop\newApp2\src\pages\chat\chat.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"]])
], ChatPage);

//# sourceMappingURL=chat.js.map

/***/ })

});
//# sourceMappingURL=8.js.map