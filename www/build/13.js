webpackJsonp([13],{

/***/ 288:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Chat2PageModule", function() { return Chat2PageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__chat2__ = __webpack_require__(618);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var Chat2PageModule = (function () {
    function Chat2PageModule() {
    }
    return Chat2PageModule;
}());
Chat2PageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__chat2__["a" /* Chat2Page */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__chat2__["a" /* Chat2Page */])
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__chat2__["a" /* Chat2Page */]
        ]
    })
], Chat2PageModule);

//# sourceMappingURL=chat2.module.js.map

/***/ }),

/***/ 618:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Chat2Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_text_to_speech__ = __webpack_require__(227);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_speech_recognition__ = __webpack_require__(111);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};




var Chat2Page = (function () {
    function Chat2Page(ref, speech, tts, navCtrl, platform) {
        this.ref = ref;
        this.speech = speech;
        this.tts = tts;
        this.navCtrl = navCtrl;
        this.platform = platform;
        this.speechList = [];
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
        this.messages = [
            {
                toId: this.user._id,
                _id: 1,
                date: new Date().toLocaleTimeString().replace(/:\d+ /, ' '),
                userId: this.toUser._id,
                username: this.toUser.username,
                pic: this.toUser.pic,
                text: {
                    speech: "Salut ! Je suis BoBot, je vais t'aider à déterminer ton besoin."
                }
            },
            {
                toId: this.user._id,
                _id: 2,
                date: new Date().toLocaleTimeString().replace(/:\d+ /, ' '),
                userId: this.toUser._id,
                username: this.toUser.username,
                pic: this.toUser.pic,
                text: {
                    speech: "Es-tu un client, un prospect ou un collaborateur ?"
                }
            }
        ];
        ApiAIPlugin.init({
            clientAccessToken: "099b97242c1745bd92c163cd27d2c767",
            lang: "en" // set lang tag from list of supported languages 
        }, function (result) { }, function (error) { });
        this.initializeApp();
        this.hideTime = true;
        this.verbalResponse = true;
    }
    Chat2Page.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            if (!_this.hasPermission()) {
                _this.getPermission();
            }
        });
    };
    Chat2Page.prototype.SpeakText = function (voice) {
        return __awaiter(this, void 0, void 0, function () {
            var e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.tts.speak(voice)];
                    case 1:
                        _a.sent();
                        console.log("Successfully spoke");
                        return [3 /*break*/, 3];
                    case 2:
                        e_1 = _a.sent();
                        console.log(e_1);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    Chat2Page.prototype.listenForSpeech = function () {
        var _this = this;
        this.androidOptions = {
            prompt: 'Speak into your phone!',
            matches: 1
        };
        this.iosOptions = {
            matches: 1
        };
        if (this.platform.is('android')) {
            this.speech.startListening(this.androidOptions).subscribe(function (data) {
                _this.messages.push({
                    toId: _this.toUser._id,
                    _id: _this.messages.length,
                    date: new Date().toLocaleTimeString().replace(/:\d+ /, ' '),
                    userId: _this.user._id,
                    username: _this.user.username,
                    pic: _this.user.pic,
                    text: data
                });
                _this.SendTextFromVoice(data);
            }, function (error) {
                console.log(error);
            });
        }
        else if (this.platform.is('ios')) {
            this.speech.startListening(this.iosOptions).subscribe(function (data) { return _this.speechList = data; }, function (error) { return console.log(error); });
            console.log(this.speechList);
        }
    };
    Chat2Page.prototype.SendText = function (query) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var e_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, ApiAIPlugin.requestText({
                                query: query,
                                originalRequest: {
                                    source: 'WWT chat bot',
                                    data: 'messages'
                                }
                            }, function (response) {
                                console.log(JSON.stringify(response));
                                console.log(JSON.stringify(response.result));
                                var speech = response.result.fulfillment;
                                if (response.result.fulfillment.speech) {
                                    console.log(speech);
                                    if (_this.platform.is('ios')) {
                                        _this.messages.push({
                                            toId: _this.user._id,
                                            _id: _this.messages.length,
                                            date: new Date().toLocaleTimeString().replace(/:\d+ /, ' '),
                                            userId: _this.toUser._id,
                                            username: _this.toUser.username,
                                            pic: _this.toUser.pic,
                                            text: speech
                                        });
                                        _this.ref.detectChanges();
                                    }
                                    else {
                                        _this.messages.push({
                                            toId: _this.user._id,
                                            _id: 2,
                                            date: new Date().toLocaleTimeString().replace(/:\d+ /, ' '),
                                            userId: _this.toUser._id,
                                            username: _this.toUser.username,
                                            pic: _this.toUser.pic,
                                            text: speech
                                        });
                                        _this.ref.detectChanges();
                                    }
                                }
                                else {
                                    _this.messages.push({
                                        toId: _this.user._id,
                                        _id: 2,
                                        date: new Date().toLocaleTimeString().replace(/:\d+ /, ' '),
                                        userId: _this.toUser._id,
                                        username: _this.toUser.username,
                                        pic: _this.toUser.pic,
                                        text: "Je suis désolé, je n'ai pas compris votre réponse."
                                    });
                                    _this.ref.detectChanges();
                                }
                            }, function (error) {
                                console.error(error);
                            })];
                    case 1:
                        _a.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        e_2 = _a.sent();
                        alert(e_2);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    Chat2Page.prototype.SendTextFromVoice = function (query) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var e_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, ApiAIPlugin.requestText({
                                query: query
                            }, function (response) {
                                if (response.result.fulfillment.speech) {
                                    var voice = response.result.fulfillment.speech;
                                    console.log('3', voice);
                                    _this.messages.push({
                                        toId: _this.user._id,
                                        _id: 2,
                                        date: new Date().toLocaleTimeString().replace(/:\d+ /, ' '),
                                        userId: _this.toUser._id,
                                        username: _this.toUser.username,
                                        pic: _this.toUser.pic,
                                        text: voice
                                    });
                                    _this.ref.detectChanges();
                                    _this.SpeakText(voice);
                                }
                                else {
                                    var voice = "Je suis désolé, je n'ai pas compris votre réponse";
                                    console.log('3', voice);
                                    _this.messages.push({
                                        toId: _this.user._id,
                                        _id: 2,
                                        date: new Date().toLocaleTimeString().replace(/:\d+ /, ' '),
                                        userId: _this.toUser._id,
                                        username: _this.toUser.username,
                                        pic: _this.toUser.pic,
                                        text: voice
                                    });
                                    _this.ref.detectChanges();
                                    _this.SpeakText(voice);
                                }
                            }, function (error) {
                                console.error(error);
                            })];
                    case 1:
                        _a.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        e_3 = _a.sent();
                        alert(e_3);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    Chat2Page.prototype.getSupportedLanguages = function () {
        return __awaiter(this, void 0, void 0, function () {
            var languages, e_4;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.speech.getSupportedLanguages()];
                    case 1:
                        languages = _a.sent();
                        console.log(languages);
                        return [2 /*return*/, languages];
                    case 2:
                        e_4 = _a.sent();
                        console.error(e_4);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    Chat2Page.prototype.hasPermission = function () {
        return __awaiter(this, void 0, void 0, function () {
            var permission, e_5;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.speech.hasPermission()];
                    case 1:
                        permission = _a.sent();
                        console.log(permission);
                        return [2 /*return*/, permission];
                    case 2:
                        e_5 = _a.sent();
                        console.log(e_5);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    Chat2Page.prototype.getPermission = function () {
        return __awaiter(this, void 0, void 0, function () {
            var permission, e_6;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.speech.requestPermission()];
                    case 1:
                        permission = _a.sent();
                        console.log(permission);
                        return [2 /*return*/, permission];
                    case 2:
                        e_6 = _a.sent();
                        console.log(e_6);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    Chat2Page.prototype.isSpeechSupported = function () {
        return __awaiter(this, void 0, void 0, function () {
            var isAvailable;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.speech.isRecognitionAvailable()];
                    case 1:
                        isAvailable = _a.sent();
                        console.log(isAvailable);
                        return [2 /*return*/, isAvailable];
                }
            });
        });
    };
    Chat2Page.prototype.sendMessage = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.messages.push({
                    toId: this.toUser._id,
                    _id: this.messages.length,
                    date: new Date().toLocaleTimeString().replace(/:\d+ /, ' '),
                    userId: this.user._id,
                    username: this.user.username,
                    pic: this.user.pic,
                    text: this.newMessage
                });
                this.SendText(this.newMessage);
                console.log(this.newMessage);
                this.newMessage = "";
                return [2 /*return*/];
            });
        });
    };
    Chat2Page.prototype.buildCardLayout = function (data) {
    };
    Chat2Page.prototype.login = function () {
        this.navCtrl.push('WelcomePage');
    };
    return Chat2Page;
}());
Chat2Page = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-chat2',template:/*ion-inline-start:"C:\Users\Cyprien\Desktop\newApp2\src\pages\chat2\chat2.html"*/'\n\n  <ion-header no-border>\n\n    <ion-navbar color="primary" hideBackButton="true">\n\n      <ion-buttons start>\n\n  \n\n      </ion-buttons>\n\n      <ion-title>\n\n        Chat-Bot\n\n      </ion-title>\n\n      <ion-buttons end>\n\n        <button ion-button icon-left (click)="login()"><ion-icon name="contact"></ion-icon></button>\n\n      </ion-buttons>\n\n    </ion-navbar>\n\n  </ion-header>\n\n\n\n<ion-content padding>\n\n  <div *ngFor="let message of messages" class="message-wrapper" on-hold="onMessageHold($event, $index, message)">\n\n    <div *ngIf="user._id !== message.userId">\n\n      <img class="profile-pic left" [src]="toUser.pic" />\n\n      <div class="chat-bubble left slide-left">\n\n          \n\n         <div class="message" [innerHTML]="message.text.speech" autolinker></div>\n\n          \n\n        <div class="message-detail">\n\n          <span class="bold">{{toUser.username}}</span>\n\n        </div>\n\n          \n\n      </div>\n\n    </div>\n\n    <div *ngIf="user._id === message.userId">\n\n      <img class="profile-pic right" [src]="user.pic" />\n\n\n\n      <div class="chat-bubble right slide-right">\n\n          \n\n        <div class="message" [innerHTML]="message.text" autolinker></div>\n\n\n\n        <div class="message-detail">\n\n          <span class="bold">{{user.username}}</span>\n\n        </div>\n\n\n\n      </div>\n\n    </div>\n\n    <div class="cf"></div>\n\n  </div>\n\n</ion-content>\n\n\n\n<ion-footer>\n\n    <ion-grid>\n\n      <ion-row>\n\n        <ion-col>\n\n            <button ion-button clear (click)="listenForSpeech()"><ion-icon class="footer-btn" name="mic"></ion-icon></button>\n\n        </ion-col>\n\n        <ion-col col-8>\n\n            <ion-input [(ngModel)]="newMessage" placeholder="Send a message..."></ion-input>\n\n        </ion-col>\n\n        <ion-col>\n\n            <button ion-button clear (click)="sendMessage()"><ion-icon class="footer-btn" name="send"></ion-icon></button>\n\n        </ion-col>\n\n      </ion-row>\n\n    </ion-grid>\n\n</ion-footer>'/*ion-inline-end:"C:\Users\Cyprien\Desktop\newApp2\src\pages\chat2\chat2.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"], __WEBPACK_IMPORTED_MODULE_3__ionic_native_speech_recognition__["a" /* SpeechRecognition */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_text_to_speech__["a" /* TextToSpeech */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */]])
], Chat2Page);

//# sourceMappingURL=chat2.js.map

/***/ })

});
//# sourceMappingURL=13.js.map