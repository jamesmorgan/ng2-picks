import {Component, OnInit, OnDestroy} from "@angular/core";
import {ROUTER_DIRECTIVES} from "@angular/router";
import {Competition} from "../../../../core/domain/Competition";
import {Subscription} from "rxjs/Subscription";
import {CompetitionsService} from "../../../../core/services/CompetitionsService";
import {CompetitionsListComponent} from "../../../../componenets/competitions-list/competitions-list.component";

@Component({
  moduleId: module.id,
  selector: 'competition-management-list',
  templateUrl: 'competition-management-list.component.html',
  styleUrls: ['competition-management-list.component.css'],
  directives: [
    ROUTER_DIRECTIVES,
    CompetitionsListComponent
  ],
})
export class CompetitionManagementListComponent implements OnInit, OnDestroy {

  /** Public data */
  competitions:Competition[];

  private _competitionsSubscription:Subscription;

  constructor(private _competitionsService:CompetitionsService) {
    // Subscribe an changes which may happen
    this._competitionsSubscription = this._competitionsService.competitionsChanged$.subscribe((competitions) => {
      this.competitions = competitions;
    });
  }

  ngOnInit() {
  }

  ngOnDestroy():any {
    this._competitionsSubscription.unsubscribe(); // prevent memory leak when component destroyed
  }


}
