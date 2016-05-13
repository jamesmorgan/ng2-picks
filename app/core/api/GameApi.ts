import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import {BASE_URL, json} from "./Api";

@Injectable()
export class GameApi {

    constructor(private _http:Http) {
    }

    load() {
        return this._http.get(BASE_URL + '/games', {
                headers: json()
            })
            .map(res => res.json());
        // TODO convert to Game object
    }

}