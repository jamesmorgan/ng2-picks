import {Component, OnInit, Input} from "@angular/core";
import {Competition} from "../../core/domain/Competition";
import {CompetitionStatusComponent} from "../competition-status/competition-status.component";
import {ROUTER_DIRECTIVES} from "@angular/router";

@Component({
  moduleId: module.id,
  selector: 'competitions-list',
  templateUrl: 'competitions-list.component.html',
  styleUrls: ['competitions-list.component.css'],
  directives: [
    CompetitionStatusComponent,
    ROUTER_DIRECTIVES
  ]
})
export class CompetitionsListComponent implements OnInit {

  /** Public data */
  @Input() competitions:Competition[];

  @Input() prefixBasePath:string = '';

  constructor() {
  }

  ngOnInit() {
  }

}
