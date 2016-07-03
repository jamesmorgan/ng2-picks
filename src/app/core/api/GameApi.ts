import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import {BASE_URL, jsonWithAuth} from "./Api";
import {Game} from "../domain/Game";

@Injectable()
export class GameApi {

  constructor(private _http:Http) {
  }

  load() {
    return this._http.get(BASE_URL + '/auth/games', {
      headers: jsonWithAuth()
    })
      .map(res => res.json())
      .map((games)=> {
        return this.parseGames(games);
      });
  }

  private parseGames(games:Object[]) {
    console.log(games);
    return games.map(function (game) {
      return new Game().fromJson(game);
    });
  }
}
