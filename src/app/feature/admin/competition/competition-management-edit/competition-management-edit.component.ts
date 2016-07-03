import { Component, OnInit } from '@angular/core';
import {ROUTER_DIRECTIVES} from "@angular/router";

@Component({
  moduleId: module.id,
  selector: 'competition-management-edit',
  templateUrl: 'competition-management-edit.component.html',
  styleUrls: ['competition-management-edit.component.css'],
  directives: [ROUTER_DIRECTIVES],
})
export class CompetitionManagementEditComponent implements OnInit {

  constructor() {}

  ngOnInit() {
  }

}
