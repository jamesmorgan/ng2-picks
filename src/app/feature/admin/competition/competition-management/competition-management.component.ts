import {Component, OnInit} from "@angular/core";
import {ROUTER_DIRECTIVES} from "@angular/router";

@Component({
  moduleId: module.id,
  selector: 'competition-management',
  templateUrl: 'competition-management.component.html',
  styleUrls: ['competition-management.component.css'],
  directives: [
    ROUTER_DIRECTIVES
  ],
})
export class CompetitionManagementComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

}
