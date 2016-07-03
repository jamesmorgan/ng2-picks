import { Component, OnInit, OnDestroy } from '@angular/core';
import {League} from "../../core/domain/League";
import {Subscription} from "rxjs/Subscription";
import {LeaguesService} from "../../core/services/LeaguesService";
import {LeaguesListComponent} from "../../componenets/leagues-list/leagues-list.component";
import {ROUTER_DIRECTIVES} from "@angular/router";

@Component({
  moduleId: module.id,
  selector: 'league-management',
  templateUrl: 'league-management.component.html',
  styleUrls: ['league-management.component.css'],
  directives: [
    ROUTER_DIRECTIVES,
    LeaguesListComponent
  ],
})
export class LeagueManagementComponent implements OnInit, OnDestroy {

  /** Public data */
  leagues:League[];

  private _leagueSubscription:Subscription;

  constructor(private _leagueService:LeaguesService) {
    // Subscribe an changes which may happen
    this._leagueSubscription = this._leagueService.leaguesChanged$.subscribe((leagues) => {
      this.leagues = leagues;
    });
  }

  ngOnInit() {
  }

  ngOnDestroy():any {
    this._leagueSubscription.unsubscribe(); // prevent memory leak when component destroyed
  }

}
