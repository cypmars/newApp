webpackJsonp([9],{

/***/ 287:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Chat2PageModule", function() { return Chat2PageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__chat2__ = __webpack_require__(611);
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

/***/ 611:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Chat2Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_text_to_speech__ = __webpack_require__(225);
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
        this.messages = [];
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
                    isHuman: true,
                    layout: '',
                    text: data,
                    time: new Date().toLocaleTimeString().replace(/:\d+ /, ' ')
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
                        alert('enter in sendText');
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        alert('a');
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
                                    alert(speech);
                                    if (_this.platform.is('ios')) {
                                        _this.messages.push({
                                            isHuman: false,
                                            layout: '',
                                            text: speech,
                                            time: new Date().toLocaleTimeString().replace(/:\d+ /, ' ')
                                        });
                                        _this.ref.detectChanges();
                                    }
                                    else {
                                        _this.messages.push({
                                            isHuman: false,
                                            layout: '',
                                            text: speech,
                                            time: new Date().toLocaleTimeString().replace(/:\d+ /, ' ')
                                        });
                                        _this.ref.detectChanges();
                                    }
                                }
                                else {
                                    _this.messages.push({
                                        isHuman: false,
                                        layout: '',
                                        text: "I'm sorry. I could not find an answer to that request.",
                                        time: new Date().toLocaleTimeString().replace(/:\d+ /, ' ')
                                    });
                                    _this.ref.detectChanges();
                                }
                            }, function (error) {
                                console.error(error);
                            })];
                    case 2:
                        _a.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        e_2 = _a.sent();
                        alert(e_2);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
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
                                        isHuman: false,
                                        layout: '',
                                        text: voice,
                                        time: new Date().toLocaleTimeString().replace(/:\d+ /, ' ')
                                    });
                                    _this.ref.detectChanges();
                                    _this.SpeakText(voice);
                                }
                                else {
                                    var voice = "I'm sorry. I could not find an answer to that request.";
                                    console.log('3', voice);
                                    _this.messages.push({
                                        isHuman: false,
                                        layout: response.result.fulfillment.data.layout,
                                        text: voice,
                                        time: new Date().toLocaleTimeString().replace(/:\d+ /, ' ')
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
                    isHuman: true,
                    layout: '',
                    text: this.newMessage,
                    time: new Date().toLocaleTimeString().replace(/:\d+ /, ' ')
                });
                alert(this.newMessage);
                this.SendText(this.newMessage);
                delete this.newMessage;
                return [2 /*return*/];
            });
        });
    };
    Chat2Page.prototype.buildCardLayout = function (data) {
    };
    return Chat2Page;
}());
Chat2Page = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-chat2',template:/*ion-inline-start:"C:\Users\Cyprien\Desktop\newApp2\src\pages\chat2\chat2.html"*/'\n\n <ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>WWT Assistant</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding class="content-stable" on-swipe-left="hideTime = false" on-swipe-right="hideTime = true">\n\n  <div *ngFor="let message of messages" [ngClass]="{\'other\': !message.isHuman}" class="messages">\n\n    <div class="message" *ngIf="message.isHuman" [ngClass]="{\'slide-right\': hideTime, \'\': !hideTime}">\n\n      <span>{{ message.text }}</span>\n\n    </div>\n\n    <div class="message" *ngIf="!message.isHuman && !message.layout" [ngClass]="{\'slide-right\': hideTime, \'\': !hideTime}">\n\n      <span>{{ message.text.speech }}</span>\n\n    </div>\n\n    <div class="opportunity" *ngIf="!message.isHuman && message.layout === \'opportunityList\'" [ngClass]="{\'slide-right\': hideTime, \'\': !hideTime}">\n\n      <h3>Your top opportunities are:</h3>\n\n      <div *ngFor="let opp of message.text.data.opportunityList">\n\n        <span><b>{{ opp.Name }}</b><br>\n\n        Revenue: ${{ opp.Total_Revenue__c }}<br>\n\n        GP: ${{ opp.Total_Opportunity_GP__c }}\n\n        </span>\n\n      </div>\n\n    </div>\n\n    <div class="time" [ngClass]="{\'slide-right\': hideTime, \'\': !hideTime}">{{message.time}}</div>\n\n  </div>\n\n</ion-content>\n\n\n\n<ion-footer>\n\n  <ion-toolbar position="bottom">\n\n      <ion-badge class="message-form-badge" (click)="listenForSpeech()">\n\n        <ion-icon name="mic"></ion-icon>\n\n      </ion-badge>\n\n      <input type="text" placeholder="Type a message..." [(ngModel)]="newMessage">\n\n      <button type="submit" small class="message-form-button" (click)="sendMessage()">Send <ion-icon name="send"></ion-icon></button>\n\n  </ion-toolbar>\n\n</ion-footer>'/*ion-inline-end:"C:\Users\Cyprien\Desktop\newApp2\src\pages\chat2\chat2.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"], __WEBPACK_IMPORTED_MODULE_3__ionic_native_speech_recognition__["a" /* SpeechRecognition */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_text_to_speech__["a" /* TextToSpeech */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */]])
], Chat2Page);

//# sourceMappingURL=chat2.js.map

/***/ })

});
//# sourceMappingURL=9.js.map