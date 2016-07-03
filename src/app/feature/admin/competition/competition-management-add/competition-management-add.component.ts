import {Component, OnDestroy} from "@angular/core";
import {ROUTER_DIRECTIVES} from "@angular/router";
import {CompetitionFormModel} from "../../../../core/domain/CompetitionFormModel";
import {Status} from "../../../../core/domain/Status";
import {Subscription} from "rxjs/Subscription";
import {GamesService} from "../../../../core/services/GameService";
import {CompetitionsService} from "../../../../core/services/CompetitionsService";

@Component({
  moduleId: module.id,
  selector: 'competition-management-add',
  templateUrl: 'competition-management-add.component.html',
  styleUrls: ['competition-management-add.component.css'],
  directives: [ROUTER_DIRECTIVES],
})
export class CompetitionManagementAddComponent implements OnDestroy {

  model:CompetitionFormModel = new CompetitionFormModel();

  form = {
    statuses: [...Status.Statuses],
    selections: [],
    games: []
  };

  private _gamesSubscription:Subscription;

  constructor(private _gamesService:GamesService,
              private _competitionService:CompetitionsService) {
    this._gamesSubscription = this._gamesService.gamesChanged$.subscribe((games) => {
      this.form.games = [...games];
    });
  }

  createCompetition() {
    var comp = this.model.toCompetition();
    this._competitionService.createCompetition(comp);
  }

  onStatusSelected(value) {
    this.model.status = this.form.statuses.find((obj) => obj.value === value);
    console.log('onStatusSelected(value) = ' + value, this.model.status);
  }

  ngOnDestroy():any {
    return this._gamesSubscription.unsubscribe();
  }

}
