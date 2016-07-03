import {Injectable} from "@angular/core";
import {User} from "../domain/User";
import {Subject} from "rxjs/Subject";
import "rxjs/add/operator/share";
import {League} from "../domain/League";
import {LeagueApi} from "../api/LeagueApi";

@Injectable()
export class LeaguesService {

  /** Internal model state */
  private leagues:League[];

  /** Private Observable **/
  private _leaguesSource:Subject<League[]> = new Subject<League[]>();

  /** Public Observer  **/
  leaguesChanged$ = this._leaguesSource.asObservable()
    .publishReplay()
    .refCount()
    .share();

  constructor(private _leagueApi:LeagueApi) {
    // Get the data on creation
    this._leagueApi.load()
      .subscribe(
        data => {
          this.leagues = data;
          this.publishToObservers();
        },
        err => console.error('Failed to load leagues', err),
        () => console.log('Loaded leagues', this.leagues)
      );
  }

  private publishToObservers():void {
    this._leaguesSource.next(this.leagues); // Push a new copy to all Subscribers.
  }

}
