webpackJsonp([10],{

/***/ 292:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceDetailsPageModule", function() { return ServiceDetailsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__serviceDetails__ = __webpack_require__(617);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ServiceDetailsPageModule = (function () {
    function ServiceDetailsPageModule() {
    }
    return ServiceDetailsPageModule;
}());
ServiceDetailsPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__serviceDetails__["a" /* ServiceDetailsPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__serviceDetails__["a" /* ServiceDetailsPage */])
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__serviceDetails__["a" /* ServiceDetailsPage */]
        ]
    })
], ServiceDetailsPageModule);

//# sourceMappingURL=serviceDetails.module.js.map

/***/ }),

/***/ 617:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServiceDetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages__ = __webpack_require__(55);
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
var ServiceDetailsPage = (function () {
    function ServiceDetailsPage(navCtrl, toastCtrl) {
        this.navCtrl = navCtrl;
        this.toastCtrl = toastCtrl;
        // The account fields for the login form.
        // If you're using the username field with or without email, make
        // sure to add it to the type
        this.account = {
            email: '@ e-mail ou pseudo',
            password: 'mot de passe'
        };
        this.like = false;
        this.items = [
            {
                name: 'Angra dos Reis, Brazil',
                description: 'Brazil’s visa waiver during the Olympics was a success for one big reason: it encouraged travel beyond the big cities. The tourism board hopes to bring back the waiver, and if you’re planning to take advantage, save time to visit Angra dos Reis, between Rio and São Paulo. This popular Brazilian vacation area is where cariocas go to escape the crowds. “It’s where many of the country’s elite have their beach villas,” says Martin Frankenberg of Matuete, who has access to several of these glamorous rentals. Big changes are coming to the region. In May, Brazilian chain Fasano will open a long-awaited 54-suite hotel in a complex that includes a marina, golf course, restaurants, and a spa. The design is striking, with elevated wooden buildings that look like they’re floating, all with open-air terraces and views of the forest and sea. And the government recently pledged $8 million to improve the infrastructure on Ilha Grande—an island that’s so popular that they’ve had to impose a daily limit on visitors. —Stephanie Wu',
                imageUrl: 'http://cdn-image.travelandleisure.com/sites/default/files/styles/964x524/public/1479915553/angra-dos-reis-brazil-WTG2017.jpg?itok=damBsB9G',
            },
            {
                name: 'Belfast, Northern Ireland',
                description: 'With a growing array of open-air bars, arts venues, and restaurants, Belfast is quickly becoming an attractive destination for travelers. Stay at the design-forward Bullitt Hotel (inspired by the Steve McQueen film), which opened in October with casual, well-appointed rooms and complimentary grab-and-go breakfast granola. Check out arts organization Seedhead, which runs street-art tours and hosts pop-up cabarets around the city. The Michelin-starred OX and EIPIC lead the fine-dining pack, but also visit Permit Room, with its internationally inspired breakfast and locally roasted coffee. Noteworthy new nightlife spots include the Muddlers Club, a stylish restaurant and cocktail bar in the trendy Cathedral Quarter, and Vandal, a graffiti-adorned pizza place that turns into a late-night club, on the top floor of a 17th-century pub.—Nell McShane Wulfhart',
                imageUrl: 'http://cdn-image.travelandleisure.com/sites/default/files/styles/964x524/public/1480711606/belfast-city-hall-northern-ireland-WTG2017.jpg?itok=mCqumH31',
            },
            {
                name: 'Belgrade, Serbia',
                description: 'Since the end of the Yugoslav wars, Belgrade has attracted steady investment—its graffiti-covered neighborhoods are now full of restaurants and bars. You’ll find hearty platters of ćevapi—smoky sausages without casing—and stuffed somborka peppers at Sokače, paprika-laden kebabs at Tri Šešira, and pan-Latin tapas at Toro. But the biggest draw is the growing craft-beer scene (the city has 37 breweries). Don’t miss the Kabinet Supernova IPA at Prohibicija in the bar-filled Savamala district, as well as Kas’s full-bodied pale ales and Salto’s IPA at Bajloni, set in a 100-year-old brewery space in Cetinjska. —Govind Dhar',
                imageUrl: 'http://cdn-image.travelandleisure.com/sites/default/files/styles/964x524/public/1479487289/belgrade-serbia-fortress-WTG2017.jpg?itok=rw8c4Esh',
            },
            {
                name: 'Bermuda',
                description: 'After being hit hard by the financial crisis, Bermuda is shaking itself out of stagnation and attracting a new generation of travelers. In 2014, the island won a bid to host the 35th America’s Cup, the high-profile international sailing race, which takes place this June. The promise of a flood of wealthy visitors—and a loosening of restrictions on foreign investment—has sparked a spate of development. Big news is the $100 million overhaul of the Hamilton Princess & Beach Club, the island’s 132-year-old grande dame, whose revamped rooms have a fresh, contemporary look. The hotel has also added a stellar art collection, a spa, and a restaurant serving locally sourced fare from James Beard Award–winning chef Marcus Samuelsson. Elsewhere on the island, a St. Regis, a lavish Ritz-Carlton Reserve, and the Ariel Sands resort (backed by actors Michael Douglas and Catherine Zeta-Jones) are in the works. —Paola Singer',
                imageUrl: 'http://cdn-image.travelandleisure.com/sites/default/files/styles/964x524/public/1479915553/hamilton-princess-bermuda-WTG2017.jpg?itok=E4sFyZFn',
            }
        ];
        this.marques = [{
                id: 0,
                title: 'Propreté et Services',
                subtitle: "Préserver l’hygiène et la propreté de votre environnement de travail",
                description: "Onet est l’acteur référent en France et en Europe de la propreté et des services associés. Cette position est le fruit d'un développement harmonieux, prudent mais ambitieux, au côté de nos clients et actionné par nos collaborateurs.",
                engagement: "Rendre les espaces de travail, de passage, de loisir, de production, de transport..., propres, sains et agréables est notre leitmotiv, celui de nos agences !",
                imgSrc: "",
                videoSrc: "https://youtu.be/pSbLUVvn2lU",
                citation: "Leader historique en France de la propreté",
                metiersId: [0, 1, 2, 3, 4, 5],
                Atouts: [{
                        title: 'Une organisation pour répondre de façon unique à chaque client',
                        description: "<ul><li>Des experts métiers par secteur d'activités</li><li>Un réseau d'agences fort et en proximité des sites, qui a toute latitude pour adapter les process et méthodes de travail aux besoins locaux.</li><li>Une structure dédiée à nos clients multi-sites : centralisation de la relation client, reportings dédiés, support hotline, … pour garantir des prestations homogènes et de qualité.</li></ul>"
                    }, {
                        title: 'Des collaborateurs motivés et impliqués',
                        description: "<ul><li>Un programme de développement des compétences (école interne de formation depuis 1982, e-learning, plan de de formation individuel…)</li><li>Un environnement de travail sûr : EPI,  lutte contre les Troubles Musculo-Squelettiques (TMS), Visite Comportementale de Sécurité…</li><li>Un management de proximité respectueux, raisonnable et à l’écoute de ses collaborateurs.</li></ul>"
                    }, {
                        title: 'Une prestation de qualité, maitrisée sur la durée',
                        description: "<ul><li>Une application Blue Quality, disponible sur tablette numérique, pour des contrôles en ligne, permettant un suivi précis des prestations et un reporting performant</li><li>Un portail client permettant une réactivité et traçabilité optimale en cas de dysfonctionnement</li><li>Une politique de contrôle assidue pour un niveau de propreté conforme aux exigences de nos clients</li></ul>"
                    }, {
                        title: 'R&D - ingénierie de services',
                        description: "<ul><li>Nos experts « outils métier » travaillent des procédés techniques et de nouveaux produits pour améliorer ou proposer de nouveaux services. Nous développons ainsi une véritable ingénierie de services</li><li>Une veille permanente sur les dernières avancées du marché est conduite et exploitée afin d’être dans l’anticipation avec nos clients</li></ul>"
                    }],
                keys: [{
                        label: 'collaborateurs',
                        nb: '44 500'
                    },
                    {
                        label: 'implantations',
                        nb: '180'
                    },
                    {
                        label: 'millions de m² gérés pour plus de 2000 clients',
                        nb: '40'
                    },
                    {
                        label: 'certifications',
                        nb: '6'
                    }]
            }
        ];
        this.service = {
            name: 'Propreté en milieu sensible',
            profileImage: 'assets/img/up-3_medium.jpg',
            coverImage: 'assets/img/gravel-proprete-hopital.jpg',
            occupation: 'Propreté',
            location: 'Marseille, France',
            description: "L'industrie de la « maîtrise de la contamination » doit faire face à une demande de plus en plus diversifiée, complexe et spécialisée. Ceci s'explique notamment par l'apparition de nouveaux besoins comme l'accroissement des exigences en matière de propreté ou encore l'évolution des contraintes réglementaires, notamment dans l'industrie pharmaceutique et les secteurs connexes…",
            likes: 0,
        };
        this.tabBarElement = document.querySelector('.tabbar.show-tabbar');
    }
    ServiceDetailsPage.prototype.prev = function () {
        this.navCtrl.pop();
    };
    ServiceDetailsPage.prototype.follow = function () {
        this.like = !this.like;
    };
    ServiceDetailsPage.prototype.seeMarque = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__pages__["b" /* MarqueDetailsPage */]);
    };
    ServiceDetailsPage.prototype.ionViewWillEnter = function () {
        this.tabBarElement.style.display = 'none';
    };
    ServiceDetailsPage.prototype.ionViewWillLeave = function () {
        this.tabBarElement.style.display = 'flex';
    };
    return ServiceDetailsPage;
}());
ServiceDetailsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-service-details',template:/*ion-inline-start:"C:\Users\Cyprien\Desktop\newApp2\src\pages\ServiceDetails\serviceDetails.html"*/'<ion-content padding class="transparent-header">\n\n  <ion-header no-border>\n\n  <ion-navbar color="primary" hideBackButton="true">\n\n    <ion-buttons start>\n\n        <button ion-button icon-left (click)="prev()"><ion-icon name="arrow-back"></ion-icon></button> \n\n    </ion-buttons>\n\n    <ion-title>\n\n\n\n    </ion-title>\n\n    <ion-buttons end>\n\n      \n\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n<div id="profile-bg" [ngStyle]="{\'background-image\': \'url(\' + service.coverImage +\')\'}"></div>\n\n<div id="content">\n\n  <div id="profile-info" padding>\n\n    <img id="profile-image" [src]="service.profileImage">\n\n    <h3 id="profile-name">{{service.name}}</h3>\n\n    <p> &bull; {{service.location}}</p>\n\n    <p class="profile-description">{{service.description}}</p>\n\n    <button ion-button (click)="seeMarque()">Voir la marque</button>\n\n    <button ion-button *ngIf="!like" small color="purple" (click)="follow()">Je n\'aime plus</button>\n\n    <button ion-button *ngIf="like" class="follow-button" small color="purple" (click)="follow()">J\'aime <ion-icon name="checkmark"></ion-icon></button>\n\n  </div>\n\n</div>\n\n</ion-content>'/*ion-inline-end:"C:\Users\Cyprien\Desktop\newApp2\src\pages\ServiceDetails\serviceDetails.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ToastController */]])
], ServiceDetailsPage);

//# sourceMappingURL=serviceDetails.js.map

/***/ })

});
//# sourceMappingURL=10.js.map