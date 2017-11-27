webpackJsonp([11],{

/***/ 289:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarqueDetailsPageModule", function() { return MarqueDetailsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__marqueDetails__ = __webpack_require__(614);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MarqueDetailsPageModule = (function () {
    function MarqueDetailsPageModule() {
    }
    return MarqueDetailsPageModule;
}());
MarqueDetailsPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__marqueDetails__["a" /* MarqueDetailsPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__marqueDetails__["a" /* MarqueDetailsPage */])
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__marqueDetails__["a" /* MarqueDetailsPage */]
        ]
    })
], MarqueDetailsPageModule);

//# sourceMappingURL=marqueDetails.module.js.map

/***/ }),

/***/ 489:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__(9);
var map_1 = __webpack_require__(209);
Observable_1.Observable.prototype.map = map_1.map;
//# sourceMappingURL=map.js.map

/***/ }),

/***/ 614:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MarqueDetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(489);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
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
var MarqueDetailsPage = (function () {
    function MarqueDetailsPage(navCtrl, toastCtrl) {
        this.navCtrl = navCtrl;
        this.toastCtrl = toastCtrl;
        this.shownGroup = null;
        // The account fields for the login form.
        // If you're using the username field with or without email, make
        // sure to add it to the type
        this.account = {
            email: '@ e-mail ou pseudo',
            password: 'mot de passe'
        };
        this.like = false;
        this.marques = {
            id: 0,
            title: 'Propreté et Services',
            subtitle: "Préserver l’hygiène et la propreté de votre environnement de travail",
            description: "Onet est l’acteur référent en France et en Europe de la propreté et des services associés. Cette position est le fruit d'un développement harmonieux, prudent mais ambitieux, au côté de nos clients et actionné par nos collaborateurs.",
            engagement: "Rendre les espaces de travail, de passage, de loisir, de production, de transport..., propres, sains et agréables est notre leitmotiv, celui de nos agences !",
            imgSrc: "assets/img/gravel-proprete-hopital.jpg",
            videoSrc: "https://youtu.be/pSbLUVvn2lU",
            citation: "Leader historique en France de la propreté",
            metiersId: [0, 1, 2, 3, 4, 5],
            atouts: [
                {
                    title: 'Une organisation pour répondre de façon unique à chaque client',
                    description: ["Des experts métiers par secteur d'activités", "Un réseau d'agences fort et en proximité des sites, qui a toute latitude pour adapter les process et méthodes de travail aux besoins locaux.", "Une structure dédiée à nos clients multi-sites : centralisation de la relation client, reportings dédiés, support hotline, … pour garantir des prestations homogènes et de qualité."]
                },
                {
                    title: 'Des collaborateurs motivés et impliqués',
                    description: ["Un programme de développement des compétences (école interne de formation depuis 1982, e-learning, plan de de formation individuel…)", "Un environnement de travail sûr : EPI,  lutte contre les Troubles Musculo-Squelettiques (TMS), Visite Comportementale de Sécurité…", "Un management de proximité respectueux, raisonnable et à l’écoute de ses collaborateurs."]
                },
                {
                    title: 'Une prestation de qualité, maitrisée sur la durée',
                    description: ["Une application Blue Quality, disponible sur tablette numérique, pour des contrôles en ligne, permettant un suivi précis des prestations et un reporting performant", "Un portail client permettant une réactivité et traçabilité optimale en cas de dysfonctionnement", "Une politique de contrôle assidue pour un niveau de propreté conforme aux exigences de nos clients"]
                },
                {
                    title: 'R&D - ingénierie de services',
                    description: ["Nos experts « outils métier » travaillent des procédés techniques et de nouveaux produits pour améliorer ou proposer de nouveaux services. Nous développons ainsi une véritable ingénierie de services", "Une veille permanente sur les dernières avancées du marché est conduite et exploitée afin d’être dans l’anticipation avec nos clients"]
                }
            ],
            keys: [
                { label: 'collaborateurs', nb: '44 500' },
                { label: 'implantations', nb: '180' },
                { label: 'millions de m² gérés', nb: '40' },
                { label: 'clients', nb: '2000' },
                { label: 'certifications', nb: '6' }
            ]
        };
        this.services = [
            {
                name: 'Propreté en milieu sensible',
                profileImage: 'assets/img/up-3_medium.jpg',
                coverImage: 'assets/img/gravel-proprete-hopital.jpg',
                occupation: 'Propreté',
                location: 'Marseille, France',
                description: "L'industrie de la « maîtrise de la contamination » doit faire face à une demande de plus en plus diversifiée, complexe et spécialisée. Ceci s'explique notamment par l'apparition de nouveaux besoins comme l'accroissement des exigences en matière de propreté ou encore l'évolution des contraintes réglementaires, notamment dans l'industrie pharmaceutique et les secteurs connexes…",
                likes: 0,
            },
            {
                name: 'Propreté en milieu sensible',
                profileImage: 'assets/img/up-3_medium.jpg',
                coverImage: 'assets/img/gravel-proprete-hopital.jpg',
                occupation: 'Propreté',
                location: 'Marseille, France',
                description: "L'industrie de la « maîtrise de la contamination » doit faire face à une demande de plus en plus diversifiée, complexe et spécialisée. Ceci s'explique notamment par l'apparition de nouveaux besoins comme l'accroissement des exigences en matière de propreté ou encore l'évolution des contraintes réglementaires, notamment dans l'industrie pharmaceutique et les secteurs connexes…",
                likes: 0,
            },
            {
                name: 'Propreté en milieu sensible',
                profileImage: 'assets/img/up-3_medium.jpg',
                coverImage: 'assets/img/gravel-proprete-hopital.jpg',
                occupation: 'Propreté',
                location: 'Marseille, France',
                description: "L'industrie de la « maîtrise de la contamination » doit faire face à une demande de plus en plus diversifiée, complexe et spécialisée. Ceci s'explique notamment par l'apparition de nouveaux besoins comme l'accroissement des exigences en matière de propreté ou encore l'évolution des contraintes réglementaires, notamment dans l'industrie pharmaceutique et les secteurs connexes…",
                likes: 0,
            },
            {
                name: 'Propreté en milieu sensible',
                profileImage: 'assets/img/up-3_medium.jpg',
                coverImage: 'assets/img/gravel-proprete-hopital.jpg',
                occupation: 'Propreté',
                location: 'Marseille, France',
                description: "L'industrie de la « maîtrise de la contamination » doit faire face à une demande de plus en plus diversifiée, complexe et spécialisée. Ceci s'explique notamment par l'apparition de nouveaux besoins comme l'accroissement des exigences en matière de propreté ou encore l'évolution des contraintes réglementaires, notamment dans l'industrie pharmaceutique et les secteurs connexes…",
                likes: 0,
            },
            {
                name: 'Propreté en milieu sensible',
                profileImage: 'assets/img/up-3_medium.jpg',
                coverImage: 'assets/img/gravel-proprete-hopital.jpg',
                occupation: 'Propreté',
                location: 'Marseille, France',
                description: "L'industrie de la « maîtrise de la contamination » doit faire face à une demande de plus en plus diversifiée, complexe et spécialisée. Ceci s'explique notamment par l'apparition de nouveaux besoins comme l'accroissement des exigences en matière de propreté ou encore l'évolution des contraintes réglementaires, notamment dans l'industrie pharmaceutique et les secteurs connexes…",
                likes: 0,
            },
            {
                name: 'Propreté en milieu sensible',
                profileImage: 'assets/img/up-3_medium.jpg',
                coverImage: 'assets/img/gravel-proprete-hopital.jpg',
                occupation: 'Propreté',
                location: 'Marseille, France',
                description: "L'industrie de la « maîtrise de la contamination » doit faire face à une demande de plus en plus diversifiée, complexe et spécialisée. Ceci s'explique notamment par l'apparition de nouveaux besoins comme l'accroissement des exigences en matière de propreté ou encore l'évolution des contraintes réglementaires, notamment dans l'industrie pharmaceutique et les secteurs connexes…",
                likes: 0,
            },
        ];
        this.tabBarElement = document.querySelector('.tabbar.show-tabbar');
    }
    MarqueDetailsPage.prototype.toggleGroup = function (group) {
        if (this.isGroupShown(group)) {
            this.shownGroup = null;
        }
        else {
            this.shownGroup = group;
        }
    };
    ;
    MarqueDetailsPage.prototype.isGroupShown = function (group) {
        return this.shownGroup === group;
    };
    ;
    MarqueDetailsPage.prototype.prev = function () {
        this.navCtrl.pop();
    };
    MarqueDetailsPage.prototype.follow = function () {
        this.like = !this.like;
    };
    MarqueDetailsPage.prototype.ionViewWillEnter = function () {
        this.tabBarElement.style.display = 'none';
    };
    MarqueDetailsPage.prototype.ionViewWillLeave = function () {
        this.tabBarElement.style.display = 'flex';
    };
    return MarqueDetailsPage;
}());
MarqueDetailsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-marque-details',template:/*ion-inline-start:"C:\Users\Cyprien\Desktop\newApp2\src\pages\MarqueDetails\marqueDetails.html"*/'<ion-content padding class="transparent-header">\n\n  <ion-header no-border>\n\n  <ion-navbar color="primary" hideBackButton="true">\n\n    <ion-buttons start>\n\n        <button ion-button icon-left (click)="prev()"><ion-icon name="arrow-back"></ion-icon></button> \n\n    </ion-buttons>\n\n    <ion-title>\n\n\n\n    </ion-title>\n\n    <ion-buttons end>\n\n      \n\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n<div class="title-container">\n\n  <div id="profile-bg" [ngStyle]="{\'background-image\': \'url(\' + marques.imgSrc +\')\'}"></div>\n\n  <h3 class="profile-title">{{marques.title}}</h3>\n\n</div>\n\n<div id="content">\n\n  <div id="profile-info" padding>\n\n    <ion-grid>\n\n      <ion-row>\n\n        <ion-col *ngFor="let key of marques.keys">\n\n          <h3><b class="white-text">{{key.nb}}</b><br></h3>\n\n          <p class="white-text">{{key.label}}</p>\n\n        </ion-col>\n\n      </ion-row>\n\n    </ion-grid>\n\n    <hr>\n\n    <h3 id="profile-name">{{marques.subtitle}}<br><small><I>"{{marques.citation}}"</I></small></h3>\n\n    <br>\n\n    <p class="profile-description">{{marques.description}}</p>\n\n    <p class="profile-description">{{marques.engagement}}</p>\n\n    <hr>\n\n    <br>\n\n    <ion-list>\n\n      <ion-item text-wrap (click)="toggleGroup(0)" [ngClass]="{active: isGroupShown(0)}">\n\n        <button ion-button color="primary" class="accordion-button" large="true">\n\n          <ion-icon item-left name="arrow-forward" *ngIf="!isGroupShown(0)"></ion-icon>\n\n          <ion-icon item-left name="arrow-down" *ngIf="isGroupShown(0)"></ion-icon>\n\n          Nos Métiers de la Propreté\n\n        </button>\n\n        <div *ngIf="isGroupShown(0)" text-center>\n\n          <div *ngFor="let serviceId of marques.metiersId">\n\n            <br>\n\n            <h2 class="white-text"><b>{{services[serviceId].name}}</b></h2>\n\n          </div>\n\n        </div>\n\n      </ion-item>\n\n    </ion-list>\n\n    <ion-list>\n\n      <ion-item text-wrap (click)="toggleGroup(1)" [ngClass]="{active: isGroupShown(1)}">\n\n        <button ion-button color="primary" class="accordion-button" large="true">\n\n          <ion-icon item-left name="arrow-forward" *ngIf="!isGroupShown(1)"></ion-icon>\n\n          <ion-icon item-left name="arrow-down" *ngIf="isGroupShown(1)"></ion-icon>\n\n          Nos Atouts de la Propreté\n\n        </button>\n\n        <div *ngIf="isGroupShown(1)" text-center>\n\n          <div *ngFor="let atout of marques.atouts">\n\n            <br>\n\n            <h2 class="white-text"><b>{{atout.title}}</b></h2>\n\n            <ul>\n\n              <li class="white-text" *ngFor="let description of atout.description">{{description}}</li>\n\n            </ul>\n\n          </div>\n\n        </div>\n\n      </ion-item>\n\n    </ion-list>\n\n  </div>\n\n</div>\n\n</ion-content>'/*ion-inline-end:"C:\Users\Cyprien\Desktop\newApp2\src\pages\MarqueDetails\marqueDetails.html"*/
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ToastController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ToastController */]) === "function" && _b || Object])
], MarqueDetailsPage);

var _a, _b;
//# sourceMappingURL=marqueDetails.js.map

/***/ })

});
//# sourceMappingURL=11.js.map