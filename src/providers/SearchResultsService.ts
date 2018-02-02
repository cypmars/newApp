import { Http } from '@angular/http';
import {Injectable} from "@angular/core";
import 'rxjs/add/operator/map'

@Injectable()
export class SearchResultsService{

    constructor(private http:Http) {

    }

    computeResults(type:string, sector:string, job:string) {
    
    switch(type){
        case "client":
            switch(sector){
                case "Agro-alimentaire":
                    switch(job){
                        case "Boucherie":
                            break;
                        case "Poissonerie": 
                            break;                   
                    }
                    break;
                case "Economie":
                    break;
                case "Santé & Services":
                    break;
                case "Télécoms & Informatique":
                    break;
                case "":
                    break;
                case "":
                    break;
                case "": 
                    break;
                case "": 
                    break;
            }
            break;
        case "prospect":
            break;
        case "collaborateur":
            break;
    }
    return this.http.get('assets/data/services.json')
    .map(
    result =>
    {
        return result.json().services
        .filter(item => this.sansAccent(item.title.toLowerCase()).includes(keyword.toLowerCase())).slice(0,5)
    });

    }
}