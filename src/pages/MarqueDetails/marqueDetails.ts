import { Component } from '@angular/core';
import { IonicPage, NavController, ToastController } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map'

/**
 * The Welcome Page is a splash page that quickly describes the app,
 * and then directs the user to create an account or log in.
 * If you'd like to immediately put the user onto a login/signup page,
 * we recommend not using the Welcome page.
*/
@IonicPage()
@Component({
  selector: 'page-marque-details',
  templateUrl: 'marqueDetails.html'
})
export class MarqueDetailsPage {

  shownGroup = null;

  tabBarElement: any;

  // The account fields for the login form.
  // If you're using the username field with or without email, make
  // sure to add it to the type
  account: { email: string, password: string } = {
    email: '@ e-mail ou pseudo',
    password: 'mot de passe'
  };

  like = false;

  marques = {
    id: 0,
    title: 'Propreté et Services',
    subtitle: "Préserver l’hygiène et la propreté de votre environnement de travail",
    description: "Onet est l’acteur référent en France et en Europe de la propreté et des services associés. Cette position est le fruit d'un développement harmonieux, prudent mais ambitieux, au côté de nos clients et actionné par nos collaborateurs.",
    engagement: "Rendre les espaces de travail, de passage, de loisir, de production, de transport..., propres, sains et agréables est notre leitmotiv, celui de nos agences !",
    imgSrc: "assets/img/gravel-proprete-hopital.jpg",
    videoSrc: "https://youtu.be/pSbLUVvn2lU",
    citation: "Leader historique en France de la propreté",
    metiersId:[0, 1, 2, 3, 4, 5],
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
      {label: 'collaborateurs', nb: '44 500'},
      {label: 'implantations', nb: '180'},
      {label: 'millions de m² gérés', nb: '40'},
      {label: 'clients', nb: '2000'},
      {label:'certifications', nb: '6'}
    ]
  };

  services = [
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

  // Our translated text strings
  private loginErrorString: string;

  constructor(public navCtrl: NavController,
    public toastCtrl: ToastController) {
    this.tabBarElement = document.querySelector('.tabbar.show-tabbar');

  }

  toggleGroup(group) {
    if (this.isGroupShown(group)) {
        this.shownGroup = null;
    } else {
        this.shownGroup = group;
    }
  };
  
  isGroupShown(group) {
      return this.shownGroup === group;
  };

  prev() {
    this.navCtrl.pop();
  }
  
  follow() {
    this.like = !this.like;
  }

  ionViewWillEnter(){
    this.tabBarElement.style.display = 'none';
  }

  ionViewWillLeave(){
    this.tabBarElement.style.display = 'flex';
  }

  // forgot() {
  //   this.navCtrl.push('ForgotPage');
  // }

  // signup() {
  //   this.navCtrl.push('SignupPage');
  // }

  // login() {
  //   this.navCtrl.push('LoginPage');
  // }

  // // Attempt to login in through our User service
  // doLogin() {
  //     this.navCtrl.push('SimpleFormPage');
  // }
}
