import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
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
  marqueId;
  tabBarElement: any;

  // The account fields for the login form.
  // If you're using the username field with or without email, make
  // sure to add it to the type
  account: { email: string, password: string } = {
    email: '@ e-mail ou pseudo',
    password: 'mot de passe'
  };

  like = false;

  marques = [{
    id: 0,
    title: 'Propreté et Services',
    subtitle: "Préserver l’hygiène et la propreté de votre environnement de travail",
    description: "Onet est l’acteur référent en France et en Europe de la propreté et des services associés. Cette position est le fruit d'un développement harmonieux, prudent mais ambitieux, au côté de nos clients et actionné par nos collaborateurs.",
    engagement: "Rendre les espaces de travail, de passage, de loisir, de production, de transport..., propres, sains et agréables est notre leitmotiv, celui de nos agences !",
    imgSrc: "assets/img/gravel-proprete-hopital.jpg",
    videoSrc: "https://youtu.be/pSbLUVvn2lU",
    citation: "Leader historique en France de la propreté",
    metiersId:[0, 1, 2, 3, 4],
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
  },
  {

  }];

  services = [
    {
      title: 'Hygiène et Propreté classique',
      subtitle: 'Au cœur de votre environnement de travail',
      subtitle2: 'LA PROPRETÉ, UN BESOIN FONDAMENTAL, DES ENJEUX FORTS',
      Paragraphes: [
        'La propreté « classique » renvoie au besoin fondamental, et non pas simpliste, de la notion de « propre ».', 
        "Chaque secteur d’activité à ses propres enjeux et la propreté s’y inscrit à différents niveaux.", 
        "Dans une galerie commerciale ou un espace de loisir, la propreté et « l’agréabilité » auront un impact direct sur la satisfaction des clients et leur panier moyen ; dans un bureau, la propreté et la netteté de l’espace de travail auront un impact direct sur le bien-être du collaborateur et à postériori sa productivité ; dans un hôtel, la propreté de la chambre est un argument de satisfaction et de fidélisation…", 
        "C’est pourquoi nous n’aborderons jamais de la même manière un espace (destination, revêtement, taux d’occupation…) car chacun nécessite une organisation rigoureuse, un sens du service irréprochable et des équipes motivées et impliquées.", 
        "Et quel que soit le secteur et le niveau de technicité (matériel, norme…) qu’il requiert, notre proposition de valeur est fondée sur une gestion agile et respectueuse des femmes et des hommes qui chaque jour interviennent auprès de nos clients."
      ],
      profileImage: 'assets/img/proprete-classique.jpg',
      coverImage: 'assets/img/gravel-proprete-hopital.jpg',
      othersImg: ['assets/img/tenues_proprete.jpg'],
      areas: [
        'Etablissement recevant du public', 
        'Bureaux, sièges sociaux', 'Réseaux de boutiques ou agences', 
        'Surfaces commerciale', 
        'Hôtels'
      ],
      productsId: [0, 1, 2],
      marqueId: 0,
    },
    {
      linkedId: 2,
      title: 'Hygiène et Propreté en milieu sensible',
      subtitle2: 'Une expertise multisectorielle et des savoir-faire spéciﬁques pour la « maîtrise de la contamination »',
      Paragraphes: [
        "L'industrie de la « maîtrise de la contamination » doit faire face à une demande de plus en plus diversifiée, complexe et spécialisée. Ceci s'explique notamment par l'apparition de nouveaux besoins comme l'accroissement des exigences en matière de propreté ou encore l'évolution des contraintes réglementaires, notamment dans l'industrie pharmaceutique et les secteurs connexes…", 
        "Depuis plus de 30 ans, reconnus pour notre maîtrise du nettoyage en milieux ultra-propres, nous sommes présents de la classe ISO 3 à la classe ISO 9.", 
        'Nous réalisons des prestations quotidiennes de nettoyage, de décontamination chimique et microbiologique, ainsi que des prestations ponctuelles de "mise à blanc".'
      ],
      engagement: {
        title: 'La maîtrise de la contamination a pour objectif de protéger ensemble ou séparément :', 
        points: [
          "le produit fabriqué ou traité (ou le patient en milieu hospitalier)", 
          "l'opérateur lors de la manipulation de produits potentiellement toxiques", 
          "l'environnement"
        ]
      },
      profileImage: 'assets/img/up-3_medium.jpg',
      coverImage: 'assets/img/gravel-proprete-hopital.jpg',
      othersImg: ['assets/img/tenues_proprete.jpg'],
      sector: [{
        title: "AGROALIMENTAIRE", 
        description: "Nous intervenons sur des prestations d'hygiène de Process en industrie agroalimentaire (nettoyage et désinfection des lignes de production et de leur environnement) :", 
        points: [
          "Industries de la viande (bœuf, porcs, volailles...) abatage, découpe transformation",
          "Salaisons & charcuteries",
          "Industrie des plats cuisinés frais, surgelés appertisé (conserves)",
          "Industrie du poisson, Biscuiterie / pâtisserie",
          "Industrie du légume"
        ]
      },
      {
        title: "INDUSTRIE PHARMACEUTIQUE",
        subtitle: "DE LA CLASSE ISO 3 À LA CLASSE ISO 9",
        points: [
          "Prestations régulières de nettoyage et décontamination des différentes zones",
          "Prestations ponctuelles de mise à blanc",
          "Mise en place de zoning matériel",
          "Parfaite application des bonnes pratiques de nettoyage pharmaceutique"
        ]
      },
      {
        title: "ÉTABLISSEMENTS DE SANTÉ",
        subtitle: "INTERVENTION DE LA ZONE 0 À LA ZONE 4",
        points: [
          "Bio nettoyage",
          "Entretien des locaux",
          "Lutte quotidienne contre les infections nosocomiales",
          "Autres prestations complémentaires (collecte des déchets, service des repas, entretien des espaces verts...)"
        ],
        more: "https://fr.groupeonet.com/content/download/8974/143577/version/1/file/plaquette_Onet_sante.pdf"
      },
      {
        title: "NOS PRESTATIONS EN SALLE PROPRE",
        subtitle: "DE LA CLASSE ISO 3 À LA CLASSE ISO 9",
        points: [
          "Prestations quotidiennes de nettoyage et de décontamination particulaire",
          'Prestations ponctuelles de "mise à blanc"'
        ]
      }],
      productsId: [3],
      marqueId: 0,
    },
    {
      title: 'Cryogénie',
      subtitle: 'Vous offrir une solution de rénovation respectueuse de votre support et de l’environnement',
      description: [{
        title: "Cryonettoyage : Principe de mise en œuvre par cryogénie",
        img: "assets/img/cryo_medium.jpg",
        paragraphes: [
          "Le CO2 liquéfié, soutiré d’un réservoir, passe dans un pelletiseur qui le transforme à l’état d’agrégat solide: la neige carbonique. Cette neige à très basse température ( –78,5°C ) est ensuite compactée dans une filière pour donner des sticks ou pellets.",
          "Les pellets ou sticks sont stockés et livrés dans des bacs isothermes",
          "La projection de micro-pellets se fait avec de l'air comprimé fourni, soit par le réseau interne de l’entreprise, soit par un compresseur d'air",
          "Le pistolet utilisé permet de projeter sous pression les pellets ou la neige carbonique directement sur les surfaces à nettoyer."
        ]
      },
      {
        title: "Comment fonctionne le nettoyage cryogénique (ou décapage par cryogénie)?",
        img: "assets/img/cryo_medium2.jpg",
        paragraphes: [
          "C’est une méthode de nettoyage révolutionnaire dans laquelle on projette de la glace sèche sous forme de cylindres appelés « pellets » à l’aide d’un flux d’air comprimé.",
          "L’association du choc mécanique et du froid (choc thermique) intense provoque le détachement de la couche à éliminer (décapage par cryogénie).",
          "Le processus ne laisse aucun résidu secondaire, la glace carbonique se sublimant. Le seul résidu à évacuer est la couche qui a été éliminée, plus facile à traiter. ",
        ]
      },
      {
        title: "Avantages économiques, techniques et environnementaux du nettoyage cryogénique",
        img: "assets/img/cryo_medium3.jpg",
        points: [
          "Réduction du temps d'immobilisation",
          "Aucune dépense liée à l'évacuation",
          "Méthode de nettoyage rapide et efficace",
          "Réduction de l'usure des équipements de production",
          "Protection de l'environnement"
        ]
      }],
      profileImage: 'assets/img/cryo_medium3.jpg',
      coverImage: 'assets/img/gravel-proprete-hopital.jpg',
      areas: [
        'Automobile', 
        'Agroalimentaire', 
        'Aéronautique', 
        'Imprimerie',
        'Restauration après sinistre',
        'Plasturgie',
        'Fonderie',
        'Electricité',
        'Transports'
      ],
      productsId: [4, 5, 6],
      marqueId: 0,
    },
    {
      title: 'Propreté et maintenance des process industriels',
      subtitle2: 'UNE EXPERTISE TECHNIQUE ET DES MODES OPÉRATOIRES PRÉCIS',
      Paragraphes: [
        'Onet Propreté et Services intervient avec ses agents qualifiés et ses équipements sur des sites industriels, pour des collectivités et des particuliers.', 
        "Chaque opération est réalisée dans le strict respect des règles liées à la politique de qualité, sécurité et environnement.", 
        "Hydrocurage, aspiration et refoulement, haute et très haute pression, balayage industriel, nettoyage de mobilier urbain..., nos interventions de traitements préventifs et curatifs contribuent à la sécurité des personnes et à la pérennité de l'outil de production. "
      ],
      profileImage: 'assets/img/process-industriel.jpg',
      coverImage: 'assets/img/gravel-proprete-hopital.jpg',
      areas: [
        'Maintenance et Nettoyage industriel', 
        'Assainissement collectif et individuel', 
        'Hygiène', 
        'Propreté urbaine',
        'Transport et Collecte de déchets industriels'
      ],
      marqueId: 0,
    },
    {
      title: 'Propreté dans les transports',
      description: [{
        title: "EXPERTISE ET EXPÉRIENCE POUR S'ADAPTER AUX IMPÉRATIFS DU SECTEUR DES TRANSPORTS",
        img: "assets/img/transport.png",
        paragraphes: [
          "Élément clé de l'image de marque et composante de la satisfaction des voyageurs, la propreté est un véritable enjeu pour les entreprises du secteur  (ferroviaires, urbains, aériens et maritimes)."
        ]
      },
      {
        title: "Onet, dont l’expérience est largement reconnue et éprouvée, intervient en s’adaptant aux impératifs inhérents à votre secteur d’activité :",
        points: [
          "gestion des aléas,",
          "temps d’intervention limités,",
          "sécurité, sûreté,",
          "respect de la politique liée à l’environnement,",
          "normes en vigueur…"
        ]
      },
      {
        paragraphes: [
          "L'organisation des flux, des modes d'exploitation et notre savoir-faire en gestion du personnel nous permettent de répondre efficacement à vos besoins en s’adaptant aux contraintes des plans de transport.",
          "Notre expertise nous permet d’intervenir en amont, de la définition du cahier des charges jusqu’à la réalisation des prestations en s’inscrivant dans un processus d’amélioration continue.",
          "Près de 20 agences spécialisées vous accompagnent dans votre démarche d'obligation de résultats.",
        ]
      }],
      profileImage: 'assets/img/transport.png',
      coverImage: 'assets/img/gravel-proprete-hopital.jpg',
      areas: [
        'Transport Ferroviaire', 
        'Transport Maritime', 
        'Transport Aérien', 
        'Transport Urbain'
      ],
      areasQual: "Notre démarche qualité de certification ISO 9001, version 2000, vous garantit qualité et réactivité des méthodes d'interventions",
      ServiceDetails: {
        description: "Afin de contribuer à faire vivre une expérience agréable à vos passagers et équipages/collaborateurs, nous vous proposons une gamme de services large :",
        points: [
          "accompagnement de personne en situation de handicap ou à mobilité réduite,",
          "sécurité,",
          "accueil,",
          "navette de transport,",
          "manutention bagage,",
          "habillage intérieur et extérieur de véhicule…"
        ]
      },
      marqueId: 0,
    },
  ];

  // Our translated text strings
  private loginErrorString: string;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public toastCtrl: ToastController) {
    
    this.tabBarElement = document.querySelector('.tabbar.show-tabbar');
    this.marqueId = navParams.get('marqueId');  
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
