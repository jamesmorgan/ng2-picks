import { Component, OnInit, Input } from '@angular/core';
import {Competition} from "../../core/domain/Competition";
import {Status} from "../../core/domain/Status";
import {CompetitionsService} from "../../core/services/CompetitionsService";

@Component({
  moduleId: module.id,
  selector: 'competition-status',
  templateUrl: 'competition-status.component.html',
  styleUrls: ['competition-status.component.css']
})
export class CompetitionStatusComponent implements OnInit {

  /** Public data */
  @Input() competition:Competition;

  form = {
    statuses: [...Status.Statuses]
  };

  constructor(private _competitionsService:CompetitionsService) {

  }

  statusSelected() {
    console.log(this.competition.status);
    this._competitionsService.updateStatus(this.competition._id, this.competition.status);
  }

  ngOnInit() {
  }

}
