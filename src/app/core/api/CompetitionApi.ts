import {Http, Response} from "@angular/http";
import {Observable} from "rxjs/Observable";
import {Injectable} from "@angular/core";
import {Status} from "../domain/Status";
import {Competition} from "../domain/Competition";
import {Selection} from "../domain/Selection";
import {BASE_URL, jsonWithAuth} from "./Api";
import "rxjs/add/operator/share";
import "rxjs/add/operator/map";
import "rxjs/add/operator/publishReplay";
import "rxjs/Rx";

@Injectable()
export class CompetitionApi {

  constructor(private _http:Http) {
  }

  create(comp:Competition) {
    return this._http.post(BASE_URL + '/auth/competition', JSON.stringify(comp), {
      headers: jsonWithAuth()
    })
      .map(res => res.json())
      .map((competition)=> {
        return Competition.fromJson(competition);
      })
      .share();
  }

  delete(compId:String) {
    return this._http.delete(BASE_URL + '/competition/' + compId, {
      headers: jsonWithAuth()
    })
      .map(res => res.json())
      .share();
  }

  load():Observable<Competition[]> {
    return this._http.get(BASE_URL + '/competitions', {
      headers: jsonWithAuth()
    })
      .map(res => res.json())
      .map((comps)=> {
        return this.parseCompetitions(comps);
      })
      .share();
  }

  findCompetition(compId:String):Observable<Competition> {
    return this._http.get(BASE_URL + '/competition/' + compId, {
      headers: jsonWithAuth()
    })
      .map(res => res.json())
      .map((competition)=> {
        return Competition.fromJson(competition);
      })
      .share();
  }

  saveSelectionForComp(compId:String, selection:Selection):Observable<Response> {
    // /auth/ URLs are protected by the middleware
    return this._http.put(BASE_URL + '/auth/competition/selection/push/' + compId, JSON.stringify(selection), {
      headers: jsonWithAuth()
    })
      .share();
  }

  updateScore(compId:String, selectionId:String, score:number):Observable<Response> {
    var payload = {
      selectionId: selectionId,
      score: score
    };

    // /auth/ URLs are protected by the middleware
    return this._http.put(BASE_URL + '/auth/competition/push/' + compId, JSON.stringify(payload), {
      headers: jsonWithAuth()
    })
      .share();
  }

  updateStatus(compId:String, status:Status):Observable<Response> {
    var payload = {
      status: status.value
    };
    return this._http.put(BASE_URL + '/competition/status/' + compId, JSON.stringify(payload), {
      headers: jsonWithAuth()
    })
      .share();
  }

  private parseCompetitions(competitions:Object[]):Competition[] {
    return competitions.map(function (competition) {
      return Competition.fromJson(competition);
    });
  }

}
