webpackJsonp([10],{

/***/ 430:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Chat2PageModule", function() { return Chat2PageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_text_to_speech__ = __webpack_require__(731);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__chat2__ = __webpack_require__(734);
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
            __WEBPACK_IMPORTED_MODULE_3__chat2__["a" /* Chat2Page */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__chat2__["a" /* Chat2Page */])
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_text_to_speech__["a" /* TextToSpeech */],
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_3__chat2__["a" /* Chat2Page */]
        ]
    })
], Chat2PageModule);

//# sourceMappingURL=chat2.module.js.map

/***/ }),

/***/ 445:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__(9);
var map_1 = __webpack_require__(256);
Observable_1.Observable.prototype.map = map_1.map;
//# sourceMappingURL=map.js.map

/***/ }),

/***/ 731:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TextToSpeech; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_core__ = __webpack_require__(57);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
 * @name Text To Speech
 * @description
 * Text to Speech plugin
 *
 * @usage
 * ```typescript
 * import { TextToSpeech } from '@ionic-native/text-to-speech';
 *
 * constructor(private tts: TextToSpeech) { }
 *
 * ...
 *
 * this.tts.speak('Hello World')
 *   .then(() => console.log('Success'))
 *   .catch((reason: any) => console.log(reason));
 *
 * ```
 * @interfaces
 * TTSOptions
 */
var TextToSpeech = (function (_super) {
    __extends(TextToSpeech, _super);
    function TextToSpeech() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * This function speaks
     * @param textOrOptions {string | TTSOptions} Text to speak or TTSOptions
     * @return {Promise<any>} Returns a promise that resolves when the speaking finishes
     */
    TextToSpeech.prototype.speak = function (textOrOptions) {
        return;
    };
    /**
     * Stop any current TTS playback
     * @return {Promise<any>}
     */
    TextToSpeech.prototype.stop = function () {
        return;
    };
    TextToSpeech.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"] },
    ];
    /** @nocollapse */
    TextToSpeech.ctorParameters = function () { return []; };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({
            successIndex: 1,
            errorIndex: 2
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", Promise)
    ], TextToSpeech.prototype, "speak", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], TextToSpeech.prototype, "stop", null);
    TextToSpeech = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["e" /* Plugin */])({
            pluginName: 'Text To Speech',
            plugin: 'cordova-plugin-tts',
            pluginRef: 'TTS',
            repo: 'https://github.com/vilic/cordova-plugin-tts',
            platforms: ['Android', 'iOS', 'Windows Phone 8']
        })
    ], TextToSpeech);
    return TextToSpeech;
}(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["d" /* IonicNativePlugin */]));

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 734:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Chat2Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_text_to_speech__ = __webpack_require__(731);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_speech_recognition__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__(254);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__ = __webpack_require__(445);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__);
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







/**
 * The Welcome Page is a splash page that quickly describes the app,
 * and then directs the user to create an account or log in.
 * If you'd like to immediately put the user onto a login/signup page,
 * we recommend not using the Welcome page.
*/
//declare var ApiAIPlugin: any;
var Chat2Page = (function () {
    function Chat2Page(ref, speech, tts, navCtrl, platform, http) {
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
                text: "Salut ! Je suis BoBot, puis-je t'aider à déterminer ton besoin ?",
                chips: ["hello", "bonjour", "help"]
            },
            {
                toId: this.user._id,
                _id: 1,
                date: new Date().toLocaleTimeString().replace(/:\d+ /, ' '),
                userId: this.toUser._id,
                username: this.toUser.username,
                pic: this.toUser.pic,
                text: "Salut ! Je suis BoBot, puis-je t'aider à déterminer ton besoin ?",
                chips: ["hello", "bonjour", "help"]
            }
        ];
        // ApiAIPlugin.init(
        // {
        //     clientAccessToken: "099b97242c1745bd92c163cd27d2c767", 
        //     lang: "en" // set lang tag from list of supported languages 
        // }, 
        // function(result) { /* success processing */ },
        // function(error) { /* error processing */ }
        // );
        // this.initializeApp();
        // this.hideTime = true;
        // this.verbalResponse = true;
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
                console.log("dataVoice: " + data);
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
            this.speech.startListening(this.iosOptions).subscribe(function (data) {
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
    };
    Chat2Page.prototype.SendNoDefined = function (query, messages, ms) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var e_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, setTimeout(function () {
                                if (messages.length >= 1) {
                                    if (_this.platform.is('ios')) {
                                        _this.messages.push({
                                            toId: _this.user._id,
                                            _id: _this.messages.length,
                                            date: new Date().toLocaleTimeString().replace(/:\d+ /, ' '),
                                            userId: _this.toUser._id,
                                            username: _this.toUser.username,
                                            pic: _this.toUser.pic,
                                            text: messages[messages.length - 1],
                                            chips: []
                                        });
                                        _this.ref.detectChanges();
                                        messages.pop();
                                        _this.SendNoDefined(query, messages, ms);
                                    }
                                    else {
                                        _this.messages.push({
                                            toId: _this.user._id,
                                            _id: 2,
                                            date: new Date().toLocaleTimeString().replace(/:\d+ /, ' '),
                                            userId: _this.toUser._id,
                                            username: _this.toUser.username,
                                            pic: _this.toUser.pic,
                                            text: messages[messages.length - 1],
                                            chips: []
                                        });
                                        _this.ref.detectChanges();
                                        messages.pop();
                                        _this.SendNoDefined(query, messages, ms);
                                    }
                                }
                            }, ms)];
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
    Chat2Page.prototype.SendText = function (query, messages, ms) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/];
            });
        });
    };
    Chat2Page.prototype.SendTextFromVoice = function (query) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/];
            });
        });
    };
    Chat2Page.prototype.getSupportedLanguages = function () {
        return __awaiter(this, void 0, void 0, function () {
            var languages, e_3;
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
                        e_3 = _a.sent();
                        console.error(e_3);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    Chat2Page.prototype.hasPermission = function () {
        return __awaiter(this, void 0, void 0, function () {
            var permission, e_4;
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
                        e_4 = _a.sent();
                        console.log(e_4);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    Chat2Page.prototype.getPermission = function () {
        return __awaiter(this, void 0, void 0, function () {
            var permission, e_5;
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
                        e_5 = _a.sent();
                        console.log(e_5);
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
            var messages0, messages1, messages2, messages;
            return __generator(this, function (_a) {
                this.messages.push({
                    toId: this.toUser._id,
                    _id: this.messages.length,
                    date: new Date().toLocaleTimeString().replace(/:\d+ /, ' '),
                    userId: this.user._id,
                    username: this.user.username,
                    pic: this.user.pic,
                    text: this.newMessage,
                    chips: []
                });
                messages0 = [
                    "Bon je dois t'avouer quelque chose ...",
                    "Il y a quelque chose que je dois te dire ...",
                    "Je dois te faire une confidence ... Oui ça va vite entre nous !"
                ];
                this.message0 = messages0[Math.floor(Math.random() * messages0.length)];
                messages1 = [
                    "Je suis installé mais j'ai pas encore bien bossé cette partie ... Pourrais-tu revenir un peu plus tard ?",
                    "Je me dois d'être honnête envers toi, je ne suis pas au point pour le moment ..."
                ];
                this.message1 = messages1[Math.floor(Math.random() * messages1.length)];
                messages2 = [
                    "Tu peux me retrouver dans la partie recherche, je te guiderai au mieux !",
                    "Retrouve moi dans la partie recherche et ensemble nous parviendrons à déterminer ton besoin"
                ];
                this.message2 = messages2[Math.floor(Math.random() * messages2.length)];
                messages = [this.message2, this.message1, this.message0];
                this.SendText(this.newMessage, messages, 2000);
                console.log(this.newMessage);
                this.newMessage = "";
                return [2 /*return*/];
            });
        });
    };
    Chat2Page.prototype.buildCardLayout = function (data) {
    };
    Chat2Page.prototype.login = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__pages__["m" /* WelcomePage */]);
    };
    return Chat2Page;
}());
Chat2Page = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-chat2',template:/*ion-inline-start:"/Users/cyp/Documents/newApp/src/pages/chat2/chat2.html"*/'\n  <ion-header no-border>\n    <ion-navbar color="primary" hideBackButton="true">\n      <ion-buttons start>\n  \n      </ion-buttons>\n      <ion-title>\n        Chat-Bot\n      </ion-title>\n      <ion-buttons end>\n        <button ion-button icon-left (click)="login()"><ion-icon name="contact"></ion-icon></button>\n      </ion-buttons>\n    </ion-navbar>\n  </ion-header>\n\n  <ion-content padding>\n    <div *ngFor="let message of messages" >\n      <div *ngIf="user._id !== message.userId">\n        <div class="message-wrapper" on-hold="onMessageHold($event, $index, message)">\n          <img class="profile-pic left" [src]="toUser.pic" style="top: 25px"/>\n          <div class="chat-bubble left slide-left">   \n            <div class="message" [innerHTML]="message.text" autolinker></div>  \n            <div class="message-detail">\n              <span class="bold">{{toUser.username}}</span>\n            </div>\n          </div>\n        </div>\n        <div *ngIf="message.chips" text-center>\n          <ion-scroll zoom="false" style="top: 70px; left: 40px" scrollX="true" class="scroll">\n            <ion-row text-center>\n                <div style="white-space: nowrap;" *ngFor="let chip of message.chips" class="area" style="margin-right:5px;">\n                  <ion-badge style="background-color: #d42649">{{chip}}</ion-badge>\n                </div>\n            </ion-row>\n          </ion-scroll>\n        </div>\n      </div>\n      <div *ngIf="user._id === message.userId">\n        <div class="message-wrapper">\n          <img class="profile-pic right" [src]="user.pic" />\n  \n          <div class="chat-bubble right slide-right">\n              \n            <div class="message" [innerHTML]="message.text" autolinker></div>\n  \n            <div class="message-detail">\n              <span class="bold">{{user.username}}</span>\n            </div>\n  \n          </div>\n        </div>\n      </div>\n      <div class="cf"></div>\n    </div>\n  </ion-content>\n\n<ion-footer>\n    <ion-grid>\n      <ion-row>\n        <!-- <ion-col>\n            <button ion-button clear (click)="listenForSpeech()"><ion-icon class="footer-btn" name="mic"></ion-icon></button>\n        </ion-col> -->\n        <ion-col col-8>\n            <ion-input [(ngModel)]="newMessage" placeholder="Send a message..."></ion-input>\n        </ion-col>\n        <ion-col>\n            <button ion-button clear (click)="sendMessage()"><ion-icon class="footer-btn" name="send"></ion-icon></button>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n</ion-footer>'/*ion-inline-end:"/Users/cyp/Documents/newApp/src/pages/chat2/chat2.html"*/
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__ionic_native_speech_recognition__["a" /* SpeechRecognition */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__ionic_native_speech_recognition__["a" /* SpeechRecognition */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__ionic_native_text_to_speech__["a" /* TextToSpeech */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ionic_native_text_to_speech__["a" /* TextToSpeech */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* Platform */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* Platform */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_5__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_http__["a" /* Http */]) === "function" && _f || Object])
], Chat2Page);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=chat2.js.map

/***/ })

});
//# sourceMappingURL=10.js.map