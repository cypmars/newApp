import { Http } from '@angular/http';
import {Injectable} from "@angular/core";
import 'rxjs/add/operator/map'

@Injectable()
export class ComputeResultsService{

    private myQuestions;
    private myResults;
    private myArray;
    questions = 
    [
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
        name:"Usine ou zone de fabrication",
        question: "Possedez-vous une usine ou zone de fabrication ?",
        img: "assets/img/questions/usine-boissons.jpg",
        servicesIdIfYes: [1, 2, 3, 5, 7]
        },
        {
        id: 4, 
        name:"Sécurité",
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

    constructor() {
        this.myResults = new Array();
        this.myQuestions = new Array();
        this.myArray = new Array();
    }

    getMyArray(){
        return this.myArray;
    }

    getMyResults(){
        return this.myResults;
    }

    getMyQuestions(){
        return this.myQuestions;
    }

    computeResults(type:string, sector:string, job:string) {
        switch(sector){
            case "Agro-alimentaire":
                this.myResults.push(0);
                switch(job){
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
                switch (job){
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
                switch (job){
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
                switch (job){
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
                switch (job){
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
                switch (job){
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
                switch (job){
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
                switch (job){
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
    }

    computeQuestionsAndResults(type:string, sector:number, job:number) {

        switch(sector){
            case 0:
                this.myQuestions.push(this.questions[0]);
                this.myQuestions.push(this.questions[2]);
                this.myQuestions.push(this.questions[3]);
                this.myQuestions.push(this.questions[4]);
                this.myQuestions.push(this.questions[6]);
                this.myQuestions.push(this.questions[7]);
                switch(job){
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
                switch (job){
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
                switch (job){
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
                switch (job){
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
                this.myQuestions.push(this.questions[6])
                this.myResults.push(1);
                this.myResults.push(2);
                this.myResults.push(4);
                this.myResults.push(8);
                this.myResults.push(21);
                this.myResults.push(22);
                switch (job){
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
                switch (job){
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
                switch (job){
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
                switch (job){
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
    }
    
}