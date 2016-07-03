import {BASE_URL, jsonWithAuth} from "./Api";
import {Http} from "@angular/http";
import {Injectable} from "@angular/core";
import {League} from "../domain/League";

@Injectable()
export class LeagueApi {

  constructor(private _http:Http) {
  }

  load() {
    return this._http.get(BASE_URL + '/leagues', {
      headers: jsonWithAuth()
    })
      .map(res => res.json())
      .map((leagues)=> {
        return this.parseLeagues(leagues);
      });
  }

  private parseLeagues(leagues:Object[]):League[] {
    return leagues.map(function (user) {
      return new League().fromJson(user);
    });
  }
}
