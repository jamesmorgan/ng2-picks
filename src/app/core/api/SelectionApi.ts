import {Selection} from "../domain/Selection";
import {BASE_URL, jsonWithAuth} from "./Api";
import {Http} from "@angular/http";
import {Injectable} from "@angular/core";

@Injectable()
export class SelectionApi {

  constructor(private _http:Http) {
  }

  load() {
    return this._http.get(BASE_URL + '/auth/selections', {
      headers: jsonWithAuth()
    })
      .map(res => res.json())
      .map((comps)=> {
        return this.parseSelections(comps);
      });
  }

  private parseSelections(selections:Object[]):Selection[] {
    return selections.map(function (selection) {
      return Selection.fromJson(selection);
    });
  }
}
