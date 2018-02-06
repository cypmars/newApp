webpackJsonp([7],{

/***/ 430:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Chat2PageModule", function() { return Chat2PageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_text_to_speech__ = __webpack_require__(732);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__chat2__ = __webpack_require__(735);
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

/***/ 727:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComputeResultsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__(445);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ComputeResultsService = (function () {
    function ComputeResultsService() {
        this.questions = [
            {
                id: 0,
                name: "Surface recevant du public",
                question: "Possédez-vous une surface commerciale ou magasin ?",
                img: "assets/img/questions/boutique-fruits.jpg",
                // + hygiene et prop classique + Gestion des déchets - secteur industriel
                servicesIdIfYes: [0, 5, 6, 19]
            },
            {
                id: 1,
                name: "Surface recevant du public",
                question: "Possédez-vous des bureaux ou sièges sociaux ?",
                img: "assets/img/questions/bureau.jpg",
                servicesIdIfYes: [0, 5, 6, 8, 17]
            },
            {
                id: 2,
                name: "Clients en situation d'handicap",
                question: "Désirez-vous accompagner vos clients en situation d'handicap ?",
                img: "assets/img/questions/handicap.jpg",
                servicesIdIfYes: [20]
            },
            {
                id: 3,
                name: "Usine ou zone de fabrication",
                question: "Possedez-vous une usine ou zone de fabrication ?",
                img: "assets/img/questions/usine-boissons.jpg",
                servicesIdIfYes: [1, 2, 3, 5, 7]
            },
            {
                id: 4,
                name: "Sécurité",
                question: "Désirez-vous voir nos services relatifs à la sécurité ?",
                img: "assets/img/questions/securite-q.jpg",
                servicesIdIfYes: [9, 10, 11, 12, 13]
            },
            {
                id: 5,
                name: "Service logistique",
                question: "Seriez-vous interessés par une optimisation de votre système logistique et manutention ?",
                img: "assets/img/questions/logistique.jpg",
                servicesIdIfYes: [21, 22, 23, 24]
            },
            {
                id: 6,
                name: "Recrutement",
                question: "Pensez-vous à recruter ?",
                img: "assets/img/questions/recrutement.jpg",
                servicesIdIfYes: [39, 40, 41]
            },
            {
                id: 7,
                name: "Evenement",
                question: "Pensez-vous à organiser des évenements ?",
                img: "assets/img/questions/evenement.jpg",
                servicesIdIfYes: [18]
            },
            {
                id: 8,
                name: "Technologies",
                question: "Voulez-vous voir nos solutions pour le traitement de déchets radioactif ?",
                img: "assets/img/questions/technologies.jpg",
                servicesIdIfYes: [28, 34, 35, 36, 37]
            },
            {
                id: 9,
                name: "Surface recevant du public",
                question: "Possédez-vous un cabinet médical ?",
                img: "assets/img/questions/cabinet.jpg",
                servicesIdIfYes: [0, 5, 6, 8, 17]
            },
        ];
        this.myResults = new Array();
        this.myQuestions = new Array();
        this.myArray = new Array();
    }
    ComputeResultsService.prototype.getMyArray = function () {
        return this.myArray;
    };
    ComputeResultsService.prototype.computeResults = function (type, sector, job) {
        switch (sector) {
            case "Agro-alimentaire":
                this.myResults.push(0);
                switch (job) {
                    case "Boucherie":
                        break;
                    case "Poissonerie":
                        break;
                    case "Boulangerie / Patisserie":
                        break;
                    case "Fruits & Légumes":
                        break;
                    case "Produits laitiers":
                        break;
                    case "Grains / Amylacés":
                        break;
                    case "Huiles / Graisses":
                        break;
                    case "Boissons":
                        break;
                }
                break;
            case "Economie":
                this.myResults.push(8);
                this.myResults.push(7);
                switch (job) {
                    case "Banque":
                        break;
                    case "Finance":
                        break;
                    case "Assurance":
                        break;
                    case "Audit":
                        break;
                    case "Conseil":
                        break;
                    case "Autre":
                        break;
                }
                break;
            case "Santé & Services":
                this.myResults.push(8);
                switch (job) {
                    case "Medecine":
                        break;
                    case "Pharmacie":
                        break;
                    case "Aide à la personne":
                        break;
                    case "Gardiennage":
                        break;
                    case "Recherche":
                        break;
                    case "Autre":
                        break;
                }
                break;
            case "Télécoms & Informatique":
                this.myQuestions.push(this.questions[6]);
                this.myQuestions.push(this.questions[2]);
                this.myQuestions.push(this.questions[4]);
                this.myQuestions.push(this.questions[1]);
                this.myQuestions.push(this.questions[7]);
                switch (job) {
                    case "Systèmes d'information":
                        break;
                    case "Robotique":
                        break;
                    case "Technologies":
                        break;
                    case "Recherche":
                        break;
                    case "Autre":
                        break;
                }
                break;
            case "Transport & Logistique":
                this.myResults.push(1);
                this.myResults.push(2);
                this.myResults.push(4);
                this.myResults.push(8);
                this.myResults.push(21);
                this.myResults.push(22);
                switch (job) {
                    case "Aéronautique":
                        this.myResults.push(14);
                        this.myResults.push(15);
                        this.myResults.push(16);
                        break;
                    case "Ferroviaire":
                        this.myResults.push(24);
                        break;
                    case "Urbain":
                        this.myResults.push(23);
                        break;
                    case "Maritime":
                        break;
                    case "Astronautique":
                        break;
                    case "Distribution":
                        break;
                    case "Gestion & Pilotage":
                        break;
                    case "Autre":
                        break;
                }
                break;
            case "Commerce & Tourisme":
                this.myResults.push(0);
                this.myResults.push(5);
                this.myResults.push(6);
                this.myResults.push(8);
                this.myResults.push(19);
                switch (job) {
                    case "Grand Commerce":
                        break;
                    case "Petit Commerce":
                        break;
                    case "Artisanat":
                        break;
                    case "Hôtellerie":
                        break;
                    case "Restauration":
                        break;
                    case "Autre":
                        break;
                }
                break;
            case "Energie":
                this.myResults.push(1);
                this.myResults.push(2);
                this.myResults.push(3);
                this.myResults.push(5);
                this.myResults.push(7);
                this.myResults.push(8);
                switch (job) {
                    case "Nucléaire":
                        this.myResults.push(25);
                        this.myResults.push(26);
                        this.myResults.push(27);
                        this.myResults.push(30);
                        this.myResults.push(31);
                        this.myResults.push(32);
                        this.myResults.push(33);
                        break;
                    case "Eolien":
                        break;
                    case "Solaire":
                        break;
                    case "Hydrolique":
                        break;
                    case "Pétrolier":
                        break;
                    case "Autre":
                        break;
                }
                break;
            case "Industrie":
                this.myResults.push(1);
                this.myResults.push(2);
                this.myResults.push(3);
                this.myResults.push(5);
                this.myResults.push(7);
                this.myResults.push(38);
                switch (job) {
                    case "Pharmacie":
                        this.myResults.push(34);
                        break;
                    case "Textile":
                        break;
                    case "Chimique":
                        break;
                    case "Construction":
                        break;
                    case "Bâtiment":
                        this.myResults.push(25);
                        break;
                    case "Automobile":
                        break;
                    case "Aeronautique":
                        break;
                    case "Lourde":
                        this.myResults.push(34);
                        break;
                }
                break;
        }
        return this.myResults;
    };
    ComputeResultsService.prototype.computeQuestionsAndResults = function (type, sector, job) {
        switch (sector) {
            case 0:
                this.myQuestions.push(this.questions[0]);
                this.myQuestions.push(this.questions[2]);
                this.myQuestions.push(this.questions[3]);
                this.myQuestions.push(this.questions[4]);
                this.myQuestions.push(this.questions[6]);
                this.myQuestions.push(this.questions[7]);
                switch (job) {
                    case 0:
                        break;
                    case 1:
                        break;
                    case 2:
                        break;
                    case 3:
                        break;
                    case 4:
                        break;
                    case 5:
                        break;
                    case 6:
                        break;
                    case 7:
                        break;
                }
                break;
            case 7:
                this.myQuestions.push(this.questions[1]);
                this.myQuestions.push(this.questions[2]);
                this.myQuestions.push(this.questions[4]);
                this.myQuestions.push(this.questions[6]);
                this.myResults.push(8);
                this.myResults.push(17);
                switch (job) {
                    case 0:
                        break;
                    case 1:
                        break;
                    case 2:
                        break;
                    case 3:
                        break;
                    case 4:
                        break;
                    case 5:
                        break;
                }
                break;
            case 6:
                this.myQuestions.push(this.questions[9]);
                this.myQuestions.push(this.questions[2]);
                this.myQuestions.push(this.questions[4]);
                this.myQuestions.push(this.questions[5]);
                this.myQuestions.push(this.questions[6]);
                this.myResults.push(8);
                switch (job) {
                    case 0:
                        break;
                    case 1:
                        break;
                    case 2:
                        break;
                    case 3:
                        break;
                    case 4:
                        break;
                    case 5:
                        break;
                }
                break;
            case 5:
                this.myQuestions.push(this.questions[6]);
                this.myQuestions.push(this.questions[2]);
                this.myQuestions.push(this.questions[4]);
                this.myQuestions.push(this.questions[1]);
                this.myQuestions.push(this.questions[7]);
                switch (job) {
                    case 0:
                        break;
                    case 1:
                        break;
                    case 2:
                        break;
                    case 3:
                        break;
                    case 4:
                        break;
                }
                break;
            case 4:
                this.myQuestions.push(this.questions[1]);
                this.myQuestions.push(this.questions[4]);
                this.myQuestions.push(this.questions[6]);
                this.myResults.push(1);
                this.myResults.push(2);
                this.myResults.push(4);
                this.myResults.push(8);
                this.myResults.push(21);
                this.myResults.push(22);
                switch (job) {
                    case 0:
                        this.myResults.push(14);
                        this.myResults.push(15);
                        this.myResults.push(16);
                        break;
                    case 1:
                        this.myResults.push(24);
                        break;
                    case 2:
                        this.myResults.push(23);
                        break;
                    case 3:
                        break;
                    case 4:
                        break;
                    case 5:
                        break;
                    case 6:
                        break;
                    case 7:
                        break;
                }
                break;
            case 3:
                this.myQuestions.push(this.questions[4]);
                this.myQuestions.push(this.questions[5]);
                this.myQuestions.push(this.questions[6]);
                this.myQuestions.push(this.questions[7]);
                this.myQuestions.push(this.questions[2]);
                this.myResults.push(0);
                this.myResults.push(5);
                this.myResults.push(6);
                this.myResults.push(8);
                this.myResults.push(19);
                switch (job) {
                    case 0:
                        break;
                    case 1:
                        break;
                    case 2:
                        break;
                    case 3:
                        break;
                    case 4:
                        break;
                    case 5:
                        break;
                }
                break;
            case 2:
                this.myQuestions.push(this.questions[3]);
                this.myQuestions.push(this.questions[4]);
                this.myQuestions.push(this.questions[1]);
                this.myQuestions.push(this.questions[5]);
                this.myQuestions.push(this.questions[6]);
                this.myResults.push(1);
                this.myResults.push(2);
                this.myResults.push(3);
                this.myResults.push(5);
                this.myResults.push(7);
                this.myResults.push(8);
                switch (job) {
                    case 0:
                        this.myQuestions.push(this.questions[8]);
                        this.myResults.push(25);
                        this.myResults.push(26);
                        this.myResults.push(27);
                        this.myResults.push(30);
                        this.myResults.push(31);
                        this.myResults.push(32);
                        this.myResults.push(33);
                        break;
                    case 1:
                        break;
                    case 2:
                        break;
                    case 3:
                        break;
                    case 4:
                        break;
                    case 5:
                        break;
                }
                break;
            case 1:
                this.myQuestions.push(this.questions[1]);
                this.myQuestions.push(this.questions[4]);
                this.myQuestions.push(this.questions[5]);
                this.myQuestions.push(this.questions[6]);
                this.myResults.push(1);
                this.myResults.push(2);
                this.myResults.push(3);
                this.myResults.push(5);
                this.myResults.push(7);
                this.myResults.push(38);
                switch (job) {
                    case 0:
                        this.myResults.push(34);
                        break;
                    case 1:
                        break;
                    case 2:
                        break;
                    case 3:
                        break;
                    case 4:
                        this.myResults.push(25);
                        break;
                    case 5:
                        break;
                    case 6:
                        break;
                    case 7:
                        this.myResults.push(34);
                        break;
                }
                break;
        }
        this.myArray = [this.myQuestions, this.myResults];
        return this.myArray;
    };
    return ComputeResultsService;
}());
ComputeResultsService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], ComputeResultsService);

//# sourceMappingURL=ComputeResultsService.js.map

/***/ }),

/***/ 732:
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

/***/ 735:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Chat2Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_text_to_speech__ = __webpack_require__(732);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_speech_recognition__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_ComputeResultsService__ = __webpack_require__(727);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_http__ = __webpack_require__(254);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_map__ = __webpack_require__(445);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_map__);
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
    function Chat2Page(ref, speech, tts, navCtrl, platform, http) {
        var _this = this;
        this.ref = ref;
        this.speech = speech;
        this.tts = tts;
        this.navCtrl = navCtrl;
        this.platform = platform;
        this.speechList = [];
        this.clickResponses = [];
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
                chips: []
            }
        ];
        var brandData = http.get('assets/data/marques.json').map(function (res) { return res.json().marques; });
        brandData.subscribe(function (data) {
            _this.marques = data;
        });
        var productData = http.get('assets/data/products.json').map(function (res) { return res.json().products; });
        productData.subscribe(function (data) {
            _this.products = data;
        });
        var servData = http.get('assets/data/services.json').map(function (res) { return res.json().services; });
        servData.subscribe(function (data) {
            _this.services = data;
        });
        ApiAIPlugin.init({
            clientAccessToken: "099b97242c1745bd92c163cd27d2c767",
            lang: "en" // set lang tag from list of supported languages 
        }, function (result) { }, function (error) { });
        this.initializeApp();
        this.hideTime = true;
        this.verbalResponse = true;
        this.myArray = new Array();
        this.compute = new __WEBPACK_IMPORTED_MODULE_5__providers_ComputeResultsService__["a" /* ComputeResultsService */]();
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
            var _this = this;
            var e_3;
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
                                var speech = response.result.fulfillment;
                                var contexts = response.result.contexts;
                                var parts = response.result.fulfillment.messages;
                                if (parts) {
                                    for (var _i = 0, contexts_1 = contexts; _i < contexts_1.length; _i++) {
                                        var context = contexts_1[_i];
                                        if (context.name == "aider-followup") {
                                            _this.clickResponses = [];
                                        }
                                        if (context.name == "aider-yes-type-agro-custom-followup") {
                                            _this.myArray = [];
                                            _this.myArray = _this.compute.computeResults(context.parameters.type, "Agro-alimentaire", context.parameters.agroJobs);
                                        }
                                    }
                                    var newM = {
                                        toId: _this.user._id,
                                        _id: _this.messages.length,
                                        date: new Date().toLocaleTimeString().replace(/:\d+ /, ' '),
                                        userId: _this.toUser._id,
                                        username: _this.toUser.username,
                                        pic: _this.toUser.pic,
                                        text: speech.speech,
                                        chips: []
                                    };
                                    if (_this.platform.is('ios')) {
                                        for (var _a = 0, parts_1 = parts; _a < parts_1.length; _a++) {
                                            var message = parts_1[_a];
                                            switch (message.type) {
                                                case "simple_response":
                                                    newM.text = message.textToSpeech;
                                                    break;
                                                case "suggestion_chips":
                                                    for (var _b = 0, _c = message.suggestions; _b < _c.length; _b++) {
                                                        var suggestion = _c[_b];
                                                        newM.chips.push(suggestion.title);
                                                    }
                                                    break;
                                            }
                                        }
                                        _this.messages.push(newM);
                                        _this.ref.detectChanges();
                                    }
                                    else {
                                        for (var _d = 0, parts_2 = parts; _d < parts_2.length; _d++) {
                                            var message = parts_2[_d];
                                            switch (message.type) {
                                                case "simple_response":
                                                    newM.text = message.textToSpeech;
                                                    break;
                                                case "suggestion_chips":
                                                    for (var _e = 0, _f = message.suggestions; _e < _f.length; _e++) {
                                                        var suggestion = _f[_e];
                                                        newM.chips.push(suggestion.title);
                                                    }
                                                    break;
                                            }
                                        }
                                        _this.messages.push(newM);
                                        _this.ref.detectChanges();
                                    }
                                }
                                else {
                                    _this.SendNoDefined(query, messages, ms);
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
    Chat2Page.prototype.SendTextFromVoice = function (query) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var e_4;
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
                        e_4 = _a.sent();
                        alert(e_4);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    Chat2Page.prototype.getSupportedLanguages = function () {
        return __awaiter(this, void 0, void 0, function () {
            var languages, e_5;
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
                        e_5 = _a.sent();
                        console.error(e_5);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    Chat2Page.prototype.hasPermission = function () {
        return __awaiter(this, void 0, void 0, function () {
            var permission, e_6;
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
                        e_6 = _a.sent();
                        console.log(e_6);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    Chat2Page.prototype.getPermission = function () {
        return __awaiter(this, void 0, void 0, function () {
            var permission, e_7;
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
                        e_7 = _a.sent();
                        console.log(e_7);
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
    Chat2Page.prototype.sendMessageByClick = function (event, message) {
        return __awaiter(this, void 0, void 0, function () {
            var messages0, messages1, messages2, messages, _i, _a, area;
            return __generator(this, function (_b) {
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
                console.log(event);
                console.log(event.srcElement);
                console.log(event.srcElement.parentElement);
                console.log(event.srcElement.parentElement.parentElement);
                console.log(event.srcElement.parentElement.parentElement.getElementsByClassName("area"));
                console.log(event.srcElement.parentElement.parentElement.querySelector('.area'));
                for (_i = 0, _a = event.srcElement.parentElement.parentElement.getElementsByClassName("area"); _i < _a.length; _i++) {
                    area = _a[_i];
                    if (area != event.srcElement.parentElement) {
                        area.setAttribute("hidden", true);
                    }
                }
                event.srcElement.style.backgroundColor = "#0eae15";
                this.clickResponses.push(message);
                event.srcElement.remove();
                this.SendText(message, messages, 2000);
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
        selector: 'page-chat2',template:/*ion-inline-start:"/Users/cyp/Documents/newApp/src/pages/chat2/chat2.html"*/'\n  <ion-header no-border>\n    <ion-navbar color="primary" hideBackButton="true">\n      <ion-buttons start>\n  \n      </ion-buttons>\n      <ion-title>\n        Chat-Bot\n      </ion-title>\n      <ion-buttons end>\n        <button ion-button icon-left (click)="login()"><ion-icon name="contact"></ion-icon></button>\n      </ion-buttons>\n    </ion-navbar>\n  </ion-header>\n\n  <ion-content padding>\n    <div *ngFor="let message of messages" class="parent">\n      <div *ngIf="user._id !== message.userId" class="child">\n        <div class="message-wrapper" on-hold="onMessageHold($event, $index, message)">\n          <img class="profile-pic left" [src]="toUser.pic" style="top: 25px"/>\n          <div class="chat-bubble left slide-left">   \n            <div class="message" [innerHTML]="message.text" autolinker></div>  \n            <div class="message-detail">\n              <span class="bold">{{toUser.username}}</span>\n            </div>\n          </div>\n        </div>\n        <div style="width:80%; margin-right:10%; margin-left:10%; margin-bottom:10px;" text-center>\n          <ion-row class="badges" style="justify-content:center;">\n              <div style="white-space: nowrap;" text-center *ngFor="let chip of message.chips" class="area" style="margin-right:5px;">\n                <ion-badge *ngIf="!clickResponses.indexOf(chip)>=0" style="background-color: #d42649; margin-top:10px;" (click)="sendMessageByClick($event, chip)" >{{chip}}</ion-badge>\n                <ion-badge *ngIf="clickResponses.indexOf(chip)>=0" style="background-color: #0eae15; margin-top:10px;" >{{chip}}</ion-badge>\n              </div>\n          </ion-row>\n        </div>\n        <div style="width:80%; margin-right:10%; margin-left:10%; margin-bottom:10px;" text-center>\n          <ion-list *ngIf="myArray && services != null">\n            <ion-card *ngFor="for let element of myArray">\n                <img [src]="{{services[element].imgService}}"/>\n                <ion-card-content>\n                  <ion-card-title>\n                    {{services[element].title}}\n                    </ion-card-title>\n                  <p>\n                    {{services[element].content.subtitle}}\n                  </p>\n                </ion-card-content>\n              </ion-card>\n          </ion-list>\n        </div>\n      </div>\n      <div *ngIf="user._id === message.userId" class="child">\n        <div class="message-wrapper">\n          <img class="profile-pic right" [src]="user.pic" />\n  \n          <div class="chat-bubble right slide-right">\n              \n            <div class="message" [innerHTML]="message.text" autolinker></div>\n  \n            <div class="message-detail">\n              <span class="bold">{{user.username}}</span>\n            </div>\n  \n          </div>\n        </div>\n      </div>\n      <div class="cf"></div>\n    </div>\n  </ion-content>\n\n<ion-footer>\n    <ion-grid>\n      <ion-row>\n        <!-- <ion-col>\n            <button ion-button clear (click)="listenForSpeech()"><ion-icon class="footer-btn" name="mic"></ion-icon></button>\n        </ion-col> -->\n        <ion-col col-8>\n            <ion-input [(ngModel)]="newMessage" placeholder="Send a message..."></ion-input>\n        </ion-col>\n        <ion-col>\n            <button ion-button clear (click)="sendMessage()"><ion-icon class="footer-btn" name="send"></ion-icon></button>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n</ion-footer>'/*ion-inline-end:"/Users/cyp/Documents/newApp/src/pages/chat2/chat2.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"], __WEBPACK_IMPORTED_MODULE_4__ionic_native_speech_recognition__["a" /* SpeechRecognition */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_text_to_speech__["a" /* TextToSpeech */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* Platform */], __WEBPACK_IMPORTED_MODULE_6__angular_http__["a" /* Http */]])
], Chat2Page);

//# sourceMappingURL=chat2.js.map

/***/ })

});
//# sourceMappingURL=7.js.map